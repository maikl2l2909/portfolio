<?php

namespace App\Http\Controllers;

use App\Models\Skill;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SkillController extends Controller
{
    public function index()
    {
        $skills = Skill::orderBy('sort_order')
            ->get()
            ->groupBy('category');

        return Inertia::render('Skills', [
            'skills' => $skills,
        ]);
    }

    public function expertise()
    {
        $skills = Skill::orderBy('sort_order')
            ->get()
            ->groupBy('category');

        return Inertia::render('Expertise', [
            'skills' => $skills,
        ]);
    }
}
