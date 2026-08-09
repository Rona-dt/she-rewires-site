import { HeroSection } from "@/components/sections/hero-section"
import { ContentSection } from "@/components/sections/content-section"
import { ChapterCard } from "@/components/sections/chapter-card"
import { PersonProfile } from "@/components/sections/person-profile"
import { PartnerLogoWall } from "@/components/sections/partner-logo-wall"
import { EcosystemDiagram } from "@/components/sections/ecosystem-diagram"
import { CTASection } from "@/components/sections/cta-section"
import { communityPage } from "@/content/pages/platform"
import { chapters } from "@/content/chapters"
import { people } from "@/content/people"
import { partners } from "@/content/partners"

export default function CommunityPage() {
  return (
    <div className="bg-md-background">
      <HeroSection hero={communityPage.hero} />
      <section className="py-14">
        <div className="container">
          <EcosystemDiagram />
        </div>
      </section>
      {communityPage.sections.slice(0, 1).map((section) => <ContentSection key={section.id} section={section} />)}
      <section className="py-14">
        <div className="container">
          <div className="mb-8 max-w-4xl">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-md-primary">Co-builders and Contributors</p>
            <h2 className="mt-2 text-3xl font-semibold text-md-onSurface md:text-4xl">The people shaping the ecosystem</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {people.map((person) => <PersonProfile key={person.id} person={person} />)}
          </div>
        </div>
      </section>
      <section className="py-14">
        <div className="container">
          <div className="mb-8 max-w-4xl">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-md-primary">Global Chapters</p>
            <h2 className="mt-2 text-3xl font-semibold text-md-onSurface md:text-4xl">Local communities, connected globally</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {chapters.map((chapter) => <ChapterCard key={chapter.id} chapter={chapter} />)}
          </div>
        </div>
      </section>
      <section className="py-14">
        <div className="container">
          <div className="mb-8 max-w-4xl">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-md-primary">Ecosystem Partners</p>
            <h2 className="mt-2 text-3xl font-semibold text-md-onSurface md:text-4xl">Partnership is co-creation</h2>
          </div>
          <PartnerLogoWall partners={partners} />
        </div>
      </section>
      <CTASection title="Build inside the system" description="See how resonance becomes projects, initiatives, chapters, and scalable collaborations." href="/build" label="Explore Build Model" />
    </div>
  )
}
