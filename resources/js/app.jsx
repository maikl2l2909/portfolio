import './bootstrap';

import { createInertiaApp } from '@inertiajs/react';
import { AnimatePresence } from 'framer-motion';
import { createRoot } from 'react-dom/client';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { LanguageProvider } from './i18n';

createInertiaApp({
  resolve: (name) =>
    resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
  setup({ el, App, props }) {
    createRoot(el).render(
      <LanguageProvider>
        <AnimatePresence mode="wait" initial={false}>
          <App {...props} key={props.initialPage.url} />
        </AnimatePresence>
      </LanguageProvider>,
    );
  },
});

