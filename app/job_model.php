<?php

namespace App;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class job_model extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'login_id',
    ];
    protected $table = "jobs";

    public function list()
    {
        $jobs = DB::table("jobs")
            ->get();
        $goods_model = new goods_model();
        $surfing_model = new surfing_model();
        $nvlogin_model = new nvlogin_model();
        $machine_model = new machine_model();
        $jobsList = collect([]);
        foreach ($jobs as $job) {
            $nvlogin = null;
            if ($job->login_id) {
                $nvlogin = $nvlogin_model->where('id', $job->login_id)->firstOrFail();
            }
            // $machine = null;
            // if ($job->machine_id) {
            //     $machine = $machine_model->where('id', $job->machine_id)->firstOrFail();
            // }
            $task_goods = DB::table("task_goods")
                ->where("job_id", $job->id)
                ->get();
            $goodsList = collect([]);
            if (json_encode($task_goods) != "[]") {
                foreach ($task_goods as $task_good) {

                    $goods = $goods_model->where('id', $task_good->goods_id)->firstOrFail();
                    $goodsList->push($goods);
                }
            }
            $surfingsList = collect([]);
            $task_surfings = DB::table("task_surfings")
                ->where("job_id", $job->id)
                ->get();
            if (json_encode($task_surfings) != "[]") {
                foreach ($task_surfings as $task_surfing) {
                    $surfing = $surfing_model->where('id', $task_surfing->surfing_id)->firstOrFail();
                    $surfing->delay = $task_surfing->delay;
                    $surfingsList->push($surfing);
                }
            }
            $jobsList->push([
                'id' => $job->id,
                'name' => $job->name,
                'login' => $nvlogin,
                // 'machine' => $machine,
                'goods' => $goodsList,
                'surfing' => $surfingsList,
            ]);
        }
        return [
            'status' => 201,
            'jobs' => $jobsList
        ];
    }
    public function search($info, $page, $limit)
    {
        $cond = collect([]);
        foreach ($info as $key => $value) {
            $cond->push([$key, 'like', "%" . $value . "%"]);
        }
        return [
            'status' => 201,
            'jobs' => $this->where(get_object_vars($cond))->offset($page * $limit)->limit($limit)->get()
        ];
    }
    public function get($id)
    {
        $jobs = DB::table("jobs")
            ->join("jobs.login_id", 'nvlogins.id')
            ->join("jobs.machine_id", "machines.id")
            ->join("jobs.id", "task_goods.job_id")
            ->join("task_goods.goods_id", "goods.id")
            ->join("jobs.id", "task_surfings.job_id")
            ->join("task_surfings.surfing_id", "surfings.id")
            ->select("jobs.*", "logins.*", "machines.*", "goods.name", "surfings.name")
            ->where("id", $id)
            ->first();
        return [
            'status' => 201,
            'data' => $jobs
        ];
    }
    public function set($id, $info)
    {

        $job = $this->where('id', $id)->firstOrFail();
        if ($info['name']) {
            $job->name = $info['name'];
        }
        if (empty($info['login_id'])) {
    	    $job->login_id = null;
        } else  {
            $job->login_id = $info['login_id'];
        }
        // if ($info['machine_id']) {
        //     $job->machine_id = $info['machine_id'];
        // }
        $job->save();

        $nvloginModel = new nvlogin_model();
        if ($nvloginModel->where('job_id', $job->id)->count()> 0 ){
        $nvlogin = $nvloginModel->where('job_id', $job->id)->firstOrFail();
        $nvlogin->job_id = null;
        $nvlogin->save();
        }
        
        if (!empty($info['login_id'])) {
        $nvlogin = $nvloginModel->where('id', $info['login_id'])->firstOrFail();
        $nvlogin->job_id = $job->id;
        $nvlogin->save();
        }
        // $machineModel = new machine_model();
        // $machine = $machineModel->where('id', $info['machine_id'])->firstOrFail();
        // $machine->job_id = $job->id;
        // $machine->save();
        // $machine = $machineModel->where('job_id', $job->id)->firstOrFail();
        // $machine->job_id = null;
        // $machine->save();
        // $machine = $machineModel->where('id', $info['machine_id'])->firstOrFail();
        // $machine->job_id = $job->id;
        // $machine->save();
        $task_goods_model = new task_goods_model();
        $task_goods_model->where('job_id', $job->id)->delete();
        foreach ($info['goods'] as $goods_id) {
            $task_goods_model->add($job->id, $goods_id);
        }
        $task_surfing_model = new task_surfing_model();
        $task_surfing_model->where('job_id', $job->id)->delete();
        foreach ($info['surfing'] as $surfing) {
            $task_surfing_model->add($job->id, $surfing['id'], $surfing['delay']);
        }
        return [
            'status' => 201,
            "message" => "Edited successfully."
        ];
    }
    public function add($info)
    {
	if (empty($info['login_id'])) {
	    $newJob = $this->create([
	        'name' => $info['name']
            ]);
        
	} else {

        $newJob = $this->create([
            'name' => $info['name'],
            'login_id' => $info['login_id'],
            // 'machine_id' => $info['machine_id'],
        ]);
        $nvloginModel = new nvlogin_model();
        $nvlogin = $nvloginModel->where('id', $info['login_id'])->firstOrFail();
        $nvlogin->job_id = $newJob->id;
        $nvlogin->save();
        }
        // $machineModel = new machine_model();
        // $machine = $machineModel->where('id', $info['machine_id'])->firstOrFail();
        // $machine->job_id = $newJob->id;
        // $machine->save();
        $task_goods_model = new task_goods_model();
        foreach ($info['goods'] as $goods_id) {
            $task_goods_model->add($newJob->id, $goods_id);
        }
        $task_surfing_model = new task_surfing_model();
        foreach ($info['surfing'] as $surfing) {
            $task_surfing_model->add($newJob->id, $surfing["id"], $surfing["delay"]);
        }
        return [
            'status' => 201,
            'message' => 'Resource created.',
        ];
    }
    public function del($id)
    {
        $job = $this->where('id', $id)->delete();
        $task_goodsModel = new task_goods_model();
        $task_goodsModel->where('job_id', $id)->delete();
        $task_surfingModel = new task_surfing_model();
        $task_surfingModel->where('job_id', $id)->delete();
        return [
            'status' => 201,
            'message' => 'Resource deleted.',
        ];
    }
    public function unsetLogin($login_id)
    {
        $job = $this->where('login_id', $login_id)->firstOrFail();
        $job->login_id = null;
        $job->save();
        return [
            'status' => 201,
            'message' => 'Resource deleted.',
        ];
    }
    public function unsetMachine($machine_id)
    {
        $job = $this->where('machine_id', $machine_id)->firstOrFail();
        $job->machine_id = null;
        $job->save();
        return [
            'status' => 201,
            'message' => 'Resource deleted.',
        ];
    }
}