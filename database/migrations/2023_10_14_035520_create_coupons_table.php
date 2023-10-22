<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCouponsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('coupons', function (Blueprint $table) {
            $table->id();
            $table->String('name');
            $table->String('image1');
            $table->String('image2')->nullable();
            $table->String('image3')->nullable();
            $table->String('desc');
            $table->Float('price');
            $table->Float('discount');
            $table->Integer('status')->default(1);
            $table->Integer('category_id');
            $table->Integer('brand_id');
            $table->Integer('rate')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('coupons');
    }
}
