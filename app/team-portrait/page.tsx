"use client"

import { useState } from "react"
import { useLanguage } from "@/components/language-provider"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

// Team member data
const teamMembers = [
  { id: 1, initial: "J", name: "Jill", role: "Founder", quote: "In an open system, let things happen, let force flow — owned by no one." },
  { id: 2, initial: "L", name: "Luna", role: "Co-Lead", quote: "" },
  { id: 3, initial: "C", name: "Clara", role: "Co-builder", quote: "Women should be seen, connected, and empowered." },
  { id: 4, initial: "J", name: "Jiaqi", role: "Co-builder", quote: "One woman's rise inspires more women to move forward." },
  { id: 5, initial: "J", name: "Josie", role: "Co-builder", quote: "True lasting power comes from the willingness to walk together." },
  { id: 6, initial: "D", name: "Diana", role: "Co-builder", quote: "" },
  { id: 7, initial: "H", name: "Helena", role: "Co-builder", quote: "" },
  { id: 8, initial: "S", name: "Sophie", role: "Co-builder", quote: "" },
  { id: 9, initial: "M", name: "Mei", role: "Co-builder", quote: "" },
  { id: 10, initial: "A", name: "Anna", role: "Co-builder", quote: "" },
  { id: 11, initial: "E", name: "Emily", role: "Co-builder", quote: "" },
  { id: 12, initial: "R", name: "Rachel", role: "Co-builder", quote: "" },
  { id: 13, initial: "K", name: "Kate", role: "Co-builder", quote: "" },
  { id: 14, initial: "Y", name: "Yuki", role: "Co-builder", quote: "" },
]

// Capability data
const capabilities = [
  { percent: 35, name: "System Architecture", desc: "turning chaos into order", color: "#000000" },
  { percent: 30, name: "Tech & Foresight", desc: "designing what's next", color: "#8A55ED" },
  { percent: 20, name: "Humanities & Connection", desc: "preserving warmth", color: "#DEC4FF" },
  { percent: 15, name: "Cross-boundary Vitality", desc: "beyond profession", color: "#8A55ED" },
]

// Glossary terms
const glossaryTerms = [
  { term: "Open-source System", def: "No one owns it. Everyone builds it." },
  { term: "Node", def: "Autonomous collaborators with independent energy." },
  { term: "Gate Keeper", def: "A guardian of the system's values." },
  { term: "Force", def: "The intrinsic power within every woman." },
]

// Word cloud words
const wordCloudWords = [
  { text: "Co-creation", size: "xl" },
  { text: "Connection", size: "lg" },
  { text: "System", size: "xl" },
  { text: "Long-term Value", size: "lg" },
  { text: "Open-source", size: "md" },
  { text: "Sustainable", size: "lg" },
  { text: "Growth", size: "md" },
  { text: "Nodes", size: "sm" },
  { text: "Resonance", size: "md" },
  { text: "Force", size: "sm" },
]

