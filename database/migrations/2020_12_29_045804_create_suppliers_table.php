<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSuppliersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('suppliers', function (Blueprint $table) {
            $table->id();
            $table->string('name',100);
            $table->integer('businessType')->nullable();
            $table->string('code',100)->nullable();
            $table->string('phone',100)->nullable();
            $table->string('hotLine',100)->nullable();
            $table->string('mail',100)->nullable();
            $table->string('fb',100)->nullable();
            $table->string('web',100)->nullable();
            $table->longText('address')->nullable();
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
        Schema::dropIfExists('suppliers');
    }
}
