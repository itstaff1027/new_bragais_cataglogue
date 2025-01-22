<?php

namespace App\Models;

use App\Models\StockMovements;
use Spatie\Permission\Traits\HasRoles;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class ProductVariant extends Model
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable, HasRoles;

    protected $fillable = [
        'product_id',
        'color_id',
        'heel_height_id',
        'size_value_id',
        'sku'
    ];

    public function product()
    {
        return $this->belongsTo(Product::class, 'product_id');
    }

    public function colors()
    {
        return $this->belongsTo(Color::class, 'color_id');
    }

    public function sizes()
    {
        return $this->belongsTo(Size::class, 'size_id');
    }

    public function heelHeights()
    {
        return $this->belongsTo(HeelHeight::class, 'heel_height_id');
    }

    public function size_values()
    {
        return $this->belongsTo(SizeValues::class, 'size_value_id');
    }

    public function categories()
    {
        return $this->belongsTo(Categories::class, 'category_id');
    }

    public function stockLevels(){
        return $this->hasMany(StockLevels::class, 'product_variant_id');
    }

    public function stockMovements(){
        return $this->hasMany(StockMovements::class, 'product_variant_id');
    }

}
