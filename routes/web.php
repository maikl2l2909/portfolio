<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Storage;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\ExperienceController;
use App\Http\Controllers\HomeController;

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/skills', fn () => redirect('/#skills'))->name('skills');
Route::get('/experience', fn () => redirect('/#experience'))->name('experience');
Route::get('/resume/download', function () {
    $resumePath = 'Dmitry Maksimuk.pdf';

    abort_unless(Storage::disk('public')->exists($resumePath), 404);

    return Storage::disk('public')->download($resumePath, 'Dzmitry Maksimuk.pdf');
})->name('resume.download');

Route::get('/contact', fn () => redirect('/#contact'))->name('contact');
Route::post('/contact', [ContactController::class, 'send'])->name('contact.send');
