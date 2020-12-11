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
                'updated_at' => '01/01/2020',
            ),
            array(
                'name' => 'Rent',
                'updated_at' => '01/01/2020',
            ),
            array(
                'name' => 'Transport',
                'updated_at' => '01/01/2020',
            ),
            array(
                'name' => 'Telephone',
                'updated_at' => '01/01/2020',
            ),
            array(
                'name' => 'Utilities',
                'updated_at' => '01/01/2020',
            ),
        ));
    }
}
