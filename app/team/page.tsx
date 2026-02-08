"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/components/language-provider"

export default function TeamPage() {
  const { language } = useLanguage()

  const capabilities = [
    {
      percent: "35%",
      name: language === "en" ? "System Architecture" : "系统架构",
      desc: language === "en" ? "— turning chaos into order" : "— 化混沌为秩序",
      color: "bg-[#303030]",
    },
    {
      percent: "30%",
      name: language === "en" ? "Tech & Foresight" : "技术与前瞻",
      desc: language === "en" ? "— designing what's next" : "— 设计未来",
      color: "bg-[#8A55ED]",
    },
    {
      percent: "20%",
      name: language === "en" ? "Humanities & Connection" : "人文与连接",
      desc: language === "en" ? "— preserving warmth" : "— 保有温度",
      color: "bg-[#DEC4FF]",
    },
    {
      percent: "15%",
      name: language === "en" ? "Cross-boundary Vitality" : "跨界活力",
      desc: language === "en" ? "— beyond profession" : "— 超越专业",
      color: "bg-[#E6E6E6]",
    },
  ]

  const glossary = [
    {
      term: language === "en" ? "Open-source System" : "开源系统",
      def: language === "en" ? "No one owns it. Everyone builds it." : "无人拥有，共同构建。",
    },
    {
      term: language === "en" ? "Node" : "节点",
      def: language === "en" ? "Autonomous collaborators with independent energy." : "拥有独立能量的自主协作者。",
    },
    {
      term: language === "en" ? "Gate Keeper" : "守门人",
      def: language === "en" ? "A guardian of the system's values." : "系统价值的守护者。",
    },
    {
      term: language === "en" ? "Force" : "原力",
      def: language === "en" ? "The intrinsic power within every woman." : "每位女性内在的力量。",
    },
  ]

  const quotes = [
    {
      text: language === "en" 
        ? "Women should be seen, connected, and empowered." 
        : "女性应该被看见、被连接、被赋能。",
      author: "Clara",
    },
    {
      text: language === "en" 
        ? "One woman's rise inspires more women to move forward." 
        : "一个女性的崛起激励更多女性前行。",
      author: "Jiaqi",
    },
    {
      text: language === "en" 
        ? "True lasting power comes from the willingness to walk together." 
        : "真正持久的力量来自于愿意携手同行。",
      author: "Josie",
    },
    {
      text: language === "en" 
        ? "In an open system, let things happen, let force flow — owned by no one." 
        : "在一个开放的系统中，让事情发生，让原力流动——不属于任何人。",
      author: "Jill, Founder",
      featured: true,
    },
  ]

  const wordCloud = [
    { text: language === "en" ? "Co-creation" : "共创", size: "xl" },
    { text: language === "en" ? "Connection" : "连接", size: "lg" },
    { text: language === "en" ? "System" : "系统", size: "xl" },
    { text: language === "en" ? "Long-term Value" : "长期价值", size: "lg" },
    { text: language === "en" ? "Open-source" : "开源", size: "md" },
    { text: language === "en" ? "Sustainable" : "可持续", size: "lg" },
    { text: language === "en" ? "Growth" : "成长", size: "md" },
    { text: language === "en" ? "Nodes" : "节点", size: "sm" },
    { text: language === "en" ? "Resonance" : "共鸣", size: "md" },
    { text: language === "en" ? "Force" : "原力", size: "sm" },
  ]

  const nodes = [
    { initial: "J", type: "founder", top: "38%", left: "44%" },
    { initial: "L", type: "co-lead", top: "55%", left: "28%" },
    { initial: "C", type: "member", top: "18%", left: "22%" },
    { initial: "D", type: "member", top: "8%", left: "48%" },
    { initial: "H", type: "member", top: "22%", left: "72%" },
    { initial: "J", type: "member", top: "62%", left: "66%" },
    { initial: "J", type: "member", top: "78%", left: "44%" },
  ]

  return (
    <div className="pt-20">
      {/* Part 1: Opening / Hero */}
      <section className="bg-[#E6E6E6] py-20 relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-[15%] right-[8%] w-44 h-44 bg-[#8A55ED]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-[15%] left-[12%] w-32 h-32 bg-[#DEC4FF]/30 rounded-full blur-2xl" />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-[#8A55ED] mb-6">
            She Rewires Singapore 2026
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-[#303030] mb-4 leading-tight">
            {language === "en" ? "Where " : ""}
            <em className="text-[#8A55ED] not-italic">{language === "en" ? "Force Nodes" : "原力节点"}</em>
            <br />
            {language === "en" ? "Converge" : "汇聚之地"}
          </h1>
          <p className="text-lg italic text-[#303030]/70 mb-8">
            {language === "en" 
              ? "A living map of connection, still growing" 
              : "一张仍在生长的连接地图"}
          </p>
          <div className="max-w-lg mx-auto bg-white/60 backdrop-blur-sm rounded-2xl p-6">
            <p className="text-[#303030]/80 leading-relaxed">
              {language === "en"
                ? "She Rewires belongs to no one. It is an open-source system where individuals act as nodes, each releasing their own force."
                : "She Rewires 不属于任何人。它是一个开源系统，每个人都是节点，释放自己的原力。"}
            </p>
          </div>
        </div>
      </section>

      {/* Part 2: Collective Portrait */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Stats Hero */}
          <div className="text-center mb-12">
            <div className="text-8xl md:text-9xl font-light text-[#303030] leading-none tracking-tight">14</div>
            <p className="text-sm tracking-[0.15em] uppercase text-[#303030]/60 mb-4">
              {language === "en" ? "Force Nodes · 2026 Co-builders" : "原力节点 · 2026 共建者"}
            </p>
            <p className="text-lg text-[#303030] max-w-md mx-auto leading-relaxed">
              {language === "en" ? "They weren't recruited." : "她们不是被招募的。"}
              <br />
              {language === "en" 
                ? <>They emerged through <span className="text-[#8A55ED] italic">value resonance</span>.</>
                : <>她们因<span className="text-[#8A55ED]">价值共鸣</span>而汇聚。</>}
            </p>
          </div>

          {/* Capability Grid */}
          <div className="grid md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto mb-12">
            {/* Ring Chart Placeholder */}
            <div className="flex justify-center">
              <div 
                className="w-48 h-48 rounded-full flex items-center justify-center relative"
                style={{
                  background: `conic-gradient(
                    #303030 0deg 126deg,
                    #8A55ED 126deg 234deg,
                    #DEC4FF 234deg 306deg,
                    #E6E6E6 306deg 360deg
                  )`
                }}
              >
                <div className="absolute w-36 h-36 bg-white rounded-full" />
                <div className="relative z-10 text-center">
                  <div className="text-4xl font-light text-[#303030]">14</div>
                  <div className="text-xs uppercase tracking-wider text-[#303030]/60">
                    {language === "en" ? "Nodes" : "节点"}
                  </div>
                </div>
              </div>
            </div>

            {/* Capability List */}
            <div className="space-y-3">
              {capabilities.map((cap, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-3 p-4 bg-[#E6E6E6]/30 rounded-xl"
                >
                  <span className={`w-2 h-2 rounded-full ${cap.color}`} />
                  <span className="font-medium text-[#303030] min-w-[45px]">{cap.percent}</span>
                  <span className="font-medium text-[#303030]">{cap.name}</span>
                  <span className="text-[#303030]/60 text-sm">{cap.desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Manifesto */}
          <div className="max-w-2xl mx-auto text-center p-8 bg-[#E6E6E6]/30 rounded-2xl mb-12">
            <p className="text-lg italic text-[#303030]/80 leading-relaxed">
              {language === "en" 
                ? <>Here, there are no pure clients or vendors.<br />Only interconnected <strong className="not-italic text-[#303030]">Human Nodes</strong>.</>
                : <>在这里，没有纯粹的客户或供应商。<br />只有相互连接的<strong className="not-italic text-[#303030]">人类节点</strong>。</>}
            </p>
          </div>

          {/* Word Cloud */}
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-3 max-w-2xl mx-auto">
            {wordCloud.map((word, index) => (
              <span 
                key={index}
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

      {/* Part 3: Node Map */}
      <section className="py-16 bg-[#DEC4FF]/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white/50 rounded-3xl p-8 text-center">
            <h3 className="text-2xl font-semibold text-[#303030] mb-2">
              {language === "en" ? "The Network" : "网络"}
            </h3>
            <p className="text-[#303030]/60 mb-8">
              {language === "en" ? "Click any node to discover their story" : "点击任意节点发现她们的故事"}
            </p>

            {/* Nodes Demo */}
            <div className="relative h-64 mb-8">
              {nodes.map((node, index) => (
                <div
                  key={index}
                  className={`
                    absolute flex items-center justify-center rounded-full 
                    font-medium text-[#303030] cursor-pointer
                    transition-transform hover:scale-110
                    ${node.type === "founder" 
                      ? "w-16 h-16 bg-[#E6E6E6] border-3 border-[#8A55ED] text-xl" 
                      : node.type === "co-lead"
                        ? "w-14 h-14 bg-[#E6E6E6] border-2 border-[#DEC4FF] text-lg"
                        : "w-12 h-12 bg-[#E6E6E6] border-2 border-[#DEC4FF]/50"
                    }
                  `}
                  style={{ top: node.top, left: node.left }}
                >
                  {node.initial}
                </div>
              ))}
              
              {/* Connection lines (decorative) */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
                <line x1="48%" y1="42%" x2="32%" y2="59%" stroke="#DEC4FF" strokeWidth="1" opacity="0.5" />
                <line x1="48%" y1="42%" x2="26%" y2="22%" stroke="#DEC4FF" strokeWidth="1" opacity="0.5" />
                <line x1="48%" y1="42%" x2="52%" y2="12%" stroke="#DEC4FF" strokeWidth="1" opacity="0.5" />
                <line x1="48%" y1="42%" x2="76%" y2="26%" stroke="#DEC4FF" strokeWidth="1" opacity="0.5" />
                <line x1="48%" y1="42%" x2="70%" y2="66%" stroke="#DEC4FF" strokeWidth="1" opacity="0.5" />
                <line x1="48%" y1="42%" x2="48%" y2="82%" stroke="#DEC4FF" strokeWidth="1" opacity="0.5" />
              </svg>
            </div>

            <div className="bg-[#8A55ED]/5 rounded-xl p-4 text-left text-sm text-[#303030]/70">
              <strong className="text-[#8A55ED]">
                {language === "en" ? "Interaction concept:" : "交互概念："}
              </strong>{" "}
              {language === "en" 
                ? "A constellation-style network with 14 nodes connected by subtle lines. Users can click nodes to view member profiles."
                : "一个由14个节点组成的星座式网络，节点之间由细线连接。用户可以点击节点查看成员资料。"}
            </div>
          </div>
        </div>
      </section>

      {/* Part 4: Shared Language + Closing */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Glossary */}
          <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto mb-12">
            {glossary.map((item, index) => (
              <Card key={index} className="border-[#DEC4FF]/30 bg-[#E6E6E6]/20">
                <CardContent className="p-6 text-center">
                  <div className="text-xl font-semibold text-[#303030] mb-2">{item.term}</div>
                  <div className="text-sm italic text-[#303030]/60">{item.def}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Quotes */}
          <div className="max-w-2xl mx-auto mb-12">
            <p className="text-center italic text-[#303030]/60 mb-6">
              {language === "en" ? "In their own words" : "她们的话语"}
            </p>
            <div className="space-y-4">
              {quotes.map((quote, index) => (
                <div 
                  key={index}
                  className={`
                    p-5 bg-[#E6E6E6]/30 rounded-xl
                    ${index % 2 === 0 ? "mr-[12%]" : "ml-[12%] text-right"}
                    ${quote.featured ? "mx-[5%] text-center border border-[#8A55ED]/20 bg-[#8A55ED]/5" : ""}
                  `}
                >
                  <p className="italic text-[#303030] mb-2 leading-relaxed">"{quote.text}"</p>
                  <p className="text-sm text-[#303030]/50">— {quote.author}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Closing */}
          <div className="text-center border-t border-[#E6E6E6] pt-12">
            <h2 className="text-4xl font-light text-[#303030] mb-6">
              {language === "en" ? "2026. This is us." : "2026。这就是我们。"}
            </h2>
            <p className="text-lg italic text-[#303030]/70 leading-relaxed mb-6">
              {language === "en" 
                ? <>This map of connection is still growing.<br />If you feel the <span className="text-[#8A55ED]">resonance</span>,<br />next year, we'll be waiting.</>
                : <>这张连接的地图仍在生长。<br />如果你感受到<span className="text-[#8A55ED]">共鸣</span>，<br />明年，我们在这里等你。</>}
            </p>
            <p className="text-xs uppercase tracking-[0.12em] text-[#303030]/50">
              She Rewires Singapore 2026
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
