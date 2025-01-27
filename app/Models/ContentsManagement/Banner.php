<?php

namespace App\Models\ContentsManagement;

use Spatie\Permission\Traits\HasRoles;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Banner extends Model
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable, HasRoles;

    protected $fillable = [
        'bg_color',
        'text_color',
        'button_color',
        'banner_title',
        'image_path',
        'header',
        'sub_header',
        'description',
        'sub_description',
        'label'
    ];
}
