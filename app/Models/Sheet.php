<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Sheet extends Model
{
    use HasFactory;

    protected $fillable = ['name'];

    public function folder(): BelongsTo
    {
        return $this->belongsTo(Folder::class);
    }

    public function entries(): HasMany
    {
        return $this->hasMany(Entry::class);
    }
}
