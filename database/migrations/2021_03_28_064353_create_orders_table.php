<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->integer('invoiceNo');             
            $table->integer('customerId');          
            $table->integer('totalPrice');          
            $table->integer('totalDiscount');          
            $table->longText('address');          
            $table->string('phone',100);          
            $table->longText('reAddress')->nullable();          
            $table->longText('cancelReason')->nullable();          
            $table->longText('returnReason')->nullable();          
            $table->longText('returnReasonFromDM')->nullable();          
            $table->string('rePhone',100)->nullable();                  
            $table->string('deliveryDate',100);          
            $table->string('deliveryTime',100);          
            $table->string('paymentType',100)->nullable();          
            $table->integer('status')->default(0);          
            $table->integer('deliveryManId')->nullable();          
            $table->integer('customerStatus')->default(0);          
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
        Schema::dropIfExists('orders');
    }
}
