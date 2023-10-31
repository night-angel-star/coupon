<?php

namespace App;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class coupon_user_model extends Model
{
    use HasFactory;
    protected $fillable = [
        'user',
        'password'
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

    public function get($id)
    {
        $couponUsers = $this->where('id', $id)->firstOrFail();
        return [
            'status' => 201,
            'coupon_user' => $couponUsers
        ];
    }
    public function set($id, $info)
    {
        $couponUsers = $this->where('id', $id)->firstOrFail();
        $couponUsers->user = $info['user'];
        $couponUsers->password = $info['password'];
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


}
