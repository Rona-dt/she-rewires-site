"use client"

import { HeroSection } from "@/components/sections/hero-section"
import { ContentSection } from "@/components/sections/content-section"
import { StoryCard } from "@/components/sections/story-card"
import { CTASection } from "@/components/sections/cta-section"
import { storiesPage } from "@/content/pages/platform"
import { stories } from "@/content/stories"
import { localizePage, localizeStories, localizeText } from "@/content/localization"
import { useLocale } from "@/components/language-provider"

export default function StoriesPage() {
  const { locale } = useLocale()
  const page = localizePage(storiesPage, locale)
  return (
    <div className="bg-md-background">
      <HeroSection hero={page.hero} />
      {page.sections.map((section) => <ContentSection key={section.id} section={section} />)}
      <section className="py-14">
        <div className="container">
          <div className="mb-8 max-w-4xl">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-md-primary">{localizeText("Stories", locale)}</p>
            <h2 className="mt-2 text-3xl font-semibold text-md-onSurface md:text-4xl">{localizeText("Stories from the ecosystem", locale)}</h2>
            <p className="mt-4 text-md-onSurfaceVariant">{localizeText("Explore stories from people, projects, conversations, and the wider ecosystem.", locale)}</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {localizeStories(locale).map((story) => <StoryCard key={story.id} story={story} locale={locale} />)}
          </div>
        </div>
      </section>
      <CTASection title={localizeText("Have a story to contribute?", locale)} description={localizeText("Share a people story, project story, conversation, or ecosystem learning with She Rewires.", locale)} href="/join-us" label={localizeText("Share Your Expertise", locale)} />
    </div>
  )
}
