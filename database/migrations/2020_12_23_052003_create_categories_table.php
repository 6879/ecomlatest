<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCategoriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('categories', function (Blueprint $table) {
            $table->id();
            $table->string('catName');
            $table->string('image',1000)->nullable();
            $table->string('catImage',1000)->nullable();
            $table->string('bannerImage',1000)->nullable();
            $table->string('bannerImage2',1000)->nullable();
            $table->string('bannerImage2Url',100)->nullable();
            $table->string('bannerImageUrl',100)->nullable();
            $table->string('url')->nullable();
            $table->string('bannerImageType')->nullable();
            $table->integer('catPosition')->default(1);
            $table->integer('subCatPosition')->default(1);
            $table->integer('thirdCatPosition')->default(1);
            $table->integer('fourthCatPosition')->default(1);
            $table->integer('status')->default(0);
            $table->integer('bannerImageStatus')->default(0);
            $table->integer('subStatus')->default(0);
            $table->string('createdBy')->nullable();
            $table->integer('preId')->nullable();
            $table->integer('lavel')->default(1);
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
        Schema::dropIfExists('categories');
    }
}
