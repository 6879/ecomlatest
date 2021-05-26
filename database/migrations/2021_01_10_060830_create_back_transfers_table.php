<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBackTransfersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('back_transfers', function (Blueprint $table) {
            $table->id();
            $table->string('location',100);
            $table->string('code',100);           
            $table->integer('brand');
            $table->longText('pname');
            $table->integer('quan');
            $table->integer('preQuan');
            $table->integer('transferId')->nullable();
            $table->integer('total')->nullable();
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
        Schema::dropIfExists('back_transfers');
    }
}
