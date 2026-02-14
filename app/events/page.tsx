import { getAllEvents } from "@/lib/events"
import { EventsListClient } from "./events-list-client"

export default async function EventsPage() {
  const events = getAllEvents()
  const upcomingEvents = events.filter((event) => event.displayType === "upcoming")
  const pastEvents = events.filter((event) => event.displayType === "past")

  return (
    <div className="bg-md-background pt-20">
      <section className="py-16">
        <div className="container text-center">
          <h1 className="text-5xl font-semibold text-md-onSurface md:text-6xl">Events</h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-md-onSurfaceVariant">
            Join community gatherings, summits, and learning spaces designed with women in STEAM.
          </p>
        </div>
      </section>
      <EventsListClient upcomingEvents={upcomingEvents} pastEvents={pastEvents} />
    </div>
  )
}
