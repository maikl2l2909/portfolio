<?php

namespace App\Filament\Resources\ResumeDownloads\Tables;

use App\Models\ResumeDownload;
use Filament\Actions\ViewAction;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Table;

class ResumeDownloadsTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->defaultSort('created_at', 'desc')
            ->columns([
                TextColumn::make('created_at')
                    ->label('Downloaded at')
                    ->dateTime()
                    ->sortable(),
                TextColumn::make('ip_address')
                    ->label('IP address')
                    ->searchable()
                    ->copyable(),
                TextColumn::make('country')
                    ->label('Country')
                    ->searchable()
                    ->sortable()
                    ->placeholder('Unknown'),
                TextColumn::make('city')
                    ->label('City')
                    ->searchable()
                    ->toggleable()
                    ->placeholder('—'),
                TextColumn::make('region')
                    ->label('Region')
                    ->searchable()
                    ->toggleable(isToggledHiddenByDefault: true)
                    ->placeholder('—'),
                TextColumn::make('user_agent')
                    ->label('User agent')
                    ->limit(50)
                    ->toggleable(isToggledHiddenByDefault: true)
                    ->tooltip(fn ($record) => $record->user_agent),
            ])
            ->filters([
                SelectFilter::make('country_code')
                    ->label('Country')
                    ->options(fn () => ResumeDownload::query()
                        ->whereNotNull('country_code')
                        ->distinct()
                        ->orderBy('country')
                        ->pluck('country', 'country_code')
                        ->all()),
            ])
            ->recordActions([
                ViewAction::make(),
            ]);
    }
}
