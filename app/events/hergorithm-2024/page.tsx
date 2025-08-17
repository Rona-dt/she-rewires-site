"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users, Quote, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/components/language-provider"

export default function HergorithmEventPage() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: "The HERgorithm: How Women Are Redefining Technology Through Diversity and Innovation?",
      date: "July 10-12, 2024",
      location: "Beijing, China",
      venue: "TiD Conference Parallel Forum",
      introduction:
        "Organized by the Zhongguancun Zhilian Software Service Quality Innovation Alliance, in collaboration with She Rewires, this forum themed 'Diversity · Innovation · Future' brought together over 30 women leaders and cross-industry experts to discuss the role of women in technological transformation.",
      highlights: "Event Highlights",
      conclusion:
        "When 'She' meets 'Algorithm', it's about redefining technology through diversity. Women's innovation is not about fixing the rules, but creating new ones.",
      gallery: "Photo Gallery",
    },
    zh: {
      title: "The HERgorithm：女性如何以多元创新重塑科技未来？",
      date: "2024年7月10日 - 12日",
      location: "北京，中国",
      venue: "质量竞争力大会 (TiD Conference) 平行论坛",
      introduction:
        "由中关村智联软件服务业质量创新联盟主办，北京软件和信息服务业协会智能分会、CMMI研究院、《中国金融电脑》杂志社（FCC）、她原力She Rewires协办。本论坛以'多元·创新·未来'为主题，汇聚 30+ 位来自 AI、金融、教育、设计、法律等领域的女性领袖与跨界嘉宾，通过炉边对话、圆桌讨论与社交，探讨女性在技术变革中的独特视角与影响力。",
      highlights: "精彩瞬间",
      conclusion:
        "当'她'与'算法'相遇，不只是关于女性参与科技，而是多元经验如何重构技术逻辑。女性的创新不是修正规则，而是重新定义规则。",
      gallery: "图片展示",
    },
  }

  const t = content[language]

  const highlights = [
    {
      type: language === "en" ? "Fireside Chat" : "炉边对话",
      title: language === "en" ? "When Children Lead Educational Reform" : "当孩子开始主导教育改革",
      speakers: "唐文洁, 眉佳, 轩尔",
      keyIdea:
        language === "en"
          ? "AI era education should trust and let go, cultivating creativity rather than mechanical repetition."
          : "AI时代教育应信任与放手，培养创造力而非机械重复。",
    },
    {
      type: language === "en" ? "Panel 1" : "圆桌1",
      title:
        language === "en" ? "Product Logic and Technical Imagination in the AI Era" : "AI时代的产品逻辑与技术想象力",
      speakers: "李大巍, 王蕊, Tina Chen",
      keyIdea:
        language === "en"
          ? "AI products have no borders, balancing convenience with risk, creating solutions with warmth."
          : "AI产品无国界，便捷与风险平衡，有温度的方案。",
    },
    {
      type: language === "en" ? "Panel 2" : "圆桌2",
      title: language === "en" ? "The Future of Education, Content and Cross-border" : "教育、内容与跨界的未来",
      speakers: "钟晓颖, 陆瑶",
      keyIdea:
        language === "en" ? "Knowledge melting pot, technology + humanistic vision." : "知识熔炉，技术+人文视野。",
    },
    {
      type: language === "en" ? "Panel 3" : "圆桌3",
      title: language === "en" ? "Technology, Organization and Sustainable Future" : "技术、组织与可持续未来",
      speakers: "胡斐, 陈芳",
      keyIdea:
        language === "en"
          ? "Women's power participation, global sustainable data infrastructure."
          : "女性力量参与，全球可持续数据基础设施。",
    },
  ]

  return (
    <div className="pt-20">
      {/* Back Button */}
      <div className="container mx-auto px-4 py-4">
        <Link href="/events">
          <Button variant="ghost" className="text-purple-600 hover:text-purple-700">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Events
          </Button>
        </Link>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-br from-purple-600 to-purple-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">{t.title}</h1>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-lg opacity-90">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                {t.date}
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                {t.location}
              </div>
            </div>
            <p className="text-lg mt-4 opacity-90">{t.venue}</p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              {language === "en" ? "Event Introduction" : "活动简介"}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">{t.introduction}</p>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 bg-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">{t.highlights}</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {highlights.map((highlight, index) => (
                <Card key={index} className="border-purple-200">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {highlight.type}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{highlight.title}</h3>
                    <div className="flex items-center text-gray-600 mb-4">
                      <Users className="w-4 h-4 mr-2" />
                      <span className="text-sm">{highlight.speakers}</span>
                    </div>
                    <div className="bg-purple-100 p-4 rounded-lg">
                      <Quote className="w-5 h-5 text-purple-600 mb-2" />
                      <p className="text-gray-700 italic">{highlight.keyIdea}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">{t.gallery}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="aspect-video bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg">
                <img
                  src="/placeholder.svg?height=300&width=400"
                  alt="Main Forum Panoramic"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="aspect-video bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg">
                <img
                  src="/placeholder.svg?height=300&width=400"
                  alt="Fireside Chat Scene"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="aspect-video bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg">
                <img
                  src="/placeholder.svg?height=300&width=400"
                  alt="Panel Discussion"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="aspect-video bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg">
                <img
                  src="/placeholder.svg?height=300&width=400"
                  alt="Speakers Group Photo"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="aspect-video bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg">
                <img
                  src="/placeholder.svg?height=300&width=400"
                  alt="Networking Session"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="aspect-video bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg">
                <img
                  src="/placeholder.svg?height=300&width=400"
                  alt="Audience Engagement"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-purple-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Quote className="w-12 h-12 mx-auto mb-6 opacity-80" />
            <p className="text-xl md:text-2xl leading-relaxed font-medium">{t.conclusion}</p>
          </div>
        </div>
      </section>
    </div>
  )
}