export default function TeamPortraitPage() {
  const { language } = useLanguage()
  const [selectedMember, setSelectedMember] = useState<number | null>(null)

  const content = {
    en: {
      badge: "She Rewires Singapore 2026",
      heroTitle: "Where Force Nodes Converge",
      heroSubtitle: "A living map of connection, still growing",
      heroQuote: "She Rewires belongs to no one. It is an open-source system where individuals act as nodes, each releasing their own force.",
      statsLabel: "Force Nodes · 2026 Co-builders",
      statsTagline1: "They weren't recruited.",
      statsTagline2: "They emerged through value resonance.",
      capabilitiesTitle: "Capability Distribution",
      manifesto: "Here, there are no pure clients or vendors. Only interconnected Human Nodes.",
      networkTitle: "The Network",
      networkDesc: "Click any node to discover their story",
      networkNote: "A constellation-style network with 14 nodes connected by subtle lines. Users can click nodes to view member profiles.",
      glossaryTitle: "Our Shared Language",
      quotesTitle: "In their own words",
      closingTitle: "2026. This is us.",
      closingText1: "This map of connection is still growing.",
      closingText2: "If you feel the resonance,",
      closingText3: "next year, we'll be waiting.",
      ctaButton: "Join Us",
    },
    zh: {
      badge: "She Rewires 新加坡 2026",
      heroTitle: "力量节点汇聚之处",
      heroSubtitle: "一幅仍在生长的连接地图",
      heroQuote: "She Rewires 不属于任何人。它是一个开源系统，每个人都是节点，释放自己的力量。",
      statsLabel: "力量节点 · 2026 共建者",
      statsTagline1: "她们不是被招募的。",
      statsTagline2: "她们因价值共鸣而涌现。",
      capabilitiesTitle: "能力分布",
      manifesto: "在这里，没有纯粹的客户或供应商。只有相互连接的人类节点。",
      networkTitle: "网络",
      networkDesc: "点击任意节点了解她们的故事",
      networkNote: "星座式网络，14个节点由微妙的线条连接。用户可以点击节点查看成员资料。",
      glossaryTitle: "我们的共同语言",
      quotesTitle: "用她们自己的话说",
      closingTitle: "2026。这就是我们。",
      closingText1: "这幅连接地图仍在生长。",
      closingText2: "如果你感受到共鸣，",
      closingText3: "明年，我们等你。",
      ctaButton: "加入我们",
    },
  }

  const t = content[language]

  // Node positions for the constellation
  const nodePositions = [
    { top: "38%", left: "44%" }, // Founder - center
    { top: "55%", left: "28%" }, // Co-Lead
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

  return (
    <div className="pt-20 bg-[#E6E6E6]">
      {/* Part 1: Opening / Hero */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-[15%] right-[8%] w-44 h-44 bg-[#8A55ED]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-[15%] left-[12%] w-32 h-32 bg-[#DEC4FF]/30 rounded-full blur-2xl" />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-[#8A55ED] mb-6">
            {t.badge}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-[#303030] mb-4 leading-tight">
            {t.heroTitle.split("Force Nodes")[0]}
            <em className="text-[#8A55ED] italic">Force Nodes</em>
            {t.heroTitle.split("Force Nodes")[1]}
          </h1>
          <p className="text-lg md:text-xl italic text-[#303030]/70 mb-10">
            {t.heroSubtitle}
          </p>
          <div className="max-w-lg mx-auto p-6 bg-white/60 rounded-2xl backdrop-blur-sm">
            <p className="text-[#303030]/80 leading-relaxed">
              {t.heroQuote}
            </p>
          </div>
        </div>
      </section>

      {/* Part 2: Collective Portrait */}
      <section className="py-16 bg-[#DEC4FF]/30">
        <div className="container mx-auto px-4">
          {/* Stats Hero */}
          <div className="text-center mb-16">
            <div className="text-7xl md:text-9xl font-light text-[#303030] leading-none tracking-tighter">
              14
            </div>
            <p className="text-xs tracking-[0.15em] uppercase text-[#303030]/70 mb-6">
              {t.statsLabel}
            </p>
            <p className="text-lg text-[#303030] max-w-md mx-auto leading-relaxed">
              {t.statsTagline1}<br />
              {language === "en" ? (
                <>They emerged through <span className="text-[#8A55ED] italic">value resonance</span>.</>
              ) : (
                <>她们因<span className="text-[#8A55ED] italic">价值共鸣</span>而涌现。</>
              )}
            </p>
          </div>

          {/* Capability Distribution */}
          <div className="grid md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto mb-12">
            {/* Ring Chart */}
            <div className="flex justify-center">
              <div 
                className="w-48 h-48 rounded-full flex items-center justify-center relative"
                style={{
                  background: `conic-gradient(
                    #000000 0deg 126deg,
                    #8A55ED 126deg 234deg,
                    #DEC4FF 234deg 306deg,
                    #8A55ED 306deg 360deg
                  )`
                }}
              >
                <div className="absolute w-36 h-36 bg-[#E6E6E6] rounded-full" />
                <div className="relative z-10 text-center">
                  <div className="text-3xl font-light text-[#303030]">14</div>
                  <div className="text-xs uppercase tracking-wider text-[#303030]/70">Nodes</div>
                </div>
              </div>
            </div>

            {/* Capability List */}
            <div className="space-y-3">
              {capabilities.map((cap, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 bg-white/50 rounded-xl">
                  <span 
                    className="w-2 h-2 rounded-full flex-shrink-0" 
                    style={{ backgroundColor: cap.color }}
                  />
                  <span className="font-medium min-w-[40px] text-[#303030]">{cap.percent}%</span>
                  <span className="font-medium text-[#303030]">{cap.name}</span>
                  <span className="text-sm text-[#303030]/60">— {cap.desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Manifesto */}
          <div className="text-center p-8 bg-white/50 rounded-2xl max-w-2xl mx-auto mb-12">
            <p className="text-lg italic text-[#303030]/80">
              {t.manifesto.split("Human Nodes")[0]}
              <strong className="not-italic text-[#303030]">Human Nodes</strong>
              {t.manifesto.split("Human Nodes")[1]}
            </p>
          </div>

          {/* Word Cloud */}
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-3 max-w-2xl mx-auto">
            {wordCloudWords.map((word, idx) => (
              <span
                key={idx}
                className={`
                  ${word.size === "xl" ? "text-2xl font-medium italic text-[#303030]" : ""}
                  ${word.size === "lg" ? "text-lg text-[#303030]" : ""}
                  ${word.size === "md" ? "text-base text-[#303030]/70" : ""}
                  ${word.size === "sm" ? "text-sm text-[#303030]/50" : ""}
                `}
              >
                {word.text}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Part 3: Node Map / Network */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-[#E6E6E6]/50 rounded-3xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-medium text-[#303030] text-center mb-2">
                {t.networkTitle}
              </h3>
              <p className="text-[#303030]/70 text-center mb-10">
                {t.networkDesc}
              </p>

              {/* Interactive Node Map */}
              <div className="relative h-[400px] md:h-[500px]">
                {/* Connection Lines (SVG) */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  {/* Draw some connecting lines between nodes */}
                  <line x1="44%" y1="38%" x2="28%" y2="55%" stroke="#DEC4FF" strokeWidth="1" />
                  <line x1="44%" y1="38%" x2="48%" y2="8%" stroke="#DEC4FF" strokeWidth="1" />
                  <line x1="44%" y1="38%" x2="72%" y2="22%" stroke="#DEC4FF" strokeWidth="1" />
                  <line x1="44%" y1="38%" x2="22%" y2="18%" stroke="#DEC4FF" strokeWidth="1" />
                  <line x1="44%" y1="38%" x2="66%" y2="62%" stroke="#DEC4FF" strokeWidth="1" />
                  <line x1="44%" y1="38%" x2="44%" y2="78%" stroke="#DEC4FF" strokeWidth="1" />
                  <line x1="28%" y1="55%" x2="22%" y2="18%" stroke="#DEC4FF" strokeWidth="0.5" />
                  <line x1="72%" y1="22%" x2="66%" y2="62%" stroke="#DEC4FF" strokeWidth="0.5" />
                  <line x1="48%" y1="8%" x2="35%" y2="12%" stroke="#DEC4FF" strokeWidth="0.5" />
                  <line x1="44%" y1="78%" x2="20%" y2="70%" stroke="#DEC4FF" strokeWidth="0.5" />
                  <line x1="44%" y1="78%" x2="65%" y2="82%" stroke="#DEC4FF" strokeWidth="0.5" />
                </svg>

                {/* Nodes */}
                {teamMembers.map((member, idx) => (
                  <button
                    key={member.id}
                    className={`
                      absolute transform -translate-x-1/2 -translate-y-1/2
                      rounded-full flex items-center justify-center
                      font-medium text-[#303030] transition-all duration-300
                      hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#8A55ED]
                      ${member.role === "Founder" 
                        ? "w-16 h-16 border-3 border-[#8A55ED] bg-white text-xl" 
                        : member.role === "Co-Lead"
                          ? "w-14 h-14 border-2 border-[#8A55ED] bg-white text-lg"
                          : "w-12 h-12 border-2 border-[#DEC4FF] bg-white"
                      }
                      ${selectedMember === member.id ? "ring-4 ring-[#8A55ED]/30 scale-110" : ""}
                    `}
                    style={{ top: nodePositions[idx]?.top, left: nodePositions[idx]?.left }}
                    onClick={() => setSelectedMember(selectedMember === member.id ? null : member.id)}
                  >
                    {member.initial}
                  </button>
                ))}

                {/* Selected Member Info Card */}
                {selectedMember && (
                  <Card className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-[90%] max-w-sm bg-white/95 backdrop-blur-sm border-[#8A55ED]/20 shadow-lg">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-full bg-[#DEC4FF] flex items-center justify-center font-medium text-[#303030]">
                          {teamMembers.find(m => m.id === selectedMember)?.initial}
                        </div>
                        <div>
                          <div className="font-medium text-[#303030]">
                            {teamMembers.find(m => m.id === selectedMember)?.name}
                          </div>
                          <div className="text-sm text-[#8A55ED]">
                            {teamMembers.find(m => m.id === selectedMember)?.role}
                          </div>
                        </div>
                      </div>
                      {teamMembers.find(m => m.id === selectedMember)?.quote && (
                        <p className="text-sm italic text-[#303030]/70">
                          "{teamMembers.find(m => m.id === selectedMember)?.quote}"
                        </p>
                      )}
                    </CardContent>
                  </Card>
                )}
              </div>

              <div className="mt-8 p-4 bg-[#8A55ED]/5 rounded-xl">
                <p className="text-sm text-[#303030]/70">
                  <strong className="text-[#8A55ED]">{language === "en" ? "Interaction:" : "互动："}</strong>{" "}
                  {t.networkNote}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Part 4: Shared Language + Closing */}
      <section className="py-16 bg-[#E6E6E6]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Glossary */}
            <h3 className="text-xl font-medium text-[#303030] text-center mb-8">
              {t.glossaryTitle}
            </h3>
            <div className="grid md:grid-cols-2 gap-4 mb-16">
              {glossaryTerms.map((item, idx) => (
                <Card key={idx} className="bg-white/50 border-none">
                  <CardContent className="p-6 text-center">
                    <div className="text-xl font-medium text-[#303030] mb-2">
                      {item.term}
                    </div>
                    <div className="text-sm italic text-[#303030]/70">
                      {item.def}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quotes */}
            <p className="text-lg italic text-[#303030]/70 text-center mb-8">
              {t.quotesTitle}
            </p>
            <div className="space-y-4 mb-16">
              {teamMembers.filter(m => m.quote).slice(0, 3).map((member, idx) => (
                <div 
                  key={member.id}
                  className={`
                    p-5 bg-white/50 rounded-xl
                    ${idx % 2 === 0 ? "mr-[12%]" : "ml-[12%] text-right"}
                  `}
                >
                  <p className="italic text-[#303030] mb-2 leading-relaxed">
                    "{member.quote}"
                  </p>
                  <p className="text-sm text-[#303030]/50">— {member.name}</p>
                </div>
              ))}
              
              {/* Featured quote from founder */}
              <div className="mx-[5%] p-6 bg-[#8A55ED]/5 rounded-xl border border-[#8A55ED]/15 text-center">
                <p className="italic text-[#303030] mb-2 leading-relaxed">
                  "{teamMembers[0].quote}"
                </p>
                <p className="text-sm text-[#303030]/50">— {teamMembers[0].name}, Founder</p>
              </div>
            </div>

            {/* Closing */}
            <div className="text-center py-12 border-t border-[#303030]/10">
              <h2 className="text-3xl md:text-4xl font-light text-[#303030] mb-6">
                {t.closingTitle}
              </h2>
              <p className="text-lg italic text-[#303030]/70 leading-loose mb-8">
                {t.closingText1}<br />
                {language === "en" ? (
                  <>If you feel the <span className="text-[#8A55ED]">resonance</span>,</>
                ) : (
                  <>如果你感受到<span className="text-[#8A55ED]">共鸣</span>，</>
                )}<br />
                {t.closingText3}
              </p>
              <Link href="/get-involved">
                <Button 
                  size="lg"
                  className="bg-[#8A55ED] hover:bg-[#8A55ED]/90 text-white px-8 py-4 rounded-full font-medium"
                >
                  {t.ctaButton} <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <p className="text-xs tracking-[0.12em] uppercase text-[#303030]/50 mt-8">
                She Rewires Singapore 2026
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
