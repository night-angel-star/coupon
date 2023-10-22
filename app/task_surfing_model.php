<?php

namespace App;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class task_surfing_model extends Model
{
    use HasFactory;
    protected $fillable = [
        'job_id',
        'surfing_id',
        'delay'
    ];
    protected $table = "task_surfings";

    public function list($job_id)
    {
        $task_surfings = DB::table("task_surfings")
            ->join("task_surfings.job_id", "goods.id")
            ->where('job_id', $job_id)
            ->get();
        return [
            'status' => 201,
            'task_surfings' => $task_surfings
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
            'task_sufings' => $this->where(get_object_vars($cond))->offset($page * $limit)->limit($limit)->get()
        ];
    }
    public function get($id)
    {
        $task_surfing = $this->where('id', $id)->firstOrFail();
        return [
            'status' => 201,
            'task_surfing' => $task_surfing
        ];
    }
    public function set($id, $job_id, $surfing_id, $delay)
    {
        $task_surfing = $this->where('id', $id)->firstOrFail();
        if ($job_id) {
            $task_surfing->job_id = $job_id;
        }
        if ($surfing_id) {
            $task_surfing->surfing_id = $surfing_id;
        }
        if ($delay) {
            $task_surfing->delay = $delay;
        }
        $task_surfing->save();
        return [
            'status' => 201,
            "message" => "Edited successfully."
        ];
    }
    public function add($job_id, $surfing_id, $delay)
    {
        $this->create([
            'job_id' => $job_id,
            'surfing_id' => $surfing_id,
            'delay' => $delay
        ]);
        return [
            'status' => 201,
            'message' => 'Resource created.',
        ];
    }
    public function del($id)
    {
        $task_surfing = $this->where('id', $id)->delete();
        return [
            'status' => 201,
            'message' => 'Resource deleted.',
        ];
    }
    public function unset($surfing_id)
    {
        $task_surfing = $this->where('surfing_id', $surfing_id)->delete();
        return [
            'status' => 201,
            'message' => 'Resource deleted.',
        ];
    }
}