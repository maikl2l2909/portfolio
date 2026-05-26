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
        $elasticSoftSkills = Skill::whereIn('name', [
            'Html',
            'Css',
            'Docker',
            'Laravel',
            'JavaScript',
            'React',
            'PHP',
            'Tailwind',
            'Mysql',
            'Postgresql',
            'MongoDB',
            'Elasticsearch',
            'GraphQL',
            'Shopify',
            'Vite',
            'Git',
            'Ubuntu',
            'Nginx'
        ])
            ->get()
            ->keyBy('name');

        $contactLineServiceSkills = Skill::whereIn('name', [
            'Yii2',
            'PHP',
            'Bootstrap',
            'JavaScript',
            'Jquery',
            'Mysql',
            'Apache',
            'Git',
            'Html',
            'Css',
            'Sass',
        ])
            ->get()
            ->keyBy('name');

        $freelanceSkills = Skill::whereIn('name', [
            'PHP',
            'Yii2',
            'Html',
            'Css',
            'Bootstrap',
        ])
            ->get()
            ->keyBy('name');

        $elasticSoft = Experience::create([
            'title' => 'Full Stack Developer',
            'company_name' => 'Elastic-Soft',
            'start_work' => '2020-04-01',
            'end_work' => '2025-01-05',
            'description' => 'I specialize in developing high-performance applications and services for the Shopify platform. I have extensive experience in building, customizing, and optimizing e-commerce stores to improve scalability, user experience, and business performance.

My expertise includes customizing Shopify themes, improving UI/UX, and increasing store performance and conversion rates. I design and implement modern user interfaces using React and Redux to create engaging user experiences.

I also build and integrate RESTful and GraphQL APIs for Shopify applications. Additionally, I develop custom API applications using PHP (Laravel) and JavaScript (React) to extend Shopify functionality and integrate third-party services.',
        ]);

        $contactLineService = Experience::create([
            'title' => 'Full Stack Developer',
            'company_name' => 'ContactLineService',
            'start_work' => '2019-09-10',
            'end_work' => '2020-04-01',
            'description' => 'Developed and enhanced web applications using the Yii2 PHP framework, including online marketplaces, information portals with hotel and apartment booking systems, and IQ testing platforms.
Planned application architecture and database structure, optimized SQL queries, wrote automated tests, and implemented new features. Worked on both backend and frontend development while maintaining clean, self-documenting code.',
        ]);

        $freelance = Experience::create([
            'title' => 'Junior Web Developer',
            'company_name' => 'Freelance',
            'start_work' => '2019-04-29',
            'end_work' => '2019-09-01',
            'description' => 'Developed a responsive e-commerce watch store using the Yii2 framework and Bootstrap for cross-browser compatibility.',
        ]);

        $elasticSoftSkills->each(fn(Skill $skill) => $skill->update(['experience_id' => $elasticSoft->id]));
        $contactLineServiceSkills->each(fn(Skill $skill) => $skill->update(['experience_id' => $contactLineService->id]));
        $freelanceSkills->each(fn(Skill $skill) => $skill->update(['experience_id' => $freelance->id]));
    }
}
