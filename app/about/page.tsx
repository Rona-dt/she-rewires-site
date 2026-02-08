"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Lightbulb, Target, Users, Globe } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export default function AboutPage() {
  const { t, language } = useLanguage()

  const pillars = [
    {
      icon: <Users className="w-10 h-10 text-[#8A55ED]" />,
      title: t("about.pillar1.title"),
      description: t("about.pillar1.desc"),
      number: "01",
    },
    {
      icon: <Target className="w-10 h-10 text-[#BFFE01]" />,
      title: t("about.pillar2.title"),
      description: t("about.pillar2.desc"),
      number: "02",
    },
    {
      icon: <Lightbulb className="w-10 h-10 text-[#8A55ED]" />,
      title: t("about.pillar3.title"),
      description: t("about.pillar3.desc"),
      number: "03",
    },
    {
      icon: <Globe className="w-10 h-10 text-[#BFFE01]" />,
      title: t("about.pillar4.title"),
      description: t("about.pillar4.desc"),
      number: "04",
    },
  ]

  const regions = [
    { name: language === "en" ? "China" : "中国", region: language === "en" ? "East Asia" : "东亚" },
    { name: language === "en" ? "Singapore" : "新加坡", region: language === "en" ? "South-East Asia" : "东南亚" },
    { name: language === "en" ? "Germany" : "德国", region: language === "en" ? "Europe" : "欧洲" },
    { name: language === "en" ? "UK" : "英国", region: language === "en" ? "Europe" : "欧洲" },
  ]

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-[#E6E6E6] py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#303030]">{t("about.title")}</h1>
          <p className="text-xl max-w-3xl mx-auto text-[#303030]/80 leading-relaxed">{t("about.one.sentence")}</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-[#303030]/80 text-lg leading-relaxed">{t("about.full.content")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Four Pillars */}
      <section className="py-16 bg-[#DEC4FF]/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-lg text-[#303030]/80 leading-relaxed">{t("about.pillars.intro")}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {pillars.map((pillar, index) => (
              <Card
                key={index}
                className="border-[#8A55ED]/20 bg-white hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <span className="text-4xl font-bold text-[#DEC4FF]">{pillar.number}</span>
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        {pillar.icon}
                        <h3 className="text-xl font-semibold text-[#303030]">{pillar.title}</h3>
                      </div>
                      <p className="text-[#303030]/70 leading-relaxed">{pillar.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Global Impact */}
      <section className="py-16 bg-[#E6E6E6]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#303030] mb-4">
            {t("about.global.impact")}
          </h2>
          <p className="text-center text-[#303030]/70 mb-12">{t("about.regions.desc")}</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {regions.map((item, index) => (
              <Card key={index} className="text-center border-[#8A55ED]/20 bg-white">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-[#303030] mb-1">{item.name}</h3>
                  <p className="text-sm text-[#8A55ED]">{item.region}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
