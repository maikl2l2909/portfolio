import React from 'react';

const CATEGORIES_ICONS = {
  backend: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
         viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
         stroke-linecap="round" stroke-linejoin="round"
         className="lucide lucide-server w-5 h-5 text-primary" aria-hidden="true">
      <rect width="20" height="8" x="2" y="2" rx="2" ry="2"></rect>
      <rect width="20" height="8" x="2" y="14" rx="2" ry="2"></rect>
      <line x1="6" x2="6.01" y1="6" y2="6"></line>
      <line x1="6" x2="6.01" y1="18" y2="18"></line>
    </svg>
  ),
  frontend: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
         stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
         className="lucide lucide-monitor w-5 h-5 text-primary" aria-hidden="true">
      <rect width="20" height="14" x="2" y="3" rx="2"></rect>
      <line x1="8" x2="16" y1="21" y2="21"></line>
      <line x1="12" x2="12" y1="17" y2="21"></line>
    </svg>
  ),
  'tools & frameworks': (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
         stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
         className="lucide lucide-wrench w-5 h-5 text-primary" aria-hidden="true">
      <path
        d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"></path>
    </svg>
  ),
  database: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
         strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3"/>
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
    </svg>
  ),
  infrastructure: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
         viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
         stroke-linecap="round" stroke-linejoin="round"
         className="lucide lucide-server w-5 h-5 text-primary" aria-hidden="true">
      <rect width="20" height="8" x="2" y="2" rx="2" ry="2"></rect>
      <rect width="20" height="8" x="2" y="14" rx="2" ry="2"></rect>
      <line x1="6" x2="6.01" y1="6" y2="6"></line>
      <line x1="6" x2="6.01" y1="18" y2="18"></line>
    </svg>
  ),
};

export {CATEGORIES_ICONS};
