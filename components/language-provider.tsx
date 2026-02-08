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
    "nav.team": "Team 2026",
    "nav.actions": "Our Actions",
    "nav.events": "Events",
    "nav.getInvolved": "Get Involved",
    "nav.media": "Media",
    "nav.awards": "Awards",
    "nav.contact": "Contact",

    // Home page
    "hero.title": "She Rewires",
    "hero.subtitle": "她原力",
    "hero.description":
      "She Rewires ignites women's potential to rewire their mindset, drive innovation, and lead in STEAM and entrepreneurship worldwide",
    "hero.cta": "Join Us",

    // About preview on homepage
    "about.preview":
      "She Rewires is a global, women-led innovation ecosystem empowering women in STEAM and entrepreneurship. Through co-building systems, nurturing super individuals, enabling ESG-driven corporate impact, and fostering cross-border collaborations, we transform careers, creativity, and communities worldwide",

    // About page
    "about.title": "About Us",
    "about.one.sentence":
      "She Rewires ignites women's potential to rewire their mindset, drive innovation, and lead in STEAM and entrepreneurship worldwide",
    "about.full.content":
      "She Rewires empowers women to transform their careers, creativity, and communities through technology, collaboration, and bold experimentation, with a global presence spanning Singapore and Europe. Founded in 2017, we set out to inspire women and girls to pursue their dreams in technology and innovation, ignite their passion for STEAM fields, and build a vibrant community supporting growth, leadership, and lasting impact. Today, we are evolving into a women-led open innovation ecosystem focused on co-creating meaningful impact.",
    "about.pillars.intro":
      "She Rewires champions the development of women across science, technology, engineering, arts, and mathematics (STEAM) and drives change through four key pillars:",
    "about.pillar1.title": "Co-Rewiring Systems",
    "about.pillar1.desc":
      "Collaborating with community co-builders to innovate and design new solutions together.",
    "about.pillar2.title": "ESG Marketing",
    "about.pillar2.desc":
      "Helping organizations align impact with business growth through purpose-driven strategies.",
    "about.pillar3.title": "Super Individual Incubation",
    "about.pillar3.desc":
      "Nurturing women to become leaders and innovators in their fields.",
    "about.pillar4.title": "Cross-Border Collaboration",
    "about.pillar4.desc":
      "Connecting global talent and organizations to co-create international opportunities.",
    "about.global.impact": "Our Global Impact",
    "about.regions": "3+ Regions",
    "about.regions.desc": "East Asia, South-East Asia, Europe",
    "about.countries": "China, Singapore, Germany, UK",

    // Impact
    "impact.title": "Our Global Impact",
    "impact.members": "Global Members",
    "impact.builders": "Co-builders",
    "impact.cities": "Cities Network",
    "impact.regions": "Regions",

    // Get Involved
    "getInvolved.title": "Get Involved",
    "getInvolved.description":
      "Join She Rewires and become a co-builder of change—ignite your potential, collaborate across borders, and help shape a future where women lead, innovate, and thrive",
    "getInvolved.member": "Join Us",
    "getInvolved.volunteer": "Co-Builder",
    "getInvolved.cta.title": "Your Ideas. Your Impact. Your Community",
    "getInvolved.cta.desc":
      "Be part of a global community of women in STEAM, driving projects, building solutions, and owning the change you want to see",

    // Roles
    "role.cobuilder": "Co-Builder",
    "role.cobuilder.scope":
      "Bring your skills—remotely or on-site—to co-create projects, solve challenges, and contribute to She Rewires' innovation ecosystem.",
    "role.cobuilder.benefits":
      "Hands-on experience, portfolio-worthy projects, mentorship from experts, and recognition for your contributions.",
    "role.incubator": "Project Incubator",
    "role.incubator.scope":
      "Lead or support initiatives from ideation to impact, turning bold ideas into real-world solutions.",
    "role.incubator.benefits":
      "Project leadership experience, exposure to cross-disciplinary collaboration, skill growth, and a chance to create measurable impact.",
    "role.catalyst": "Local Catalyst",
    "role.catalyst.scope":
      "Ignite the She Rewires movement in your city by initiating projects, hosting meetups, and connecting co-builders.",
    "role.catalyst.benefits":
      "Leadership experience, a supportive community, skill-building opportunities, and visibility as a local changemaker.",
    "role.partner": "Partner with Us",
    "role.partner.scope":
      "Collaborate as a mission-driven organization, corporate ally, or sponsor to co-create projects and amplify impact.",
    "role.partner.benefits":
      "Access to a global women-led innovation ecosystem, opportunities to co-build meaningful projects, and alignment with purpose-driven initiatives that drive business and social impact.",

    // Form
    "form.name": "Name",
    "form.city": "City",
    "form.email": "Email",
    "form.roles": "Select Roles",
    "form.linkedin": "LinkedIn / Social Media",
    "form.upload": "Upload Introduction / Project / Others",
    "form.submit": "Join Us",

    // Footer
    "footer.description":
      "A global, women-led innovation ecosystem empowering women in STEAM and entrepreneurship.",
    "footer.rights": "© 2024 She Rewires 她原力. All rights reserved.",

    // Events
    "events.title": "Events",
    "events.upcoming": "Upcoming Events",
    "events.past": "Past Events",

    // Media (renamed from News)
    "media.title": "Media",
    "media.subtitle": "Interviews and media coverage from our community",

    // Contact
    "contact.title": "Contact Us",
    "contact.form.name": "Name",
    "contact.form.email": "Email",
    "contact.form.message": "Message",
    "contact.form.submit": "Send Message",

    // Awards
    "awards.title": "Awards",
  },
  zh: {
    // Navigation
    "nav.about": "关于我们",
    "nav.team": "2026团队",
    "nav.actions": "我们的行动",
    "nav.events": "活动",
    "nav.getInvolved": "参与我们",
    "nav.media": "媒体",
    "nav.awards": "奖项",
    "nav.contact": "联系我们",

    // Home page
    "hero.title": "她原力",
    "hero.subtitle": "She Rewires",
    "hero.description":
      "She Rewires 点燃女性潜能，重塑思维模式，推动创新，引领全球 STEAM 和创业领域",
    "hero.cta": "加入我们",

    // About preview on homepage
    "about.preview":
      "She Rewires 是一个全球性的、由女性主导的创新生态系统，赋能 STEAM 和创业领域的女性。通过共建系统、培育超级个体、推动 ESG 驱动的企业影响力，以及促进跨境合作，我们在全球范围内改变职业、创造力和社区",

    // About page
    "about.title": "关于我们",
    "about.one.sentence":
      "She Rewires 点燃女性潜能，重塑思维模式，推动创新，引领全球 STEAM 和创业领域",
    "about.full.content":
      "She Rewires 通过技术、协作和大胆的实验，赋能女性改变她们的职业、创造力和社区，业务覆盖新加坡和欧洲。自2017年成立以来，我们致力于激励女性和女孩追寻科技与创新的梦想，点燃她们对 STEAM 领域的热情，并建立一个充满活力的社区来支持她们的成长、领导力和持久影响力。如今，我们正在发展成为一个由女性主导的开放式创新生态系统，专注于共同创造有意义的影响。",
    "about.pillars.intro":
      "She Rewires 倡导女性在科学、技术、工程、艺术和数学（STEAM）领域的发展，并通过四大支柱推动变革：",
    "about.pillar1.title": "共建系统",
    "about.pillar1.desc": "与社区共建者合作，共同创新和设计新的解决方案。",
    "about.pillar2.title": "ESG 营销",
    "about.pillar2.desc": "帮助组织通过目标驱动的战略，将影响力与业务增长相结合。",
    "about.pillar3.title": "超级个体孵化",
    "about.pillar3.desc": "培育女性成为各自领域的领导者和创新者。",
    "about.pillar4.title": "跨境协作",
    "about.pillar4.desc": "连接全球人才和组织，共同创造国际机会。",
    "about.global.impact": "我们的全球影响力",
    "about.regions": "3+ 个区域",
    "about.regions.desc": "东亚、东南亚、欧洲",
    "about.countries": "中国、新加坡、德国、英国",

    // Impact
    "impact.title": "我们的全球影响力",
    "impact.members": "全球会员",
    "impact.builders": "共建者",
    "impact.cities": "城市网络",
    "impact.regions": "区域",

    // Get Involved
    "getInvolved.title": "参与我们",
    "getInvolved.description":
      "加入 She Rewires，成为变革的共建者——点燃你的潜能，跨境协作，帮助塑造一个由女性领导、创新和蓬勃发展的未来",
    "getInvolved.member": "加入我们",
    "getInvolved.volunteer": "共建者",
    "getInvolved.cta.title": "你的想法。你的影响。你的社区。",
    "getInvolved.cta.desc":
      "成为全球 STEAM 女性社区的一员，推动项目、构建解决方案，掌握你想要看到的变革",

    // Roles
    "role.cobuilder": "共建者",
    "role.cobuilder.scope":
      "带来你的技能——远程或现场——共同创建项目、解决挑战，并为 She Rewires 的创新生态系统做出贡献。",
    "role.cobuilder.benefits":
      "实践经验、值得放入作品集的项目、专家指导，以及对你贡献的认可。",
    "role.incubator": "项目孵化器",
    "role.incubator.scope":
      "从构思到影响力，领导或支持倡议，将大胆的想法转化为现实世界的解决方案。",
    "role.incubator.benefits":
      "项目领导经验、跨学科协作机会、技能成长，以及创造可衡量影响的机会。",
    "role.catalyst": "本地催化剂",
    "role.catalyst.scope":
      "通过发起项目、举办聚会和连接共建者，在你的城市点燃 She Rewires 运动。",
    "role.catalyst.benefits":
      "领导力经验、支持性社区、技能培养机会，以及作为本地变革者的可见度。",
    "role.partner": "与我们合作",
    "role.partner.scope":
      "作为使命驱动的组织、企业盟友或赞助商合作，共同创建项目并扩大影响力。",
    "role.partner.benefits":
      "获得全球女性主导的创新生态系统、共建有意义项目的机会，以及与推动商业和社会影响的目标驱动倡议保持一致。",

    // Form
    "form.name": "姓名",
    "form.city": "城市",
    "form.email": "邮箱",
    "form.roles": "选择角色",
    "form.linkedin": "领英 / 社交媒体",
    "form.upload": "上传介绍 / 项目 / 其他",
    "form.submit": "加入我们",

    // Footer
    "footer.description":
      "一个全球性的、由女性主导的创新生态系统，赋能 STEAM 和创业领域的女性。",
    "footer.rights": "© 2024 She Rewires 她原力. 保留所有权利。",

    // Events
    "events.title": "活动",
    "events.upcoming": "即将举行",
    "events.past": "往期活动",

    // Media (renamed from News)
    "media.title": "媒体",
    "media.subtitle": "我们社区的采访和媒体报道",

    // Contact
    "contact.title": "联系我们",
    "contact.form.name": "姓名",
    "contact.form.email": "邮箱",
    "contact.form.message": "留言",
    "contact.form.submit": "发送消息",

    // Awards
    "awards.title": "奖项",
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
