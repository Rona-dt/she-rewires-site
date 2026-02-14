"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [eventsOpen, setEventsOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  const navItems = [
    {
      href: "/about",
      key: "nav.about",
      hasDropdown: true,
      dropdownItems: [{ href: "/about", label: language === "en" ? "About Us" : "关于我们" }],
    },
    {
      href: "/events",
      key: "nav.events",
      hasDropdown: true,
      dropdownItems: [{ href: "/events", label: language === "en" ? "Events (LinkedIn Sync)" : "活动（LinkedIn同步）" }],
    },
    { href: "/get-involved", key: "nav.getInvolved" },
    { href: "/media", key: "nav.media" },
    { href: "/contact", key: "nav.contact" },
  ]

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-md-outline/30 bg-md-background/90 backdrop-blur-md">
      <div className="container py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <div className="h-14 w-[250px] overflow-hidden rounded-2xl bg-md-background/80">
              <Image
                src="/logo-on-white.jpg"
                alt="She Rewires 她原力"
                width={360}
                height={96}
                className="h-full w-full scale-125 object-cover object-center"
                priority
              />
            </div>
          </Link>

          <div className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) =>
              item.hasDropdown ? (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => (item.key === "nav.about" ? setAboutOpen(true) : setEventsOpen(true))}
                  onMouseLeave={() => (item.key === "nav.about" ? setAboutOpen(false) : setEventsOpen(false))}
                >
                  <button className="flex items-center rounded-full px-3 py-2 text-sm font-medium text-md-onSurface transition-all duration-300 ease-md hover:bg-md-primary/10 hover:text-md-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-md-primary">
                    {t(item.key)}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  {((item.key === "nav.about" && aboutOpen) || (item.key === "nav.events" && eventsOpen)) && (
                    <div className="absolute left-0 top-full mt-2 min-w-[220px] rounded-2xl border border-md-outline/20 bg-md-surface p-2 shadow-md">
                      {item.dropdownItems?.map((dropItem) => (
                        <Link
                          key={dropItem.href}
                          href={dropItem.href}
                          className="block rounded-xl px-3 py-2 text-sm text-md-onSurface transition-colors hover:bg-md-primary/10 hover:text-md-primary"
                        >
                          {dropItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-full px-3 py-2 text-sm font-medium text-md-onSurface transition-all duration-300 ease-md hover:bg-md-primary/10 hover:text-md-primary"
                >
                  {t(item.key)}
                </Link>
              )
            )}
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
              <Link
                href="/events"
                className="rounded-xl px-3 py-2 text-sm text-md-onSurfaceVariant hover:bg-md-primary/10"
                onClick={() => setIsOpen(false)}
              >
                {language === "en" ? "Events (LinkedIn Sync)" : "活动（LinkedIn同步）"}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
