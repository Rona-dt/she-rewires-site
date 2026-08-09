import { HeroSection } from "@/components/sections/hero-section"
import { ContentSection } from "@/components/sections/content-section"
import { ProjectCard } from "@/components/sections/project-card"
import { CTASection } from "@/components/sections/cta-section"
import { buildPage } from "@/content/pages/platform"
import { projects } from "@/content/projects"

export default function BuildPage() {
  return (
    <div className="bg-md-background">
      <HeroSection hero={buildPage.hero} />
      {buildPage.sections.map((section) => <ContentSection key={section.id} section={section} />)}
      <section className="py-14">
        <div className="container">
          <div className="mb-8 max-w-4xl">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-md-primary">What We Build</p>
            <h2 className="mt-2 text-3xl font-semibold text-md-onSurface md:text-4xl">Co-building projects</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((project) => <ProjectCard key={project.id} project={project} />)}
          </div>
        </div>
      </section>
      <CTASection title="Open opportunities" description="We are looking for co-builders, partners, contributors, speakers, researchers, and sponsors." href="/join-us" label="Find Your Path" />
    </div>
  )
}
