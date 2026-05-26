import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { SpanishLanguage } from './utils/i18n/locales/ES/ES';
import { EnglishLanguage } from './utils/i18n/locales/EN/EN';

const resources = {
  en: {
    translation: EnglishLanguage,
  },
  es: {
    translation: SpanishLanguage,
  },
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: 'es',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
