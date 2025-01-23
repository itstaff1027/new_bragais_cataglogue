<?php

namespace App\Models\ContentsManagement;

use Spatie\Permission\Traits\HasRoles;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class FeaturedImage extends Model
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable, HasRoles;

    protected $fillable = [
        'section_name',
        'category',
        'image_path',
        'header',
        'sub_header',
        'description_1',
        'description_2',
        'is_active'
    ];
}
