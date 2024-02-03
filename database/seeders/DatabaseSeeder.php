<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Entry;
use App\Models\Folder;
use App\Models\Sheet;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        $u = User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
        ]);

        $f = Folder::factory()->count(3)->make(['user_id' => $u]);

        foreach ($f as $key => $folder) {
            $s = Sheet::factory()->count(3)->make(['folder_id' => $folder]);

            foreach ($s as $key => $sheet) {
                Entry::factory()->count(10)->make(['sheet_id' => $sheet]);
            }
        }
    }
}
