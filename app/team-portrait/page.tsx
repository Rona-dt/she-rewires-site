"use client"

import { useState } from "react"
import { useLanguage } from "@/components/language-provider"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const teamMembers = [
  { id: 1, initial: "J", name: "Jill", roleEn: "Founder", roleZh: "创始人", quoteEn: "In an open system, let things happen, let force flow.", quoteZh: "在开放系统中，让事情发生，让力量流动。" },
  { id: 2, initial: "L", name: "Luna", roleEn: "Co-Lead", roleZh: "联合负责人", quoteEn: "We co-build with clarity and warmth.", quoteZh: "我们以清晰和温度共同构建。" },
  { id: 3, initial: "C", name: "Clara", roleEn: "Co-builder", roleZh: "共建者", quoteEn: "Women should be seen, connected, and empowered.", quoteZh: "女性应当被看见、被连接、被赋能。" },
  { id: 4, initial: "J", name: "Jiaqi", roleEn: "Co-builder", roleZh: "共建者", quoteEn: "One woman’s rise inspires more women to move forward.", quoteZh: "一个女性的成长，会激励更多女性前行。" },
  { id: 5, initial: "J", name: "Josie", roleEn: "Co-builder", roleZh: "共建者", quoteEn: "Lasting power comes from walking together.", quoteZh: "可持续的力量来自同行。" },
  { id: 6, initial: "D", name: "Diana", roleEn: "Co-builder", roleZh: "共建者", quoteEn: "", quoteZh: "" },
  { id: 7, initial: "H", name: "Helena", roleEn: "Co-builder", roleZh: "共建者", quoteEn: "", quoteZh: "" },
  { id: 8, initial: "S", name: "Sophie", roleEn: "Co-builder", roleZh: "共建者", quoteEn: "", quoteZh: "" },
  { id: 9, initial: "M", name: "Mei", roleEn: "Co-builder", roleZh: "共建者", quoteEn: "", quoteZh: "" },
  { id: 10, initial: "A", name: "Anna", roleEn: "Co-builder", roleZh: "共建者", quoteEn: "", quoteZh: "" },
  { id: 11, initial: "E", name: "Emily", roleEn: "Co-builder", roleZh: "共建者", quoteEn: "", quoteZh: "" },
  { id: 12, initial: "R", name: "Rachel", roleEn: "Co-builder", roleZh: "共建者", quoteEn: "", quoteZh: "" },
  { id: 13, initial: "K", name: "Kate", roleEn: "Co-builder", roleZh: "共建者", quoteEn: "", quoteZh: "" },
  { id: 14, initial: "Y", name: "Yuki", roleEn: "Co-builder", roleZh: "共建者", quoteEn: "", quoteZh: "" },
]

const nodePositions = [
  { top: "38%", left: "44%" },
  { top: "55%", left: "28%" },
  { top: "18%", left: "22%" },
  { top: "8%", left: "48%" },
  { top: "22%", left: "72%" },
  { top: "62%", left: "66%" },
  { top: "78%", left: "44%" },
  { top: "12%", left: "35%" },
  { top: "45%", left: "15%" },
  { top: "70%", left: "20%" },
  { top: "35%", left: "75%" },
  { top: "58%", left: "80%" },
  { top: "82%", left: "65%" },
  { top: "68%", left: "38%" },
]

