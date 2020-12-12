<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('categories')->insert([
            [
                'name' => 'Food',
                "created_at" => '01/01/2020',
                "updated_at" => '01/01/2020',
            ],
            [
                'name' => 'Rent',
                "created_at" => '01/01/2020',
                "updated_at" => '01/01/2020',
            ],
            [
                'name' => 'Transport',
                "created_at" => '01/01/2020',
                "updated_at" => '01/01/2020',
            ],
            [
                'name' => 'Telephone',
                "created_at" => '01/01/2020',
                "updated_at" => '01/01/2020',
            ],
            [
                'name' => 'Utilities',
                "created_at" => '01/01/2020',
                "updated_at" => '01/01/2020',
            ]
        ]);
    }
}
