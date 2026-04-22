import { useState, useEffect, useRef } from 'react';
import { Head } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import { SKILL_ICONS } from './Components/SkillIcons';
import { SkillCard } from './Components/SkillCard.jsx'

// ---------------------------------------------------------------------------
// Level badge config
// ---------------------------------------------------------------------------
const LEVEL_STYLES = {
    Expert:   'bg-indigo-100 text-indigo-700 border border-indigo-200',
    Advanced: 'bg-emerald-100 text-emerald-700 border border-emerald-200',
    Mid:      'bg-amber-100 text-amber-700 border border-amber-200',
};

const CATEGORY_ICONS = {
    frontend: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
        </svg>
    ),
    backend: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
        </svg>
    ),
    devops: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/>
        </svg>
    ),
    db: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
        </svg>
    ),
};

// ---------------------------------------------------------------------------
// Default/fallback data (used when no props from Inertia)
// ---------------------------------------------------------------------------
const FALLBACK_SKILLS = {
    frontend: [
        {
            id: 1, name: 'React', category: 'frontend', level: 'Expert', icon: '⬡',
            description: 'Component architecture, hooks, state management and performance optimisation for complex SPAs.',
            tags: ['React 18', 'Vite', 'Zustand', 'React Query', 'Framer Motion'],
        },
        {
            id: 2, name: 'TypeScript', category: 'frontend', level: 'Expert', icon: '◈',
            description: 'Strongly-typed frontends with generics, utility types, and zero runtime surprises.',
            tags: ['TS 5.x', 'Zod', 'tRPC', 'type guards'],
        },
        {
            id: 3, name: 'CSS & Design Systems', category: 'frontend', level: 'Advanced', icon: '◑',
            description: 'Tailwind, CSS Modules, and custom design tokens. Pixel-perfect, accessible, responsive.',
            tags: ['Tailwind CSS', 'CSS Modules', 'Radix UI', 'shadcn/ui', 'a11y'],
        },
    ],
    backend: [
        {
            id: 4, name: 'Laravel (PHP)', category: 'backend', level: 'Expert', icon: '⬡',
            description: 'Full-stack API development with Eloquent ORM, queues, policies, and first-class testing.',
            tags: ['Laravel 11', 'Inertia.js', 'Sanctum', 'Horizon', 'Filament'],
        },
        {
            id: 5, name: 'Node.js', category: 'backend', level: 'Advanced', icon: '◎',
            description: 'REST and GraphQL APIs, real-time websockets, and background workers at scale.',
            tags: ['Express', 'Fastify', 'Prisma', 'Socket.io', 'Bull'],
        },
        {
            id: 6, name: 'API Design', category: 'backend', level: 'Expert', icon: '⬡',
            description: 'REST, GraphQL, and OpenAPI — versioned, documented, and designed for developer experience.',
            tags: ['REST', 'GraphQL', 'OpenAPI 3', 'Postman', 'tRPC'],
        },
    ],
    devops: [
        {
            id: 7, name: 'Docker & CI/CD', category: 'devops', level: 'Advanced', icon: '⬡',
            description: 'Containerised deployments, multi-stage builds, GitHub Actions pipelines, and zero-downtime releases.',
            tags: ['Docker', 'GitHub Actions', 'Nginx', 'Laravel Forge'],
        },
    ],
    db: [
        {
            id: 8, name: 'PostgreSQL', category: 'db', level: 'Advanced', icon: '◉',
            description: 'Schema design, indexing, JSONB, migrations, and query optimisation for production loads.',
            tags: ['PostgreSQL 16', 'pgvector', 'migrations', 'indexing'],
        },
        {
            id: 9, name: 'Redis', category: 'db', level: 'Mid', icon: '◑',
            description: 'Caching layers, session stores, pub/sub, and job queues with efficient TTL strategies.',
            tags: ['Redis 7', 'caching', 'pub/sub', 'queues'],
        },
    ],
};

