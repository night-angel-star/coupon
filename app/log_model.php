<?php

namespace App;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

use DateTime;

use Datecreated_at;

use Carbon\Carbon;

class log_model extends Model
{
    use HasFactory;
    protected $fillable = [
        'member_id',
        'function_id',
        'function_param',
        'detail_log'
    ];
    protected $table = "member_logs";

    public function list($from, $to, $page = 0, $limit = 1500)
    {
        $now = date('Y-m-d');
        if ($from == null) {
            $from = $now . " 00:00:00";
        }
        if ($to == null) {
            $to = $now . " 23:59:59";
        }

        $member_logList = DB::table("member_logs")
            ->leftjoin("members", "members.id", '=', 'member_logs.member_id')
            ->leftjoin("functions", "functions.id", '=', 'member_logs.function_id')
            ->where([
                ['member_logs.created_at', '>', $from],
                ['member_logs.created_at', '<', $to]
            ])
            ->select("member_logs.*", "members.name as member_name", "functions.operation as function_name")
            ->get();

        return [
            'status' => 201,
            'member_loglist' => $member_logList
        ];
    }
    public function search($from, $to, $page, $limit, $info)
    {
        $cond = collect([]);
        foreach ($info as $key => $value) {
            $cond->push([$key, 'like', "%" . $value . "%"]);
        }
        $cond->push(['created_at', '>', $from]);
        $cond->push(['created_at', '<', $to]);
        return [
            'status' => 201,
            'member_loglist' => $this->where(get_object_vars($cond))->offset($page * $limit)->limit($limit)->get()
        ];
    }
    public function get($id)
    {
        $member_log = $this->where('id', $id)->firstOrFail();
        return [
            'status' => 201,
            'member_log' => $member_log
        ];
    }
    public function set($id, $info)
    {
        $member_log = $this->where('id', $id)->firstOrFail();
        if ($info['member_id']) {
            $member_log->member_id = $info['member_id'];
        }
        if ($info['created_at']) {
            $member_log->created_at = $info['created_at'];
        }
        if ($info['function_id']) {
            $member_log->function_id = $info['function_id'];
        }
        if ($info['function_param']) {
            $member_log->function_param = $info['function_param'];
        }
        if ($info['detail_log']) {
            $member_log->detail_log = $info['detail_log'];
        }
        $member_log->save();
        return [
            'status' => 201,
            "message" => "Edited successfully."
        ];
    }
    public function add($info)
    {
        $this->create([
            'member_id' => $info['member_id'],
            'function_id' => $info['function_id'],
            'function_param' => $info['function_param'],
            'detail_log' => $info['detail_log'],
        ]);
    }
    public function del($id)
    {
        $member_log = $this->where('id', $id)->delete();
        return [
            'status' => 201,
            'message' => 'Resource deleted.',
        ];
    }
    public function clear($from, $to)
    {
        $member_logList = DB::table("member_logs")
            ->where([
                ['created_at', '>', $from],
                ['created_at', '<', $to]
            ])->delete();
        return [
            'status' => 201,
            'message' => 'Resource cleared.',
        ];
    }
}