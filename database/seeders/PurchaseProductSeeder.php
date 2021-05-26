<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class PurchaseProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\PurchaseProduct::factory(0)->create();
    }
}
