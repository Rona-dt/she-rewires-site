"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Lightbulb, Users, Globe, BookOpen } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export default function ActionsPage() {
  const { t, language } = useLanguage()

  const actions = [
    {
      icon: <Lightbulb className="w-8 h-8 text-lime" />,
      title: language === "en" ? "Innovation Labs" : "创新实验室",
      description:
        language === "en"
          ? "Supporting women-led tech startups and innovation projects across China."
          : "支持中国女性主导的科技创业和创新项目。",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      icon: <Users className="w-8 h-8 text-purple-500" />,
      title: language === "en" ? "Mentorship Programs" : "导师计划",
      description:
        language === "en"
          ? "Connecting experienced professionals with emerging women in STEAM fields."
          : "连接经验丰富的专业人士与 STEAM 领域的新兴女性。",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-100" />,
      title: language === "en" ? "Global Partnerships" : "全球合作",
      description:
        language === "en"
          ? "Building international collaborations to expand opportunities for women in tech."
          : "建立国际合作，为科技领域女性扩展机会。",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      icon: <BookOpen className="w-8 h-8 text-gray-800" />,
      title: language === "en" ? "Education Initiatives" : "教育倡议",
      description:
        language === "en"
          ? "Developing educational programs to inspire young women to pursue STEAM careers."
          : "开发教育项目，激励年轻女性追求 STEAM 职业。",
      image: "/placeholder.svg?height=200&width=400",
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gray-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">{t("nav.actions")}</h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-300">
            {language === "en"
              ? "Driving change through innovative programs and community initiatives"
              : "通过创新项目和社区倡议推动变革"}
          </p>
        </div>
      </section>

      {/* Actions Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {actions.map((action, index) => (
              <Card key={index} className="border-gray-200 hover:shadow-lg transition-shadow bg-white">
                <div className="aspect-video bg-gray-100 rounded-t-lg">
                  <img
                    src={action.image || "/placeholder.svg"}
                    alt={action.title}
                    className="w-full h-full object-cover rounded-t-lg"
                  />
                </div>
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {action.icon}
                    <h3 className="text-2xl font-bold text-gray-800 ml-3">{action.title}</h3>
                  </div>
                  <p className="text-gray-600 text-lg leading-relaxed">{action.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
              {language === "en" ? "Our Impact" : "我们的影响"}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-lime mb-2">500+</div>
                <p className="text-gray-600">{language === "en" ? "Projects Supported" : "支持的项目"}</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-500 mb-2">1000+</div>
                <p className="text-gray-600">{language === "en" ? "Women Mentored" : "指导的女性"}</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-800 mb-2">50+</div>
                <p className="text-gray-600">{language === "en" ? "Partner Organizations" : "合作组织"}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
