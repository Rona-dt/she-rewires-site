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
    // In a real app, this would be a server-side fetch
    // For demo purposes, we'll simulate the data
    const mockEvents: Event[] = [
      {
        slug: "beyond-expo-shetech-summit-2025",
        title: "活动回顾｜澳门BEYOND EXPO：SHETECH女性科技峰会与社群力量",
        title_en: "Event Review | Macau BEYOND EXPO: SHETECH Women's Technology Summit and Community Power",
        date: "2025-06-02",
        location_zh: "澳门",
        location_en: "Macau",
        cover_image: "/placeholder.svg?height=400&width=600&text=BEYOND+EXPO+SHETECH+Summit",
        tags: ["summit", "community", "technology", "women-in-tech"],
        type: "past",
        content: "",
      },
      {
        slug: "steam-summit-2024",
        title: "STEAM 领导力峰会 2024",
        title_en: "STEAM Leadership Summit 2024",
        date: "2024-09-15",
        location_zh: "上海，中国",
        location_en: "Shanghai, China",
        cover_image: "/placeholder.svg?height=400&width=600&text=STEAM+Leadership+Summit",
        tags: ["summit", "leadership", "steam"],
        type: "upcoming",
        content: "",
      },
      {
        slug: "ai-ethics-workshop",
        title: "AI 伦理与女性视角",
        title_en: "AI Ethics & Women's Perspectives",
        date: "2024-10-20",
        location_zh: "深圳，中国",
        location_en: "Shenzhen, China",
        cover_image: "/placeholder.svg?height=400&width=600&text=AI+Ethics+Workshop",
        tags: ["workshop", "ai", "ethics"],
        type: "upcoming",
        content: "",
      },
    ]

    setEvents(mockEvents)
    setLoading(false)
  }, [])

  const upcomingEvents = events.filter((e) => e.type === "upcoming")
  const pastEvents = events.filter((e) => e.type === "past")

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
                      src={event.cover_image || "/placeholder.svg"}
                      alt={language === "en" ? event.title_en : event.title}
                      className="w-full h-full object-cover rounded-t-lg"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                      {language === "en" ? event.title_en : event.title}
                    </h3>
                    <div className="flex items-center text-gray-600 mb-2">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-sm">{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-600 mb-4">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span className="text-sm">{language === "en" ? event.location_en : event.location_zh}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {event.tags.slice(0, 3).map((tag) => (
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
                      src={event.cover_image || "/placeholder.svg"}
                      alt={language === "en" ? event.title_en : event.title}
                      className="w-full h-full object-cover rounded-t-lg"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                      {language === "en" ? event.title_en : event.title}
                    </h3>
                    <div className="flex items-center text-gray-600 mb-2">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-sm">{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-600 mb-4">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span className="text-sm">{language === "en" ? event.location_en : event.location_zh}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {event.tags.slice(0, 3).map((tag) => (
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
