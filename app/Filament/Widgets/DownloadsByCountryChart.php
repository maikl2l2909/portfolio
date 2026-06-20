<?php

namespace App\Filament\Widgets;

use App\Models\ResumeDownload;
use Filament\Widgets\ChartWidget;
use Illuminate\Support\Facades\DB;

class DownloadsByCountryChart extends ChartWidget
{
    protected ?string $heading = 'Downloads by country';

    protected static ?int $sort = 2;

    protected function getData(): array
    {
        $downloadsByCountry = ResumeDownload::query()
            ->select('country', DB::raw('count(*) as total'))
            ->whereNotNull('country')
            ->groupBy('country')
            ->orderByDesc('total')
            ->limit(10)
            ->get();

        return [
            'datasets' => [
                [
                    'label' => 'Downloads',
                    'data' => $downloadsByCountry->pluck('total')->all(),
                    'backgroundColor' => [
                        '#f59e0b',
                        '#d97706',
                        '#b45309',
                        '#92400e',
                        '#78350f',
                        '#451a03',
                        '#fde68a',
                        '#fcd34d',
                        '#fbbf24',
                        '#f59e0b',
                    ],
                ],
            ],
            'labels' => $downloadsByCountry->pluck('country')->all(),
        ];
    }

    protected function getType(): string
    {
        return 'doughnut';
    }
}
