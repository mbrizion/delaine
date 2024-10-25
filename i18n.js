import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// Translation files
const resources = {
  en: {
    translation: {
      pottery: 'Pottery',
      crochet: 'Crochet',
      contact: 'Contact',
    },
  },
  fr: {
    translation: {
      pottery: 'Poterie',
      crochet: 'Crochet',
      contact: 'Contact',
    },
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'fr',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
