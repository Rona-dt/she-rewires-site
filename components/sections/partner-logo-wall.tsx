import { Card, CardContent } from "@/components/ui/card"
import type { Partner } from "@/types/content"

export function PartnerLogoWall({ partners }: { partners: Partner[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-4">
      {partners.map((partner) => (
        <Card key={partner.id} className="h-full">
          <CardContent className="flex min-h-32 flex-col justify-center p-5 text-center">
            <p className="font-medium text-md-onSurface">{partner.name}</p>
            <p className="mt-1 text-xs uppercase tracking-[0.12em] text-md-primary">{partner.category}</p>
            {partner.description && <p className="mt-3 text-xs text-md-onSurfaceVariant">{partner.description}</p>}
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
