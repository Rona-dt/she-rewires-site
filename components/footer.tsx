"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Twitter, Instagram, Linkedin, MessageCircle, Mail } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function Footer() {
  const { language, setLanguage, t } = useLanguage()

  const navItems = [
    { href: "/about", key: "nav.about" },
    { href: "/events", key: "nav.events" },
    { href: "/get-involved", key: "nav.getInvolved" },
    { href: "/media", key: "nav.media" },
    { href: "/contact", key: "nav.contact" },
  ]

  return (
    <footer className="relative overflow-hidden border-t border-md-outline/30 bg-md-surface py-12">
      <div className="md-blob -left-20 bottom-0 h-40 w-40 bg-md-primary/20" aria-hidden="true" />
      <div className="container relative">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <Image src="/logo-on-white.jpg" alt="She Rewires 她原力" width={180} height={60} className="mb-4 h-11 w-auto" />
            <p className="mb-4 text-sm text-md-onSurfaceVariant">{t("footer.description")}</p>
            <a href="mailto:hello@sherewires.org" className="inline-flex items-center gap-2 text-sm text-md-primary hover:underline">
              <Mail className="h-4 w-4" /> hello@sherewires.org
            </a>
          </div>

          <div>
            <h4 className="mb-4 font-medium text-md-onSurface">{language === "en" ? "Navigation" : "导航"}</h4>
            <div className="grid grid-cols-2 gap-2">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="rounded-full px-2 py-1 text-sm text-md-onSurfaceVariant hover:bg-md-primary/10 hover:text-md-primary">
                  {t(item.key)}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-medium text-md-onSurface">{language === "en" ? "Community" : "社群"}</h4>
            <div className="mb-4 flex gap-3">
              {[MessageCircle, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <a key={index} href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-md-background text-md-onSurfaceVariant transition-all duration-300 ease-md hover:bg-md-primary/10 hover:text-md-primary">
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
            <Button variant="outline" size="sm" onClick={() => setLanguage(language === "en" ? "zh" : "en")}>
              {language === "en" ? "中文" : "EN"}
            </Button>
          </div>
        </div>
        <div className="mt-8 border-t border-md-outline/20 pt-6 text-center text-sm text-md-onSurfaceVariant">
          <p>{t("footer.rights")}</p>
        </div>
      </div>
    </footer>
  )
}
