import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'

import enTranslation from './en/translation.json'
import viTranslation from './vi/translation.json'

const resources = {
  en: {
    translation: enTranslation
  },
  vi: {
    translation: viTranslation
  }
}
i18next.use(initReactI18next).init({
  lng: 'vi',
  fallbackLng: 'vi',
  resources
})
