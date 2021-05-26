<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePurchaseInvoicesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('purchase_invoices', function (Blueprint $table) {
            $table->id();
            $table->string('purchaseDate');
            $table->integer('invoiceNo'); 
            $table->string('purchaseTypeId')->nullable();
            $table->integer('supplierId');
            $table->string('totalPurchaseValue');
            $table->string('carriageInward')->nullable();
            $table->string('totalAmount');
            $table->string('discount')->nullable();
            $table->string('supplierPayable');
            $table->string('otherCost')->nullable();
            $table->string('damageAndWarranty')->nullable();
            $table->string('totalProductCost');
            $table->string('previousPayableDue')->nullable();
            $table->string('currentPayable');          
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
        Schema::dropIfExists('purchase_invoices');
    }
}
