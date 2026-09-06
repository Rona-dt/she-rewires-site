"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { siteConfig } from "@/content/site-config"
import { localizeNavigation } from "@/content/localization"
import { useLocale } from "@/components/language-provider"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { locale, toggleLocale } = useLocale()
  const navigation = localizeNavigation(locale)

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-md-outline/30 bg-md-background/90 backdrop-blur-md">
      <div className="container py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="rounded-full px-3 py-2" onClick={() => setIsOpen(false)}>
            <Image
              src="/brand/she-rewires-logo-black-cropped-provisional.png"
              alt={`${siteConfig.name} / ${siteConfig.zhName}`}
              width={128}
              height={58}
              priority
              className="h-auto w-28 sm:w-32"
            />
          </Link>

          <div className="hidden items-center gap-4 lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-2 text-sm font-medium text-md-onSurface transition-all duration-300 ease-md hover:bg-md-primary/10 hover:text-md-primary"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={toggleLocale} aria-label={locale === "en" ? "切换到中文" : "切换到英文"}>
              {locale === "en" ? "中文" : "EN"}
            </Button>
            <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle navigation" aria-expanded={isOpen} aria-controls="mobile-navigation">
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {isOpen && (
          <div id="mobile-navigation" className="mt-4 rounded-3xl bg-md-surface p-4 lg:hidden">
            <div className="flex flex-col gap-2">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-xl px-3 py-2 font-medium text-md-onSurface hover:bg-md-primary/10"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
