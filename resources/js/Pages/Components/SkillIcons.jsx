import React from 'react';

const SKILL_ICONS = {
    php: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" className="w-15 h-15">
            <circle cx="16" cy="16" r="14" fill="#8892BF"></circle>
            <path fill="#fff"
                  d="M14.44 10h1.68l-.476 2.524h1.51q1.242.027 1.85.555.621.529.366 2.01l-.816 4.4H16.85l.779-4.203q.121-.66-.073-.938-.195-.278-.84-.278l-1.352-.013-.998 5.432h-1.68z"></path>
            <path fill="#fff" fill-rule="evenodd"
                  d="M6.74 12.524h3.264q1.436.014 2.081.899.646.885.426 2.418a5 5 0 0 1-.377 1.375q-.28.674-.779 1.216-.609.687-1.303.872a5.6 5.6 0 0 1-1.436.185H7.155L6.692 22H5zm.695 5.472.728-3.952h.246q.134 0 .28-.013.975-.014 1.619.198.657.211.438 1.6-.267 1.65-1.047 1.929-.779.264-1.948.25h-.17a1 1 0 0 1-.146-.012M24.437 12.524h-3.263L19.433 22h1.692l.463-2.511h1.46a5.6 5.6 0 0 0 1.437-.185q.694-.185 1.303-.872.499-.543.779-1.216.292-.675.377-1.375.22-1.533-.426-2.418-.645-.885-2.082-.899m-1.841 1.52-.728 3.952a1 1 0 0 0 .146.013h.17q1.17.013 1.948-.251.78-.277 1.047-1.93.219-1.387-.438-1.599-.645-.21-1.62-.198a3 3 0 0 1-.28.013z"
                  clip-rule="evenodd"></path>
        </svg>
    ),
    backend: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
             strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="3" width="20" height="14" rx="2"/>
            <line x1="8" y1="21" x2="16" y2="21"/>
            <line x1="12" y1="17" x2="12" y2="21"/>
        </svg>
    ),
    devops: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
             strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="3"/>
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/>
        </svg>
    ),
    db: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
             strokeLinecap="round" strokeLinejoin="round">
            <ellipse cx="12" cy="5" rx="9" ry="3"/>
            <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
        </svg>
    ),
};

export { SKILL_ICONS };
