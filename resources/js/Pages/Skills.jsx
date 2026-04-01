import { useState, useEffect, useRef } from 'react';
import { Head } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

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
            className="group relative rounded-xl bg-gray-50 p-5 transition-all duration-300 hover:shadow-lg hover:bg-white hover:-translate-y-1"
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
            <div className="flex items-start justify-between mb-4">
                <div
                    className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-100 text-base text-gray-700 group-hover:bg-indigo-500/10 group-hover:text-indigo-600 transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" className="w-10 h-10">
                        <circle cx="16" cy="16" r="14" fill="#8892BF"></circle>
                        <path fill="#fff"
                              d="M14.44 10h1.68l-.476 2.524h1.51q1.242.027 1.85.555.621.529.366 2.01l-.816 4.4H16.85l.779-4.203q.121-.66-.073-.938-.195-.278-.84-.278l-1.352-.013-.998 5.432h-1.68z"></path>
                        <path fill="#fff" fill-rule="evenodd"
                              d="M6.74 12.524h3.264q1.436.014 2.081.899.646.885.426 2.418a5 5 0 0 1-.377 1.375q-.28.674-.779 1.216-.609.687-1.303.872a5.6 5.6 0 0 1-1.436.185H7.155L6.692 22H5zm.695 5.472.728-3.952h.246q.134 0 .28-.013.975-.014 1.619.198.657.211.438 1.6-.267 1.65-1.047 1.929-.779.264-1.948.25h-.17a1 1 0 0 1-.146-.012M24.437 12.524h-3.263L19.433 22h1.692l.463-2.511h1.46a5.6 5.6 0 0 0 1.437-.185q.694-.185 1.303-.872.499-.543.779-1.216.292-.675.377-1.375.22-1.533-.426-2.418-.645-.885-2.082-.899m-1.841 1.52-.728 3.952a1 1 0 0 0 .146.013h.17q1.17.013 1.948-.251.78-.277 1.047-1.93.219-1.387-.438-1.599-.645-.21-1.62-.198a3 3 0 0 1-.28.013z"
                              clip-rule="evenodd"></path>
                    </svg>
                </div>
                <span
                    className={`text-[10px] font-mono font-medium px-2 py-1 rounded-full ${LEVEL_STYLES[skill.level] ?? LEVEL_STYLES.Mid}`}>
                    {skill.level}
                </span>
            </div>

            {/* Name */}
            <h3 className="mb-1.5 text-sm font-semibold tracking-tight text-gray-900 group-hover:text-black transition-colors duration-200">
                {skill.name}
            </h3>

            {/* Description */}
            <p className="mb-4 text-xs leading-relaxed text-gray-500 group-hover:text-gray-700 transition-colors duration-200">
                {skill.description}
            </p>

            {/* Tags */}
            <div className="w-full flex flex-wrap gap-1.5">
                {(skill.tags ?? []).map(tag => (
                    <span
                        key={tag}
                        className="font-mono text-[10px] px-2 py-0.5 rounded-md bg-gray-100 text-gray-600 border border-gray-200 group-hover:border-gray-300 group-hover:text-gray-800 transition-all duration-200"
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

    console.log('technologyCategories', technologyCategories)

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
