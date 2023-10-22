<?php

namespace Database\Seeders;

use App\coupon_category_model;
use Illuminate\Database\Seeder;

class CouponSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        coupon_category_model::create([
            'name' => 'Starbucks',
            'image1' => 'img1',
            'image2' => 'img2',
            'image3' => 'img3',
        ]);
        coupon_category_model::create([
            'name' => '60/90Gift',
            'image1' => 'img1',
            'image2' => 'img2',
            'image3' => 'img3',
        ]);
        coupon_category_model::create([
            'name' => 'Popular',
            'image1' => 'img1',
            'image2' => 'img2',
            'image3' => 'img3',
        ]);
        coupon_category_model::create([
            'name' => 'Starbucks1',
            'image1' => 'img1',
            'image2' => 'img2',
            'image3' => 'img3',
            'parent_id' => 1
        ]);
        coupon_category_model::create([
            'name' => 'Starbucks2',
            'image1' => 'img1',
            'image2' => 'img2',
            'image3' => 'img3',
            'parent_id' => 1
        ]);
        coupon_category_model::create([
            'name' => 'Popular1',
            'image1' => 'img1',
            'image2' => 'img2',
            'image3' => 'img3',
            'parent_id' => 3
        ]);
        coupon_category_model::create([
            'name' => '60/90Gift1',
            'image1' => 'img1',
            'image2' => 'img2',
            'image3' => 'img3',
            'parent_id' => 2
        ]);
        coupon_category_model::create([
            'name' => '60/90Gift2',
            'image1' => 'img1',
            'image2' => 'img2',
            'image3' => 'img3',
            'parent_id' => 2
        ]);
        coupon_category_model::create([
            'name' => 'Starbucks3',
            'image1' => 'img1',
            'image2' => 'img2',
            'image3' => 'img3',
            'parent_id' => 4
        ]);
        coupon_category_model::create([
            'name' => 'Starbucks4',
            'image1' => 'img1',
            'image2' => 'img2',
            'image3' => 'img3',
            'parent_id' => 5
        ]);
        coupon_category_model::create([
            'name' => 'Starbucks5',
            'image1' => 'img1',
            'image2' => 'img2',
            'image3' => 'img3',
            'parent_id' => 5
        ]);
        coupon_category_model::create([
            'name' => '60/90Gift3',
            'image1' => 'img1',
            'image2' => 'img2',
            'image3' => 'img3',
            'parent_id' => 7
        ]);
        coupon_category_model::create([
            'name' => '60/90Gift4',
            'image1' => 'img1',
            'image2' => 'img2',
            'image3' => 'img3',
            'parent_id' => 12
        ]);
        coupon_category_model::create([
            'name' => '60/90Gift5',
            'image1' => 'img1',
            'image2' => 'img2',
            'image3' => 'img3',
            'parent_id' => 12
        ]);
        coupon_category_model::create([
            'name' => 'qwe',
            'image1' => 'img1',
            'image2' => 'img2',
            'image3' => 'img3',
        ]);
        coupon_category_model::create([
            'name' => 'qwe1',
            'image1' => 'img1',
            'image2' => 'img2',
            'image3' => 'img3',
            'parent_id' => 15
        ]);
        coupon_category_model::create([
            'name' => 'qwe2',
            'image1' => 'img1',
            'image2' => 'img2',
            'image3' => 'img3',
            'parent_id' => 15
        ]);
        coupon_category_model::create([
            'name' => 'qwe3',
            'image1' => 'img1',
            'image2' => 'img2',
            'image3' => 'img3',
            'parent_id' => 17
        ]);
        coupon_category_model::create([
            'name' => 'qwe4',
            'image1' => 'img1',
            'image2' => 'img2',
            'image3' => 'img3',
            'parent_id' => 17
        ]);
        coupon_category_model::create([
            'name' => 'qwe5',
            'image1' => 'img1',
            'image2' => 'img2',
            'image3' => 'img3',
            'parent_id' => 16
        ]);
        coupon_category_model::create([
            'name' => 'qwe6',
            'image1' => 'img1',
            'image2' => 'img2',
            'image3' => 'img3',
            'parent_id' => 16
        ]);

        $this->command->info('Levels table seeded.');
    }
}
