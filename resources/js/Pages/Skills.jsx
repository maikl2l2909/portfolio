import { useState, useEffect, useRef } from 'react';
import { Head } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

// ---------------------------------------------------------------------------
// Level badge config
// ---------------------------------------------------------------------------
const LEVEL_STYLES = {
    Expert:   'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20',
    Advanced: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20',
    Mid:      'bg-amber-500/10  text-amber-400  border border-amber-500/20',
};

const CATEGORY_ICONS = {
    frontend: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
        </svg>
    ),
    backend: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
        </svg>
    ),
    devops: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/>
        </svg>
    ),
    db: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
        </svg>
    ),
};

const CATEGORIES = [
    { key: 'all',      label: 'All' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'backend',  label: 'Backend' },
    { key: 'devops',   label: 'DevOps' },
    { key: 'db',       label: 'Databases' },
];

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
            className="group relative rounded-xl border border-white/[0.06] bg-white/[0.03] p-5 transition-all duration-300 hover:border-indigo-500/30 hover:bg-indigo-500/[0.04] hover:-translate-y-1"
            style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 0.5s ease ${index * 60}ms, transform 0.5s ease ${index * 60}ms, border-color 0.3s, background 0.3s, box-shadow 0.3s`,
                boxShadow: '0 0 0 0 transparent',
            }}
            onMouseEnter={e => e.currentTarget.style.boxShadow = '0 8px 32px -8px rgba(99,102,241,0.15)'}
            onMouseLeave={e => e.currentTarget.style.boxShadow = '0 0 0 0 transparent'}
        >
            {/* Top row: icon + level badge */}
            <div className="flex items-start justify-between mb-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/[0.06] text-base text-white/70 group-hover:bg-indigo-500/10 group-hover:text-indigo-300 transition-all duration-300">
                    {skill.icon}
                </div>
                <span className={`text-[10px] font-mono font-medium px-2 py-1 rounded-full ${LEVEL_STYLES[skill.level] ?? LEVEL_STYLES.Mid}`}>
                    {skill.level}
                </span>
            </div>

            {/* Name */}
            <h3 className="mb-1.5 text-sm font-semibold tracking-tight text-white/90 group-hover:text-white transition-colors duration-200">
                {skill.name}
            </h3>

            {/* Description */}
            <p className="mb-4 text-xs leading-relaxed text-white/40 group-hover:text-white/55 transition-colors duration-200">
                {skill.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5">
                {(skill.tags ?? []).map(tag => (
                    <span
                        key={tag}
                        className="font-mono text-[10px] px-2 py-0.5 rounded-md bg-white/[0.05] text-white/40 border border-white/[0.06] group-hover:border-white/10 group-hover:text-white/50 transition-all duration-200"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
}

// ---------------------------------------------------------------------------
// Main Skills page
// ---------------------------------------------------------------------------
export default function Skills({ skills = FALLBACK_SKILLS }) {
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
            Object.entries(skills).map(([cat, list]) => [cat, list.length])
        ),
    };

    function handleTabChange(key) {
        setActiveTab(key);
        setAnimKey(prev => prev + 1); // re-trigger stagger animation
    }

    return (
        <MainLayout>
            <Head title="Skills" />

            <section className="min-h-screen bg-[#0a0a0f] px-6 py-20 md:px-12 lg:px-20">
                <div className="mx-auto max-w-6xl">

                    {/* ── Header ── */}
                    <div className="mb-12">
                        <p className="mb-3 font-mono text-[11px] tracking-[0.18em] uppercase text-indigo-400">
                            // technical expertise
                        </p>
                        <h1 className="mb-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
                            My skills, applied.
                        </h1>
                        <p className="text-sm font-light text-white/40">
                            Technologies I work with daily — from database to browser.
                        </p>
                    </div>

                    {/* ── Filter tabs ── */}
                    <div className="mb-10 flex flex-wrap gap-2">
                        {CATEGORIES.map(({ key, label }) => (
                            <button
                                key={key}
                                onClick={() => handleTabChange(key)}
                                className={[
                                    'flex items-center gap-2 rounded-full border px-4 py-1.5 font-mono text-xs transition-all duration-200',
                                    activeTab === key
                                        ? 'border-indigo-500 bg-indigo-500 text-white'
                                        : 'border-white/10 bg-white/[0.03] text-white/50 hover:border-indigo-500/50 hover:text-indigo-300',
                                ].join(' ')}
                            >
                                {key !== 'all' && (
                                    <span className="opacity-60">
                                        {CATEGORY_ICONS[key]}
                                    </span>
                                )}
                                {label}
                                <span className={[
                                    'ml-1 rounded-full px-1.5 py-0.5 text-[9px]',
                                    activeTab === key ? 'bg-white/20 text-white' : 'bg-white/[0.06] text-white/30',
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
                        <div className="py-20 text-center text-sm text-white/30">
                            No skills found in this category.
                        </div>
                    )}

                    {/* ── Footer note ── */}
                    <p className="mt-14 font-mono text-[11px] text-white/20">
                        {allSkills.length} skills across {Object.keys(skills).length} categories
                    </p>

                </div>
            </section>
        </MainLayout>
    );
}
