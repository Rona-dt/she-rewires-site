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
    { href: "/news", key: "nav.news" },
    { href: "/contact", key: "nav.contact" },
  ]

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-bold text-xl mb-4">SHE REWIRES 她原力</h3>
            <p className="text-gray-400 mb-4">{t("footer.description")}</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <div className="grid grid-cols-2 gap-2">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="text-gray-400 hover:text-white transition-colors">
                  {t(item.key)}
                </Link>
              ))}
            </div>
          </div>

          {/* Language & Contact */}
          <div>
            <h4 className="font-semibold mb-4">Language</h4>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setLanguage(language === "en" ? "zh" : "en")}
              className="border-gray-600 text-gray-300 hover:bg-gray-800 mb-4"
            >
              {language === "en" ? "中文" : "EN"}
            </Button>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>{t("footer.rights")}</p>
        </div>
      </div>
    </footer>
  )
}
