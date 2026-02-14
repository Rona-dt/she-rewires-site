"use client"

import { useState } from "react"
import { useLanguage } from "@/components/language-provider"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const teamMembers = [
  { id: 1, initial: "J", name: "Jill", roleEn: "Founder", roleZh: "创始人", quoteEn: "In an open system, let things happen, let force flow — owned by no one.", quoteZh: "在开放系统中，让事情发生，让力量流动，不归任何人所有。" },
  { id: 2, initial: "L", name: "Luna", roleEn: "Co-Lead", roleZh: "联合负责人", quoteEn: "We co-build with clarity and warmth.", quoteZh: "我们以清晰与温度共同构建。" },
  { id: 3, initial: "C", name: "Clara", roleEn: "Co-builder", roleZh: "共建者", quoteEn: "Women should be seen, connected, and empowered.", quoteZh: "女性应当被看见、被连接、被赋能。" },
  { id: 4, initial: "J", name: "Jiaqi", roleEn: "Co-builder", roleZh: "共建者", quoteEn: "One woman's rise inspires more women to move forward.", quoteZh: "一个女性的成长，会激励更多女性前行。" },
  { id: 5, initial: "J", name: "Josie", roleEn: "Co-builder", roleZh: "共建者", quoteEn: "True lasting power comes from the willingness to walk together.", quoteZh: "真正持久的力量来自愿意同行。" },
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
  { top: "8%", left: "48%" },
  { top: "12%", left: "35%" },
  { top: "18%", left: "22%" },
  { top: "22%", left: "72%" },
  { top: "35%", left: "75%" },
  { top: "38%", left: "44%" },
  { top: "45%", left: "15%" },
  { top: "55%", left: "28%" },
  { top: "58%", left: "80%" },
  { top: "62%", left: "66%" },
  { top: "68%", left: "38%" },
  { top: "70%", left: "20%" },
  { top: "78%", left: "44%" },
  { top: "82%", left: "65%" },
]

const edges = [
  [0, 1], [0, 3], [1, 2], [1, 5], [2, 6], [3, 4], [3, 8], [4, 9], [5, 7], [5, 10], [5, 9],
  [6, 7], [7, 10], [7, 11], [8, 9], [9, 13], [10, 12], [11, 12], [12, 13], [10, 13], [2, 5],
]

const capabilities = [
  { percent: 35, en: "System Architecture — turning chaos into order", zh: "系统架构 — 将复杂变成秩序" },
  { percent: 30, en: "Tech & Foresight — designing what's next", zh: "科技与前瞻 — 设计下一步" },
  { percent: 20, en: "Humanities & Connection — preserving warmth", zh: "人文与连接 — 保持温度" },
  { percent: 15, en: "Cross-boundary Vitality — beyond profession", zh: "跨界活力 — 超越职业边界" },
]

