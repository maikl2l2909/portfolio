<?php

use App\Http\Controllers\SkillController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\HomeController;

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/skills', [SkillController::class, 'index'])->name('skills');
Route::get('/expertise', [SkillController::class, 'expertise'])->name('expertise');
//Route::get('/projects', [ProjectController::class, 'index']);
//Route::get('/experience', [ExperienceController::class, 'index']);
Route::post('/contact', [ContactController::class, 'store']);

Route::post('/contact', [ContactController::class, 'send'])->name('contact.send');
