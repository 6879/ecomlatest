<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductTransfersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('product_transfers', function (Blueprint $table) {
            $table->id();
            $table->string('location',100);
            $table->string('code',100);           
            $table->integer('brand');
            $table->longText('pname');
            $table->integer('quan');
            $table->integer('preQuan');
            $table->integer('total')->nullable();
            $table->integer('totalTproduct')->nullable();
            $table->integer('backQuan')->nullable();       
            $table->string('backBy',100)->nullable();
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
        Schema::dropIfExists('product_transfers');
    }
}
