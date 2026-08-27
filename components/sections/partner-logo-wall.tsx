import { Card, CardContent } from "@/components/ui/card"
import type { Partner } from "@/types/content"
import type { Locale } from "@/types/content"
import { localizeTerm } from "@/content/localization"

export function PartnerLogoWall({ partners, locale = "en" }: { partners: Partner[]; locale?: Locale }) {
  return (
    <div className="grid gap-4 md:grid-cols-4">
      {partners.map((partner) => (
        <Card key={partner.id} className="h-full">
          <CardContent className="flex min-h-32 flex-col justify-center p-5 text-center">
            <p className="font-medium text-md-onSurface">{partner.name}</p>
            <p className="mt-1 text-xs uppercase tracking-[0.12em] text-md-primary">{localizeTerm(partner.category, locale)}</p>
            {partner.description && <p className="mt-3 text-xs text-md-onSurfaceVariant">{partner.description}</p>}
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
