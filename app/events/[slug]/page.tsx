"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, ArrowLeft, Tag } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/components/language-provider"
import type { Event } from "@/lib/events"
import ReactMarkdown from "react-markdown"

interface EventDetailPageProps {
  params: {
    slug: string
  }
}

export default function EventDetailPage({ params }: EventDetailPageProps) {
  const { language } = useLanguage()
  const [event, setEvent] = useState<Event | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // In a real app, this would fetch from the server
    // For demo purposes, we'll simulate the BEYOND EXPO event
    if (params.slug === "beyond-expo-shetech-summit-2025") {
      const mockEvent: Event = {
        slug: "beyond-expo-shetech-summit-2025",
        title: "活动回顾｜澳门BEYOND EXPO：SHETECH女性科技峰会与社群力量",
        title_en: "Event Review | Macau BEYOND EXPO: SHETECH Women's Technology Summit and Community Power",
        date: "2025-06-02",
        location_zh: "澳门",
        location_en: "Macau",
        cover_image: "/placeholder.svg?height=400&width=800&text=BEYOND+EXPO+SHETECH+Summit",
        tags: ["summit", "community", "technology", "women-in-tech"],
        type: "past",
        content: `# 活动回顾｜澳门BEYOND EXPO：SHETECH女性科技峰会与社群力量
# Event Review | Macau BEYOND EXPO: SHETECH Women's Technology Summit and Community Power

2025年5月21日至24日，She Rewires她原力在澳门2025BEYOND Expo期间，成功联合举办了备受瞩目的BEYOND SHETECH SUMMIT女性科技峰会，并同步发起了一系列"她·原力场"社群行动。本次系列活动集结了强大的女性科技影响力，共同探索前沿科技，共塑未来社会的美好想象。

From May 21-24, 2025, She Rewires successfully co-hosted the highly anticipated BEYOND SHETECH SUMMIT during the 2025 BEYOND Expo in Macau, while simultaneously launching a series of "Her Power Field" community actions. This series of events brought together powerful female technology influence to explore cutting-edge technology and shape a beautiful vision for future society.

## Part 1 BEYOND SHETECH SUMMIT 高光时刻
## Part 1 BEYOND SHETECH SUMMIT Highlights

作为本届BEYOND Expo的核心论坛之一，5月22日的BEYOND SHETECH SUMMIT女性科技峰会汇聚了来自全球的女性科技领袖、创业者、科学家与跨界创新者，围绕科技、商业、文化与女性领导力等前沿议题展开深度对话。

As one of the core forums of this year's BEYOND Expo, the BEYOND SHETECH SUMMIT on May 22 brought together female technology leaders, entrepreneurs, scientists, and cross-industry innovators from around the world for in-depth dialogue on cutting-edge topics including technology, business, culture, and female leadership.

### Panel 1 以使命驱动创新：女性视角重塑科技领导力
### Panel 1 Mission-Driven Innovation: Female Perspectives Reshaping Tech Leadership

Panel 1围绕"以使命驱动创新"展开深度对话，四位嘉宾探讨了女性领导者如何在AI转型、创新教育、硬科技孵化等领域，以其独特的"以人为本"的视角、共情力与韧性，平衡商业追求与社会价值，重塑科技领导力。

Panel 1 engaged in deep dialogue around "Mission-Driven Innovation," with four guests exploring how female leaders reshape tech leadership in areas such as AI transformation, innovation education, and hard tech incubation through their unique "people-first" perspective, empathy, and resilience.

## 科技重构未来，女性引领想象力
## Technology Reconstructs the Future, Women Lead Imagination

在2025年的BEYOND Expo上，She Rewires用一次次真实的对话与深度的连接，展现出"她力量"如何在科技浪潮中站稳脚步、打破边界、引领未来。

At the 2025 BEYOND Expo, She Rewires demonstrated through authentic dialogues and deep connections how "Her Power" stands firm, breaks boundaries, and leads the future in the wave of technology.

因为未来不是一个人建造的 —— 它是我们一起共建的。

Because the future is not built by one person—it is co-built by all of us together.

科技需要多元的声音，未来需要真实的共创。SheTech不是一个终点，而是一场持续的链接与发声行动。她们，正用行动书写答案！

Technology needs diverse voices, and the future needs authentic co-creation. SheTech is not an endpoint, but an ongoing action of connection and voice. They are writing answers with action!`,
      }
      setEvent(mockEvent)
    } else {
      // Handle other events or show 404
      setEvent(null)
    }
    setLoading(false)
  }, [params.slug])

  if (loading) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-purple-600">Loading event...</div>
      </div>
    )
  }

  if (!event) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Event Not Found</h1>
          <Link href="/events">
            <Button variant="outline" className="border-purple-600 text-purple-600 bg-transparent">
              Back to Events
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-20">
      {/* Back Button */}
      <div className="container mx-auto px-4 py-4">
        <Link href="/events">
          <Button variant="ghost" className="text-purple-600 hover:text-purple-700">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {language === "en" ? "Back to Events" : "返回活动"}
          </Button>
        </Link>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-br from-purple-600 to-purple-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              {language === "en" ? event.title_en : event.title}
            </h1>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-lg opacity-90">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                {event.date}
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                {language === "en" ? event.location_en : event.location_zh}
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              {event.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-sm flex items-center"
                >
                  <Tag className="w-3 h-3 mr-1" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cover Image */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <img
              src={event.cover_image || "/placeholder.svg"}
              alt={language === "en" ? event.title_en : event.title}
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-headings:font-bold prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-purple-600 prose-strong:text-gray-900">
              <ReactMarkdown>{event.content}</ReactMarkdown>
            </div>
          </div>
        </div>
      </section>

      {/* Related Events */}
      <section className="py-16 bg-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">{language === "en" ? "More Events" : "更多活动"}</h2>
            <Link href="/events">
              <Button className="bg-purple-600 hover:bg-purple-700">
                {language === "en" ? "View All Events" : "查看所有活动"}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
