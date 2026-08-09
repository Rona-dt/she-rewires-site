"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { mainNavigation, siteConfig } from "@/content/site-config"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-md-outline/30 bg-md-background/90 backdrop-blur-md">
      <div className="container py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="rounded-full px-3 py-2" onClick={() => setIsOpen(false)}>
            <div className="leading-tight">
              <p className="text-xs uppercase tracking-[0.16em] text-md-primary">{siteConfig.name}</p>
              <p className="text-lg font-semibold text-md-onSurface">{siteConfig.zhName}</p>
            </div>
          </Link>

          <div className="hidden items-center gap-4 lg:flex">
            {mainNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-2 text-sm font-medium text-md-onSurface transition-all duration-300 ease-md hover:bg-md-primary/10 hover:text-md-primary"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle navigation">
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {isOpen && (
          <div className="mt-4 rounded-3xl bg-md-surface p-4 lg:hidden">
            <div className="flex flex-col gap-2">
              {mainNavigation.map((item) => (
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
