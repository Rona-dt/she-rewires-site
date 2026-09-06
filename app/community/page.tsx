"use client"

import { HeroSection } from "@/components/sections/hero-section"
import { ContentSection } from "@/components/sections/content-section"
import { ChapterCard } from "@/components/sections/chapter-card"
import { PersonProfile } from "@/components/sections/person-profile"
import { PartnerLogoWall } from "@/components/sections/partner-logo-wall"
import { EcosystemDiagram } from "@/components/sections/ecosystem-diagram"
import { CTASection } from "@/components/sections/cta-section"
import { communityPage } from "@/content/pages/platform"
import { localizeChapters, localizePage, localizePartners, localizePeople, localizeText } from "@/content/localization"
import { useLocale } from "@/components/language-provider"

export default function CommunityPage() {
  const { locale } = useLocale()
  const page = localizePage(communityPage, locale)
  return (
    <div className="bg-md-background">
      <HeroSection hero={page.hero} />
      <section className="py-14">
        <div className="container">
            <EcosystemDiagram locale={locale} />
        </div>
      </section>
      {page.sections.slice(0, 1).map((section) => <ContentSection key={section.id} section={section} />)}
      <section className="py-14">
        <div className="container">
          <div className="mb-8 max-w-4xl">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-md-primary">{localizeText("Co-builders and Contributors", locale)}</p>
            <h2 className="mt-2 text-3xl font-semibold text-md-onSurface md:text-4xl">{localizeText("The people shaping the ecosystem", locale)}</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {localizePeople(locale).map((person) => <PersonProfile key={person.id} person={person} locale={locale} />)}
          </div>
        </div>
      </section>
      <section className="py-14">
        <div className="container">
          <div className="mb-8 max-w-4xl">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-md-primary">{localizeText("Global Chapters", locale)}</p>
            <h2 className="mt-2 text-3xl font-semibold text-md-onSurface md:text-4xl">{localizeText("Local communities, connected globally", locale)}</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {localizeChapters(locale).map((chapter) => <ChapterCard key={chapter.id} chapter={chapter} locale={locale} />)}
          </div>
        </div>
      </section>
      <section className="py-14">
        <div className="container">
          <div className="mb-8 max-w-4xl">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-md-primary">{localizeText("Ecosystem Partners", locale)}</p>
            <h2 className="mt-2 text-3xl font-semibold text-md-onSurface md:text-4xl">{localizeText("Partnership is co-creation", locale)}</h2>
          </div>
          <PartnerLogoWall partners={localizePartners(locale)} locale={locale} />
        </div>
      </section>
      <CTASection title={localizeText("Build inside the system", locale)} description={localizeText("See how resonance becomes projects, initiatives, chapters, and scalable collaborations.", locale)} href="/build" label={localizeText("Explore Build Model", locale)} />
    </div>
  )
}
