<?php

namespace App\Http\Controllers;

use App\Models\Experience;
use Inertia\Inertia;

class ExperienceController extends Controller
{
    public function index()
    {
        $experiences = Experience::with('skills')
            ->orderByDesc('start_work')
            ->get();

        return Inertia::render('Experience', [
            'experiences' => $experiences,
        ]);
    }
}

