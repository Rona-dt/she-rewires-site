"use client"

import Link from "next/link"
import { Instagram, Linkedin, Mail, MessageCircle, Podcast, Twitter, Youtube } from "lucide-react"
import { mainNavigation, siteConfig, socialLinks } from "@/content/site-config"

const iconByLabel = {
  LinkedIn: Linkedin,
  Instagram,
  YouTube: Youtube,
  X: Twitter,
  Podcast,
}

export function Footer() {
  return (
    <footer className="border-t border-md-outline/30 bg-md-surface py-12">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="mb-4 leading-tight">
              <p className="text-xs uppercase tracking-[0.16em] text-md-primary">{siteConfig.name}</p>
              <p className="text-2xl font-semibold text-md-onSurface">{siteConfig.zhName}</p>
            </div>
            <p className="mb-4 text-sm leading-relaxed text-md-onSurfaceVariant">{siteConfig.description}</p>
            <a href={`mailto:${siteConfig.contactEmail}`} className="inline-flex items-center gap-2 text-sm text-md-primary hover:underline">
              <Mail className="h-4 w-4" /> {siteConfig.contactEmail}
            </a>
            <p className="mt-2 text-sm text-md-onSurfaceVariant">WeChat: {siteConfig.wechat}</p>
          </div>

          <div>
            <h4 className="mb-4 font-medium text-md-onSurface">Navigation</h4>
            <div className="grid grid-cols-2 gap-2">
              {mainNavigation.map((item) => (
                <Link key={item.href} href={item.href} className="rounded-full px-2 py-1 text-sm text-md-onSurfaceVariant hover:bg-md-primary/10 hover:text-md-primary">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-medium text-md-onSurface">Community</h4>
            <div className="mb-4 flex flex-wrap gap-3">
              {socialLinks.map((item) => {
                const Icon = iconByLabel[item.label as keyof typeof iconByLabel] ?? MessageCircle
                return (
                  <a key={item.label} href={item.href} target="_blank" rel="noreferrer" aria-label={item.label} className="flex h-10 w-10 items-center justify-center rounded-full bg-md-background text-md-onSurfaceVariant transition-all duration-300 ease-md hover:bg-md-primary/10 hover:text-md-primary">
                    <Icon className="h-5 w-5" />
                  </a>
                )
              })}
              <span aria-label="WeChat" className="flex h-10 w-10 items-center justify-center rounded-full bg-md-background text-md-onSurfaceVariant">
                <MessageCircle className="h-5 w-5" />
              </span>
            </div>
            <p className="text-sm text-md-onSurfaceVariant">Build with us across China, Singapore, India, the UK, and future chapters.</p>
          </div>
        </div>
        <div className="mt-8 border-t border-md-outline/20 pt-6 text-center text-sm text-md-onSurfaceVariant">
          <p>© 2026 She Rewires. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
