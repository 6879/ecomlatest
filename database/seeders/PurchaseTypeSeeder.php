<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class PurchaseTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\PurchaseType::factory(0)->create();
    }
}
