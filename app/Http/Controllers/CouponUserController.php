<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\APIController;
use Illuminate\Support\Facades\Validator;

use App\coupon_user_model;
use App\log_model;

class CouponUserController extends APIController
{
    public function indexOp(Request $request)
    {
        if (!$user = auth()->setRequest($request)->user()) {
            return $this->responseUnauthorized();
        }
        $couponUserModel = new coupon_user_model();

        $permission = $this->getPermission($user);
        if ($permission) {
            $couponUserList = $couponUserModel->all();

            $log = new log_model();
            $log->Add(
                array(
                    'member_id' => $user->id,
                    'function_id' => 21,
                    'function_param' => "",
                    'detail_log' => ""
                )
            );

            return [
                "status" => 201,
                "result" => $couponUserList
            ];
        } else {
            return [
                "status" => 401,
                "message" => "This is forbidden."
            ];
        }
    }
    public function addOp(Request $request)
    {
        if (!$user = auth()->setRequest($request)->user()) {
            return $this->responseUnauthorized();
        }
        $validator = Validator::make($request->all(), [
            'user' => 'required|string',
        ]);

        if ($validator->fails()) {
            return $this->responseUnprocessable($validator->errors());
        }
        try {
            $permission = $this->getPermission($user);
            if ($permission) {
                $couponUserModel = new coupon_user_model();
                $couponUserModel->add($request->all());

                $log = new log_model();
                $log->Add(
                    array(
                        'member_id' => $user->id,
                        'function_id' => 22,
                        'function_param' => request('user'),
                        'detail_log' => ""
                    )
                );

                return $this->responseSuccess('Add successfully.');
            } else {
                return [
                    "status" => 401,
                    "message" => "This is forbidden."
                ];
            }
        } catch (Exception $e) {
            return $this->responseServerError('Registration error.');
        }
    }
    public function editOp(Request $request)
    {
        if (!$user = auth()->setRequest($request)->user()) {
            return $this->responseUnauthorized();
        }
        $validator = Validator::make($request->all(), [
            'user' => 'required|string',
        ]);

        if ($validator->fails()) {
            return $this->responseUnprocessable($validator->errors());
        }
        try {
            $permission = $this->getPermission($user);
            if ($permission) {
                $couponUserModel = new coupon_user_model();
                $couponUser = $couponUserModel->set($request['id'], $request->all());

                $log = new log_model();
                $log->Add(
                    array(
                        'member_id' => $user->id,
                        'function_id' => 23,
                        'function_param' => request('user'),
                        'detail_log' => ""
                    )
                );

                return response()->json($couponUser);
            } else {
                return [
                    "status" => 401,
                    "message" => "This is forbidden."
                ];
            }
        } catch (Exception $e) {
            return $this->responseServerError('Edit error.');
        }
    }
    public function deleteOp(Request $request)
    {
        if (!$user = auth()->setRequest($request)->user()) {
            return $this->responseUnauthorized();
        }
        try {
            $permission = $this->getPermission($user);
            if ($permission) {
                $couponUserModel = new coupon_user_model();
                $couponUser = $couponUserModel->del($request['id']);

                $log = new log_model();
                $log->Add(
                    array(
                        'member_id' => $user->id,
                        'function_id' => 24,
                        'function_param' => $couponUserModel->user,
                        'detail_log' => ""
                    )
                );

                return response()->json($couponUser);
            } else {
                return [
                    "status" => 401,
                    "message" => "This is forbidden."
                ];
            }
        } catch (Exception $e) {
            return $this->responseServerError('Delete error.');
        }
    }
    public function getPermission($user)
    {
        return $user->level_id === 1;
    }


}
