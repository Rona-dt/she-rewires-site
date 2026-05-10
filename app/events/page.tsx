import Link from "next/link"
import { getAllEvents } from "@/lib/events"
import { socialPosts } from "@/lib/social-posts"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
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
            Events are synced from official channels (X / Instagram / LinkedIn) and site-native event pages.
          </p>
        </div>
      </section>

      <section className="pb-10">
        <div className="container">
          <Card className="overflow-hidden border-md-primary/20 bg-gradient-to-br from-md-primary/10 via-md-background to-accent/30">
            <CardContent className="grid gap-8 p-8 md:grid-cols-[1.4fr_0.8fr] md:p-10">
              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-md-primary">Upcoming flagship summit</p>
                <h2 className="mt-3 text-3xl font-semibold text-md-onSurface md:text-5xl">Rewires Horizon 2026</h2>
                <p className="mt-4 max-w-2xl text-md-onSurfaceVariant">
                  June 13, 2026 · Shanghai Xintiandi. A future-facing summit connecting women leaders in AI, founders,
                  investors, and community builders.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link href="/events/rewires-horizon-2026">
                    <Button>
                      Open summit page <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <a href="mailto:partnerships@sherewires.com">
                    <Button variant="outline">Sponsor inquiry</Button>
                  </a>
                </div>
              </div>
              <div className="grid gap-3 text-sm">
                <div className="rounded-2xl bg-md-background/80 p-4 shadow-sm">Date · 2026年6月13日</div>
                <div className="rounded-2xl bg-md-background/80 p-4 shadow-sm">Venue · 上海·新天地</div>
                <div className="rounded-2xl bg-md-background/80 p-4 shadow-sm">Includes · Speakers, agenda, sponsors, and FAQ</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <EventsListClient upcomingEvents={upcomingEvents} pastEvents={pastEvents} socialEventPosts={socialEventPosts} />
    </div>
  )
}
