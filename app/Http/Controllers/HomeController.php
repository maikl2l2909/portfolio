<?php

namespace App\Http\Controllers;

use App\Models\Experience;
use App\Models\Skill;
use App\Models\TechnologyCategory;
use Illuminate\Support\Facades\Schema;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $skillsByCategory = collect();
        $technologyCategories = collect();

        $skillsByCategory = Skill::with('technologyCategory')
            ->orderBy('sort_order')
            ->get()
            ->groupBy(function ($skill) {
                return $skill->technologyCategory?->name ?? 'Uncategorized';
            });

        $experiences = Experience::with('skills')
            ->orderByDesc('start_work')
            ->get();

        $technologyCategories = TechnologyCategory::orderBy('sort_order')->get();

        return Inertia::render('Home', [
            'skills' => $skillsByCategory,
            'technologyCategories' => $technologyCategories,
            'experiences' => $experiences
        ]);
    }
}

