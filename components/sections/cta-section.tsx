import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CTASectionProps {
  title: string
  description: string
  href: string
  label: string
}

export function CTASection({ title, description, href, label }: CTASectionProps) {
  return (
    <section className="py-14">
      <div className="container">
        <div className="rounded-3xl bg-md-surface p-8 md:p-10">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h2 className="text-3xl font-semibold text-md-onSurface">{title}</h2>
              <p className="mt-3 max-w-3xl text-md-onSurfaceVariant">{description}</p>
            </div>
            <Button asChild size="lg">
              <Link href={href}>
                {label} <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
