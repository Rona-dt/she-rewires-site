import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { PageSectionContent } from "@/types/content"
import { SectionHeader } from "./section-header"

export function ContentSection({ section }: { section: PageSectionContent }) {
  return (
    <section id={section.id} className="scroll-mt-24 py-14">
      <div className="container">
        <SectionHeader eyebrow={section.eyebrow} title={section.title} description={section.description} />
        {section.items && (
          <div className="grid gap-5 md:grid-cols-2">
            {section.items.map((item) => (
              <Card key={item.title} className="h-full">
                <CardHeader>
                  {item.meta && <p className="text-sm font-medium text-md-primary">{item.meta}</p>}
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-md-onSurfaceVariant">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
