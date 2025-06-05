import en from '../assets/translation/en.json'
import he from '../assets/translation/he.json'
import fr from '../assets/translation/fr.json'

type Languages = 'en' | 'he' | 'fr'

const translation: Record<Languages, Record<string, string>> = {
    en,
    he,
    fr
}

let currentLang: Languages = 'en'

export const setLanguage = (lang: Languages) => {
    currentLang = lang
}

export const getLanguage = (): Languages => currentLang

export const t = (key: string): string => {
    return translation[currentLang][key] || key
}