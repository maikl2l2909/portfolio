<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ResumeDownload extends Model
{
    protected $fillable = [
        'ip_address',
        'country',
        'country_code',
        'city',
        'region',
        'user_agent',
    ];
}
