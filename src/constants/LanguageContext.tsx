import { createContext, useContext, useState, ReactNode } from 'react'
import { setLanguage as setLangUtil, getLanguage as getLangUtil, t as translate } from '../utils/translation'

type Language = 'en' | 'fr' | 'he'

interface LanguageContextType {
    language: Language
    setLanguage: (lang: Language) => void
    t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguageState] = useState<Language>(getLangUtil())

    const setLanguage = (lang: Language) => {
        setLangUtil(lang)
        setLanguageState(lang)
    }

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t: translate }}>
            {children}
        </LanguageContext.Provider>
    )
}

export const useLanguage = () => {
    const context = useContext(LanguageContext)
    if (!context) throw new Error('useLanguage must be used within a LanguageProvider')
    return context
}