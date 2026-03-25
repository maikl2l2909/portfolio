<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class ContactController extends Controller
{
    public function index()
    {
        return Inertia::render('Contact');
    }

    public function send()
    {
        // Placeholder handler: implement validation + persistence as needed.
        return Inertia::render('Contact');
    }
}

