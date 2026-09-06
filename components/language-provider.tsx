"use client"

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react"
import type { Locale } from "@/types/content"

interface LanguageContextValue {
  locale: Locale
  setLocale: (locale: Locale) => void
  toggleLocale: () => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en")
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    const storedLocale = window.localStorage.getItem("she-rewires-locale")
    if (storedLocale === "en" || storedLocale === "zh") setLocale(storedLocale)
    setHydrated(true)
  }, [])

  useEffect(() => {
    if (!hydrated) return
    document.documentElement.lang = locale === "zh" ? "zh-CN" : "en"
    window.localStorage.setItem("she-rewires-locale", locale)
  }, [hydrated, locale])

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      toggleLocale: () => setLocale((current) => (current === "en" ? "zh" : "en")),
    }),
    [locale],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLocale() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error("useLocale must be used within LanguageProvider")
  return context
}
