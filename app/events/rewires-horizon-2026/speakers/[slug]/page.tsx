import { notFound } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { horizonSpeakers } from "../../speakers-data"

export default function SpeakerBioPage({ params }: { params: { slug: string } }) {
  const speaker = horizonSpeakers.find((item) => item.slug === params.slug)

  if (!speaker) return notFound()

  return (
    <div className="bg-md-background pt-24">
      <div className="container max-w-3xl py-16">
        <img src={speaker.photo} alt={speaker.name} className="h-72 w-full rounded-2xl object-cover" />
        <h1 className="mt-8 text-4xl font-semibold text-md-onSurface">{speaker.name}</h1>
        <p className="mt-2 text-md-onSurfaceVariant">{speaker.title}</p>
        <p className="mt-4 rounded-xl bg-md-surfaceContainer p-4 text-md-onSurface">{speaker.bio}</p>
        <div className="mt-8">
          <Link href="/events/rewires-horizon-2026">
            <Button variant="outline">返回峰会主页 / Back to Summit</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
