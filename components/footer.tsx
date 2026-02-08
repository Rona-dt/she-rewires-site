"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Twitter, Instagram, Linkedin, MessageCircle } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function Footer() {
  const { language, setLanguage, t } = useLanguage()

  const navItems = [
    { href: "/about", key: "nav.about" },
    { href: "/actions", key: "nav.actions" },
    { href: "/events", key: "nav.events" },
    { href: "/get-involved", key: "nav.getInvolved" },
    { href: "/media", key: "nav.media" },
    { href: "/contact", key: "nav.contact" },
  ]

  return (
    <footer className="bg-[#303030] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="mb-2">
              <span className="text-sm text-[#E6E6E6]/70">她原力</span>
            </div>
            <h3 className="font-bold text-xl mb-4">She Rewires</h3>
            <p className="text-[#E6E6E6]/70 mb-4">{t("footer.description")}</p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-[#E6E6E6]/60 hover:text-[#BFFE01] transition-colors"
                aria-label="WeChat"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-[#E6E6E6]/60 hover:text-[#BFFE01] transition-colors"
                aria-label="Twitter/X"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-[#E6E6E6]/60 hover:text-[#BFFE01] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-[#E6E6E6]/60 hover:text-[#BFFE01] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4 text-[#E6E6E6]">
              {language === "en" ? "Navigation" : "导航"}
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-[#E6E6E6]/70 hover:text-[#BFFE01] transition-colors"
                >
                  {t(item.key)}
                </Link>
              ))}
            </div>
          </div>

          {/* Language & Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-[#E6E6E6]">
              {language === "en" ? "Language" : "语言"}
            </h4>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setLanguage(language === "en" ? "zh" : "en")}
              className="border-[#8A55ED] text-[#E6E6E6] hover:bg-[#8A55ED] hover:text-white mb-4"
            >
              {language === "en" ? "中文" : "EN"}
            </Button>
          </div>
        </div>

        <div className="border-t border-[#E6E6E6]/20 mt-8 pt-8 text-center text-[#E6E6E6]/50">
          <p>{t("footer.rights")}</p>
        </div>
      </div>
    </footer>
  )
}
