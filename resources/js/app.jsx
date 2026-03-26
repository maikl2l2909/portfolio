import './bootstrap';

import { createInertiaApp } from '@inertiajs/react';
import { AnimatePresence } from 'framer-motion';
import { createRoot } from 'react-dom/client';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

createInertiaApp({
  resolve: (name) =>
    resolvePageComponent(`./Pages/${name}`, import.meta.glob('./Pages/**/*.jsx')),
  setup({ el, App, props }) {
    createRoot(el).render(
      <AnimatePresence mode="wait" initial={false}>
        <App {...props} key={props.initialPage.url} />
      </AnimatePresence>,
    );
  },
});

