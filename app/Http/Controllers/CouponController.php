<?php

namespace App\Http\Controllers;

use App\Http\Controllers\APIController;
use App\coupon_category_model;
use App\coupon_model;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CouponController extends APIController
{
    public function indexOp(Request $request)
    {
        if (!$user = auth()->setRequest($request)->user()) {
            return $this->responseUnauthorized();
        }
        $couponModel = new coupon_model();
        $couponList = $couponModel->list();
        return [
            'status' => 201,
            'result' => $couponList
        ];
    }

    public function indexOpForApp(Request $request)
    {
        $couponModel = new coupon_model();
        $couponList = $couponModel->listForApp();
        return [
            'status' => 201,
            'result' => $couponList
        ];
    }

    public function indexOpForAppWithCategory(Request $request)
    {
        $couponModel = new coupon_model();
        $couponList = $couponModel->listForAppWithCategory($request['category_id']);
        return [
            'status' => 201,
            'result' => $couponList
        ];
    }

    public function addOp(Request $request)
    {
        if (!$user = auth()->setRequest($request)->user()) {
            return $this->responseUnauthorized();
        }
        $validator = Validator::make($request->all(), [
            'name' => 'required|string',
            'desc' => 'required|string',
            'image1' => 'required',
            'category_id' => 'required',
            'brand_id' => 'required',
            'price' => 'required',
            'discount' => 'required',
        ]);

        if ($validator->fails()) {
            return $this->responseUnprocessable($validator->errors());
        }
        try {
            $permission = $this->getPermission($user);
            if ($permission) {
                $couponModel = new coupon_model();
                $coupon = $couponModel->add($request->all());

                return $this->responseSuccess('Add successfully.');
            } else {
                return [
                    'status' => 401,
                    'message' => 'This is forbidden.'
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
            'name' => 'required|string',
            'desc' => 'required|string',
            'image1' => 'required',
            'category_id' => 'required',
            'brand_id' => 'required',
            'price' => 'required',
            'discount' => 'required',
        ]);

        if ($validator->fails()) {
            return $this->responseUnprocessable($validator->errors());
        }
        try {
            $permission = $this->getPermission($user);
            if ($permission) {
                $couponModel = new coupon_model();
                $coupon = $couponModel->set($request['id'], $request->all());
                return response()->json($coupon);
            } else {
                return [
                    'status' => 401,
                    'message' => 'This is forbidden.'
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
                $couponModel = new coupon_model();
                $coupon = $couponModel->del($request['id']);

                return response()->json($coupon);
            } else {
                return [
                    'status' => 401,
                    'message' => 'This is forbidden.'
                ];
            }
        } catch (Exception $e) {
            return $this->responseServerError('Delete error.');
        }
    }

    public function getCouponById(Request $request)
    {
        $couponModel = new coupon_model();
        return [
            'status' => 201,
            'coupon' => $couponModel->get($request['id'])
        ];
    }

    public function getPermission($user)
    {
        return $user->level_id === 1;
    }

    public function increaseRate(Request $request)
    {
        $couponModel = new coupon_model();
        $couponModel->increaseRate($request['id']);
        return [
            'status' => 201,
        ];
    }
}
