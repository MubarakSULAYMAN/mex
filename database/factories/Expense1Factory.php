<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

namespace Database\Factories;

use App\Models\User;
use App\Model;
use Faker\Generator as Faker;

$factory->define(App\NinSlip::class, function (Faker $faker) {
    return [
        'narration' => $faker->sentence($nbWords = 7, $variableNbWords = true),
        'category_id' => $faker->randomElement($array = array (1, 2, 3, 4, 5)),
        'amount' => $faker->numberBetween(100,90000),
        'date' => $faker->dateTimeThisYear($max = 'now', $timezone = null, 'd-m-Y'),
    ];
});
