"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "en" | "zh"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  en: {
    // Navigation
    "nav.about": "About Us",
    "nav.actions": "Our Actions",
    "nav.events": "Events",
    "nav.getInvolved": "Get Involved",
    "nav.news": "News",
    "nav.contact": "Contact",

    // Home page
    "hero.title": "SHE REWIRES",
    "hero.subtitle": "她原力",
    "hero.description":
      "SHE REWIRES focuses on the development of women in science, technology, engineering, art, and mathematics (STEAM).",
    "hero.cta": "Join Us",

    // About
    "about.title": "About Us",
    "about.mission.title": "Our Mission",
    "about.mission.content":
      "SHE REWIRES is committed to igniting and reshaping women's passion and development for STEAM, representing a vibrant new image of Chinese women in technology.",
    "about.vision.title": "Our Vision",
    "about.vision.content":
      "Shaping the future of STEAM for all, envisioning a more inclusive, diverse, and innovative future.",

    // Impact
    "impact.title": "Our Global Impact",
    "impact.members": "Global Members",
    "impact.builders": "Co-builders",
    "impact.cities": "Cities Network",

    // Get Involved
    "getInvolved.title": "Get Involved",
    "getInvolved.description": "Join our community and help shape the future of women in STEAM.",
    "getInvolved.member": "Become a Member",
    "getInvolved.volunteer": "Volunteer",

    // Footer
    "footer.description": "Empowering women in STEAM across China and beyond.",
    "footer.rights": "© 2025 SHE REWIRES 她原力. All rights reserved.",

    // Events
    "events.title": "Events",
    "events.upcoming": "Upcoming Events",
    "events.past": "Past Events",

    // News
    "news.title": "Latest News",

    // Contact
    "contact.title": "Contact Us",
    "contact.form.name": "Name",
    "contact.form.email": "Email",
    "contact.form.message": "Message",
    "contact.form.submit": "Send Message",
  },
  zh: {
    // Navigation
    "nav.about": "关于我们",
    "nav.actions": "我们的行动",
    "nav.events": "活动",
    "nav.getInvolved": "参与我们",
    "nav.news": "新闻",
    "nav.contact": "联系我们",

    // Home page
    "hero.title": "她原力",
    "hero.subtitle": "SHE REWIRES",
    "hero.description": "她原力聚焦于女性在科学、技术、工程、艺术和数学（STEAM）领域的发展。",
    "hero.cta": "加入我们",

    // About
    "about.title": "关于我们",
    "about.mission.title": "我们的使命",
    "about.mission.content":
      "我们致力于点燃和重塑女性对于 STEAM 的热爱和发展，展现一种全新而充满活力的中国科技女性新形象。",
    "about.vision.title": "我们的愿景",
    "about.vision.content": "为所有人塑造可持续的 STEAM 未来，共建更具包容性、多样性和创新性的未来。",

    // Impact
    "impact.title": "我们的全球影响力",
    "impact.members": "全球会员",
    "impact.builders": "共建者",
    "impact.cities": "城市网络",

    // Get Involved
    "getInvolved.title": "参与我们",
    "getInvolved.description": "加入我们的社区，帮助塑造女性在 STEAM 领域的未来。",
    "getInvolved.member": "成为会员",
    "getInvolved.volunteer": "志愿者招募",

    // Footer
    "footer.description": "赋能中国及全球女性在 STEAM 领域的发展。",
    "footer.rights": "© 2024 SHE REWIRES 她原力. 保留所有权利。",

    // Events
    "events.title": "活动",
    "events.upcoming": "即将举行",
    "events.past": "往期活动",

    // News
    "news.title": "最新资讯",

    // Contact
    "contact.title": "联系我们",
    "contact.form.name": "姓名",
    "contact.form.email": "邮箱",
    "contact.form.message": "留言",
    "contact.form.submit": "发送消息",
  },
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
