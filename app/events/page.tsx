"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/components/language-provider"
import { useEffect, useState } from "react"
import type { Event } from "@/lib/events"

export default function EventsPage() {
  const { t, language } = useLanguage()
  const [events, setEvents] = useState<Event[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // 模拟从服务器获取事件数据
    // 在实际应用中，这里会调用 getAllEvents()
    const mockEvents: Event[] = [
      {
        slug: "beyond-expo-shetech-summit-2025",
        title: "活动回顾｜澳门BEYOND EXPO：SHETECH女性科技峰会与社群力量",
        author: "SheRewires她原力",
        date: "2025年06月02日",
        cover: "/assets/img/activity/活动回顾｜澳门BEYOND EXPO：SHETECH女性科技峰会与社群力量-0.png",
        content: "",
        displayTitle: "活动回顾｜澳门BEYOND EXPO：SHETECH女性科技峰会与社群力量",
        displayTitleEn: "Event Review | Macau BEYOND EXPO: SHETECH Women's Technology Summit and Community Power",
        displayDate: "2025-06-02",
        displayCover: "/placeholder.svg?height=400&width=600&text=BEYOND+EXPO+SHETECH+Summit",
        displayLocation: "澳门",
        displayLocationEn: "Macau",
        displayTags: ["summit", "community", "technology", "women-in-tech"],
        displayType: "past",
      },
      {
        slug: "steam-summit-2024",
        title: "STEAM 领导力峰会 2024",
        date: "2024-09-15",
        content: "",
        displayTitle: "STEAM 领导力峰会 2024",
        displayTitleEn: "STEAM Leadership Summit 2024",
        displayDate: "2024-09-15",
        displayCover: "/placeholder.svg?height=400&width=600&text=STEAM+Leadership+Summit",
        displayLocation: "上海",
        displayLocationEn: "Shanghai, China",
        displayTags: ["summit", "leadership", "steam"],
        displayType: "upcoming",
      },
      {
        slug: "ai-ethics-workshop",
        title: "AI 伦理与女性视角",
        date: "2024-10-20",
        content: "",
        displayTitle: "AI 伦理与女性视角",
        displayTitleEn: "AI Ethics & Women's Perspectives",
        displayDate: "2024-10-20",
        displayCover: "/placeholder.svg?height=400&width=600&text=AI+Ethics+Workshop",
        displayLocation: "深圳",
        displayLocationEn: "Shenzhen, China",
        displayTags: ["workshop", "ai", "ethics"],
        displayType: "upcoming",
      },
    ]

    setEvents(mockEvents)
    setLoading(false)
  }, [])

  const upcomingEvents = events.filter((e) => e.displayType === "upcoming")
  const pastEvents = events.filter((e) => e.displayType === "past")

  if (loading) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-purple-600">Loading events...</div>
      </div>
    )
  }

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-purple-600 to-purple-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">{t("events.title")}</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            {language === "en"
              ? "Join our community events and connect with women in STEAM"
              : "参加我们的社区活动，与 STEAM 领域的女性建立联系"}
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      {upcomingEvents.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">{t("events.upcoming")}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingEvents.map((event) => (
                <Card key={event.slug} className="border-purple-200 hover:shadow-lg transition-shadow">
                  <div className="aspect-video bg-gradient-to-br from-purple-100 to-purple-200 rounded-t-lg">
                    <img
                      src={event.displayCover || "/placeholder.svg"}
                      alt={language === "en" ? event.displayTitleEn : event.displayTitle}
                      className="w-full h-full object-cover rounded-t-lg"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                      {language === "en" ? event.displayTitleEn : event.displayTitle}
                    </h3>
                    <div className="flex items-center text-gray-600 mb-2">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-sm">{event.displayDate}</span>
                    </div>
                    <div className="flex items-center text-gray-600 mb-4">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span className="text-sm">
                        {language === "en" ? event.displayLocationEn : event.displayLocation}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {event.displayTags.slice(0, 3).map((tag) => (
                        <span key={tag} className="bg-purple-100 text-purple-600 px-2 py-1 rounded-full text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link href={`/events/${event.slug}`}>
                      <Button className="w-full bg-purple-600 hover:bg-purple-700">
                        {language === "en" ? "Learn More" : "了解更多"} <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Past Events */}
      {pastEvents.length > 0 && (
        <section className="py-16 bg-purple-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">{t("events.past")}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pastEvents.map((event) => (
                <Card key={event.slug} className="border-purple-200 hover:shadow-lg transition-shadow">
                  <div className="aspect-video bg-gradient-to-br from-purple-100 to-purple-200 rounded-t-lg">
                    <img
                      src={event.displayCover || "/placeholder.svg"}
                      alt={language === "en" ? event.displayTitleEn : event.displayTitle}
                      className="w-full h-full object-cover rounded-t-lg"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                      {language === "en" ? event.displayTitleEn : event.displayTitle}
                    </h3>
                    <div className="flex items-center text-gray-600 mb-2">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-sm">{event.displayDate}</span>
                    </div>
                    <div className="flex items-center text-gray-600 mb-4">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span className="text-sm">
                        {language === "en" ? event.displayLocationEn : event.displayLocation}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {event.displayTags.slice(0, 3).map((tag) => (
                        <span key={tag} className="bg-purple-100 text-purple-600 px-2 py-1 rounded-full text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link href={`/events/${event.slug}`}>
                      <Button
                        variant="outline"
                        className="w-full border-purple-600 text-purple-600 hover:bg-purple-50 bg-transparent"
                      >
                        {language === "en" ? "View Details" : "查看详情"} <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
