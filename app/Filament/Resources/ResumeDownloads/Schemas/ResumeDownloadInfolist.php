<?php

namespace App\Filament\Resources\ResumeDownloads\Schemas;

use Filament\Infolists\Components\TextEntry;
use Filament\Schemas\Schema;

class ResumeDownloadInfolist
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextEntry::make('created_at')
                    ->label('Downloaded at')
                    ->dateTime(),
                TextEntry::make('ip_address')
                    ->label('IP address')
                    ->copyable(),
                TextEntry::make('country')
                    ->label('Country')
                    ->placeholder('Unknown'),
                TextEntry::make('country_code')
                    ->label('Country code')
                    ->placeholder('—'),
                TextEntry::make('city')
                    ->label('City')
                    ->placeholder('—'),
                TextEntry::make('region')
                    ->label('Region')
                    ->placeholder('—'),
                TextEntry::make('user_agent')
                    ->label('User agent')
                    ->columnSpanFull(),
            ]);
    }
}
