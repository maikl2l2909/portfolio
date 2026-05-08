<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('experiences', function (Blueprint $table) {
            $table->dropConstrainedForeignId('skill_id');
        });

        Schema::table('skills', function (Blueprint $table) {
            $table->foreignId('experience_id')
                ->nullable()
                ->after('technology_category_id')
                ->constrained('experiences')
                ->nullOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('skills', function (Blueprint $table) {
            $table->dropConstrainedForeignId('experience_id');
        });

        Schema::table('experiences', function (Blueprint $table) {
            $table->foreignId('skill_id')
                ->nullable()
                ->after('description')
                ->constrained('skills')
                ->nullOnDelete();
        });
    }
};
