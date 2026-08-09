import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { Story } from "@/types/content"

export function StoryCard({ story }: { story: Story }) {
  return (
    <Card className="h-full">
      <CardHeader>
        <p className="text-sm font-medium text-md-primary">{story.type} · {story.date}</p>
        <CardTitle>{story.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm leading-relaxed text-md-onSurfaceVariant">{story.excerpt}</p>
        {story.source && <p className="mt-4 text-xs uppercase tracking-[0.12em] text-md-onSurfaceVariant">{story.source}</p>}
      </CardContent>
    </Card>
  )
}
