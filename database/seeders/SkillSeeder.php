<?php

namespace Database\Seeders;

use App\Models\Skill;
use App\Models\TechnologyCategory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SkillSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $frontend = TechnologyCategory::where('name', 'Frontend')->first();

        Skill::create([
            'name'        => 'React',
            'technology_category_id' => $frontend->id,
            'level'       => 70,
            'description' => 'Component architecture, hooks, state management...',
            'tags'        => ['React 18', 'Vite', 'Zustand'],
            'icon'        => '⬡',
            'sort_order'  => 1,
        ]);
    }
}
