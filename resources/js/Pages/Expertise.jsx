import { useMemo } from 'react';
import { Head } from '@inertiajs/react';
import MainLayout from "../Layouts/MainLayout.jsx";


const CATEGORY_LABELS = {
  frontend: 'Frontend Development',
  backend: 'Backend Development',
  devops: 'DevOps & Cloud',
  db: 'Databases',
};

const CATEGORY_ICONS = {
  frontend: '🖥️',
  backend: '⚙️',
  devops: '☁️',
  db: '🗄️',
};

export default function Expertise({ skills = {} }) {
  const normalized = useMemo(() => {
    if (!skills || typeof skills !== 'object') return {};
    return Object.entries(skills).reduce((carry, [category, list]) => {
      carry[category] = Array.isArray(list)
        ? list.map((item) => ({
            ...item,Make header position fixed top. And backgroud blur.
            description: item.description || 'No description provided yet.',
            tags: item.tags || [],
            icon: item.icon || '⬡',
          }))
        : [];
      return carry;
    }, {});
  }, [skills]);

  const categories = Object.keys(normalized);

  return (
    <MainLayout>
      <Head title="Expertise" />

      <div className="min-h-screen bg-white text-gray-900">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <header className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">My Expertise</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise and professional capabilities.
            </p>
          </header>

          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-8 text-center">TECHNICAL SKILLS</h2>

            {categories.map((category) => {
              const categorySkills = normalized[category] || [];
              if (categorySkills.length === 0) return null;

              return (
                <div key={category} className="mb-12">
                  <h3 className="text-xl font-medium mb-6 flex items-center gap-2">
                    <span className="text-2xl">{CATEGORY_ICONS[category] || '•'}</span>
                    {CATEGORY_LABELS[category] || category}
                  </h3>

                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                    {categorySkills.map((skill) => (
                      <div key={skill.id} className="text-center group">
                        <div className="w-16 h-16 mx-auto mb-2 rounded-lg bg-gray-100 flex items-center justify-center text-2xl group-hover:bg-indigo-100 transition-colors">
                          {skill.icon}
                        </div>
                        <p className="text-sm font-medium text-gray-800">{skill.name}</p>
                        <p className="text-xs text-gray-500 mt-1">{skill.level}</p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-8 text-center">PROFESSIONAL SKILLS</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {[
                'Communication',
                'Problem Solving',
                'Leadership',
                'Time Management',
                'Adaptability',
                'Critical Thinking',
                'Collaboration',
                'Mentoring',
                'Negotiation',
                'Project Management',
                'Attention to Detail',
                'Self-Motivation',
              ].map((skill) => (
                <div key={skill} className="text-center py-3 px-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                  <p className="text-sm font-medium text-gray-800">{skill}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </MainLayout>
  );
}