export default function TeamPortraitPage() {
  const { language } = useLanguage()
  const [selectedId, setSelectedId] = useState(1)
  const selected = teamMembers.find((member) => member.id === selectedId) ?? teamMembers[0]

  return (
    <div className="bg-md-background pt-20">
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="md-blob -left-10 top-10 h-56 w-56 bg-md-primary/20" aria-hidden="true" />
        <div className="md-blob right-0 top-1/2 h-56 w-56 bg-accent/50" aria-hidden="true" />

        <div className="container relative text-center">
          <p className="text-xs uppercase tracking-[0.16em] text-md-primary">{language === "en" ? "She Rewires Singapore 2026" : "She Rewires 新加坡 2026"}</p>
          <h1 className="mt-3 text-4xl font-semibold text-md-onSurface md:text-6xl">{language === "en" ? "Where Force Nodes Converge" : "力量节点汇聚之处"}</h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-md-onSurfaceVariant">{language === "en" ? "A living map of connection, still growing." : "一幅仍在生长的连接地图。"}</p>
        </div>
      </section>

      <section className="pb-16">
        <div className="container">
          <Card className="mx-auto max-w-6xl overflow-hidden">
            <CardContent className="grid gap-8 p-8 md:grid-cols-[1.2fr_0.8fr]">
              <div>
                <h2 className="text-2xl font-medium text-md-onSurface">{language === "en" ? "Constellation Node Map" : "星图节点网络"}</h2>
                <p className="mt-2 text-md-onSurfaceVariant">{language === "en" ? "Click a node to view each member profile and quote." : "点击任意节点查看成员资料与观点。"}</p>

                <div className="relative mt-6 h-[440px] rounded-[32px] bg-md-surfaceLow/70 p-4">
                  <svg className="absolute inset-0 h-full w-full" aria-hidden="true">
                    <line x1="44%" y1="38%" x2="28%" y2="55%" stroke="#8A55ED" strokeOpacity="0.25" strokeWidth="1" />
                    <line x1="44%" y1="38%" x2="72%" y2="22%" stroke="#8A55ED" strokeOpacity="0.25" strokeWidth="1" />
                    <line x1="28%" y1="55%" x2="20%" y2="70%" stroke="#8A55ED" strokeOpacity="0.25" strokeWidth="1" />
                    <line x1="72%" y1="22%" x2="80%" y2="58%" stroke="#8A55ED" strokeOpacity="0.25" strokeWidth="1" />
                    <line x1="44%" y1="38%" x2="44%" y2="78%" stroke="#8A55ED" strokeOpacity="0.25" strokeWidth="1" />
                    <line x1="44%" y1="78%" x2="65%" y2="82%" stroke="#8A55ED" strokeOpacity="0.25" strokeWidth="1" />
                    <line x1="44%" y1="78%" x2="38%" y2="68%" stroke="#8A55ED" strokeOpacity="0.25" strokeWidth="1" />
                  </svg>

                  {teamMembers.map((member, index) => {
                    const active = selectedId === member.id
                    return (
                      <button
                        key={member.id}
                        onClick={() => setSelectedId(member.id)}
                        className={`absolute flex h-11 w-11 items-center justify-center rounded-full text-sm font-medium transition-all duration-300 ease-md active:scale-95 ${
                          active
                            ? "bg-md-primary text-white shadow-lg"
                            : "bg-md-background text-md-primary shadow-sm hover:bg-md-primary/10"
                        }`}
                        style={{ top: nodePositions[index].top, left: nodePositions[index].left, transform: "translate(-50%, -50%)" }}
                      >
                        {member.initial}
                      </button>
                    )
                  })}
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-[28px] bg-md-background p-5">
                  <p className="text-xs uppercase tracking-[0.12em] text-md-onSurfaceVariant">{language === "en" ? "Selected Node" : "当前节点"}</p>
                  <h3 className="mt-2 text-3xl font-medium text-md-onSurface">{selected.name}</h3>
                  <p className="text-md-primary">{language === "en" ? selected.roleEn : selected.roleZh}</p>
                  <p className="mt-4 text-sm leading-relaxed text-md-onSurfaceVariant">
                    {language === "en" ? selected.quoteEn || "Profile is being updated." : selected.quoteZh || "资料更新中。"}
                  </p>
                </div>

                <div className="rounded-[28px] bg-md-primary/8 p-5">
                  <p className="text-lg font-medium text-md-onSurface">14 {language === "en" ? "co-builders" : "位共建者"}</p>
                  <p className="mt-2 text-sm text-md-onSurfaceVariant">
                    {language === "en"
                      ? "They were not recruited. They emerged through value resonance."
                      : "她们不是被招募而来，而是因价值共鸣而涌现。"}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-12 text-center">
            <p className="mb-4 text-md-onSurfaceVariant">{language === "en" ? "If you feel the resonance, join us next." : "如果你感受到共鸣，欢迎加入我们。"}</p>
            <Link href="/get-involved">
              <Button size="lg">
                {language === "en" ? "Join Us" : "加入我们"} <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
