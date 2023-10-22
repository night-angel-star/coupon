<?php

namespace App\Http\Controllers;

use App\Http\Controllers\APIController;
use App\search_model;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class SearchController extends APIController
{
    public function indexOp(Request $request)
    {
        $SearchModel = new search_model();
        $searchList = $SearchModel->getList();
        return [
            'status' => 201,
            'result' => $searchList
        ];
    }

    public function search(Request $request)
    {
        $SearchModel = new search_model();
        $searchList = $SearchModel->search($request['key']);
        return [
            'status' => 201,
        ];
    }
}
