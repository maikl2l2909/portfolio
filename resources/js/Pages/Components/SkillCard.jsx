import React, {useEffect, useRef, useState} from 'react';
import {SKILL_ICONS} from "./SkillIcons.jsx";
import {SKILL_COLORS} from "./SkillIconsColors.jsx";

function SkillCard({ skill, index,  targetWidth}) {
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

    const duration = 1000;
    const [width, setWidth] = useState(0);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setWidth(targetWidth);
                    observer.unobserve(el); // animate once
                }
            },
            { threshold: 0.5 }
        );

        observer.observe(el);
        return () => observer.disconnect(); // cleanup on unmount
    }, [targetWidth]);

    return (
        <div
            ref={ref}
            className="group relative rounded-xl p-1 transition-all duration-300 w-18 md:w-24"
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
                        className="flex h-9 w-9 items-center justify-center rounded-lg text-base text-gray-700 group-hover:bg-indigo-500/10 group-hover:text-indigo-600 transition-all duration-300">
                        {SKILL_ICONS[skill.name.toLowerCase()]}
                    </div>

                </div>
            </div>

            <div
                className="grid grid-flow-col justify-items-center mb-1.5 text-sm font-semibold tracking-tight text-gray-900 group-hover:text-black transition-colors duration-200">
                {skill.name}
            </div>
            <div className="w-full h-1 bg-gray-100 rounded-full mt-2">
                <div
                    className={`h-1 rounded-full`}
                    style={{
                        width: `${width}%`,
                        transition: `width ${duration}ms ease-in-out`,
                        backgroundColor: SKILL_COLORS[skill.name.toLowerCase()],
                    }}
                />
            </div>
        </div>
    );
}

export {SkillCard};
