<?php

namespace App\Filament\Resources\ResumeDownloads\Pages;

use App\Filament\Resources\ResumeDownloads\ResumeDownloadResource;
use Filament\Resources\Pages\ViewRecord;

class ViewResumeDownload extends ViewRecord
{
    protected static string $resource = ResumeDownloadResource::class;

    protected function getHeaderActions(): array
    {
        return [];
    }
}
