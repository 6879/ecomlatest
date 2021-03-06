<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePurchaseProductTotalQuantitiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('purchase_product_total_quantities', function (Blueprint $table) {
            $table->id();
            $table->integer('supplierId');
            $table->integer('totalQuantity');
            $table->integer('totalPrice');           
            $table->integer('createBy');
            $table->integer('updateBy')->nullable();
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
        Schema::dropIfExists('purchase_product_total_quantities');
    }
}
