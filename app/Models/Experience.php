<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;


class Experience extends Model
{
    protected $fillable = [
        'title',
        'company_name',
        'start_work',
        'end_work',
        'description',
    ];

    protected $casts = [
        'start_work' => 'date',
        'end_work' => 'date',
    ];
    public function skills(): BelongsToMany
    {
        return $this->belongsToMany(Skill::class);
    }
}
