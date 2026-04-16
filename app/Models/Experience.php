<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Model;

class Experience extends Model
{
    protected $fillable = [
        'title',
        'company_name',
        'start_work',
        'end_work',
        'description',
        'skill_id',
    ];

    protected $casts = [
        'start_work' => 'date',
        'end_work' => 'date',
    ];

    public function skill(): BelongsTo
    {
        return $this->belongsTo(Skill::class);
    }
}
