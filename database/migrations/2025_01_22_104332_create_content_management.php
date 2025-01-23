<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        // Table for screen-size images (featured images)
        Schema::create('featured_images', function (Blueprint $table) {
            $table->id();
            $table->string('section_name'); // 'top', 'body', etc.
            $table->string('category')->default('general'); // 'womens', 'mens', 'general', etc.
            $table->string('image_path');
            $table->text('header')->nullable();
            $table->text('sub_header')->nullable();
            $table->text('description_1')->nullable();
            $table->text('description_2')->nullable();
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });

        // Table for filters
        Schema::create('filters', function (Blueprint $table) {
            $table->id();
            $table->string('filter_name'); // 'New', 'Old', 'Best', etc.
            $table->string('category')->default('general');
            $table->timestamps();
        });

        // Pivot table to associate filters with products
        Schema::create('filter_products', function (Blueprint $table) {
            $table->id();
            $table->foreignId('filter_id')->constrained('filters')->onDelete('cascade');
            $table->foreignId('product_id')->constrained('products')->onDelete('cascade');
            $table->text('header')->nullable();
            $table->text('sub_header')->nullable();
            $table->text('description_1')->nullable();
            $table->text('description_2')->nullable();
            $table->timestamps();
        });

        // Table for new arrivals
        Schema::create('new_arrivals', function (Blueprint $table) {
            $table->id();
            $table->foreignId('product_id')->constrained('products')->onDelete('cascade');
            $table->string('category')->default('general');
            $table->text('header')->nullable();
            $table->text('sub_header')->nullable();
            $table->text('description_1')->nullable();
            $table->text('description_2')->nullable();
            $table->timestamps();
        });

        // Table for featured products
        Schema::create('featured_products', function (Blueprint $table) {
            $table->id();
            $table->foreignId('product_id')->constrained('products')->onDelete('cascade');
            $table->string('category')->default('general');
            $table->text('header')->nullable();
            $table->text('sub_header')->nullable();
            $table->text('description_1')->nullable();
            $table->text('description_2')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('featured_products');
        Schema::dropIfExists('new_arrivals');
        Schema::dropIfExists('filter_products');
        Schema::dropIfExists('filters');
        Schema::dropIfExists('featured_images');
    }
};
