"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight, ExternalLink } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export default function NewsPage() {
  const { t, language } = useLanguage()

  const news = [
    {
      id: 1,
      title: language === "en" ? "SHE REWIRES Launches New AI Ethics Initiative" : "她原力启动新的 AI 伦理倡议",
      date: "2024-08-15",
      category: language === "en" ? "Initiative" : "倡议",
      excerpt:
        language === "en"
          ? "New program focuses on ensuring ethical AI development with women's perspectives at the forefront."
          : "新项目专注于确保以女性视角为前沿的道德 AI 发展。",
      image: "/placeholder.svg?height=200&width=400",
      type: "internal",
    },
    {
      id: 2,
      title:
        language === "en"
          ? "Partnership Announced with Leading Tech Universities"
          : "宣布与顶尖科技大学建立合作伙伴关系",
      date: "2024-08-10",
      category: language === "en" ? "Partnership" : "合作",
      excerpt:
        language === "en"
          ? "Collaboration aims to increase women's participation in STEAM education and research."
          : "合作旨在增加女性在 STEAM 教育和研究中的参与。",
      image: "/placeholder.svg?height=200&width=400",
      type: "internal",
    },
    {
      id: 3,
      title:
        language === "en"
          ? "Featured in TechCrunch: Women Leading China's Tech Revolution"
          : "TechCrunch 专题报道：引领中国科技革命的女性",
      date: "2024-08-05",
      category: language === "en" ? "Press" : "媒体",
      excerpt:
        language === "en"
          ? "Major tech publication highlights SHE REWIRES' impact on China's technology landscape."
          : "主要科技出版物强调她原力对中国科技格局的影响。",
      image: "/placeholder.svg?height=200&width=400",
      type: "external",
      link: "https://techcrunch.com",
    },
    {
      id: 4,
      title: language === "en" ? "Global Expansion: SHE REWIRES Opens New Chapters" : "全球扩张：她原力开设新分会",
      date: "2024-07-28",
      category: language === "en" ? "Expansion" : "扩张",
      excerpt:
        language === "en"
          ? "Community grows internationally with new chapters in Singapore, Tokyo, and London."
          : "社区在新加坡、东京和伦敦设立新分会，实现国际化发展。",
      image: "/placeholder.svg?height=200&width=400",
      type: "internal",
    },
    {
      id: 5,
      title: language === "en" ? "Award Recognition: Top Women in Tech Community" : "获奖认可：顶级科技女性社区",
      date: "2024-07-20",
      category: language === "en" ? "Award" : "奖项",
      excerpt:
        language === "en"
          ? "SHE REWIRES receives prestigious recognition for advancing women's participation in technology."
          : "她原力因推进女性在科技领域的参与而获得prestigious认可。",
      image: "/placeholder.svg?height=200&width=400",
      type: "internal",
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-purple-600 to-purple-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">{t("news.title")}</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            {language === "en"
              ? "Stay updated with the latest news and developments from our community"
              : "了解我们社区的最新新闻和发展动态"}
          </p>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {news.map((article) => (
              <Card key={article.id} className="border-purple-200 hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-purple-100 to-purple-200 rounded-t-lg">
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    className="w-full h-full object-cover rounded-t-lg"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-semibold">
                      {article.category}
                    </span>
                    {article.type === "external" && <ExternalLink className="w-4 h-4 text-gray-400" />}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">{article.title}</h3>
                  <div className="flex items-center text-gray-600 mb-3">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm">{article.date}</span>
                  </div>
                  <p className="text-gray-700 text-sm mb-4 line-clamp-3">{article.excerpt}</p>
                  <Button
                    className="w-full bg-purple-600 hover:bg-purple-700"
                    onClick={() => {
                      if (article.type === "external" && article.link) {
                        window.open(article.link, "_blank")
                      }
                    }}
                  >
                    {language === "en" ? "Read More" : "阅读更多"}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-purple-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {language === "en" ? "Stay Updated" : "保持更新"}
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            {language === "en"
              ? "Subscribe to our newsletter to receive the latest news and updates from SHE REWIRES."
              : "订阅我们的新闻通讯，接收她原力的最新新闻和更新。"}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder={language === "en" ? "Enter your email" : "输入您的邮箱"}
              className="flex-1 px-4 py-3 border border-purple-200 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <Button className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-full">
              {language === "en" ? "Subscribe" : "订阅"}
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
