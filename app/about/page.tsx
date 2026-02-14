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
    { icon: Users, title: t("about.pillar1.title"), description: t("about.pillar1.desc"), number: "01" },
    { icon: Target, title: t("about.pillar2.title"), description: t("about.pillar2.desc"), number: "02" },
    { icon: Lightbulb, title: t("about.pillar3.title"), description: t("about.pillar3.desc"), number: "03" },
    { icon: Globe, title: t("about.pillar4.title"), description: t("about.pillar4.desc"), number: "04" },
  ]

  return (
    <div className="bg-md-background pt-20">
      <section className="py-16">
        <div className="container text-center">
          <h1 className="text-5xl font-semibold text-md-onSurface md:text-6xl">{t("about.title")}</h1>
          <p className="mx-auto mt-6 max-w-3xl text-xl text-md-onSurfaceVariant">{t("about.one.sentence")}</p>
        </div>
      </section>

      <section className="py-8">
        <div className="container">
          <div className="mx-auto max-w-4xl rounded-[32px] bg-md-surface p-8">
            <p className="text-lg leading-relaxed text-md-onSurfaceVariant">{t("about.full.content")}</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="mx-auto mb-10 max-w-5xl overflow-hidden rounded-[32px] bg-gradient-to-r from-md-surface to-accent/40 p-8">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-md-primary">{language === "en" ? "4 Pillars" : "四大支柱"}</p>
            <h2 className="mt-2 text-3xl font-medium text-md-onSurface md:text-4xl">
              {language === "en"
                ? "How She Rewires drives long-term change"
                : "She Rewires 如何推动长期改变"}
            </h2>
            <p className="mt-4 max-w-4xl text-lg leading-relaxed text-md-onSurfaceVariant">{t("about.pillars.intro")}</p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
            {pillars.map((pillar) => (
              <Card key={pillar.number} className="group hover:scale-[1.02]">
                <CardContent className="p-8">
                  <div className="mb-3 text-4xl font-semibold text-md-primary/30">{pillar.number}</div>
                  <div className="mb-3 flex items-center gap-3">
                    <pillar.icon className="h-8 w-8 text-md-primary" />
                    <h3 className="text-xl font-medium text-md-onSurface">{pillar.title}</h3>
                  </div>
                  <p className="text-md-onSurfaceVariant">{pillar.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="global-impact" className="scroll-mt-20 py-16">
        <div className="container">
          <h2 className="text-center text-4xl font-medium text-md-onSurface">{t("about.global.impact")}</h2>
          <p className="mb-2 mt-3 text-center text-md-onSurfaceVariant">
            {language === "en"
              ? "3 regions: East Asia, South-East Asia, Europe"
              : "3 个地区：东亚、东南亚、欧洲"}
          </p>
          <p className="mb-10 text-center text-md-onSurfaceVariant">
            {language === "en" ? "China, Singapore, Germany, UK" : "中国、新加坡、德国、英国"}
          </p>

          <div className="mx-auto mb-10 max-w-5xl">
            <GlobalImpactMap highlightRegion="east-asia" />
          </div>

          <Card className="mx-auto max-w-5xl overflow-hidden bg-gradient-to-r from-accent/70 to-md-surface">
            <CardContent className="grid gap-8 p-8 md:grid-cols-[1.1fr_1fr] md:p-10">
              <div>
                <span className="text-xs uppercase tracking-[0.15em] text-md-primary">{language === "en" ? "Singapore 2026" : "新加坡 2026"}</span>
                <h3 className="mt-2 text-3xl font-medium text-md-onSurface">{language === "en" ? "Meet Our Force Nodes" : "认识我们的力量节点"}</h3>
                <p className="mt-3 max-w-md text-md-onSurfaceVariant">
                  {language === "en"
                    ? "14 co-builders united by value resonance. Explore the living map of connection."
                    : "14位因价值共鸣而汇聚的共建者。探索这幅仍在生长的连接地图。"}
                </p>
                <p className="mt-3 max-w-md text-sm text-md-onSurfaceVariant">
                  {language === "en"
                    ? "A constellation-style people network with dynamic node stories and cross-border links."
                    : "以星座式节点连接呈现人物关系与跨区域协作脉络。"}
                </p>
                <div className="mt-6">
                  <Link href="/team-portrait">
                    <Button size="lg">
                      {language === "en" ? "Team Portrait" : "团队画像"} <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative min-h-[220px] rounded-[28px] bg-md-background/70 p-6">
                {[{top:'15%',left:'50%'},{top:'35%',left:'25%'},{top:'35%',left:'75%'},{top:'60%',left:'18%'},{top:'60%',left:'50%'},{top:'60%',left:'82%'},{top:'82%',left:'35%'},{top:'82%',left:'65%'}].map((node, idx) => (
                  <span
                    key={idx}
                    className="absolute flex h-9 w-9 items-center justify-center rounded-full bg-md-primary/15 text-sm font-medium text-md-primary shadow-sm"
                    style={{ top: node.top, left: node.left, transform: 'translate(-50%, -50%)' }}
                  >
                    {idx + 1}
                  </span>
                ))}
                <svg className="absolute inset-0 h-full w-full" aria-hidden="true">
                  <line x1="50%" y1="15%" x2="25%" y2="35%" stroke="#8A55ED" strokeOpacity="0.25" />
                  <line x1="50%" y1="15%" x2="75%" y2="35%" stroke="#8A55ED" strokeOpacity="0.25" />
                  <line x1="25%" y1="35%" x2="18%" y2="60%" stroke="#8A55ED" strokeOpacity="0.25" />
                  <line x1="75%" y1="35%" x2="82%" y2="60%" stroke="#8A55ED" strokeOpacity="0.25" />
                  <line x1="18%" y1="60%" x2="35%" y2="82%" stroke="#8A55ED" strokeOpacity="0.25" />
                  <line x1="82%" y1="60%" x2="65%" y2="82%" stroke="#8A55ED" strokeOpacity="0.25" />
                  <line x1="50%" y1="60%" x2="35%" y2="82%" stroke="#8A55ED" strokeOpacity="0.25" />
                  <line x1="50%" y1="60%" x2="65%" y2="82%" stroke="#8A55ED" strokeOpacity="0.25" />
                </svg>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
