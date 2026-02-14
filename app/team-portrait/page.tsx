"use client"

import { useMemo, useState } from "react"
import { useLanguage } from "@/components/language-provider"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const teamMembers = [
  { id: 1, initial: "J", name: "Jill", roleEn: "Founder", roleZh: "创始人", quoteEn: "In an open system, let things happen, let force flow — owned by no one.", quoteZh: "在开放系统中，让事情发生，让力量流动——不被任何人单独占有。" },
  { id: 2, initial: "L", name: "Luna", roleEn: "Co-Lead", roleZh: "联合负责人", quoteEn: "", quoteZh: "" },
  { id: 3, initial: "C", name: "Clara", roleEn: "Co-builder", roleZh: "共建者", quoteEn: "Women should be seen, connected, and empowered.", quoteZh: "女性应该被看见、被连接、被赋能。" },
  { id: 4, initial: "J", name: "Jiaqi", roleEn: "Co-builder", roleZh: "共建者", quoteEn: "One woman's rise inspires more women to move forward.", quoteZh: "一个女性的成长会激励更多女性前行。" },
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
  { top: 36, left: 48 },
  { top: 54, left: 30 },
  { top: 16, left: 24 },
  { top: 8, left: 50 },
  { top: 22, left: 74 },
  { top: 62, left: 68 },
  { top: 80, left: 48 },
  { top: 14, left: 36 },
  { top: 44, left: 16 },
  { top: 70, left: 22 },
  { top: 36, left: 78 },
  { top: 58, left: 82 },
  { top: 84, left: 66 },
  { top: 68, left: 40 },
]

const capability = [
  { p: 35, nEn: "System Architecture", nZh: "系统架构", dEn: "turning chaos into order", dZh: "把复杂问题组织成可执行路径" },
  { p: 30, nEn: "Tech & Foresight", nZh: "科技与前瞻", dEn: "designing what's next", dZh: "面向下一阶段做技术与方向设计" },
  { p: 20, nEn: "Humanities & Connection", nZh: "人文与连接", dEn: "preserving warmth", dZh: "在技术里保留人与人之间的温度" },
  { p: 15, nEn: "Cross-boundary Vitality", nZh: "跨界活力", dEn: "beyond profession", dZh: "突破单一职业边界形成协同" },
]

const glossary = [
  { term: "Open-source System", defEn: "No one owns it. Everyone builds it.", defZh: "不属于任何人，所有人都可以共同建设。" },
  { term: "Node", defEn: "Autonomous collaborators with independent energy.", defZh: "具备独立能量与行动力的协作节点。" },
  { term: "Gate Keeper", defEn: "A guardian of the system's values.", defZh: "守护系统价值观与边界的人。" },
  { term: "Force", defEn: "The intrinsic power within every woman.", defZh: "每位女性内在具备的驱动力。" },
]

