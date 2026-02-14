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
        <div className="container relative text-center">
          {language === "en" ? (
            <>
              <h1 className="text-5xl font-semibold tracking-tight text-md-onSurface md:text-7xl">She Rewires</h1>
              
            </>
          ) : (
            <>
              <p className="text-5xl font-semibold tracking-wide text-md-primary md:text-7xl">她原力</p>
              <h1 className="mt-3 text-2xl font-medium tracking-[0.08em] text-md-onSurface md:text-4xl">She Rewires</h1>
            </>
          )}
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-md-onSurfaceVariant md:text-xl">{t("hero.description")}</p>
          <div className="mt-8 flex justify-center">
            <Link href="/get-involved">
              <Button size="lg">
                {t("hero.cta")} <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
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
              {language === "en"
                ? "3 regions: East Asia, South-East Asia, Europe · 4 countries: China, Singapore, Germany, UK"
                : "3 个地区：东亚、东南亚、欧洲 · 4 个国家：中国、新加坡、德国、英国"}
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-4">
            {[
              { icon: Users, value: "70,000+", label: t("impact.members") },
              { icon: Heart, value: "130+", label: t("impact.builders") },
              { icon: MapPin, value: "4", label: language === "en" ? "Countries" : "国家" },
              { icon: Globe, value: "3", label: t("impact.regions") },
            ].map((item) => (
              <Card key={item.value + item.label} className="group hover:scale-[1.02]">
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
