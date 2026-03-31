<?php

namespace App\Http\Controllers;

use App\Models\Skill;
use App\Models\TechnologyCategory;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SkillController extends Controller
{
    public function index()
    {
        $skills = Skill::with('technologyCategory')
            ->orderBy('sort_order')
            ->get()
            ->groupBy(function ($skill) {
                return $skill->technologyCategory?->name ?? 'Uncategorized';
            });

        $technologyCategories = TechnologyCategory::orderBy('sort_order')->get();

        return Inertia::render('Skills', [
            'skills' => $skills,
            'technologyCategories' => $technologyCategories,
        ]);
    }

    public function expertise()
    {
        $skills = Skill::with('technologyCategory')
            ->orderBy('sort_order')
            ->get()
            ->groupBy(function ($skill) {
                return $skill->technologyCategory?->name ?? 'Uncategorized';
            });

        $technologyCategories = TechnologyCategory::orderBy('sort_order')->get();

        return Inertia::render('Expertise', [
            'skills' => $skills,
            'technologyCategories' => $technologyCategories,
        ]);
    }
}
