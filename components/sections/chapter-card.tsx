import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { Chapter } from "@/types/content"
import type { Locale } from "@/types/content"
import { localizeTerm } from "@/content/localization"

export function ChapterCard({ chapter, locale = "en" }: { chapter: Chapter; locale?: Locale }) {
  return (
    <Card className="h-full">
      <CardHeader>
        <p className="text-sm font-medium text-md-primary">{chapter.region} · {localizeTerm(chapter.status, locale)}</p>
        <CardTitle>{chapter.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm leading-relaxed text-md-onSurfaceVariant">{chapter.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {chapter.focus.map((item) => (
            <span key={item} className="rounded-full bg-md-primary/10 px-3 py-1 text-xs text-md-primary">{item}</span>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
