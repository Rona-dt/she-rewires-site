import { getAllEvents } from "@/lib/events"
import { EventsListClient } from "./events-list-client" // Import the client component

// This is now a Server Component
export default async function EventsPage() {
  // Fetch events directly on the server (now from hardcoded data)
  const events = getAllEvents()

  const upcomingEvents = events.filter((e) => e.displayType === "upcoming")
  const pastEvents = events.filter((e) => e.displayType === "past")

  return (
    <div className="pt-20">
      {/* Hero - Can be a server component part */}
      <section className="bg-gray-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          {/* For static text in Server Components, we can hardcode or use a server-side translation utility */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Events</h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-300">
            Join our community events and connect with women in STEAM
          </p>
        </div>
      </section>

      {/* Render events using a client component to handle language switching */}
      <EventsListClient upcomingEvents={upcomingEvents} pastEvents={pastEvents} />
    </div>
  )
}
