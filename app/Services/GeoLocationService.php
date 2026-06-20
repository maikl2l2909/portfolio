<?php

namespace App\Services;

use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Http;

class GeoLocationService
{
    /**
     * @return array{country: ?string, country_code: ?string, city: ?string, region: ?string}
     */
    public function lookup(string $ipAddress): array
    {
        if ($this->isPrivateIp($ipAddress)) {
            return [
                'country' => 'Local',
                'country_code' => null,
                'city' => null,
                'region' => null,
            ];
        }

        return Cache::remember(
            "geoip:{$ipAddress}",
            now()->addDay(),
            fn () => $this->fetchFromApi($ipAddress),
        );
    }

    /**
     * @return array{country: ?string, country_code: ?string, city: ?string, region: ?string}
     */
    private function fetchFromApi(string $ipAddress): array
    {
        $empty = [
            'country' => null,
            'country_code' => null,
            'city' => null,
            'region' => null,
        ];

        try {
            $response = Http::timeout(3)->get("http://ip-api.com/json/{$ipAddress}", [
                'fields' => 'status,country,countryCode,regionName,city',
            ]);

            if (! $response->successful()) {
                return $empty;
            }

            $data = $response->json();

            if (($data['status'] ?? '') !== 'success') {
                return $empty;
            }

            return [
                'country' => $data['country'] ?? null,
                'country_code' => $data['countryCode'] ?? null,
                'city' => $data['city'] ?? null,
                'region' => $data['regionName'] ?? null,
            ];
        } catch (\Throwable) {
            return $empty;
        }
    }

    private function isPrivateIp(string $ipAddress): bool
    {
        return ! filter_var(
            $ipAddress,
            FILTER_VALIDATE_IP,
            FILTER_FLAG_NO_PRIV_RANGE | FILTER_FLAG_NO_RES_RANGE,
        );
    }
}
