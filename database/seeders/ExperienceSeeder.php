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
            'company_name' => 'Acme Digital',
            'start_work' => '2022-03-01',
            'end_work' => null,
            'description' => 'I specialize in developing high-performance application and services for the Shopify cloud platform.
            Worked with the Shopify platform to develop and customize E-Commerce stores. Customize Shopify themes, ensuring optimized UI/UX and improved conversions.  Design and implement React/Redux interfaces for engaging user experiences.            
             Build and integrate RESTful & GraphQL API services for Shopify.Create API application using PHP (Laravel) and JavaScript (React) to extend Shopify functionality',
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
