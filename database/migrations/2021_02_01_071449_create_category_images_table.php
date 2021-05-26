<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCategoryImagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('category_images', function (Blueprint $table) {
            $table->id();
            $table->integer('pname')->nullable();                  
            $table->longText('image')->nullable();
            $table->longText('image1')->nullable();
            $table->longText('image2')->nullable();
            $table->longText('image3')->nullable();
            $table->longText('image4')->nullable();
            $table->longText('image5')->nullable();
            $table->longText('image6')->nullable();
            $table->longText('image7')->nullable();
            $table->longText('image8')->nullable();
            $table->longText('image9')->nullable();
            $table->longText('videoUrl')->nullable();
            $table->longText('details')->nullable();
            $table->longText('speciality')->nullable();
           
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
        Schema::dropIfExists('category_images');
    }
}
