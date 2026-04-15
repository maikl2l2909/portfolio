<?php

namespace App\Http\Controllers;

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

        if (Schema::hasTable('skills')) {
            $skillsByCategory = Skill::with('technologyCategory')
                ->orderBy('sort_order')
                ->get()
                ->groupBy(function ($skill) {
                    return $skill->technologyCategory?->name ?? 'Uncategorized';
                });
        }

        if (Schema::hasTable('technology_categories')) {
            $technologyCategories = TechnologyCategory::orderBy('sort_order')->get();
        }

        return Inertia::render('Home', [
            'skills' => $skillsByCategory,
            'technologyCategories' => $technologyCategories,
        ]);
    }
}

