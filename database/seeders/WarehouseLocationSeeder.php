<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class WarehouseLocationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\WarehouseLocation::factory(0)->create();
    }
}
