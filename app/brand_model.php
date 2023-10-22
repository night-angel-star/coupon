<?php

namespace App;

use App\coupon_model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class brand_model extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'image1',
        'image2',
        'image3',
    ];

    protected $table = 'brands';

    public function list()
    {
        $brandList = $this->all();
        return $brandList;
    }

    public function get($id)
    {
        $brand = $this->where('id', $id)->firstOrFail();
        return $brand;
    }

    public function set($id, $info)
    {
        $brand = $this->where('id', $id)->firstOrFail();
        $brand->name = $info['name'];
        $brand->image1 = $info['image1'];
        $brand->image2 = $info['image2'];
        $brand->image3 = $info['image3'];
        $brand->save();
        return [
            'status' => 201,
            'message' => 'Edited successfully.'
        ];
    }

    public function add($info)
    {
        $this->create([
            'name' => $info['name'],
            'image1' => $info['image1'],
            'image2' => $info['image2'],
            'image3' => $info['image3'],
        ]);
    }

    public function del($id)
    {
        $couponModel = new coupon_model();
        $couponModel->delByBrand($id);
        $brand = $this->where('id', $id)->delete();
        return [
            'status' => 201,
            'message' => 'Resource deleted.',
        ];
    }
}
