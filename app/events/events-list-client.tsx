"use client"

import { useLanguage } from "@/components/language-provider"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, ArrowRight } from "lucide-react"
import Link from "next/link"
import type { Event } from "@/lib/events"

interface EventsListClientProps {
  upcomingEvents: Event[]
  pastEvents: Event[]
}

function EventCard({ event, language }: { event: Event; language: "en" | "zh" }) {
  return (
    <Card className="group overflow-hidden hover:scale-[1.02]">
      <div className="aspect-video overflow-hidden bg-md-surfaceLow">
        <img
          src={event.displayCover || "/placeholder.svg"}
          alt={language === "en" ? event.displayTitleEn : event.displayTitle}
          className="h-full w-full object-cover transition-transform duration-300 ease-md group-hover:scale-105"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="mb-3 line-clamp-2 text-xl font-medium text-md-onSurface">
          {language === "en" ? event.displayTitleEn : event.displayTitle}
        </h3>
        <div className="mb-2 flex items-center text-sm text-md-onSurfaceVariant">
          <Calendar className="mr-2 h-4 w-4" />
          <span>{event.displayDate}</span>
        </div>
        <div className="mb-4 flex items-center text-sm text-md-onSurfaceVariant">
          <MapPin className="mr-2 h-4 w-4" />
          <span>{language === "en" ? event.displayLocationEn : event.displayLocation}</span>
        </div>
        <div className="mb-5 flex flex-wrap gap-2">
          {event.displayTags.slice(0, 3).map((tag) => (
            <span key={tag} className="rounded-full bg-md-primary/10 px-3 py-1 text-xs text-md-onSurface">
              {tag}
            </span>
          ))}
        </div>
        <Link href={`/events/${event.slug}`}>
          <Button className="w-full">
            {language === "en" ? "View event" : "查看活动"} <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  )
}

export function EventsListClient({ upcomingEvents, pastEvents }: EventsListClientProps) {
  const { t, language } = useLanguage()

  return (
    <>
      {upcomingEvents.length > 0 && (
        <section className="py-10">
          <div className="container">
            <h2 className="mb-8 text-3xl font-medium text-md-onSurface">{t("events.upcoming")}</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {upcomingEvents.map((event) => (
                <EventCard key={event.slug} event={event} language={language} />
              ))}
            </div>
          </div>
        </section>
      )}

      {pastEvents.length > 0 && (
        <section className="py-10">
          <div className="container">
            <h2 className="mb-8 text-3xl font-medium text-md-onSurface">{t("events.past")}</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {pastEvents.map((event) => (
                <EventCard key={event.slug} event={event} language={language} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
