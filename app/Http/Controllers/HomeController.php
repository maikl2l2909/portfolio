<?php

namespace App\Http\Controllers;

use App\Models\Skill;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        return Inertia::render('Home', [
            'skills' => Skill::all(),
        ]);
    }
}

