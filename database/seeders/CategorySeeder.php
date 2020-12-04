<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
// use Illuminate\Support\Facades\Hash;
// use Illuminate\Support\Str;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {        
        DB::table('categories')->insert(array(
            array(
                'name' => 'Food',
            ),
            array(
                'name' => 'Rent',
            ),
            array(
                'name' => 'Transport',
            ),
            array(
                'name' => 'Telephone',
            ),
            array(
                'name' => 'Utilities',
            ),
        ));
    }
}
