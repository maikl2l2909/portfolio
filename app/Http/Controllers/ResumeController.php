<?php

namespace App\Http\Controllers;

use App\Models\ResumeDownload;
use App\Services\GeoLocationService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ResumeController extends Controller
{
    private const RESUME_PATH = 'Dzmitry Maksimuk.pdf';

    private const RESUME_FILENAME = 'Dzmitry Maksimuk.pdf';

    public function download(Request $request, GeoLocationService $geoLocation): mixed
    {
        abort_unless(Storage::disk('public')->exists(self::RESUME_PATH), 404);

        $ipAddress = $request->ip() ?? '0.0.0.0';
        $location = $geoLocation->lookup($ipAddress);

        ResumeDownload::create([
            'ip_address' => $ipAddress,
            'country' => $location['country'],
            'country_code' => $location['country_code'],
            'city' => $location['city'],
            'region' => $location['region'],
            'user_agent' => $request->userAgent(),
        ]);

        return Storage::disk('public')->download(self::RESUME_PATH, self::RESUME_FILENAME);
    }
}
