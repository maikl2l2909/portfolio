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
            $table->string('title')->after('id');
            $table->string('company_name')->after('title');
            $table->date('start_work')->after('company_name');
            $table->date('end_work')->nullable()->after('start_work');
            $table->text('description')->nullable()->after('end_work');
            $table->foreignId('skill_id')->nullable()->after('description')->constrained()->nullOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('experiences', function (Blueprint $table) {
            $table->dropConstrainedForeignId('skill_id');
            $table->dropColumn(['title', 'company_name', 'start_work', 'end_work', 'description']);
        });
    }
};

