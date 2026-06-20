<?php

namespace App\Filament\Widgets;

use App\Models\ResumeDownload;
use Filament\Widgets\StatsOverviewWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class ResumeDownloadStats extends StatsOverviewWidget
{
    protected function getStats(): array
    {
        $total = ResumeDownload::count();
        $today = ResumeDownload::whereDate('created_at', today())->count();
        $thisWeek = ResumeDownload::where('created_at', '>=', now()->startOfWeek())->count();
        $uniqueCountries = ResumeDownload::whereNotNull('country_code')->distinct('country_code')->count('country_code');

        return [
            Stat::make('Total downloads', number_format($total))
                ->description('All time')
                ->descriptionIcon('heroicon-m-arrow-down-tray')
                ->color('primary'),
            Stat::make('Today', number_format($today))
                ->description('Downloads today')
                ->descriptionIcon('heroicon-m-calendar')
                ->color('success'),
            Stat::make('This week', number_format($thisWeek))
                ->description('Since Monday')
                ->descriptionIcon('heroicon-m-chart-bar')
                ->color('info'),
            Stat::make('Countries', number_format($uniqueCountries))
                ->description('Unique countries')
                ->descriptionIcon('heroicon-m-globe-alt')
                ->color('warning'),
        ];
    }
}
