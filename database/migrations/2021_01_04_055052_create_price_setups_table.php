<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePriceSetupsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('price_setups', function (Blueprint $table) {
            $table->id();
            $table->integer('invoiceNo')->nullable();           
            $table->integer('pname');          
            $table->integer('brand');          
            $table->string('salesPrice');
            $table->string('profit');           
            $table->string('brandTotal')->nullable();           
            $table->integer('createdBy');
            $table->integer('quan')->nullable();
            $table->integer('updatedBy')->nullable();
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
        Schema::dropIfExists('price_setups');
    }
}
