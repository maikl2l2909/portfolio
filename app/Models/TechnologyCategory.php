<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class TechnologyCategory extends Model
{
    protected $fillable = [
        'name',
        'description',
        'icon',
        'sort_order',
    ];

    public function skills(): HasMany
    {
        return $this->hasMany(Skill::class);
    }
}
