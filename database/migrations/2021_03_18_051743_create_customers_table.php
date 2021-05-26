<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCustomersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('customers', function (Blueprint $table) {
            $table->id();
            $table->string('email',100)->unique();
            $table->string('password');
            $table->string('pass');
            $table->string('name',100);
            $table->string('fname',100)->nullable();
            $table->string('fullname',100)->nullable();
            $table->string('mname',100)->nullable();
            $table->string('dob',100)->nullable();
            $table->string('nid',100)->nullable();       
            $table->string('phone',100)->nullable();
            $table->string('image',100)->nullable();
            $table->string('sponsorId',100)->nullable();
            $table->longText('permanentAddress')->nullable();
            $table->integer('terms');           
            $table->integer('divisionId')->nullable();           
            $table->integer('districtId')->nullable();           
            $table->integer('thanaId')->nullable();           
            $table->integer('unionId')->nullable();           
            $table->integer('wardId')->nullable();           
            $table->longText('presentAddress')->nullable();
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
        Schema::dropIfExists('customers');
    }
}
