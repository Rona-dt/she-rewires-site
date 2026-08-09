import { HeroSection } from "@/components/sections/hero-section"
import { ContentSection } from "@/components/sections/content-section"
import { CTASection } from "@/components/sections/cta-section"
import { aboutPage } from "@/content/pages/platform"

export default function AboutPage() {
  return (
    <div className="bg-md-background">
      <HeroSection hero={aboutPage.hero} />
      {aboutPage.sections.map((section) => <ContentSection key={section.id} section={section} />)}
      <CTASection title="The next chapter is human agency" description="Explore the people and ecosystem now building this platform across regions." href="/community" label="Meet the Collective" />
    </div>
  )
}
