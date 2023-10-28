<?php

namespace App\Http\Controllers;

use App\Http\Controllers\APIController;
use App\coupon_category_model;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CouponCategoryController extends APIController
{
    public function indexOp(Request $request)
    {
        if (!$user = auth()->setRequest($request)->user()) {
            return $this->responseUnauthorized();
        }
        $CategoryModel = new coupon_category_model();
        $categoryList = $CategoryModel->list();
        return [
            'status' => 201,
            'result' => $categoryList
        ];
    }

    public function indexOpForParentSelect(Request $request)
    {
        if (!$user = auth()->setRequest($request)->user()) {
            return $this->responseUnauthorized();
        }
        $CategoryModel = new coupon_category_model();
        $permission = $this->getPermission($user);
        if ($permission) {
            $categoryList = $CategoryModel->listForParentSelect($request['id']);
            return [
                'status' => 201,
                'result' => $categoryList
            ];
        } else {
            return [
                'status' => 401,
                'message' => 'This is forbidden.'
            ];
        }
    }

    public function indexOpForCoupon(Request $request)
    {
        if (!$user = auth()->setRequest($request)->user()) {
            return $this->responseUnauthorized();
        }
        $CategoryModel = new coupon_category_model();
        $permission = $this->getPermission($user);
        if ($permission) {
            $categoryList = $CategoryModel->listForCoupon();
            return [
                'status' => 201,
                'result' => $categoryList
            ];
        } else {
            return [
                'status' => 401,
                'message' => 'This is forbidden.'
            ];
        }
    }

    public function indexOpForApp(Request $request)
    {
        // dd(1);
        $CategoryModel = new coupon_category_model();
        $categoryList = $CategoryModel->topListForApp();
        return [
            'status' => 201,
            'result' => $categoryList
        ];
    }

    public function indexAllOpForApp(Request $request)
    {
        $CategoryModel = new coupon_category_model();
        $categoryList = $CategoryModel->allListForApp();
        return [
            'status' => 201,
            'result' => $categoryList
        ];
    }

    public function addOp(Request $request)
    {
        if (!$user = auth()->setRequest($request)->user()) {
            return $this->responseUnauthorized();
        }
        $validator = Validator::make($request->all(), [
            'name' => 'required|string',
            'image1' => 'required|string',
        ]);

        if ($validator->fails()) {
            return $this->responseUnprocessable($validator->errors());
        }
        try {
            $permission = $this->getPermission($user);
            if ($permission) {
                $CategoryModel = new coupon_category_model();
                $category = $CategoryModel->add($request->all());

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
            'image1' => 'required|string',
        ]);

        if ($validator->fails()) {
            return $this->responseUnprocessable($validator->errors());
        }
        try {
            $permission = $this->getPermission($user);
            if ($permission) {
                $CategoryModel = new coupon_category_model();
                $category = $CategoryModel->set($request['id'], $request->all());

                return response()->json($category);
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
                $CategoryModel = new coupon_category_model();
                $category = $CategoryModel->del($request['id']);

                return response()->json($category);
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

    public function getCategoryById(Request $request)
    {
        $CategoryModel = new coupon_category_model();
        return [
            'status' => 201,
            'category' => $CategoryModel->get($request['id'])
        ];
    }

    public function getPermission($user)
    {
        return $user->level_id === 1;
    }
}
