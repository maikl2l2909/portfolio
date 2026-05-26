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
        $database = TechnologyCategory::where('name', 'Database')->first();
        $tools = TechnologyCategory::where('name', 'Tools & Frameworks')->first();
        $infrastructure = TechnologyCategory::where('name', 'Infrastructure')->first();

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
            'technology_category_id' => $frontend->id,
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


        Skill::create([
            'name'        => 'PHP',
            'technology_category_id' => $backend->id,
            'level'       => 80,
            'description' => 'Component architecture, hooks, state management...',
            'tags'        => ['React 18', 'Vite', 'Zustand'],
            'icon'        => '⬡',
            'sort_order'  => 1,
        ]);

        Skill::create([
            'name'        => 'NodeJs',
            'technology_category_id' => $backend->id,
            'level'       => 30,
            'description' => 'Component architecture, hooks, state management...',
            'tags'        => ['React 18', 'Vite', 'Zustand'],
            'icon'        => '⬡',
            'sort_order'  => 2,
        ]);

        Skill::create([
            'name'        => 'Python',
            'technology_category_id' => $backend->id,
            'level'       => 30,
            'description' => 'Component architecture, hooks, state management...',
            'tags'        => ['React 18', 'Vite', 'Zustand'],
            'icon'        => '⬡',
            'sort_order'  => 3,
        ]);

        Skill::create([
            'name'        => 'Mysql',
            'technology_category_id' => $database->id,
            'level'       => 80,
            'description' => 'Component architecture, hooks, state management...',
            'tags'        => ['React 18', 'Vite', 'Zustand'],
            'icon'        => '⬡',
            'sort_order'  => 1,
        ]);

        Skill::create([
            'name'        => 'MariaDB',
            'technology_category_id' => $database->id,
            'level'       => 70,
            'description' => 'Component architecture, hooks, state management...',
            'tags'        => ['React 18', 'Vite', 'Zustand'],
            'icon'        => '⬡',
            'sort_order'  => 2,
        ]);

        Skill::create([
            'name'        => 'Postgresql',
            'technology_category_id' => $database->id,
            'level'       => 70,
            'description' => 'Component architecture, hooks, state management...',
            'tags'        => ['React 18', 'Vite', 'Zustand'],
            'icon'        => '⬡',
            'sort_order'  => 3,
        ]);

        Skill::create([
            'name'        => 'MongoDB',
            'technology_category_id' => $database->id,
            'level'       => 65,
            'description' => 'Component architecture, hooks, state management...',
            'tags'        => ['React 18', 'Vite', 'Zustand'],
            'icon'        => '⬡',
            'sort_order'  => 4,
        ]);

        Skill::create([
            'name'        => 'Elasticsearch',
            'technology_category_id' => $database->id,
            'level'       => 30,
            'description' => 'Component architecture, hooks, state management...',
            'tags'        => ['React 18', 'Vite', 'Zustand'],
            'icon'        => '⬡',
            'sort_order'  => 5,
        ]);

        Skill::create([
            'name'        => 'Laravel',
            'technology_category_id' => $tools->id,
            'level'       => 80,
            'description' => 'Default...',
            'tags'        => ['Default', 'Any'],
            'icon'        => '⬡',
            'sort_order'  => 1,
        ]);

        Skill::create([
            'name'        => 'Yii2',
            'technology_category_id' => $tools->id,
            'level'       => 80,
            'description' => 'Default...',
            'tags'        => ['Default', 'Any'],
            'icon'        => '⬡',
            'sort_order'  => 2,
        ]);

        Skill::create([
            'name'        => 'GraphQL',
            'technology_category_id' => $tools->id,
            'level'       => 70,
            'description' => 'Default...',
            'tags'        => ['Default', 'Any'],
            'icon'        => '⬡',
            'sort_order'  => 3,
        ]);

        Skill::create([
            'name' => 'Shopify',
            'technology_category_id' => $tools->id,
            'level' => 70,
            'description' => 'Default...',
            'tags' => ['Default', 'Any'],
            'icon' => '⬡',
            'sort_order' => 4,
        ]);

        Skill::create([
            'name' => 'Git',
            'technology_category_id' => $tools->id,
            'level' => 70,
            'description' => 'Default...',
            'tags' => ['Default', 'Any'],
            'icon' => '⬡',
            'sort_order' => 5,
        ]);

        Skill::create([
            'name' => 'Symfony',
            'technology_category_id' => $tools->id,
            'level' => 30,
            'description' => 'Default...',
            'tags' => ['Default', 'Any'],
            'icon' => '⬡',
            'sort_order' => 6,
        ]);

        Skill::create([
            'name' => 'Vite',
            'technology_category_id' => $tools->id,
            'level' => 30,
            'description' => 'Default...',
            'tags' => ['Default', 'Any'],
            'icon' => '⬡',
            'sort_order' => 7,
        ]);

        Skill::create([
            'name' => 'Docker',
            'technology_category_id' => $tools->id,
            'level' => 65,
            'description' => 'Default...',
            'tags' => ['Default', 'Any'],
            'icon' => '⬡',
            'sort_order' => 8,
        ]);

        Skill::create([
            'name' => 'NextJs',
            'technology_category_id' => $tools->id,
            'level' => 25,
            'description' => 'Default...',
            'tags' => ['Default', 'Any'],
            'icon' => '⬡',
            'sort_order' => 9,
        ]);

        Skill::create([
            'name' => 'Ubuntu',
            'technology_category_id' => $infrastructure->id,
            'level' => 75,
            'description' => 'Default...',
            'tags' => ['Default', 'Any'],
            'icon' => '⬡',
            'sort_order' => 1,
        ]);

        Skill::create([
            'name' => 'Apache',
            'technology_category_id' => $infrastructure->id,
            'level' => 65,
            'description' => 'Default...',
            'tags' => ['Default', 'Any'],
            'icon' => '⬡',
            'sort_order' => 2,
        ]);

        Skill::create([
            'name' => 'Nginx',
            'technology_category_id' => $infrastructure->id,
            'level' => 65,
            'description' => 'Default...',
            'tags' => ['Default', 'Any'],
            'icon' => '⬡',
            'sort_order' => 3,
        ]);


    }
}
