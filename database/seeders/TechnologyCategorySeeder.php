<?php

namespace Database\Seeders;

use App\Models\TechnologyCategory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TechnologyCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        TechnologyCategory::create([
            'name' => 'Frontend',
            'description' => 'Client-side technologies and frameworks',
            'icon' => '🖥️',
            'sort_order' => 1,
        ]);

        TechnologyCategory::create([
            'name' => 'Backend',
            'description' => 'Server-side technologies and APIs',
            'icon' => '⚙️',
            'sort_order' => 2,
        ]);

        TechnologyCategory::create([
            'name' => 'DevOps',
            'description' => 'Deployment, CI/CD, and infrastructure',
            'icon' => '🚀',
            'sort_order' => 3,
        ]);

        TechnologyCategory::create([
            'name' => 'Database',
            'description' => 'Data storage and management',
            'icon' => '🗄️',
            'sort_order' => 4,
        ]);
    }
}
