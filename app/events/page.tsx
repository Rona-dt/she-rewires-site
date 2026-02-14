import { getAllEvents } from "@/lib/events"
import { socialPosts } from "@/lib/social-posts"
import { EventsListClient } from "./events-list-client"

export default async function EventsPage() {
  const events = getAllEvents()
  const upcomingEvents = events.filter((event) => event.displayType === "upcoming")
  const pastEvents = events.filter((event) => event.displayType === "past")
  const socialEventPosts = socialPosts.filter((post) => post.type === "event")

  return (
    <div className="bg-md-background pt-20">
      <section className="py-16">
        <div className="container text-center">
          <h1 className="text-5xl font-semibold text-md-onSurface md:text-6xl">Events</h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-md-onSurfaceVariant">
            Events are published on this site and synced with our LinkedIn / X / Instagram highlights.
          </p>
        </div>
      </section>
      <EventsListClient upcomingEvents={upcomingEvents} pastEvents={pastEvents} socialEventPosts={socialEventPosts} />
    </div>
  )
}
