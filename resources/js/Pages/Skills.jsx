import { useState, useEffect, useRef } from 'react';
import { Head } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import { SKILL_ICONS } from './Components/SkillIcons';

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
// SkillCard component
// ---------------------------------------------------------------------------
function SkillCard({ skill, index }) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
            { threshold: 0.1 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className="group relative rounded-xl p-5 transition-all duration-300"
            style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 0.5s ease ${index * 60}ms, transform 0.5s ease ${index * 60}ms, border-color 0.3s, background 0.3s, box-shadow 0.3s`,
                boxShadow: '0 0 0 0 transparent',
            }}
            onMouseEnter={e => e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(0,0,0,0.1)'}
            onMouseLeave={e => e.currentTarget.style.boxShadow = '0 0 0 0 transparent'}
        >
            {/* Top row: icon + level badge */}
            <div className="grid grid-flow-col justify-items-center mb-4">
                <div className="flex flex-col">
                    <div
                        className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-100 text-base text-gray-700 group-hover:bg-indigo-500/10 group-hover:text-indigo-600 transition-all duration-300">
                        {SKILL_ICONS.php}
                    </div>

                </div>
            </div>

            {/* Name */}
            <div
                className="grid grid-flow-col justify-items-center mb-1.5 text-sm font-semibold tracking-tight text-gray-900 group-hover:text-black transition-colors duration-200">
                {skill.name}
            </div>
            <div className="w-full h-1 bg-gray-100 rounded-full mt-2">
                <div className={`w-[${skill.level}%] h-1 bg-indigo-500 rounded-full`}></div>
            </div>
        </div>
    );
}

// ---------------------------------------------------------------------------
// Main Skills page
// ---------------------------------------------------------------------------
export default function Skills({ skills = FALLBACK_SKILLS, technologyCategories = [] }) {
    // Create dynamic categories from technologyCategories
    const dynamicCategories = [
        { key: 'all', label: 'All' },
        ...technologyCategories.map(cat => ({
            key: cat.name.toLowerCase().replace(/\s+/g, ''), // e.g., 'Frontend' -> 'frontend'
            label: cat.name,
            icon: cat.icon,
        }))
    ];

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

    return (
        <MainLayout>
            <Head title="Skills" />

            <section className="min-h-screen bg-white px-6 py-20 md:px-12 lg:px-20">
                <div className="mx-auto max-w-6xl">

                    {/* ── Header ── */}
                    <div className="mb-12">
                        <h1 className="mb-3 text-3xl font-semibold tracking-tight text-black md:text-4xl">
                            My skills, applied.
                        </h1>
                        <p className="text-sm font-light text-gray-600">
                            Technologies I work with daily — from database to browser.
                        </p>
                    </div>

                    {/* ── Filter tabs ── */}
                    <div className="mb-10 flex flex-wrap gap-2">
                        {categories.map(({ key, label }) => (
                            <button
                                key={key}
                                onClick={() => handleTabChange(key)}
                                className={[
                                    'flex items-center gap-2 rounded-full border px-4 py-1.5 font-mono text-xs transition-all duration-200',
                                    activeTab === key
                                        ? 'border-indigo-500 bg-indigo-500 text-white'
                                        : 'border-gray-300 bg-gray-100 text-gray-600 hover:border-indigo-500/50 hover:text-indigo-600',
                                ].join(' ')}
                            >
                                {key !== 'all' && categoryIcons[key] && (
                                    <span className="opacity-60">
                                        {categoryIcons[key]}
                                    </span>
                                )}
                                {label}
                                <span className={[
                                    'ml-1 rounded-full px-1.5 py-0.5 text-[9px]',
                                    activeTab === key ? 'bg-white/20 text-white' : 'bg-gray-200 text-gray-500',
                                ].join(' ')}>
                                    {counts[key] ?? 0}
                                </span>
                            </button>
                        ))}
                    </div>

                    {/* ── Skills grid ── */}
                    <div
                        key={animKey}
                        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
                    >
                        {filtered.map((skill, i) => (
                            <SkillCard key={skill.id} skill={skill} index={i} />
                        ))}
                    </div>

                    {/* ── Empty state ── */}
                    {filtered.length === 0 && (
                        <div className="py-20 text-center text-sm text-gray-400">
                            No skills found in this category.
                        </div>
                    )}

                    {/* ── Footer note ── */}
                    <p className="mt-14 font-mono text-[11px] text-gray-400">
                        {allSkills.length} skills across {technologyCategories.length || Object.keys(skills).length} categories
                    </p>

                </div>
            </section>
        </MainLayout>
    );
}
