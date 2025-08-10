"use client"

import { getEventBySlug } from "@/lib/events" // Import getEventBySlug
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { EventDetailClient } from "./event-detail-client" // Import the client component

interface EventDetailPageProps {
  params: {
    slug: string
  }
}

// This is now a Server Component
export default async function EventDetailPage({ params }: EventDetailPageProps) {
  // Fetch event details directly on the server (now from hardcoded data)
  const event = getEventBySlug(params.slug)

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
      {/* Back Button - Can be a client component or use Link directly */}
      <div className="container mx-auto px-4 py-4">
        <Link href="/events">
          <Button variant="ghost" className="text-purple-600 hover:text-purple-700">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {/* Hardcode for server component, or pass from a server-side translation */}
            Back to Events
          </Button>
        </Link>
      </div>

      {/* Hero and Content - Render using a client component to handle language switching and dynamic content */}
      <EventDetailClient event={event} />
    </div>
  )
}
