<?php

namespace App;

use App\coupon_model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class coupon_category_model extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'image1',
        'image2',
        'image3',
        'parent_id',
    ];

    protected $table = 'coupon_categories';

    public function tree1($elements, $parentId = 0)
    {
        $branch = array();
        foreach ($elements as $element) {
            if ($element->parent_id == $parentId) {
                $children = $this->tree1($elements, $element->id);
                if ($children) {
                    $element->children = $children;
                } else {
                    $element->children = [];
                }
                $element->key = $element->id;
                $branch[] = $element;
            }
        }

        return $branch;
    }

    public function tree2($elements, $id, $parentId = 0)
    {
        $branch = array();
        foreach ($elements as $element) {
            if ($element->id == $id) {
                continue;
            }
            if ($element->parent_id == $parentId) {
                $children = $this->tree2($elements, $id, $element->id);
                if ($children) {
                    $element->children = $children;
                } else {
                    $element->children = [];
                }
                $element->key = $element->id;
                $branch[] = $element;
            }
        }

        return $branch;
    }

    public function list()
    {
        $categoryList = DB::table('coupon_categories')->get();
        $treeData = $this->tree1($categoryList);
        return $treeData;
    }

    public function listForParentSelect($id)
    {
        $categoryList = DB::table('coupon_categories')->get();
        $treeData = $this->tree2($categoryList, $id);
        return $treeData;
    }

    public function listForCoupon()
    {
        $categoryList = DB::table('coupon_categories')->get();
        $treeData = $this->tree1($categoryList);
        return $treeData;
    }

    public function topListForApp()
    {
        $categoryList = $this->where([
            ['parent_id', '=', null],
            ['status', '=', 1]
        ])->get();
        return $categoryList;
    }
    public function allListForApp()
    {
        $categoryList = $this->where([
            ['status', '=', 1]
        ])->get();
        return $categoryList;
    }

    public function get($id)
    {
        $category = $this->where('id', $id)->firstOrFail();
        return [
            'status' => 201,
            'category' => $category
        ];
    }

    public function set($id, $info)
    {
        $category = $this->where('id', $id)->firstOrFail();
        if (isset($info['status'])) {
            $this->changeStatus($id, $info['status']);
        }
        if ($info['parent_id'] != 0) {
            $parent = $this->where('id', $info['parent_id'])->firstOrFail();
            if ($parent->status == 0)
                $this->changeStatus($id, 0);
        }
        $category->name = $info['name'];
        $category->image1 = $info['image1'];
        $category->image2 = $info['image2'];
        $category->image3 = $info['image3'];
        $category->parent_id = $info['parent_id'] ? $info['parent_id'] : null;
        $category->save();
        return [
            'status' => 201,
            'message' => 'Edited successfully.'
        ];
    }

    public function add($info)
    {
        if ($info['parent_id']) {
            $parent = $this->where('id', $info['parent_id'])->firstOrFail();
        }
        $this->create([
            'name' => $info['name'],
            'image1' => $info['image1'],
            'image2' => $info['image2'],
            'image3' => $info['image3'],
            'parent_id' => $info['parent_id'] ? $info['parent_id'] : null,
        ]);
    }

    public function children()
    {
        return $this->hasMany(coupon_category_model::class, 'parent_id');
    }

    public function del($id)
    {
        $category = $this->find($id);
        if (!$category) {
            return;
        }
        foreach ($category->children as $child) {
            $this->del($child->id);
        }
        $couponModel = new coupon_model();
        $couponModel->delByCategory($id);
        $category->delete();
        return [
            'status' => 201,
            'message' => 'Resource deleted.',
        ];
    }

    public function changeStatus($id, $status)
    {
        $category = $this->find($id);
        if ($status) {
            if ($category->parent_id) {
                $parent = $this->where('id', $category->parent_id)->firstOrFail();
                if ($parent->status != 0) {
                    $category = $this->find($id);
                    $category->status = $status;
                    $category->save();
                    return [
                        'status' => 201,
                        'message' => 'Resource edited.',
                    ];
                } else {
                    return [
                        'status' => 202,
                        'message' => 'Resource edited.',
                    ];
                }
            } else {
                $category = $this->find($id);
                $category->status = $status;
                $category->save();
            }
        } else {
            if (!$category) {
                return;
            }
            foreach ($category->children as $child) {
                $this->changeStatus($child->id, $status);
            }
            $category->status = $status;
            $category->save();
            return [
                'status' => 201,
                'message' => 'Resource edited.',
            ];
        }
    }
}