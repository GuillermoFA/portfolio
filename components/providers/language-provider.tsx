"use client"

import { createContext, useContext, useEffect, useState } from "react"
import { translations, type Lang } from "@/lib/i18n"

type LanguageContextType = {
  lang: Lang
  setLang: (lang: Lang) => void
  t: (typeof translations)[Lang]
}

const LanguageContext = createContext<LanguageContextType | null>(null)

const STORAGE_KEY = "gf-lang"

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("es")

  useEffect(() => {
    const stored = (typeof window !== "undefined" && localStorage.getItem(STORAGE_KEY)) as Lang | null
    if (stored && ["es", "en", "pt"].includes(stored)) {
      setLangState(stored)
    }
  }, [])

  const setLang = (next: Lang) => {
    setLangState(next)
    if (typeof window !== "undefined") localStorage.setItem(STORAGE_KEY, next)
    document.documentElement.lang = next
  }

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider")
  return ctx
}
