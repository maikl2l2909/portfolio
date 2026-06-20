<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'Test User',
            'email' => 'maikl2l@example.com',
        ]);

        $this->call([
            TechnologyCategorySeeder::class,
            SkillSeeder::class,
            ExperienceSeeder::class,
        ]);
    }
}