export default function TeamPortraitPage() {
  const { language } = useLanguage()
  const [selectedId, setSelectedId] = useState(1)
  const selected = teamMembers.find((member) => member.id === selectedId) ?? teamMembers[0]

  return (
    <div className="bg-md-background pt-20">
      <section className="py-10">
        <div className="container">
          <Card className="mx-auto max-w-5xl">
            <CardContent className="space-y-3 p-6 text-sm text-md-onSurfaceVariant md:p-8">
              <p className="text-xs uppercase tracking-[0.16em] text-md-primary">Design Brief</p>
              <p className="text-base font-medium text-md-onSurface">She Rewires Singapore 2026 — Team Portrait</p>
              <p>
                {language === "en"
                  ? "This is an early-stage conceptual draft. The content is not finalized — we are looking for creative input on visual direction and overall aesthetic."
                  : "这是早期概念草稿，内容尚未最终定稿，我们欢迎对视觉方向和整体风格提出创意建议。"}
              </p>
              <p>
                {language === "en"
                  ? "Final output targets: standalone webpage (H5), LinkedIn article, and WeChat publication."
                  : "最终输出目标：独立网页（H5）、LinkedIn 文章、微信公众号发布。"}
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="relative overflow-hidden py-12 md:py-20">
        <div className="md-blob -left-10 top-10 h-56 w-56 bg-md-primary/20" aria-hidden="true" />
        <div className="md-blob right-0 top-1/2 h-56 w-56 bg-accent/50" aria-hidden="true" />
        <div className="container relative text-center">
          <p className="text-xs uppercase tracking-[0.16em] text-md-primary">01 Opening</p>
          <p className="mt-2 text-sm uppercase tracking-[0.16em] text-md-onSurfaceVariant">{language === "en" ? "She Rewires Singapore 2026" : "She Rewires 新加坡 2026"}</p>
          <h1 className="mt-3 text-4xl font-semibold text-md-onSurface md:text-6xl">{language === "en" ? "Where Force Nodes Converge" : "力量节点汇聚之处"}</h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-md-onSurfaceVariant">{language === "en" ? "A living map of connection, still growing" : "一幅仍在生长的连接地图"}</p>
          <p className="mx-auto mt-6 max-w-3xl text-md-onSurfaceVariant">
            {language === "en"
              ? "She Rewires belongs to no one. It is an open-source system where individuals act as nodes, each releasing their own force."
              : "She Rewires 不属于任何人，它是一个开源系统，每个人作为节点释放自己的力量。"}
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          <Card className="mx-auto max-w-5xl">
            <CardContent className="p-8 md:p-10">
              <p className="text-xs uppercase tracking-[0.16em] text-md-primary">02 Collective Portrait</p>
              <div className="mt-4 text-center">
                <p className="text-7xl font-light text-md-onSurface md:text-8xl">14</p>
                <p className="text-xs uppercase tracking-[0.15em] text-md-onSurfaceVariant">{language === "en" ? "Force Nodes · 2026 Co-builders" : "力量节点 · 2026 共建者"}</p>
                <p className="mt-3 text-md-onSurfaceVariant">
                  {language === "en"
                    ? "They weren't recruited. They emerged through value resonance."
                    : "她们不是被招募而来，而是因价值共鸣而涌现。"}
                </p>
              </div>
              <div className="mt-8 grid gap-3">
                {capabilities.map((cap) => (
                  <div key={cap.en} className="rounded-2xl bg-md-background p-4 text-sm text-md-onSurfaceVariant">
                    <span className="mr-2 font-medium text-md-primary">{cap.percent}%</span>
                    {language === "en" ? cap.en : cap.zh}
                  </div>
                ))}
              </div>
              <p className="mt-6 text-center text-md-onSurfaceVariant">
                {language === "en"
                  ? "Here, there are no pure clients or vendors. Only interconnected Human Nodes."
                  : "在这里，没有纯粹的客户或供应商，只有彼此连接的人类节点。"}
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          <Card className="mx-auto max-w-6xl overflow-hidden">
            <CardContent className="grid gap-8 p-8 md:grid-cols-[1.2fr_0.8fr]">
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-md-primary">03 Node Map</p>
                <h2 className="mt-2 text-2xl font-medium text-md-onSurface">{language === "en" ? "The Network" : "节点网络"}</h2>
                <p className="mt-2 text-md-onSurfaceVariant">{language === "en" ? "Click any node to discover their story" : "点击任意节点查看成员故事"}</p>

                <div className="relative mt-6 h-[460px] rounded-[32px] bg-md-surfaceLow/70 p-4">
                  <svg className="absolute inset-0 h-full w-full" aria-hidden="true">
                    {edges.map(([a, b], idx) => (
                      <line
                        key={idx}
                        x1={nodePositions[a].left}
                        y1={nodePositions[a].top}
                        x2={nodePositions[b].left}
                        y2={nodePositions[b].top}
                        stroke="#8A55ED"
                        strokeOpacity="0.25"
                        strokeWidth="1"
                      />
                    ))}
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
                <p className="mt-3 text-xs text-md-onSurfaceVariant">
                  {language === "en"
                    ? "Interaction concept: constellation-style network with connected nodes."
                    : "交互概念：星座式连接网络，节点可点击查看资料。"}
                </p>
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
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="pb-16 pt-8">
        <div className="container">
          <Card className="mx-auto max-w-5xl">
            <CardContent className="space-y-6 p-8 md:p-10">
              <p className="text-xs uppercase tracking-[0.16em] text-md-primary">04 Shared Language + Closing</p>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl bg-md-background p-4 text-sm text-md-onSurfaceVariant">
                  <p className="font-medium text-md-onSurface">Open-source System</p>
                  <p>No one owns it. Everyone builds it.</p>
                </div>
                <div className="rounded-2xl bg-md-background p-4 text-sm text-md-onSurfaceVariant">
                  <p className="font-medium text-md-onSurface">Node</p>
                  <p>Autonomous collaborators with independent energy.</p>
                </div>
                <div className="rounded-2xl bg-md-background p-4 text-sm text-md-onSurfaceVariant">
                  <p className="font-medium text-md-onSurface">Gate Keeper</p>
                  <p>A guardian of the system's values.</p>
                </div>
                <div className="rounded-2xl bg-md-background p-4 text-sm text-md-onSurfaceVariant">
                  <p className="font-medium text-md-onSurface">Force</p>
                  <p>The intrinsic power within every woman.</p>
                </div>
              </div>

              <div className="rounded-[28px] bg-md-primary/8 p-6 text-sm leading-relaxed text-md-onSurfaceVariant">
                <p className="font-medium text-md-onSurface">In their own words</p>
                <p className="mt-2">“Women should be seen, connected, and empowered.” — Clara</p>
                <p>“One woman's rise inspires more women to move forward.” — Jiaqi</p>
                <p>“True lasting power comes from the willingness to walk together.” — Josie</p>
                <p>“In an open system, let things happen, let force flow — owned by no one.” — Jill</p>
              </div>

              <div className="text-center">
                <p className="text-lg text-md-onSurface">2026. This is us.</p>
                <p className="text-md-onSurfaceVariant">{language === "en" ? "This map of connection is still growing." : "这幅连接地图仍在生长。"}</p>
                <p className="mt-1 text-md-onSurfaceVariant">{language === "en" ? "If you feel the resonance, next year, we'll be waiting." : "如果你感受到共鸣，明年我们等你。"}</p>
                <div className="mt-6">
                  <Link href="/get-involved">
                    <Button size="lg">
                      {language === "en" ? "Join Us" : "加入我们"} <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
