import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './locales/en.json'
import fa from './locales/fa.json'

const STORAGE_KEY = 'portfolio-lang'

export type AppLanguage = 'en' | 'fa'

function getInitialLanguage(): AppLanguage {
  const saved = localStorage.getItem(STORAGE_KEY)
  if (saved === 'en' || saved === 'fa') return saved
  return 'en'
}

export function applyDocumentLanguage(lng: AppLanguage) {
  const dir = lng === 'fa' ? 'rtl' : 'ltr'
  document.documentElement.lang = lng
  document.documentElement.dir = dir
  localStorage.setItem(STORAGE_KEY, lng)
}

void i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    fa: { translation: fa },
  },
  lng: getInitialLanguage(),
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
})

applyDocumentLanguage(i18n.language as AppLanguage)

i18n.on('languageChanged', (lng) => {
  applyDocumentLanguage(lng as AppLanguage)
})

export default i18n
