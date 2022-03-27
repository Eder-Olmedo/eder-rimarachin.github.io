<?php

use App\Http\Controllers\HomeController;
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

// Route::get('/', function () {
//     return 'Hello World';
// });

    Route::get('/', function () {
        return view('index')->with('title', 'Home');
    });

    Route::get('/about-me', function () {
        return view('about')->with('title', 'About');
    });

    Route::get('/resume', function () {
        return view('resume')->with('title', 'Resume');
    });

    Route::get('/projects', function () {
        return view('projects')->with('title', 'Projects');
    });
    Route::get('/contact', function () {
        return view('contact')->with('title', 'Contact');
    });



// Route::resource('/Home', HomeController::class);
