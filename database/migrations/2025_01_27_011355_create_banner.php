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
        Schema::create('banners', function (Blueprint $table) {
            $table->id();
            $table->string('bg_color', 255)->default('bg-white');
            $table->string('button_color', 255)->default('bg-white');
            $table->string('text_color', 255)->default('text-white');
            $table->string('banner_title', 255);
            $table->text('header')->nullable();
            $table->text('sub_header')->nullable();
            $table->text('description')->nullable();
            $table->text('sub_description')->nullable();
            $table->string('image_path', 500)->nullable();
            $table->string('label', 255)->defualt(['mens', 'womens']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('banners');
    }
};
