import { HeroSection } from "@/components/sections/hero-section"
import { ContentSection } from "@/components/sections/content-section"
import { StoryCard } from "@/components/sections/story-card"
import { CTASection } from "@/components/sections/cta-section"
import { storiesPage } from "@/content/pages/platform"
import { stories } from "@/content/stories"

export default function StoriesPage() {
  return (
    <div className="bg-md-background">
      <HeroSection hero={storiesPage.hero} />
      {storiesPage.sections.map((section) => <ContentSection key={section.id} section={section} />)}
      <section className="py-14">
        <div className="container">
          <div className="mb-8 max-w-4xl">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-md-primary">Story Library</p>
            <h2 className="mt-2 text-3xl font-semibold text-md-onSurface md:text-4xl">CMS-ready story collection</h2>
            <p className="mt-4 text-md-onSurfaceVariant">This local collection can later migrate to Sanity as editable story documents.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {stories.map((story) => <StoryCard key={story.id} story={story} />)}
          </div>
        </div>
      </section>
      <CTASection title="Have a story to contribute?" description="Share a people story, project story, conversation, or ecosystem learning with She Rewires." href="/join-us" label="Share Your Expertise" />
    </div>
  )
}
