<?php

namespace App;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use PHPUnit\Framework\Constraint\IsEmpty;

class coupon_user_model extends Model
{
    use HasFactory;
    protected $fillable = [
        'user',
        'password',
        'nv_user',
        'nv_password',
        'job_id'
    ];
    protected $table = "coupon_users";

    public function list($page, $limit)
    {
        $couponUsers = DB::table("coupon_users")->offset($page * $limit)->limit($limit)->get();
        return [
            'status' => 201,
            'coupon_user' => $couponUsers
        ];
    }


    public function listall($page = 0, $limit = 1000)
    {
        $couponUsers = DB::table('coupon_users')
            ->leftJoin('jobs', 'coupon_users.job_id', '=', 'jobs.id')
            ->select('coupon_users.*', 'jobs.name as job_name')
            ->get();
        return $couponUsers;
    }

    public function get($user)
    {
        try {
            $couponUsers = $this->where('user', $user)->firstOrFail();
            return $couponUsers;
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $exception) {
            return null;
        }
    }
    public function set($id, $info)
    {
        $couponUsers = $this->where('id', $id)->firstOrFail();
        $couponUsers->user = $info['user'];
        $couponUsers->password = $info['password'];
        $couponUsers->nv_user = $info['nv_user'];
        $couponUsers->nv_password = $info['nv_password'];
        if (empty($info['job_id'])) {
            $couponUsers->job_id = -1;
        } else {
            $couponUsers->job_id = $info['job_id'];
        }
        $couponUsers->save();
        return [
            'status' => 201,
            "message" => "Edited successfully."
        ];
    }


    public function add($info)
    {
        $this->create([
            'user' => $info['user'],
            'password' => $info['password'],
            'nv_user' => $info['nv_user'],
            'nv_password' => $info['nv_password'],
            'job_id' => empty($info['job_id']) ? -1 : $info['job_id'],
        ]);
    }
    public function del($id)
    {
        $this->where('id', $id)->delete();
        return [
            'status' => 201,
            'message' => 'Resource deleted.',
        ];
    }

    public function getJob($user)
    {
        $coupon_user = $this->where('user', $user)->firstOrFail();
        $goods = DB::table('task_goods')
            ->join('goods', 'task_goods.goods_id', '=', 'goods.id')
            ->where('task_goods.job_id', '=', $coupon_user->job_id)
            ->get();
        $surfings = DB::table('task_surfings')
            ->join('surfings', 'task_surfings.surfing_id', '=', 'surfings.id')
            ->where('task_surfings.job_id', '=', $coupon_user->job_id)
            ->get();
        return ["goods" => $goods, "surfings" => $surfings];
    }


}
