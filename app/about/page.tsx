"use client"

import { HeroSection } from "@/components/sections/hero-section"
import { ContentSection } from "@/components/sections/content-section"
import { CTASection } from "@/components/sections/cta-section"
import { aboutPage } from "@/content/pages/platform"
import { localizePage, localizeText } from "@/content/localization"
import { useLocale } from "@/components/language-provider"

export default function AboutPage() {
  const { locale } = useLocale()
  const page = localizePage(aboutPage, locale)
  return (
    <div className="bg-md-background">
      <HeroSection hero={page.hero} />
      {page.sections.map((section) => <ContentSection key={section.id} section={section} />)}
      <CTASection title={localizeText("The next chapter is human agency", locale)} description={localizeText("Explore the people and ecosystem now building this platform across regions.", locale)} href="/community" label={localizeText("Meet the Collective", locale)} />
    </div>
  )
}
