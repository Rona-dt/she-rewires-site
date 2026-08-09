import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { HeroContent } from "@/types/content"

interface HeroSectionProps {
  hero: HeroContent
  align?: "left" | "center"
}

export function HeroSection({ hero, align = "left" }: HeroSectionProps) {
  const isCenter = align === "center"

  return (
    <section className="border-b border-md-outline/20 bg-md-background pt-20">
      <div className={`container py-16 md:py-24 ${isCenter ? "text-center" : ""}`}>
        {hero.eyebrow && <p className="text-sm font-medium uppercase tracking-[0.18em] text-md-primary">{hero.eyebrow}</p>}
        <h1 className={`mt-4 text-4xl font-semibold text-md-onSurface md:text-6xl ${isCenter ? "mx-auto max-w-5xl" : "max-w-5xl"}`}>
          {hero.title}
        </h1>
        {hero.subtitle && (
          <p className={`mt-6 text-lg leading-relaxed text-md-onSurfaceVariant md:text-xl ${isCenter ? "mx-auto max-w-4xl" : "max-w-3xl"}`}>
            {hero.subtitle}
          </p>
        )}
        {(hero.primaryAction || hero.secondaryAction) && (
          <div className={`mt-8 flex flex-wrap gap-3 ${isCenter ? "justify-center" : ""}`}>
            {hero.primaryAction && (
              <Button asChild size="lg">
                <Link href={hero.primaryAction.href}>
                  {hero.primaryAction.label} <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            )}
            {hero.secondaryAction && (
              <Button asChild variant="outline" size="lg">
                <Link href={hero.secondaryAction.href}>{hero.secondaryAction.label}</Link>
              </Button>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
