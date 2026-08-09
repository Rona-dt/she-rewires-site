import type { LinkItem, StatItem } from "@/types/content"

export const siteConfig = {
  name: "She Rewires",
  zhName: "她原力",
  description: "A global human agency platform connecting people, ideas, and ecosystems to co-build what is next.",
  contactEmail: "cobuilder@sherewires.com",
  partnershipEmail: "partnerships@sherewires.com",
  wechat: "TANGTASTIC",
}

export const mainNavigation: LinkItem[] = [
  { label: "About", href: "/about" },
  { label: "Community", href: "/community" },
  { label: "Build", href: "/build" },
  { label: "Stories", href: "/stories" },
  { label: "Join Us", href: "/join-us" },
]

export const socialLinks: LinkItem[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/sherewires/posts/?feedView=all", external: true },
  { label: "Instagram", href: "https://www.instagram.com/sherewires/", external: true },
  { label: "YouTube", href: "https://www.youtube.com/@sherewiresdigital395", external: true },
  { label: "X", href: "https://x.com/sherewires", external: true },
  { label: "Podcast", href: "https://podcasts.apple.com/ca/podcast/she-rewires-digital/id1559104327", external: true },
]

export const platformStats: StatItem[] = [
  { value: "80,000+", label: "people", description: "A growing global movement" },
  { value: "150+", label: "co-builders", description: "People shaping initiatives from within" },
  { value: "16", label: "cities", description: "Local networks connected globally" },
  { value: "1", label: "global ecosystem", description: "Built through shared purpose" },
]
