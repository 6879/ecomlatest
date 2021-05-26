<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAdminPermissionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('admin_permissions', function (Blueprint $table) {
            $table->id();
            $table->integer('roll');
            $table->integer('admin');
            $table->integer('moduleId')->nullable();           
            $table->integer('menuId')->nullable();
            $table->string('subMenuId')->nullable();
            $table->string('fullAccess')->nullable();
            $table->string('viewAccess')->nullable();
            $table->string('addAccess')->nullable();
            $table->string('editAccess')->nullable();
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
        Schema::dropIfExists('admin_permissions');
    }
}
