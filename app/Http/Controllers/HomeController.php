<?php

namespace App\Http\Controllers;

use App\Models\Skill;
use Illuminate\Support\Facades\Schema;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        return Inertia::render('Home', [
            'skills' => Schema::hasTable('skills') ? Skill::all() : [],
        ]);
    }
}