// ---------------------------------------------------------------------------
// Main Skills page
// ---------------------------------------------------------------------------
export default function Skills({
    skills = FALLBACK_SKILLS,
    technologyCategories = [],
    embedded = false,
    sectionId = 'skills',
}) {
    // Create dynamic categories from technologyCategories
    const dynamicCategories = [
        { key: 'all', label: 'All' },
        ...technologyCategories.map(cat => ({
            key: cat.name.toLowerCase().replace(/\s+/g, ''), // e.g., 'Frontend' -> 'frontend'
            label: cat.name,
            icon: cat.icon,
        }))
    ];

    const categoriesWithSkills = Object.keys(skills || {}).map(catKey => {
        const categoryFromMeta = technologyCategories.find(cat => cat.name.toLowerCase().replace(/\s+/g, '') === catKey);
        return {
            key: catKey,
            label: categoryFromMeta?.name || catKey.charAt(0).toUpperCase() + catKey.slice(1),
            skills: skills[catKey] || [],
        };
    });

    // Create dynamic category icons
    const dynamicCategoryIcons = {};
    technologyCategories.forEach(cat => {
        const key = cat.name.toLowerCase().replace(/\s+/g, '');
        dynamicCategoryIcons[key] = cat.icon || '📁'; // fallback icon
    });

    // Use dynamic data if available, otherwise fallback
    const categories = technologyCategories.length > 0 ? dynamicCategories : [];
    const categoryIcons = technologyCategories.length > 0 ? dynamicCategoryIcons : CATEGORY_ICONS;

    const [activeTab, setActiveTab] = useState('all');
    const [animKey, setAnimKey] = useState(0);

    // Flatten grouped object into array
    const allSkills = Object.values(skills).flat();

    // Filter based on active tab
    const filtered = activeTab === 'all'
        ? allSkills
        : (skills[activeTab] ?? []);

    // Count per category for badges
    const counts = {
        all: allSkills.length,
        ...Object.fromEntries(
            Object.entries(skills).map(([cat, list]) => [cat.toLowerCase().replace(/\s+/g, ''), list.length])
        ),
    };

    function handleTabChange(key) {
        setActiveTab(key);
        setAnimKey(prev => prev + 1); // re-trigger stagger animation
    }

    const content = (
        <section id={sectionId} data-nav-section className="min-h-screen bg-white py-20 scroll-mt-24">
            <div className="mt-24 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-12">
                        <h1 className="mb-3 text-3xl font-semibold tracking-tight text-black md:text-4xl">
                            My skills, applied.
                        </h1>
                        <p className="text-sm font-light text-gray-600">
                            Technologies I work with daily — from database to browser.
                        </p>
                    </div>
                    <div className="flex flex-wrap lg:gap-x-12 gap-6">
                        {categoriesWithSkills.map(({ key, label, icon, skills }) => {
                            return (
                                <div key={key}>
                                    <h3 className="flex items-center gap-2 text-lg font-medium text-foreground mb-8">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                             viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
                                             stroke-linecap="round" stroke-linejoin="round"
                                             className="lucide lucide-server w-5 h-5 text-primary" aria-hidden="true">
                                            <rect width="20" height="8" x="2" y="2" rx="2" ry="2"></rect>
                                            <rect width="20" height="8" x="2" y="14" rx="2" ry="2"></rect>
                                            <line x1="6" x2="6.01" y1="6" y2="6"></line>
                                            <line x1="6" x2="6.01" y1="18" y2="18"></line>
                                        </svg>
                                        {label}
                                    </h3>
                                    <div className="grid grid-cols-4 xl:grid-cols-6 gap-2">
                                        {Object.values(skills).map((skill, index) => (
                                            <SkillCard key={skill.id} skill={skill} index={index} targetWidth={skill.level}/>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}

                    </div>
            </div>
        </section>
    );

    if (embedded) {
        return content;
    }

    return (
        <MainLayout mainClassName="border-0 bg-transparent dark:bg-transparent p-0 shadow-none rounded-none">
            <Head title="Skills" />
            {content}
        </MainLayout>
    );
}
