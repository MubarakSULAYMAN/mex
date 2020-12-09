<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Expense extends Model
{
    use HasFactory;

    protected $guarded = [];

    // protected $table = "expenses";

    protected $fillable = [
        'narration',
        'category_id',
        'amount',
        'date',
    ];

    public function category() {
        return $this->belongsTo(Category::class);
    }
}
