import React, {useEffect, useRef, useState} from 'react';
import {SKILL_ICONS} from "./SkillIcons.jsx";

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
            className="group relative rounded-xl p-5 transition-all duration-300 w-24"
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
                        {SKILL_ICONS[skill.name.toLowerCase()]}
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

// export SkillCard;
export {SkillCard};