export default function TeamPortraitPage() {
  const { language } = useLanguage()
  const [selectedId, setSelectedId] = useState(1)
  const selected = useMemo(() => teamMembers.find((member) => member.id === selectedId) ?? teamMembers[0], [selectedId])

  return (
    <div className="bg-md-background pt-20">
      <section className="py-10">
        <div className="container">
          <Card className="bg-md-surface">
            <CardContent className="p-6 md:p-8">
              <p className="text-xs uppercase tracking-[0.15em] text-md-primary">Design Brief</p>
              <h2 className="mt-2 text-2xl font-medium text-md-onSurface">She Rewires Singapore 2026 — Team Portrait</h2>
              <p className="mt-3 text-sm leading-relaxed text-md-onSurfaceVariant">
                {language === "en"
                  ? "This is an early-stage conceptual draft for She Rewires Singapore 2026's team portrait. The content is not finalized — we're looking for your creative input on visual direction and overall aesthetic."
                  : "这是 She Rewires Singapore 2026 团队画像的早期概念稿，内容尚未定稿，欢迎继续提出视觉方向与整体美学建议。"}
              </p>
              <p className="mt-2 text-sm text-md-onSurfaceVariant">
                {language === "en"
                  ? "Final output: standalone webpage (H5), LinkedIn article, WeChat publication."
                  : "最终输出：独立网页（H5）、LinkedIn 文章、微信公众号发布版本。"}
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="relative overflow-hidden py-14 md:py-20">
        <div className="md-blob -left-10 top-10 h-56 w-56 bg-md-primary/20" aria-hidden="true" />
        <div className="md-blob right-0 top-1/2 h-56 w-56 bg-accent/50" aria-hidden="true" />
        <div className="container relative text-center">
          <p className="text-xs uppercase tracking-[0.16em] text-md-primary">01 · {language === "en" ? "Opening" : "开场"}</p>
          <p className="mt-3 text-sm uppercase tracking-[0.14em] text-md-onSurfaceVariant">{language === "en" ? "She Rewires Singapore 2026" : "She Rewires 新加坡 2026"}</p>
          <h1 className="mt-2 text-4xl font-semibold text-md-onSurface md:text-6xl">{language === "en" ? "Where Force Nodes Converge" : "力量节点汇聚之处"}</h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-md-onSurfaceVariant">{language === "en" ? "A living map of connection, still growing" : "一幅仍在生长的连接地图"}</p>
          <p className="mx-auto mt-6 max-w-3xl text-md leading-relaxed text-md-onSurfaceVariant">
            {language === "en"
              ? "She Rewires belongs to no one. It is an open-source system where individuals act as nodes, each releasing their own force."
              : "She Rewires 不属于任何人。它是一个开源系统，每个人都是节点，释放自己的力量。"}
          </p>
        </div>
      </section>

      <section className="py-14">
        <div className="container">
          <p className="text-center text-xs uppercase tracking-[0.16em] text-md-primary">02 · {language === "en" ? "Collective Portrait" : "集体画像"}</p>
          <div className="mx-auto mt-6 max-w-5xl rounded-[32px] bg-md-surface p-8">
            <div className="text-center">
              <div className="text-7xl font-light text-md-onSurface md:text-8xl">14</div>
              <p className="mt-2 text-xs uppercase tracking-[0.14em] text-md-onSurfaceVariant">{language === "en" ? "Force Nodes · 2026 Co-builders" : "力量节点 · 2026 共建者"}</p>
              <p className="mt-4 text-md text-md-onSurfaceVariant">{language === "en" ? "They weren't recruited. They emerged through value resonance." : "她们不是被招募而来，而是因价值共鸣而涌现。"}</p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {capability.map((item) => (
                <div key={item.nEn} className="rounded-2xl bg-md-background p-4">
                  <p className="text-lg font-medium text-md-primary">{item.p}%</p>
                  <p className="mt-1 font-medium text-md-onSurface">{language === "en" ? item.nEn : item.nZh}</p>
                  <p className="text-sm text-md-onSurfaceVariant">— {language === "en" ? item.dEn : item.dZh}</p>
                </div>
              ))}
            </div>

            <p className="mt-8 text-center text-md-onSurfaceVariant">
              {language === "en"
                ? "Here, there are no pure clients or vendors. Only interconnected Human Nodes."
                : "在这里，没有纯粹的客户或供应商，只有彼此连接的人类节点。"}
            </p>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="container">
          <p className="text-center text-xs uppercase tracking-[0.16em] text-md-primary">03 · {language === "en" ? "Node Map" : "节点网络"}</p>
          <Card className="mx-auto mt-6 max-w-6xl overflow-hidden">
            <CardContent className="grid gap-8 p-8 md:grid-cols-[1.25fr_0.75fr]">
              <div>
                <h2 className="text-2xl font-medium text-md-onSurface">{language === "en" ? "The Network" : "网络"}</h2>
                <p className="mt-2 text-md-onSurfaceVariant">{language === "en" ? "Click any node to discover their story" : "点击任意节点查看她们的故事"}</p>

                <div className="relative mt-6 h-[460px] rounded-[32px] bg-md-surfaceLow/70 p-4">
                  <svg className="absolute inset-0 h-full w-full" aria-hidden="true">
                    {nodePositions.map((from, i) => {
                      const to = nodePositions[(i + 1) % nodePositions.length]
                      return <line key={`a-${i}`} x1={`${from.left}%`} y1={`${from.top}%`} x2={`${to.left}%`} y2={`${to.top}%`} stroke="#8A55ED" strokeOpacity="0.22" strokeWidth="1" />
                    })}
                    {nodePositions.map((from, i) => {
                      const to = nodePositions[0]
                      if (i === 0) return null
                      return <line key={`b-${i}`} x1={`${from.left}%`} y1={`${from.top}%`} x2={`${to.left}%`} y2={`${to.top}%`} stroke="#8A55ED" strokeOpacity="0.15" strokeWidth="1" />
                    })}
                  </svg>

                  {teamMembers.map((member, index) => {
                    const active = selectedId === member.id
                    return (
                      <button
                        key={member.id}
                        onClick={() => setSelectedId(member.id)}
                        className={`absolute flex h-11 w-11 items-center justify-center rounded-full text-sm font-medium transition-all duration-300 ease-md active:scale-95 ${
                          active ? "bg-md-primary text-white shadow-lg" : "bg-md-background text-md-primary shadow-sm hover:bg-md-primary/10"
                        }`}
                        style={{ top: `${nodePositions[index].top}%`, left: `${nodePositions[index].left}%`, transform: "translate(-50%, -50%)" }}
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
                  <p className="mt-4 text-sm leading-relaxed text-md-onSurfaceVariant">{language === "en" ? selected.quoteEn || "Profile updating." : selected.quoteZh || "资料更新中。"}</p>
                </div>
                <p className="text-xs text-md-onSurfaceVariant">{language === "en" ? "Mobile concept: pinch to zoom, drag to pan (next iteration)." : "移动端交互建议：支持双指缩放、拖拽平移（下一迭代实现）。"}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="pb-16 pt-10">
        <div className="container">
          <p className="text-center text-xs uppercase tracking-[0.16em] text-md-primary">04 · {language === "en" ? "Shared Language + Closing" : "共同语言与结尾"}</p>
          <div className="mx-auto mt-6 grid max-w-6xl gap-6 md:grid-cols-2">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-medium text-md-onSurface">{language === "en" ? "Our Shared Language" : "我们的共同语言"}</h3>
                <div className="mt-4 space-y-3">
                  {glossary.map((g) => (
                    <div key={g.term} className="rounded-2xl bg-md-background p-3">
                      <p className="font-medium text-md-onSurface">{g.term}</p>
                      <p className="text-sm text-md-onSurfaceVariant">{language === "en" ? g.defEn : g.defZh}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-medium text-md-onSurface">{language === "en" ? "In their own words" : "她们自己的表达"}</h3>
                <div className="mt-4 space-y-3 text-sm text-md-onSurfaceVariant">
                  <p>“Women should be seen, connected, and empowered.” — Clara</p>
                  <p>“One woman's rise inspires more women to move forward.” — Jiaqi</p>
                  <p>“True lasting power comes from the willingness to walk together.” — Josie</p>
                  <p>“In an open system, let things happen, let force flow — owned by no one.” — Jill</p>
                </div>
                <div className="mt-6 rounded-2xl bg-md-primary/10 p-4">
                  <p className="text-lg font-medium text-md-onSurface">{language === "en" ? "2026. This is us." : "2026。这就是我们。"}</p>
                  <p className="mt-2 text-sm text-md-onSurfaceVariant">{language === "en" ? "This map is still growing. If you feel the resonance, next year we'll be waiting." : "这张连接地图仍在生长。如果你感受到共鸣，明年我们等你。"}</p>
                </div>
                <div className="mt-6">
                  <Link href="/get-involved">
                    <Button size="lg">{language === "en" ? "Join Us" : "加入我们"} <ArrowRight className="h-4 w-4" /></Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
