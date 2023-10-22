<?php

namespace App\Http\Controllers;

use App\Http\Controllers\APIController;
use App\brand_model;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class BrandController extends APIController
{
    public function indexOp(Request $request)
    {
        $brandModel = new brand_model();
        $brandList = $brandModel->list();
        return [
            'status' => 201,
            'result' => $brandList
        ];
    }

    public function addOp(Request $request)
    {
        if (!$user = auth()->setRequest($request)->user()) {
            return $this->responseUnauthorized();
        }
        $validator = Validator::make($request->all(), [
            'name' => 'required|string',
            'image1' => 'required',
        ]);

        if ($validator->fails()) {
            return $this->responseUnprocessable($validator->errors());
        }
        try {
            $permission = $this->getPermission($user);
            if ($permission) {
                $brandModel = new brand_model();
                $brand = $brandModel->add($request->all());

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
            'image1' => 'required',
        ]);

        if ($validator->fails()) {
            return $this->responseUnprocessable($validator->errors());
        }
        try {
            $permission = $this->getPermission($user);
            if ($permission) {
                $brandModel = new brand_model();
                $brand = $brandModel->set($request['id'], $request->all());
                return response()->json($brand);
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
                $brandModel = new brand_model();
                $brand = $brandModel->del($request['id']);

                return response()->json($brand);
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

    public function getBrandById(Request $request)
    {
        $brandModel = new brand_model();
        return [
            'status' => 201,
            'brand' => $brandModel->get($request['id'])
        ];
    }

    public function getPermission($user)
    {
        return $user->level_id === 1;
    }
}
