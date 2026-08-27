"use client"

import { HeroSection } from "@/components/sections/hero-section"
import { ContentSection } from "@/components/sections/content-section"
import { ProjectCard } from "@/components/sections/project-card"
import { CTASection } from "@/components/sections/cta-section"
import { buildPage } from "@/content/pages/platform"
import { projects } from "@/content/projects"
import { localizePage, localizeProjects, localizeText } from "@/content/localization"
import { useLocale } from "@/components/language-provider"

export default function BuildPage() {
  const { locale } = useLocale()
  const page = localizePage(buildPage, locale)
  return (
    <div className="bg-md-background">
      <HeroSection hero={page.hero} />
      {page.sections.map((section) => <ContentSection key={section.id} section={section} />)}
      <section className="py-14">
        <div className="container">
          <div className="mb-8 max-w-4xl">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-md-primary">{localizeText("What We Build", locale)}</p>
            <h2 className="mt-2 text-3xl font-semibold text-md-onSurface md:text-4xl">{localizeText("Co-building projects", locale)}</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {localizeProjects(locale).map((project) => <ProjectCard key={project.id} project={project} locale={locale} />)}
          </div>
        </div>
      </section>
      <CTASection title={localizeText("Open opportunities", locale)} description={localizeText("We are looking for co-builders, partners, contributors, speakers, researchers, and sponsors.", locale)} href="/join-us" label={localizeText("Find Your Path", locale)} />
    </div>
  )
}
