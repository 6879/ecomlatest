<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class PriceSetupSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\PriceSetup::factory(0)->create();
    }
}
