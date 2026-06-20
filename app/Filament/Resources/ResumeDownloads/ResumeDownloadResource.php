<?php

namespace App\Filament\Resources\ResumeDownloads;

use App\Filament\Resources\ResumeDownloads\Pages\ListResumeDownloads;
use App\Filament\Resources\ResumeDownloads\Pages\ViewResumeDownload;
use App\Filament\Resources\ResumeDownloads\Schemas\ResumeDownloadInfolist;
use App\Filament\Resources\ResumeDownloads\Tables\ResumeDownloadsTable;
use App\Models\ResumeDownload;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;
use UnitEnum;

class ResumeDownloadResource extends Resource
{
    protected static ?string $model = ResumeDownload::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedArrowDownTray;

    protected static ?string $navigationLabel = 'Resume Downloads';

    protected static ?string $modelLabel = 'Resume Download';

    protected static ?string $pluralModelLabel = 'Resume Downloads';

    protected static string|UnitEnum|null $navigationGroup = 'Analytics';

    protected static ?int $navigationSort = 1;

    public static function infolist(Schema $schema): Schema
    {
        return ResumeDownloadInfolist::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return ResumeDownloadsTable::configure($table);
    }

    public static function getRelations(): array
    {
        return [];
    }

    public static function getPages(): array
    {
        return [
            'index' => ListResumeDownloads::route('/'),
            'view' => ViewResumeDownload::route('/{record}'),
        ];
    }
}
