<?php

use App\Http\Controllers\Campaign\HomeController;
use App\Http\Controllers\Campaign\SignupController;
use Illuminate\Support\Facades\Route;

Route::get('/', HomeController::class)->name('home');

Route::post('/signup', [SignupController::class, 'store'])
    ->middleware('throttle:10,1')
    ->name('campaign.signup');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
});

require __DIR__.'/settings.php';
