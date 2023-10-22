<?php

namespace App;

use App\coupon_category_model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class coupon_model extends Model
{
    use HasFactory;

    protected $coupons = [];

    protected $fillable = [
        'name',
        'category_id',
        'brand_id',
        'desc',
        'image1',
        'image2',
        'image3',
        'price',
        'discount'
    ];

    protected $table = 'coupons';

    public function list()
    {
        $couponsList = DB::table('coupons')
            ->join('coupon_categories', 'coupons.category_id', '=', 'coupon_categories.id')
            ->join('brands', 'coupons.brand_id', '=', 'brands.id')
            ->where('coupon_categories.status', '=', 1)
            ->select('coupons.*', 'coupon_categories.name as category', 'brands.name as brand')
            ->get();
        return [
            'status' => 201,
            'couponsList' => $couponsList
        ];
    }

    public function listForApp()
    {
        $couponsList = DB::table('coupons')
            ->join('coupon_categories', 'coupons.category_id', '=', 'coupon_categories.id')
            ->join('brands', 'coupons.brand_id', '=', 'brands.id')
            ->where([
                ['coupon_categories.status', '=', 1],
                ['coupons.status', '=', 1]
            ])
            ->select('coupons.*', 'coupon_categories.name as category', 'brands.name as brand')
            ->get();
        return $couponsList;
    }

    public function getLastChildren($parentId, $categoryModel)
    {
        $children = $categoryModel->where('parent_id', $parentId)->get();
        $me = $categoryModel->where('id', $parentId)->firstOrFail();
        if (!$me->parent_id) {
            $this->coupons = array();
        }
        $lastChildren = [];

        foreach ($children as $child) {
            $lastChildren = array_merge($lastChildren, $this->getLastChildren($child->id, $categoryModel));
        }

        if (count($lastChildren) === 0) {
            $lastChildren[] = $parentId;
            if (json_encode($this->where('category_id', (int) $parentId)->get()) !== '[]') {
                $coupons1 = $this->where('category_id', (int) $parentId)->get();
                foreach ($coupons1 as $coupon) {
                    $this->coupons[] = $coupon;
                }
            }
        }

        return $this->coupons;
    }

    public function listForAppWithCategory($category_id)
    {
        $categoryModel = new coupon_category_model();
        $coupons = array();
        $coupons = $this->getLastChildren($category_id, $categoryModel, $coupons);
        return $coupons;
    }

    public function get($id)
    {
        $coupon = $this->where('id', $id)->firstOrFail();
        return $coupon;
    }

    public function set($id, $info)
    {
        $coupon = $this->where('id', $id)->firstOrFail();
        if (isset($info['status'])) {
            $coupon->status = $info['status'];
        } else {
            $coupon->name = $info['name'];
            $coupon->desc = $info['desc'];
            $coupon->category_id = $info['category_id'];
            $coupon->brand_id = $info['brand_id'];
            $coupon->image1 = $info['image1'];
            $coupon->image2 = $info['image2'];
            $coupon->image3 = $info['image3'];
            $coupon->price = $info['price'];
            $coupon->discount = $info['discount'];
        }
        $coupon->save();
        return [
            'status' => 201,
            'message' => 'Edited successfully.'
        ];
    }

    public function add($info)
    {
        $this->create([
            'name' => $info['name'],
            'desc' => $info['desc'],
            'category_id' => $info['category_id'],
            'brand_id' => $info['brand_id'],
            'image1' => $info['image1'],
            'image2' => $info['image2'],
            'image3' => $info['image3'],
            'price' => $info['price'],
            'discount' => $info['discount'],
        ]);
    }

    public function del($id)
    {
        $coupon = $this->where('id', $id)->delete();
        return [
            'status' => 201,
            'message' => 'Resource deleted.',
        ];
    }

    public function delByCategory($category_id)
    {
        $coupons = $this->where('category_id', $category_id)->delete();
        return [
            'status' => 201,
            'message' => 'Resource deleted.',
        ];
    }

    public function delByBrand($brand_id)
    {
        $coupons = $this->where('brand_id', $brand_id)->delete();
        return [
            'status' => 201,
            'message' => 'Resource deleted.',
        ];
    }

    public function increaseRate($id)
    {
        $coupon = $this->where('id', $id)->firstOrFail();
        $coupon->rate = $coupon->rate + 1;
        $coupon->save();
        return [
            'status' => 201,
            'message' => 'Resource deleted.',
        ];
    }
}
