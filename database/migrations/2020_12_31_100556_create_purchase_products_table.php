<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePurchaseProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('purchase_products', function (Blueprint $table) {
            $table->id();
            $table->integer('invoiceNo')->nullable();
            $table->integer('supplierId');
            $table->integer('pname');
            $table->integer('brandId')->nullable();
            $table->integer('quan');
            $table->integer('unit')->nullable(); 
            $table->string('unitPrice');
            $table->string('totalPrice');
            $table->string('perc',100)->nullable();
            $table->string('disPrice',100)->nullable();
            $table->integer('size')->nullable();
            $table->integer('color')->nullable();
            $table->integer('createdBy');
            $table->integer('updatedBy')->nullable();
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
        Schema::dropIfExists('purchase_products');
    }
}
