<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class UnitEntrySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\UnitEntry::factory(0)->create();
    }
}
