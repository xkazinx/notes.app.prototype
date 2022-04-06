<?php

use App\Http\Controllers\DocumentsController;
use App\Http\Requests\SaveListRequest;
use Illuminate\Support\Facades\Auth;
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

// #info One way to ensure the routes don’t clash is to add a prefix like /app/ for web routes

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::post('documents/{document}/item/save', [DocumentsController::class, 'saveItem']);

Route::post('documents/{document}/item/update/{documentItem}', [DocumentsController::class, 'updateItem']);

Route::resource('documents', DocumentsController::class);

/*
#info
 The fallback route ensures that welcome.blade.php,
  which contains our root React component Example, 
  gets rendered instead of a 404 error page for all frontend routes

  It's important to place it at the end of the file
*/
Route::fallback(function() {
    return view("test");
});