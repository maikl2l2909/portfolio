<?php

namespace Database\Seeders;

use App\Models\Experience;
use App\Models\Skill;
use Illuminate\Database\Seeder;

class ExperienceSeeder extends Seeder
{

    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $laravel = Skill::where('name', 'Laravel')->first();
        $react = Skill::where('name', 'React')->first();
        $php = Skill::where('name', 'PHP')->first();

        Experience::query()->insert([
            [
                'title' => 'Full Stack Developer',
                'company_name' => 'Acme Digital',
                'start_work' => '2022-03-01',
                'end_work' => null,
                'description' => 'Built and maintained Laravel APIs and React dashboards. Improved performance of key reports and introduced automated tests for critical flows.',
                'skill_id' => $laravel?->id,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Backend Developer',
                'company_name' => 'Northwind Labs',
                'start_work' => '2019-06-01',
                'end_work' => '2022-02-28',
                'description' => 'Designed REST services, integrated third-party payment providers, and helped migrate a monolith toward clearer service boundaries.',
                'skill_id' => $php?->id,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Junior Web Developer',
                'company_name' => 'Starter Studio',
                'start_work' => '2017-09-01',
                'end_work' => '2019-05-31',
                'description' => 'Implemented UI features from Figma, fixed cross-browser issues, and paired with seniors on feature delivery and code reviews.',
                'skill_id' => $react?->id,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
