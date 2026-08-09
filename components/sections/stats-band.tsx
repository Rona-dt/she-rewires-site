import { Card, CardContent } from "@/components/ui/card"
import type { StatItem } from "@/types/content"

export function StatsBand({ stats }: { stats: StatItem[] }) {
  return (
    <section className="py-10">
      <div className="container grid gap-4 md:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <CardContent className="p-6">
              <p className="text-3xl font-semibold text-md-onSurface">{stat.value}</p>
              <p className="mt-1 font-medium text-md-primary">{stat.label}</p>
              {stat.description && <p className="mt-2 text-sm text-md-onSurfaceVariant">{stat.description}</p>}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
