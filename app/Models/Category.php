<?php

namespace App\Models;
// namespace App\Models\Expense;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    protected $table = "categories";

    public function expense() {
        // return $this->belongsTo(Expense::class);
        return $this->hasMany(Expense::class);
    }

    // public function scopeActive($query){
    //     return $query->where('active', true);
    // }
}
