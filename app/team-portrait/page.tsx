"use client"

import { useState } from "react"
import { useLanguage } from "@/components/language-provider"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const members = [
  { id: 1, name: "Jill", roleEn: "Founder", roleZh: "创始人", quoteEn: "In an open system, let force flow.", quoteZh: "在开放系统里，让力量流动。" },
  { id: 2, name: "Luna", roleEn: "Co-Lead", roleZh: "联合负责人", quoteEn: "Value resonance drives action.", quoteZh: "价值共鸣驱动行动。" },
  { id: 3, name: "Clara", roleEn: "Co-builder", roleZh: "共建者", quoteEn: "Women should be seen and connected.", quoteZh: "女性应当被看见并被连接。" },
  { id: 4, name: "Jiaqi", roleEn: "Co-builder", roleZh: "共建者", quoteEn: "One woman’s rise inspires more.", quoteZh: "一个女性的成长会激励更多人前行。" },
  { id: 5, name: "Josie", roleEn: "Co-builder", roleZh: "共建者", quoteEn: "Long-term power comes from walking together.", quoteZh: "长期的力量来自同行。" },
  { id: 6, name: "Diana", roleEn: "Co-builder", roleZh: "共建者", quoteEn: "", quoteZh: "" },
  { id: 7, name: "Helena", roleEn: "Co-builder", roleZh: "共建者", quoteEn: "", quoteZh: "" },
  { id: 8, name: "Sophie", roleEn: "Co-builder", roleZh: "共建者", quoteEn: "", quoteZh: "" },
  { id: 9, name: "Mei", roleEn: "Co-builder", roleZh: "共建者", quoteEn: "", quoteZh: "" },
  { id: 10, name: "Anna", roleEn: "Co-builder", roleZh: "共建者", quoteEn: "", quoteZh: "" },
  { id: 11, name: "Emily", roleEn: "Co-builder", roleZh: "共建者", quoteEn: "", quoteZh: "" },
  { id: 12, name: "Rachel", roleEn: "Co-builder", roleZh: "共建者", quoteEn: "", quoteZh: "" },
  { id: 13, name: "Kate", roleEn: "Co-builder", roleZh: "共建者", quoteEn: "", quoteZh: "" },
  { id: 14, name: "Yuki", roleEn: "Co-builder", roleZh: "共建者", quoteEn: "", quoteZh: "" },
]

export default function TeamPortraitPage() {
  const { language } = useLanguage()
  const [activeId, setActiveId] = useState(1)
  const active = members.find((member) => member.id === activeId) ?? members[0]

  return (
    <div className="bg-md-background pt-20">
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="md-blob -left-10 top-10 h-48 w-48 bg-md-primary/20" aria-hidden="true" />
        <div className="md-blob right-0 top-1/2 h-52 w-52 bg-accent/60" aria-hidden="true" />
        <div className="container relative text-center">
          <p className="text-sm uppercase tracking-[0.16em] text-md-primary">{language === "en" ? "Singapore 2026" : "新加坡 2026"}</p>
          <h1 className="mt-3 text-4xl font-semibold text-md-onSurface md:text-6xl">
            {language === "en" ? "Where Force Nodes Converge" : "力量节点汇聚之处"}
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-md-onSurfaceVariant">
            {language === "en" ? "A living map of connection, still growing." : "一幅仍在生长的连接地图。"}
          </p>
        </div>
      </section>

      <section className="pb-16">
        <div className="container">
          <Card className="mb-8">
            <CardContent className="grid gap-6 p-8 md:grid-cols-[2fr_1fr]">
              <div>
                <h2 className="text-3xl font-medium text-md-onSurface">14 {language === "en" ? "Force Nodes" : "力量节点"}</h2>
                <p className="mt-3 text-md-onSurfaceVariant">
                  {language === "en"
                    ? "They were not recruited. They emerged through value resonance and co-building action."
                    : "她们不是被招募而来，而是因价值共鸣与共建行动而涌现。"}
                </p>
              </div>
              <div className="rounded-3xl bg-md-background p-5">
                <p className="text-sm text-md-onSurfaceVariant">{language === "en" ? "Active node" : "当前节点"}</p>
                <h3 className="mt-1 text-2xl font-medium text-md-onSurface">{active.name}</h3>
                <p className="text-md-primary">{language === "en" ? active.roleEn : active.roleZh}</p>
                <p className="mt-2 text-sm text-md-onSurfaceVariant">
                  {language === "en" ? active.quoteEn || "Profile updating." : active.quoteZh || "资料更新中。"}
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
            {members.map((member) => (
              <button
                key={member.id}
                onClick={() => setActiveId(member.id)}
                className={`rounded-3xl p-4 text-left transition-all duration-300 ease-md active:scale-95 ${
                  activeId === member.id ? "bg-md-primary/15 shadow-md" : "bg-md-surface hover:bg-md-primary/10"
                }`}
              >
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-md-background font-medium text-md-primary">
                  {member.name.slice(0, 1)}
                </div>
                <p className="text-sm font-medium text-md-onSurface">{member.name}</p>
                <p className="text-xs text-md-onSurfaceVariant">{language === "en" ? member.roleEn : member.roleZh}</p>
              </button>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="mb-4 text-md-onSurfaceVariant">
              {language === "en" ? "If you feel the resonance, join us next." : "如果你感受到共鸣，欢迎加入我们。"}
            </p>
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
