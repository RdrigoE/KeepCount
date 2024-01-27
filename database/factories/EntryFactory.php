<?php

namespace Database\Factories;

use App\Models\Sheet;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Entry>
 */
class EntryFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'sheet_id' => Sheet::factory()->make(),
            'item' => Str::random(7),
            'quantity' => random_int(1, 10),
            'price' => random_int(1, 20) * random_int(1, 10) / 10,
        ];
    }
}
