<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ItemController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ExpenseController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('items', [ItemController::class, 'index']);
Route::prefix('/item')->group( function() {
    Route::post('/store', [ItemController::class, 'store']);
    Route::put('/{id}', [ItemController::class, 'update']);
    Route::delete('{id}', [ItemController::class, 'destroy']);
});

Route::get('categories', [CategoryController::class, 'index']);
Route::prefix('/category')->group( function() {
    Route::post('/store', [CategoryController::class, 'store']);
    Route::put('/{id}', [CategoryController::class, 'update']);
    Route::delete('{id}', [CategoryController::class, 'destroy']);
    Route::get('/with-expense', [CategoryController::class, 'getWithExpense']);
    Route::get('/by-id/{id}', [CategoryController::class, 'getCategoryById']);

});

Route::get('expenses', [ExpenseController::class, 'index']);
Route::prefix('/expense')->group( function() {
    Route::post('/store', [ExpenseController::class, 'store']);
    Route::put('/{id}', [ExpenseController::class, 'update']);
    Route::delete('{id}', [ExpenseController::class, 'destroy']);
    Route::get('/by-id/{id}', [ExpenseController::class, 'getExpenseById']);

    Route::prefix('/group')->group( function() {
        Route::get('/by-category', [ExpenseController::class, 'groupedByCategory']);
        Route::get('/by-month', [ExpenseController::class, 'groupedByMonth']);
    });
});

// Route::get('/expenses-group/{id}', [CategoryController::class, 'getExpensesByCategory']);