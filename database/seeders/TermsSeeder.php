<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class TermsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\Terms::factory(0)->create();
    }
}
