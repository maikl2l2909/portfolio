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
        $backend = TechnologyCategory::where('name', 'Backend')->first();

        Skill::create([
            'name'        => 'Html',
            'technology_category_id' => $frontend->id,
            'level'       => 95,
            'description' => 'Component architecture, hooks, state management...',
            'tags'        => ['React 18', 'Vite', 'Zustand'],
            'icon'        => '⬡',
            'sort_order'  => 1,
        ]);

        Skill::create([
            'name'        => 'Css',
            'technology_category_id' => $frontend->id,
            'level'       => 85,
            'description' => 'Component architecture, hooks, state management...',
            'tags'        => ['React 18', 'Vite', 'Zustand'],
            'icon'        => '⬡',
            'sort_order'  => 2,
        ]);

        Skill::create([
            'name'        => 'JavaScript',
            'technology_category_id' => $frontend->id,
            'level'       => 80,
            'description' => 'Component architecture, hooks, state management...',
            'tags'        => ['React 18', 'Vite', 'Zustand'],
            'icon'        => '⬡',
            'sort_order'  => 3,
        ]);

        Skill::create([
            'name'        => 'React',
            'technology_category_id' => $backend->id,
            'level'       => 70,
            'description' => 'Component architecture, hooks, state management...',
            'tags'        => ['React 18', 'Vite', 'Zustand'],
            'icon'        => '⬡',
            'sort_order'  => 4,
        ]);

        Skill::create([
            'name'        => 'Tailwind',
            'technology_category_id' => $frontend->id,
            'level'       => 70,
            'description' => 'Component architecture, hooks, state management...',
            'tags'        => ['React 18', 'Vite', 'Zustand'],
            'icon'        => '⬡',
            'sort_order'  => 5,
        ]);

        Skill::create([
            'name'        => 'Jquery',
            'technology_category_id' => $frontend->id,
            'level'       => 80,
            'description' => 'Component architecture, hooks, state management...',
            'tags'        => ['React 18', 'Vite', 'Zustand'],
            'icon'        => '⬡',
            'sort_order'  => 6,
        ]);

        Skill::create([
            'name'        => 'Sass',
            'technology_category_id' => $frontend->id,
            'level'       => 70,
            'description' => 'Component architecture, hooks, state management...',
            'tags'        => ['React 18', 'Vite', 'Zustand'],
            'icon'        => '⬡',
            'sort_order'  => 7,
        ]);

        Skill::create([
            'name'        => 'Vue',
            'technology_category_id' => $frontend->id,
            'level'       => 40,
            'description' => 'Component architecture, hooks, state management...',
            'tags'        => ['React 18', 'Vite', 'Zustand'],
            'icon'        => '⬡',
            'sort_order'  => 1,
        ]);




    }
}
