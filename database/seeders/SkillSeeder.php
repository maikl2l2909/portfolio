<?php

namespace Database\Seeders;

use App\Models\Skill;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SkillSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Skill::create([
            'name'        => 'React',
            'category'    => 'frontend',
            'level'       => 'Expert',
            'description' => 'Component architecture, hooks, state management...',
            'tags'        => ['React 18', 'Vite', 'Zustand'],
            'icon'        => '⬡',
            'sort_order'  => 1,
        ]);
    }
}
