<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateChatsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('chats', function (Blueprint $table) {
            $table->id();
            $table->integer('sender_id')->nullable();
            $table->integer('sender_type')->nullable();
            $table->integer('sender_roll')->nullable();
            $table->integer('receiver_id')->nullable();
            $table->integer('receiver_type')->nullable();
            $table->integer('receiver_roll')->nullable();
            $table->integer('count')->nullable();
            $table->integer('messageCount')->nullable();
            $table->integer('invoiceNo')->nullable();
            $table->text('message');
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
        Schema::dropIfExists('chats');
    }
}
