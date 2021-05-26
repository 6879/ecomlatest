<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDeliveryMenTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('delivery_men', function (Blueprint $table) {
            $table->id();
            $table->integer('deliveryManId');
            $table->integer('divisionId')->nullable();
            $table->integer('phone')->nullable();
            $table->integer('districtId')->nullable();
            $table->integer('thanaId')->nullable();
            $table->integer('unionId')->nullable();
            $table->integer('wardId')->nullable();
            $table->longText('permanentAddress')->nullable();
            $table->longText('presentAddress')->nullable();
            $table->longText('skill')->nullable();
            $table->longText('eduQualification')->nullable();
            $table->longText('exprience')->nullable();
            $table->string('image')->nullable();
            $table->integer('status')->default(0);
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
        Schema::dropIfExists('delivery_men');
    }
}
