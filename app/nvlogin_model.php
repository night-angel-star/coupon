<?php

namespace App;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class nvlogin_model extends Model
{
    use HasFactory;
    protected $fillable = [
        'user',
        'password'
    ];
    protected $table = "nvlogins";

    public function listOfNull()
    {
        $nvloginList = DB::table("nvlogins")->where("job_id", null)->get();
        return [
            'status' => 201,
            'result' => $nvloginList
        ];
    }
    public function list($page, $limit)
    {
        $nvloginList = DB::table("nvlogins")->offset($page * $limit)->limit($limit)->get();
        return [
            'status' => 201,
            'nvloginlist' => $nvloginList
        ];
    }
    public function search($info, $page, $limit)
    {
        $cond = collect([]);
        foreach ($info as $key => $value) {
            $cond . push([$key, 'like', "%" . $value . "%"]);
        }
        return [
            'status' => 201,
            'nvloginlist' => $this->where(get_object_vars($cond))->offset($page * $limit)->limit($limit)->get()
        ];
    }
    public function get($id)
    {
        $nvlogin = $this->where('id', $id)->firstOrFail();
        return [
            'status' => 201,
            'nvlogin' => $nvlogin
        ];
    }
    public function set($id, $info)
    {
        $nvlogin = $this->where('id', $id)->firstOrFail();
        $nvlogin->user = $info['user'];
        $nvlogin->password = $info['password'];
        $nvlogin->save();
        return [
            'status' => 201,
            "message" => "Edited successfully."
        ];
    }


    public function add($info)
    {
        $this->create([
            'user' => $info['user'],
            'password' => isset($info['password']) ? $info['password'] : "",
        ]);
    }
    public function del($id)
    {
        $nvlogin = $this->where('id', $id)->delete();
        $jobModel = new job_model();
        $jobModel->unsetLogin($id);
        return [
            'status' => 201,
            'message' => 'Resource deleted.',
        ];
    }

    public function getLoginInfo($info)
    {
        $machine = DB::table("machines")->where("machine_id", $info['machine_id'])->first();
        if ($machine) {
            if ($machine->job_id) {

                $job = DB::table('jobs')->where('id', $machine->job_id)->first();
                $goods_model = new goods_model();
                $surfing_model = new surfing_model();

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

                $job_info = [
                    'goods' => $goodsList,
                    'surfings' => $surfingsList,
                ];




                if ($job->login_id) {
                    $login = DB::table('nvlogins')->where('id', $job->login_id)->first();
                    $proxy = null;
                    if ($job->proxy_id) {
                        $proxy = DB::table('proxys')->where('id', $job->proxy_id)->first();
                    }
                    $browser = null;
                    if ($job->browser_id) {
                        $browser = DB::table('browsers')->where('id', $job->browser_id)->first();
                    }
                    $machine = null;
                    if ($job->machine_id) {
                        $machine = DB::table('machines')->where('id', $job->machine_id)->first();
                    }

                    return ["login_info" => $login, "job_info" => $job_info, 'proxy_info' => $proxy, 'browser_info' => $browser, 'machine_info' => $machine];
                } else {
                    return null;
                }
            } else {
                return null;
            }
        } else {
            return null;
        }
    }

    public function getPhoneJob($info)
    {
        if ($info->job_id && $info->job_id != -1) {

            $job = DB::table('jobs')->where('id', $info->job_id)->first();
            $goods_model = new goods_model();
            $surfing_model = new surfing_model();

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

            $job_info = [
                'goods' => $goodsList,
                'surfings' => $surfingsList,
            ];
            if ($job->login_id) {
                $login = (object) ["user" => $info->nv_user, "password" => $info->nv_password];
                return ["login_info" => $login, "job_info" => $job_info, 'machine_info' => (object) ["machine_id" => $info->user]];
            } else {
                return null;
            }
        } else {
            return null;
        }

    }
}
