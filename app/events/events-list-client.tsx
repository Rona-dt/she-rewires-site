"use client"

import { useLanguage } from "@/components/language-provider"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, ArrowRight } from "lucide-react"
import Link from "next/link"
import type { Event } from "@/lib/events" // Import type for Event

interface EventsListClientProps {
  upcomingEvents: Event[]
  pastEvents: Event[]
}

export function EventsListClient({ upcomingEvents, pastEvents }: EventsListClientProps) {
  const { t, language } = useLanguage()

  return (
    <>
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
    </>
  )
}
