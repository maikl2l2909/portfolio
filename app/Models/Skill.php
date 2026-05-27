<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;


class Skill extends Model
{
    use HasFactory;

    protected $casts = [
        'tags' => 'array',
    ];

    protected $fillable = [
        'name',
        'level',
        'description',
        'tags',
        'icon',
        'sort_order',
        'technology_category_id',
        'experience_id',
    ];

    public function technologyCategory(): BelongsTo
    {
        return $this->belongsTo(TechnologyCategory::class);
    }

    public function experiences(): BelongsToMany
    {
        return $this->belongsToMany(Experience::class);
    }

}

