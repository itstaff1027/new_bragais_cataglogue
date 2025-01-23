<?php

use App\Http\Controllers\ContentsManagement\WomenController;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\WelcomeController;
use App\Http\Controllers\PermissionsController;
use App\Http\Controllers\Inventory\ProductsController;
use App\Http\Controllers\GlobalSettings\SizeController;
use App\Http\Controllers\Inventory\WarehouseController;
use App\Http\Controllers\GlobalSettings\ColorController;
use App\Http\Controllers\Inventory\StockLevelController;
use App\Http\Controllers\GlobalSettings\FilterController;
use App\Http\Controllers\GlobalSettings\CategoryController;
use App\Http\Controllers\GlobalSettings\OrderTypeController;
use App\Http\Controllers\GlobalSettings\SizeValueController;
use App\Http\Controllers\GlobalSettings\HeelHeightController;
use App\Http\Controllers\GlobalSettings\FilterProductController;
use App\Http\Controllers\Web\WomenIndexController;

// Route::get('/', function () {
//     // $images = PageSections::with('images')->get();

//     // dd($images);
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//         // 'images' => $images
//     ]);
// });

Route::get('/', [WomenIndexController::class, 'index']);

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::middleware(['auth', 'role:admin'])->group(function () {
    Route::resource('/settings_colors', ColorController::class);
    Route::resource('/settings_categories', CategoryController::class);
    Route::resource('/settings_heel-heights', HeelHeightController::class);
    // Route::resource('/settings_order-types', OrderTypeController::class);
    Route::resource('/settings_sizes', SizeController::class);
    Route::resource('/settings_size_values', SizeValueController::class);

});

Route::middleware(['auth', 'role:admin'])->group(function () {
    Route::resource('/inventory/products', ProductsController::class);
    Route::post('/inventory/products/variants', [ProductsController::class, 'store_variants']);
    
    Route::post('/inventory/product/front_image/upload', [ProductsController::class, 'update_front_image']);
    Route::post('/inventory/product/gallery_images/upload', [ProductsController::class, 'update_gallery_images']);
    Route::post('/inventory/product/gallery_image/delete', [ProductsController::class, 'destroy_gallery_image']);

    Route::resource('/inventory/stocks', StockLevelController::class);
    
    Route::resource('/inventory/warehouses', WarehouseController::class);
});

Route::middleware(['auth', 'role:admin'])->group(function (){
    Route::resource('/content_womens', WomenController::class);
    Route::resource('/settings_filters', FilterController::class);
    Route::resource('/settings_filter_products', FilterProductController::class);
});

Route::get('/settings', function () {
    return Inertia::render('Settings/Page');
})->middleware(['auth', 'role:admin'])->name('settings');

require __DIR__.'/auth.php';
