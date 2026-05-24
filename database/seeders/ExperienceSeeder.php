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

        $fullStack = Experience::create([
            'title' => 'Full Stack Developer',
            'company_name' => 'Elastic-Soft',
            
            'start_work' => '2020-04-01',
            'end_work' => '2025-01-05',
            'description' => 'I specialize in developing high-performance applications and services for the Shopify platform. I have extensive experience in building, customizing, and optimizing e-commerce stores to improve scalability, user experience, and business performance.

My expertise includes customizing Shopify themes, improving UI/UX, and increasing store performance and conversion rates. I design and implement modern user interfaces using React and Redux to create engaging user experiences.

I also build and integrate RESTful and GraphQL APIs for Shopify applications. Additionally, I develop custom API applications using PHP (Laravel) and JavaScript (React) to extend Shopify functionality and integrate third-party services.',
        ]);

        $backend = Experience::create([
            'title' => 'Backend Developer',
            'company_name' => 'Northwind Labs',
            'start_work' => '2019-06-01',
            'end_work' => '2022-02-28',
            'description' => 'Designed REST services, integrated third-party payment providers, and helped migrate a monolith toward clearer service boundaries.',
        ]);

        $junior = Experience::create([
            'title' => 'Junior Web Developer',
            'company_name' => 'Starter Studio',
            'start_work' => '2017-09-01',
            'end_work' => '2019-05-31',
            'description' => 'Implemented UI features from Figma, fixed cross-browser issues, and paired with seniors on feature delivery and code reviews.',
        ]);

        $laravel?->update(['experience_id' => $fullStack->id]);
        $php?->update(['experience_id' => $backend->id]);
        $react?->update(['experience_id' => $junior->id]);
    }
}
