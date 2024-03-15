// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng: 'en',
    resources: {
      en: {
        translation: {
          swap: 'Swaps',
          alphabet: 'abcdefghijklmnopqrstuvwxyz',
          vowel:'aeiou'
        },
      },
      sr: {
        translation: {
          swap: 'گۆڕین',
          alphabet: 'ئاببپتجچحخددرڕزژسشعغفڤقکگلڵمنهەوۆیێ',
          vowel:'ایێۆو'
        },
      },
      kr: {
        translation: {
          swap: 'Gorîn',
          alphabet: 'mer',
        },
      },
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
