<?php

namespace App\Models;

use Spatie\Permission\Traits\HasRoles;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class ProductImage extends Model
{
        /** @use HasFactory<\Database\Factories\UserFactory> */
        use HasFactory, Notifiable, HasRoles;
    protected $fillable = [
        'product_id',
        'image_path',
        'is_active',
    ];

    public function product()
    {
        return $this->belongsTo(Product::class, 'product_id');
    }
}
