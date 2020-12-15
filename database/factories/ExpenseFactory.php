<?php

namespace Database\Factories;

use App\Models\Expense;
use Illuminate\Database\Eloquent\Factories\Factory;

class ExpenseFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Expense::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'narration' => $this -> faker -> sentence($nbWords = 7, $variableNbWords = true),
            'category_id' => $this -> faker -> randomElement($array = array (1, 2, 3, 4, 5)),
            'amount' => $this -> faker -> numberBetween($min = 1000, $max = 900000),
            'date' => $this -> faker -> dateTimeThisMonth($max = 'now', $timezone = 'Africa/Lagos', 'd-m-Y'),
            // 'created_at' => $this -> faker -> dateTimeThisYear($max = 'now', $timezone = null, 'd-m-Y'),
            // 'updated_at' => $this -> faker -> dateTimeThisYear($max = 'now', $timezone = null, 'd-m-Y'),
        ];
    }
}
