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
  const { language, setLanguage, t } = useLanguage()

  const [aboutOpen, setAboutOpen] = useState(false)

  const navItems = [
    {
      href: "/about",
      key: "nav.about",
      hasDropdown: true,
      dropdownItems: [
        { href: "/about", label: language === "en" ? "About Us" : "关于我们" },
        { href: "/team-portrait", label: language === "en" ? "Team Portrait 2026" : "2026团队画像" },
      ],
    },
    {
      href: "/events",
      key: "nav.events",
      hasDropdown: true,
      dropdownItems: [
        { href: "/events", label: language === "en" ? "All Events" : "所有活动" },
        { href: "/events/awards", label: language === "en" ? "Awards" : "奖项" },
      ],
    },
    { href: "/get-involved", key: "nav.getInvolved" },
    { href: "/media", key: "nav.media" },
    { href: "/contact", key: "nav.contact" },
  ]

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image 
              src="/logo-on-white.jpg" 
              alt="She Rewires 她原力" 
              width={180} 
              height={60} 
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) =>
              item.hasDropdown ? (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => item.key === "nav.about" ? setAboutOpen(true) : setEventsOpen(true)}
                  onMouseLeave={() => item.key === "nav.about" ? setAboutOpen(false) : setEventsOpen(false)}
                >
                  <button className="flex items-center text-black hover:text-purple-500 transition-colors font-medium">
                    {t(item.key)}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  {((item.key === "nav.about" && aboutOpen) || (item.key === "nav.events" && eventsOpen)) && (
                    <div className="absolute top-full left-0 mt-1 bg-white rounded-lg shadow-lg border border-gray-200 py-2 min-w-[180px]">
                      {item.dropdownItems?.map((dropItem) => (
                        <Link
                          key={dropItem.href}
                          href={dropItem.href}
                          className="block px-4 py-2 text-black hover:bg-purple-50 hover:text-purple-500 transition-colors"
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
                  className="text-black hover:text-purple-500 transition-colors font-medium"
                >
                  {t(item.key)}
                </Link>
              )
            )}
          </div>

          {/* Language Switch & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setLanguage(language === "en" ? "zh" : "en")}
              className="border-purple-500 text-black hover:bg-purple-500 hover:text-white hover:border-purple-500"
            >
              {language === "en" ? "中文" : "EN"}
            </Button>

            {/* Mobile Menu Button */}
            <Button variant="ghost" size="sm" className="lg:hidden text-black" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4 pt-4">
              {navItems.map((item) =>
                item.hasDropdown ? (
                  <div key={item.href}>
                    <Link
                      href={item.href}
                      className="text-black hover:text-purple-500 transition-colors font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      {t(item.key)}
                    </Link>
                    <div className="ml-4 mt-2 space-y-2">
                      {item.dropdownItems?.map((dropItem) => (
                        <Link
                          key={dropItem.href}
                          href={dropItem.href}
                          className="block text-sm text-gray-600 hover:text-purple-500 transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {dropItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-black hover:text-purple-500 transition-colors font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {t(item.key)}
                  </Link>
                )
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
