"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, MapPin, Heart, ArrowRight, Globe } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/components/language-provider"

export default function HomePage() {
  const { t, language } = useLanguage()

  return (
    <div className="bg-md-background pt-20">
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="md-blob -left-16 top-10 h-56 w-56 bg-md-primary/20" aria-hidden="true" />
        <div className="md-blob right-0 top-1/3 h-64 w-64 bg-accent/60" aria-hidden="true" />
        <div className="container relative">
          <div className="mx-auto max-w-5xl rounded-[48px] bg-md-surface p-8 text-center shadow-lg md:p-14">
            <span className="inline-flex rounded-full bg-md-primary/10 px-4 py-2 text-sm font-medium text-md-primary">
              {language === "en" ? "她原力" : "She Rewires"}
            </span>
            <h1 className="mt-6 text-5xl font-semibold tracking-tight text-md-onSurface md:text-7xl">
              {language === "en" ? "She Rewires" : "她原力"}
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-md-onSurfaceVariant md:text-xl">{t("hero.description")}</p>
            <div className="mt-8 flex justify-center">
              <Link href="/get-involved">
                <Button size="lg">
                  {t("hero.cta")} <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-medium text-md-onSurface">{language === "en" ? "About Us" : "关于我们"}</h2>
            <p className="mt-6 text-lg leading-relaxed text-md-onSurfaceVariant">{t("about.preview")}</p>
            <div className="mt-8">
              <Link href="/about">
                <Button variant="outline">
                  {language === "en" ? "Learn More" : "了解更多"} <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="container">
          <div className="mx-auto mb-10 max-w-4xl text-center">
            <h2 className="text-4xl font-medium text-md-onSurface">{t("impact.title")}</h2>
            <p className="mt-3 text-md-onSurfaceVariant">
              {language === "en" ? "Across 3 regions and 4 countries, we build visible pathways for women in STEAM." : "我们跨越 3 个地区、4 个国家，持续为科技女性搭建可见的成长路径。"}
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-4">
            {[
              { icon: Users, value: "70,000+", label: t("impact.members") },
              { icon: Heart, value: "130+", label: t("impact.builders") },
              { icon: MapPin, value: "16+", label: t("impact.cities") },
              { icon: Globe, value: "3", label: t("impact.regions") },
            ].map((item) => (
              <Card key={item.value} className="group hover:scale-[1.02]">
                <CardContent className="p-6 text-center">
                  <item.icon className="mx-auto mb-3 h-10 w-10 text-md-primary transition-transform duration-300 ease-md group-hover:scale-110" />
                  <div className="text-3xl font-semibold text-md-onSurface">{item.value}</div>
                  <div className="text-sm text-md-onSurfaceVariant">{item.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/about#global-impact">
              <Button size="lg" variant="secondary">
                {language === "en" ? "Explore Our Global Impact" : "探索我们的全球影响力"}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
