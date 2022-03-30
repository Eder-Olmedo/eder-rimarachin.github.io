<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProjectController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route views controller for the home page

Route::get('/', [HomeController::class, 'index'])->name('index');

Route::get('/resume', [HomeController::class,'resume'])->name('resume');

Route::get('/project', [HomeController::class, 'projects'])->name('project');

Route::get('/contact', [HomeController::class, 'contact'])->name('contact');


//Route views controller for the projects page

Route::resource('/projects', ProjectController::class);


Route::post('/projects', [ProjectController::class, 'status'])->name('projects-status');

//Route for logged in users
Auth::routes();

Route::get('/home', [HomeController::class, 'index'])->name('home');
