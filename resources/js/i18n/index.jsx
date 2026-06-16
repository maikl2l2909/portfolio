import React from 'react';

const LANGUAGE_STORAGE_KEY = 'portfolio_language';

export const SUPPORTED_LANGUAGES = {
  en: 'EN',
  pl: 'PL',
};

const translations = {
  en: {
    nav: {
      home: 'Home',
      skills: 'Skills',
      experience: 'Experience',
      contact: 'Contact',
      portfolioTitle: 'My Portfolio',
      fullName: 'Dzmitry Maksimuk',
    },
    common: {
      language: 'Language',
      present: 'Present',
    },
    home: {
      title: 'Dzmitry Maksimuk | Full-Stack',
      availableForWork: 'Available for work',
      intro: "Hi, I'm Dima Maksimuk",
      iam: 'I am a',
      roles: ['backend developer', 'full stack developer'],
      description:
        'Software engineer focused on reliable, scalable web applications. I help teams ship clean backend systems and practical full-stack solutions.',
      ctaTalk: "Let's talk",
      ctaResume: 'Resume',
    },
    skills: {
      title: 'My skills, applied.',
      subtitle: 'Technologies I work with daily - from database to browser.',
      pageTitle: 'Skills',
    },
    experience: {
      title: 'Experience',
      subtitle: 'Add your professional experience timeline here.',
      emptyState: 'No experience records yet. Add some in the database to show your timeline.',
    },
    contact: {
      pageTitle: 'Contact',
      title: "Let's Work Together",
      subtitle: 'Have an idea, role, or project in mind? Send me a message and I will get back to you soon.',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      sending: 'Sending...',
      sendMessage: 'Send Message',
      contactInformation: 'Contact Information',
      directCommunication: 'Prefer direct communication? Use any of the channels below.',
      phone: 'Phone',
      location: 'Location',
      locationValue: 'Poland',
      replyTime: 'Usually replies within 24 hours.',
    },
    footer: {
      rightsReserved: 'All rights reserved.',
    },
    expertise: {
      pageTitle: 'Expertise',
      title: 'My Expertise',
      subtitle:
        'A comprehensive overview of my technical expertise and professional capabilities.',
      technicalSkills: 'Technical skills',
      professionalSkills: 'Professional skills',
      categories: {
        frontend: 'Frontend development',
        backend: 'Backend development',
        devops: 'DevOps & cloud',
        db: 'Databases',
      },
      noDescription: 'No description provided yet.',
      softSkills: [
        'Communication',
        'Problem solving',
        'Leadership',
        'Time management',
        'Adaptability',
        'Critical thinking',
        'Collaboration',
        'Mentoring',
        'Negotiation',
        'Project management',
        'Attention to detail',
        'Self-motivation',
      ],
    },
    resume: {
      pageTitle: 'Resume',
      title: 'Resume',
      subtitle: 'Add your resume content or download link here.',
      placeholder: 'Placeholder resume section.',
    },
  },
  pl: {
    nav: {
      home: 'Start',
      skills: 'Umiejętności',
      experience: 'Doświadczenie',
      contact: 'Kontakt',
      portfolioTitle: 'Moje portfolio',
    },
    common: {
      language: 'Język',
      present: 'Obecnie',
    },
    home: {
      title: 'Dzmitry Maksimuk | Full-Stack',
      availableForWork: 'Dostępny do pracy',
      intro: 'Cześć, jestem Dima Maksimuk',
      iam: 'Jestem',
      roles: ['backend developerem', 'full stack developerem'],
      description:
        'Inżynier oprogramowania, skupiony na niezawodnych i skalowalnych aplikacjach webowych. Pomagam zespołom dostarczać czytelne systemy backendowe oraz praktyczne rozwiązania full-stack.',
      ctaTalk: 'Porozmawiajmy',
      ctaResume: 'CV',
    },
    skills: {
      title: 'Moje umiejętności w praktyce.',
      subtitle:
        'Technologie, z którymi pracuję na co dzień — od bazy danych po przeglądarkę.',
      pageTitle: 'Umiejętności',
    },
    experience: {
      title: 'Doświadczenie',
      subtitle: 'Tutaj dodasz oś czasu swojego doświadczenia zawodowego.',
      emptyState:
        'Brak wpisów o doświadczeniu. Dodaj dane w bazie, aby pokazać oś czasu.',
    },
    contact: {
      pageTitle: 'Kontakt',
      title: 'Współpracujmy',
      subtitle:
        'Masz pomysł, rolę lub projekt? Napisz do mnie — wkrótce odpowiem.',
      name: 'Imię',
      email: 'E-mail',
      message: 'Wiadomość',
      sending: 'Wysyłanie...',
      sendMessage: 'Wyślij wiadomość',
      contactInformation: 'Dane kontaktowe',
      directCommunication:
        'Wolisz bezpośredni kontakt? Skorzystaj z poniższych kanałów.',
      phone: 'Telefon',
      location: 'Lokalizacja',
      locationValue: 'Polska, Kraków',
      replyTime: 'Zwykle odpowiadam w ciągu 24 godzin.',
    },
    footer: {
      rightsReserved: 'Wszelkie prawa zastrzeżone.',
    },
    expertise: {
      pageTitle: 'Ekspertyza',
      title: 'Moja ekspertyza',
      subtitle:
        'Przegląd mojej wiedzy technicznej i kompetencji zawodowych.',
      technicalSkills: 'Umiejętności techniczne',
      professionalSkills: 'Umiejętności miękkie',
      categories: {
        frontend: 'Frontend',
        backend: 'Backend',
        devops: 'DevOps i chmura',
        db: 'Bazy danych',
      },
      noDescription: 'Brak opisu.',
      softSkills: [
        'Komunikacja',
        'Rozwiązywanie problemów',
        'Przywództwo',
        'Zarządzanie czasem',
        'Adaptacyjność',
        'Myślenie krytyczne',
        'Współpraca',
        'Mentoring',
        'Negocjacje',
        'Zarządzanie projektami',
        'Dbałość o szczegóły',
        'Samodyscyplina',
      ],
    },
    resume: {
      pageTitle: 'CV',
      title: 'CV',
      subtitle: 'Tutaj dodaj treść CV lub link do pobrania.',
      placeholder: 'Sekcja CV (placeholder).',
    },
  },
};

const LanguageContext = React.createContext({
  language: 'en',
  setLanguage: () => {},
  t: (key) => key,
});

function getValueByPath(obj, path) {
  return path.split('.').reduce((acc, part) => (acc && acc[part] !== undefined ? acc[part] : undefined), obj);
}

function getInitialLanguage() {
  if (typeof window === 'undefined') return 'en';
  const stored = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
  return stored && SUPPORTED_LANGUAGES[stored] ? stored : 'en';
}

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = React.useState(getInitialLanguage);

  const setLanguage = React.useCallback((nextLanguage) => {
    if (!SUPPORTED_LANGUAGES[nextLanguage]) return;
    setLanguageState(nextLanguage);
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, nextLanguage);
    }
  }, []);

  const t = React.useCallback(
    (key) => {
      const current = translations[language] ?? translations.en;
      const fallback = translations.en;
      return getValueByPath(current, key) ?? getValueByPath(fallback, key) ?? key;
    },
    [language],
  );

  const value = React.useMemo(() => ({ language, setLanguage, t }), [language, setLanguage, t]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  return React.useContext(LanguageContext);
}
