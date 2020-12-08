<?php

namespace App\Models;
// namespace App\Models\Category;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Expense extends Model
{
    use HasFactory;

    protected $guarded = [];

    // protected $table = "expenses";

    protected $fillable = [
        'narration',
        // 'category',
        'category_id',
        'amount',
        'date',
        // 'created_at'
    ];

    public function categories() {
        // return $this->hasMany(Category::class);
        return $this->belongsTo(Category::class);
    }
}
