import { HeroSection } from "@/components/sections/hero-section"
import { StatsBand } from "@/components/sections/stats-band"
import { ContentSection } from "@/components/sections/content-section"
import { CTASection } from "@/components/sections/cta-section"
import { ProjectCard } from "@/components/sections/project-card"
import { StoryCard } from "@/components/sections/story-card"
import { homePage } from "@/content/pages/platform"
import { platformStats } from "@/content/site-config"
import { projects } from "@/content/projects"
import { stories } from "@/content/stories"

export default function HomePage() {
  return (
    <div className="bg-md-background">
      <HeroSection hero={homePage.hero} align="center" />
      <StatsBand stats={platformStats} />
      {homePage.sections.map((section) => <ContentSection key={section.id} section={section} />)}

      <section className="py-14">
        <div className="container">
          <div className="mb-8 max-w-4xl">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-md-primary">What We Build</p>
            <h2 className="mt-2 text-3xl font-semibold text-md-onSurface md:text-4xl">Active ecosystem initiatives</h2>
            <p className="mt-4 text-md-onSurfaceVariant">A first CMS-ready snapshot of projects that can later be managed by non-technical editors.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {projects.slice(0, 4).map((project) => <ProjectCard key={project.id} project={project} />)}
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="container">
          <div className="mb-8 max-w-4xl">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-md-primary">Stories</p>
            <h2 className="mt-2 text-3xl font-semibold text-md-onSurface md:text-4xl">Proof from the ecosystem</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {stories.map((story) => <StoryCard key={story.id} story={story} />)}
          </div>
        </div>
      </section>

      <CTASection title="Find your way to build with us" description="Enter as a co-builder, chapter builder, partner, contributor, or ecosystem supporter." href="/join-us" label="Join Us" />
    </div>
  )
}
