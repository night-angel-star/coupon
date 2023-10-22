<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\APIController;
use Illuminate\Support\Facades\Validator;

use App\member_model;
use App\function_model;
use App\role_model;
use App\log_model;

class MemberController extends APIController
{
    public function indexOp(Request $request)
    {
        if (!$user = auth()->setRequest($request)->user()) {
            return $this->responseUnauthorized();
        }

        $memberModel = new member_model();

        $permission = $this->getPermission("view", $user);
        if ($permission) {
            $memberList = $memberModel->getMemberList($user->id);

            $log = new log_model();
            $log->Add(
                array(
                    'member_id' => $user->id,
                    'function_id' => 1,
                    'function_param' => "Viewed Members",
                    'detail_log' => ""
                )
            );

            return [
                "status" => 201,
                "result" => $memberList
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
            'name' => 'required|string|max:255|unique:members',
            'password' => 'required|string|min:6',
            'level_id' => 'required',
        ]);

        if ($validator->fails()) {
            return $this->responseUnprocessable($validator->errors());
        }

        if ($request['level_id'] >= $user->level_id || $request['level_id'] == 1) {
            try {
                $permission = $this->getPermission("add", $user);
                if ($permission) {
                    $memberModel = new member_model();
                    $member = $memberModel->addMember($request->all(), auth()->setRequest($request)->user());

                    $log = new log_model();
                    $log->Add(
                        array(
                            'member_id' => $user->id,
                            'function_id' => 2,
                            'function_param' => request('name'),
                            'detail_log' => ""
                        )
                    );

                    return $this->responseSuccess('Registered successfully.');
                } else {
                    return [
                        "status" => 401,
                        "message" => "Forbidden."
                    ];
                }
            } catch (Exception $e) {
                return $this->responseServerError('Registration error.');
            }
        } else {
            return [
                "status" => 401,
                "message" => "This is forbidden."
            ];
        }
    }
    public function editOp(Request $request)
    {
        if (!$user = auth()->setRequest($request)->user()) {
            return $this->responseUnauthorized();
        }
        $memberModel = new member_model();
        $editMember = $memberModel->where('id', $request['id'])->firstOrFail();
        if ($editMember->name == $request['name']) {
            $validator = Validator::make($request->all(), [
                'password' => empty($request["password"]) ? '' : 'required|string|min:6',
                'level_id' => 'required',
            ]);
        } else {
            $validator = Validator::make($request->all(), [
                'name' => 'required|string|max:255|unique:members',
                'password' => empty($request["password"]) ? '' : 'required|string|min:6',
                'level_id' => 'required',
            ]);
        }

        if ($validator->fails()) {
            return $this->responseUnprocessable($validator->errors());
        }

        if ($request['level_id'] >= $user->level_id || $user->level_id === 1) {
            try {
                $permission = $this->getPermission("edit", $user);
                if ($permission) {


                    // if (strpos($editMember->id_path, $user->id) > -1) {
                    $member = $memberModel->setMemberInfo($user->id, $request['id'], $request->all());

                    $log = new log_model();
                    $log->Add(
                        array(
                            'member_id' => $user->id,
                            'function_id' => 3,
                            'function_param' => "",
                            'detail_log' => ""
                        )
                    );

                    return response()->json($member);
                    // } else {
                    //     return [
                    //         "status" => 401,
                    //         "message" => "This is forbidden2."
                    //     ];
                    // }
                } else {
                    return [
                        "status" => 401,
                        "message" => "This is forbidden1."
                    ];
                }
            } catch (Exception $e) {
                return $this->responseServerError('Edit error.');
            }
        } else {
            return [
                "status" => 401,
                "message" => "This is forbidden3."
            ];
        }
    }
    public function deleteOp(Request $request)
    {
        $memberModel = new member_model();
        if (!$user = auth()->setRequest($request)->user()) {
            return $this->responseUnauthorized();
        }

        if ($request['level_id'] > $user->level_id || $user->level_id === 1) {
            try {
                $permission = $this->getPermission("del", $user);

                if ($permission) {

                    $editMember = $memberModel->where('id', $request['id'])->firstOrFail();
                    if (strpos($editMember->id_path, $user->id) > -1) {
                        $member = $memberModel->delMember($request['id']);

                        $log = new log_model();
                        $log->Add(
                            array(
                                'member_id' => $user->id,
                                'function_id' => 1,
                                'function_param' => $editMember->name,
                                'detail_log' => ""
                            )
                        );

                        return response()->json($member);
                    } else {
                        return [
                            "status" => 401,
                            "message" => "This is forbidden."
                        ];
                    }
                } else {
                    return [
                        "status" => 401,
                        "message" => "This is forbidden."
                    ];
                }
            } catch (Exception $e) {
                return $this->responseServerError('Delete error.');
            }
        } else {
            return [
                "status" => 401,
                "message" => "This is forbidden."
            ];
        }
    }
    public function getFamily(Request $request)
    {
        if (!$user = auth()->setRequest($request)->user()) {
            return $this->responseUnauthorized();
        }
        $memberModel = new member_model();
        // return [
        //     "children" =>$memberModel->getChilds($user->id),
        //     "parents" =>$memberModel->getParents($user->id),
        //     "parent" =>$memberModel->getParent($user->id),
        // ];
        return $memberModel->getChilds($user->id);
    }
    public function getMemberById(Request $request)
    {
        if (!$user = auth()->setRequest($request)->user()) {
            return $this->responseUnauthorized();
        }
        $memberModel = new member_model();
        $permission = $this->getPermission("view", $user);
        if ($permission) {
            return [
                'status' => 201,
                "member" => $memberModel->GetMemberInfo($user->id)
            ];
        } else {
            return [
                "status" => 401,
                "message" => "This is forbidden."
            ];
        }
    }
    public function getPermission($funcType, $user)
    {
        $functionModel = new function_model();
        $roleModel = new role_model();
        $func = $functionModel->getIdByName("member", $funcType);
        $role = $roleModel->getLevelPermission($user->level_id, $func['id']);
        return $role['permission'];
    }
}