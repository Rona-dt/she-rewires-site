"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  const navItems = [
    { href: "/about", key: "nav.about" },
    { href: "/events", key: "nav.events" },
    { href: "/get-involved", key: "nav.getInvolved" },
    { href: "/media", key: "nav.media" },
    { href: "/contact", key: "nav.contact" },
  ]

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-md-outline/30 bg-md-background/90 backdrop-blur-md">
      <div className="container py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="rounded-full px-3 py-2">
            <div className="leading-tight">
              <p className="text-xs uppercase tracking-[0.16em] text-md-primary">She Rewires</p>
              <p className="text-lg font-semibold text-md-onSurface">她原力</p>
            </div>
          </Link>

          <div className="hidden items-center gap-4 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-2 text-sm font-medium text-md-onSurface transition-all duration-300 ease-md hover:bg-md-primary/10 hover:text-md-primary"
              >
                {t(item.key)}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" onClick={() => setLanguage(language === "en" ? "zh" : "en")}>
              {language === "en" ? "中文" : "EN"}
            </Button>
            <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {isOpen && (
          <div className="mt-4 rounded-3xl bg-md-surface p-4 lg:hidden">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-xl px-3 py-2 font-medium text-md-onSurface hover:bg-md-primary/10"
                  onClick={() => setIsOpen(false)}
                >
                  {t(item.key)}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
