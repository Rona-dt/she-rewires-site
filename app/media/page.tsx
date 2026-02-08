"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight, ExternalLink, Play } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export default function MediaPage() {
  const { t, language } = useLanguage()

  const media = [
    {
      id: 1,
      title:
        language === "en"
          ? "Interview: Women Leading Tech Innovation in Asia"
          : "采访：引领亚洲科技创新的女性",
      date: "2024-08-15",
      category: language === "en" ? "Interview" : "采访",
      excerpt:
        language === "en"
          ? "She Rewires founder discusses the evolving landscape of women in technology across Asia-Pacific region."
          : "She Rewires 创始人讨论亚太地区女性在科技领域的发展格局。",
      image: "/placeholder.svg?height=200&width=400",
      type: "video",
      link: "#",
    },
    {
      id: 2,
      title:
        language === "en"
          ? "Featured in TechCrunch: Women Leading China's Tech Revolution"
          : "TechCrunch 专题报道：引领中国科技革命的女性",
      date: "2024-08-05",
      category: language === "en" ? "Press" : "媒体",
      excerpt:
        language === "en"
          ? "Major tech publication highlights She Rewires' impact on China's technology landscape."
          : "主要科技出版物强调 She Rewires 对中国科技格局的影响。",
      image: "/placeholder.svg?height=200&width=400",
      type: "external",
      link: "https://techcrunch.com",
    },
    {
      id: 3,
      title:
        language === "en"
          ? "Podcast: Building Global Women-led Innovation Ecosystems"
          : "播客：构建全球女性主导的创新生态系统",
      date: "2024-07-28",
      category: language === "en" ? "Podcast" : "播客",
      excerpt:
        language === "en"
          ? "A deep dive into how She Rewires is connecting women across borders to co-create impact."
          : "深入探讨 She Rewires 如何连接跨境女性共同创造影响力。",
      image: "/placeholder.svg?height=200&width=400",
      type: "audio",
      link: "#",
    },
    {
      id: 4,
      title:
        language === "en"
          ? "Panel Discussion: ESG and Women in STEAM"
          : "小组讨论：ESG 与 STEAM 领域的女性",
      date: "2024-07-20",
      category: language === "en" ? "Video" : "视频",
      excerpt:
        language === "en"
          ? "Industry leaders discuss the intersection of ESG initiatives and women's advancement in technology."
          : "行业领袖讨论 ESG 倡议与女性在科技领域发展的交汇点。",
      image: "/placeholder.svg?height=200&width=400",
      type: "video",
      link: "#",
    },
    {
      id: 5,
      title:
        language === "en"
          ? "Magazine Feature: Super Individuals Transforming Industries"
          : "杂志专题：改变行业的超级个体",
      date: "2024-07-10",
      category: language === "en" ? "Article" : "文章",
      excerpt:
        language === "en"
          ? "How She Rewires is nurturing the next generation of women leaders and innovators."
          : "She Rewires 如何培养下一代女性领导者和创新者。",
      image: "/placeholder.svg?height=200&width=400",
      type: "external",
      link: "#",
    },
    {
      id: 6,
      title:
        language === "en"
          ? "Interview: Cross-Border Collaboration Success Stories"
          : "采访：跨境合作成功案例",
      date: "2024-06-25",
      category: language === "en" ? "Interview" : "采访",
      excerpt:
        language === "en"
          ? "Co-builders share their experiences working across Singapore, Europe, and China."
          : "共建者分享在新加坡、欧洲和中国跨境工作的经验。",
      image: "/placeholder.svg?height=200&width=400",
      type: "video",
      link: "#",
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-[#E6E6E6] py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#303030]">{t("media.title")}</h1>
          <p className="text-xl max-w-3xl mx-auto text-[#303030]/80">{t("media.subtitle")}</p>
        </div>
      </section>

      {/* Media Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {media.map((article) => (
              <Card
                key={article.id}
                className="border-[#8A55ED]/20 hover:shadow-lg transition-shadow bg-white"
              >
                <div className="aspect-video bg-[#E6E6E6] rounded-t-lg relative">
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    className="w-full h-full object-cover rounded-t-lg"
                  />
                  {article.type === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-[#8A55ED] rounded-full p-3">
                        <Play className="w-6 h-6 text-white fill-white" />
                      </div>
                    </div>
                  )}
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-[#DEC4FF]/50 text-[#8A55ED] px-3 py-1 rounded-full text-sm font-semibold">
                      {article.category}
                    </span>
                    {article.type === "external" && <ExternalLink className="w-4 h-4 text-[#303030]/40" />}
                  </div>
                  <h3 className="text-xl font-semibold text-[#303030] mb-3 line-clamp-2">{article.title}</h3>
                  <div className="flex items-center text-[#303030]/50 mb-3">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm">{article.date}</span>
                  </div>
                  <p className="text-[#303030]/70 text-sm mb-4 line-clamp-3">{article.excerpt}</p>
                  <Button
                    className="w-full bg-[#8A55ED] hover:bg-[#8A55ED]/90 text-white"
                    onClick={() => {
                      if (article.link) {
                        window.open(article.link, "_blank")
                      }
                    }}
                  >
                    {article.type === "video"
                      ? language === "en"
                        ? "Watch"
                        : "观看"
                      : article.type === "audio"
                        ? language === "en"
                          ? "Listen"
                          : "收听"
                        : language === "en"
                          ? "Read More"
                          : "阅读更多"}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
