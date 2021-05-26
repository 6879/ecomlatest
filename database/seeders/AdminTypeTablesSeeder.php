<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class AdminTypeTablesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\AdminType::factory(0)->create();
    }
}
