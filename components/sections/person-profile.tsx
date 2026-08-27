import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { Person } from "@/types/content"
import type { Locale } from "@/types/content"
import { localizeTerm } from "@/content/localization"

export function PersonProfile({ person, locale = "en" }: { person: Person; locale?: Locale }) {
  return (
    <Card className="h-full">
      <CardHeader>
        <p className="text-sm font-medium text-md-primary">{localizeTerm(person.type, locale)}</p>
        <CardTitle>{person.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="font-medium text-md-onSurface">{person.role}</p>
        {person.location && <p className="mt-1 text-sm text-md-onSurfaceVariant">{person.location}</p>}
        <p className="mt-4 text-sm leading-relaxed text-md-onSurfaceVariant">{person.bio}</p>
      </CardContent>
    </Card>
  )
}
