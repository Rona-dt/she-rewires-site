"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Lightbulb, Target, Users, Globe, ArrowRight } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { GlobalImpactMap } from "@/components/global-impact-map"
import Link from "next/link"

export default function AboutPage() {
  const { t, language } = useLanguage()

  const pillars = [
    {
      icon: <Users className="w-10 h-10 text-purple-500" />,
      title: t("about.pillar1.title"),
      description: t("about.pillar1.desc"),
      number: "01",
    },
    {
      icon: <Target className="w-10 h-10 text-purple-500" />,
      title: t("about.pillar2.title"),
      description: t("about.pillar2.desc"),
      number: "02",
    },
    {
      icon: <Lightbulb className="w-10 h-10 text-purple-500" />,
      title: t("about.pillar3.title"),
      description: t("about.pillar3.desc"),
      number: "03",
    },
    {
      icon: <Globe className="w-10 h-10 text-purple-500" />,
      title: t("about.pillar4.title"),
      description: t("about.pillar4.desc"),
      number: "04",
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-black">{t("about.title")}</h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-700 leading-relaxed">{t("about.one.sentence")}</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 text-lg leading-relaxed">{t("about.full.content")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Four Pillars */}
      <section className="py-16 bg-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-lg text-gray-700 leading-relaxed">{t("about.pillars.intro")}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {pillars.map((pillar, index) => (
              <Card
                key={index}
                className="border-purple-200 bg-white hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <span className="text-4xl font-bold text-purple-200">{pillar.number}</span>
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        {pillar.icon}
                        <h3 className="text-xl font-semibold text-black">{pillar.title}</h3>
                      </div>
                      <p className="text-gray-700 leading-relaxed">{pillar.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Global Impact */}
      <section id="global-impact" className="py-16 bg-white scroll-mt-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-4">
            {t("about.global.impact")}
          </h2>
          <p className="text-center text-gray-700 mb-12">{t("about.regions.desc")}</p>
          
          {/* Interactive Map */}
          <div className="max-w-5xl mx-auto mb-12">
            <GlobalImpactMap highlightRegion="asia-pacific" />
          </div>

          {/* Singapore Team Portrait Link */}
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-purple-50 to-purple-100 border-purple-200 overflow-hidden">
            <CardContent className="p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <span className="text-xs tracking-[0.15em] uppercase text-purple-600 font-medium">
                  {language === "en" ? "Singapore 2026" : "新加坡 2026"}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-black mt-2 mb-3">
                  {language === "en" ? "Meet Our Force Nodes" : "认识我们的力量节点"}
                </h3>
                <p className="text-gray-700 max-w-md">
                  {language === "en" 
                    ? "14 co-builders united by value resonance. Explore the living map of connection."
                    : "14位因价值共鸣而汇聚的共建者。探索这幅仍在生长的连接地图。"
                  }
                </p>
              </div>
              <Link href="/team-portrait">
                <Button 
                  size="lg"
                  className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-full font-medium whitespace-nowrap"
                >
                  {language === "en" ? "Team Portrait" : "团队画像"} <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
