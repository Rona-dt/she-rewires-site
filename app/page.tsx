"use client"

import { HeroSection } from "@/components/sections/hero-section"
import { StatsBand } from "@/components/sections/stats-band"
import { ContentSection } from "@/components/sections/content-section"
import { CTASection } from "@/components/sections/cta-section"
import { ProjectCard } from "@/components/sections/project-card"
import { StoryCard } from "@/components/sections/story-card"
import { homePage } from "@/content/pages/platform"
import { localizePage, localizeProjects, localizeStats, localizeStories, localizeText } from "@/content/localization"
import { useLocale } from "@/components/language-provider"

export default function HomePage() {
  const { locale } = useLocale()
  const page = localizePage(homePage, locale)
  const projects = localizeProjects(locale)
  const stories = localizeStories(locale)
  const sections = Object.fromEntries(page.sections.map((section) => [section.id, section]))

  return (
    <div className="bg-md-background">
      <HeroSection hero={page.hero} align="center" />
      {sections.why && <ContentSection section={sections.why} />}
      {sections.evolution && <ContentSection section={sections.evolution} />}
      {sections["co-building"] && <ContentSection section={sections["co-building"]} />}
      <StatsBand stats={localizeStats(locale)} />
      {sections.people && <ContentSection section={sections.people} />}

      <section className="py-14">
        <div className="container">
          <div className="mb-8 max-w-4xl">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-md-primary">{localizeText("What We Build", locale)}</p>
            <h2 className="mt-2 text-3xl font-semibold text-md-onSurface md:text-4xl">{localizeText("Active ecosystem initiatives", locale)}</h2>
            <p className="mt-4 text-md-onSurfaceVariant">{localizeText("Selected projects that turn shared purpose into meaningful action.", locale)}</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {projects.slice(0, 4).map((project) => <ProjectCard key={project.id} project={project} locale={locale} />)}
          </div>
        </div>
      </section>

      {sections.partners && <ContentSection section={sections.partners} />}

      <section className="py-14">
        <div className="container">
          <div className="mb-8 max-w-4xl">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-md-primary">{localizeText("Stories", locale)}</p>
            <h2 className="mt-2 text-3xl font-semibold text-md-onSurface md:text-4xl">{localizeText("Proof from the ecosystem", locale)}</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {stories.map((story) => <StoryCard key={story.id} story={story} locale={locale} />)}
          </div>
        </div>
      </section>

      <CTASection title={localizeText("Find your way to build with us", locale)} description={localizeText("Enter as a co-builder, chapter builder, partner, contributor, or ecosystem supporter.", locale)} href="/join-us" label={localizeText("Join Us", locale)} />
    </div>
  )
}
