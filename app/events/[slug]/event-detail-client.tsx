"use client"

import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Tag, User } from "lucide-react"
import Link from "next/link"
import ReactMarkdown from "react-markdown"
import type { Event } from "@/lib/events" // Import type for Event

interface EventDetailClientProps {
  event: Event
}

export function EventDetailClient({ event }: EventDetailClientProps) {
  const { language, t } = useLanguage()

  return (
    <>
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
    </>
  )
}
