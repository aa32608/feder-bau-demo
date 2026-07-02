import { createContext, useContext, useState, useEffect } from 'react'
import { languages } from '../translations'

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('fb_lang') || 'sq'
  })

  useEffect(() => {
    localStorage.setItem('fb_lang', language)
    document.documentElement.lang = language
  }, [language])

  const t = languages[language]

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLanguage() {
  return useContext(LanguageContext)
}
