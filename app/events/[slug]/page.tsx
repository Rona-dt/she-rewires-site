"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, ArrowLeft, Tag, User } from "lucide-react"
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
    // 模拟从服务器获取事件详情
    // 在实际应用中，这里会调用 getEventBySlug(params.slug)
    if (params.slug === "beyond-expo-shetech-summit-2025") {
      const mockEvent: Event = {
        slug: "beyond-expo-shetech-summit-2025",
        title: "活动回顾｜澳门BEYOND EXPO：SHETECH女性科技峰会与社群力量",
        author: "SheRewires她原力",
        date: "2025年06月02日",
        cover: "/assets/img/activity/活动回顾｜澳门BEYOND EXPO：SHETECH女性科技峰会与社群力量-0.png",
        displayTitle: "活动回顾｜澳门BEYOND EXPO：SHETECH女性科技峰会与社群力量",
        displayTitleEn: "Event Review | Macau BEYOND EXPO: SHETECH Women's Technology Summit and Community Power",
        displayDate: "2025-06-02",
        displayCover: "/placeholder.svg?height=400&width=800&text=BEYOND+EXPO+SHETECH+Summit",
        displayLocation: "澳门",
        displayLocationEn: "Macau",
        displayTags: ["summit", "community", "technology", "women-in-tech"],
        displayType: "past",
        content: `2025年5月21日至24日，She Rewires她原力在澳门2025BEYOND Expo期间，成功联合举办了备受瞩目的BEYOND SHETECH SUMMIT女性科技峰会，并同步发起了一系列"她·原力场"社群行动。本次系列活动集结了强大的女性科技影响力，共同探索前沿科技，共塑未来社会的美好想象。

**Part 1 BEYOND SHETECH SUMMIT 高光时刻**

作为本届BEYOND Expo的核心论坛之一，5月22日的BEYOND SHETECH SUMMIT女性科技峰会汇聚了来自全球的女性科技领袖、创业者、科学家与跨界创新者，围绕科技、商业、文化与女性领导力等前沿议题展开深度对话。各场圆桌均碰撞出精彩火花，生动呈现了女性如何在科技变革的浪潮中打破边界、引领未来。

![](/assets/img/activity/活动回顾｜澳门BEYOND EXPO：SHETECH女性科技峰会与社群力量-1.jpg)

在充满了激情四射的开场之后，She Rewires她原力创始人和共建者Jill Tang论坛开幕的时候感谢BEYOND团队不仅使这次峰会成为可能，而且将女性在STEM领域置于亚洲最具未来面向的平台Beyond Expo的前沿。

而这一时刻至关重要。

因为当女性登台时，叙事发生了变化。当年轻女性带头时—整个系统都在演变。因为能见度引发可能性。当女性在科技领域被看见、被听到并被赞美时，它创造了涟漪效应— 解锁了信念、资金、合作和创新，这些可能性可能不会发生。

![](/assets/img/activity/活动回顾｜澳门BEYOND EXPO：SHETECH女性科技峰会与社群力量-2.jpg)

**Panel 1 以使命驱动创新：女性视角重塑科技领导力**

![](/assets/img/activity/活动回顾｜澳门BEYOND EXPO：SHETECH女性科技峰会与社群力量-3.jpg)

Panel 1围绕"以使命驱动创新"展开深度对话，四位嘉宾探讨了女性领导者如何在AI转型、创新教育、硬科技孵化等领域，以其独特的"以人为本"的视角、共情力与韧性，平衡商业追求与社会价值，重塑科技领导力。

**科技重构未来，女性引领想象力**

![](/assets/img/activity/活动回顾｜澳门BEYOND EXPO：SHETECH女性科技峰会与社群力量-11.jpg)

在2025年的BEYOND Expo上，She Rewires用一次次真实的对话与深度的连接，展现出"她力量"如何在科技浪潮中站稳脚步、打破边界、引领未来。

因为未来不是一个人建造的 —— 它是我们一起共建的。

科技需要多元的声音，未来需要真实的共创。SheTech不是一个终点，而是一场持续的链接与发声行动。她们，正用行动书写答案！`,
      }
      setEvent(mockEvent)
    } else {
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
              {language === "en" ? event.displayTitleEn : event.displayTitle}
            </h1>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-lg opacity-90">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                {event.displayDate}
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                {language === "en" ? event.displayLocationEn : event.displayLocation}
              </div>
              {event.author && (
                <div className="flex items-center">
                  <User className="w-5 h-5 mr-2" />
                  {event.author}
                </div>
              )}
            </div>
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              {event.displayTags.map((tag) => (
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
      {event.displayCover && (
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <img
                src={event.displayCover || "/placeholder.svg"}
                alt={language === "en" ? event.displayTitleEn : event.displayTitle}
                className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>
      )}

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-headings:font-bold prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-purple-600 prose-strong:text-gray-900 prose-img:rounded-lg prose-img:shadow-md">
              <ReactMarkdown
                components={{
                  img: ({ src, alt, ...props }) => (
                    <img
                      src={src || "/placeholder.svg"}
                      alt={alt}
                      className="w-full h-auto rounded-lg shadow-md my-6"
                      loading="lazy"
                      {...props}
                    />
                  ),
                  h1: ({ children, ...props }) => (
                    <h1 className="text-3xl font-bold text-gray-900 mt-8 mb-4" {...props}>
                      {children}
                    </h1>
                  ),
                  h2: ({ children, ...props }) => (
                    <h2 className="text-2xl font-bold text-gray-900 mt-6 mb-3" {...props}>
                      {children}
                    </h2>
                  ),
                  h3: ({ children, ...props }) => (
                    <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2" {...props}>
                      {children}
                    </h3>
                  ),
                  p: ({ children, ...props }) => (
                    <p className="text-gray-700 leading-relaxed mb-4" {...props}>
                      {children}
                    </p>
                  ),
                  strong: ({ children, ...props }) => (
                    <strong className="font-bold text-gray-900" {...props}>
                      {children}
                    </strong>
                  ),
                }}
              >
                {event.content}
              </ReactMarkdown>
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
