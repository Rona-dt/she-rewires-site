export type Locale = "en" | "zh"

export interface LocalizedText {
  en: string
  zh: string
}

export interface LinkItem {
  label: string
  href: string
  external?: boolean
}

export interface HeroContent {
  eyebrow?: string
  title: string
  subtitle?: string
  body?: string
  primaryAction?: LinkItem
  secondaryAction?: LinkItem
}

export interface StatItem {
  value: string
  label: string
  description?: string
}

export interface PageSectionContent {
  id: string
  eyebrow?: string
  title: string
  description?: string
  items?: Array<{
    title: string
    description: string
    meta?: string
  }>
}

export interface PageContent {
  slug: string
  title: string
  description: string
  hero: HeroContent
  sections: PageSectionContent[]
}

export interface Person {
  id: string
  name: string
  role: string
  type: "co-builder" | "contributor" | "advisor" | "speaker"
  location?: string
  bio: string
  image?: string
  links?: LinkItem[]
}

export interface Chapter {
  id: string
  name: string
  region: string
  status: "active" | "forming" | "future"
  description: string
  focus: string[]
}

export interface Partner {
  id: string
  name: string
  category: "corporate" | "university" | "investor" | "foundation" | "ecosystem"
  description?: string
  logo?: string
  website?: string
}

export interface Project {
  id: string
  title: string
  category: "community" | "leadership" | "technology" | "culture" | "capital"
  status: "active" | "incubating" | "scaling" | "planned"
  description: string
  outcomes: string[]
  relatedPeople?: string[]
  relatedPartners?: string[]
}

export interface Story {
  id: string
  title: string
  type: "people" | "project" | "conversation" | "insight" | "media"
  excerpt: string
  date: string
  source?: string
  href?: string
  image?: string
  relatedProjects?: string[]
  relatedPeople?: string[]
}

export interface JoinPath {
  id: string
  title: string
  audience: string
  description: string
  actions: string[]
}
