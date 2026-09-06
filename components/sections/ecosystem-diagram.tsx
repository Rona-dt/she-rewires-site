import { localizeText } from "@/content/localization"
import type { Locale } from "@/types/content"

const nodes = ["Co-builders", "Chapters", "Individuals", "Partners", "Contributors", "Co-building Projects"]

export function EcosystemDiagram({ locale = "en" }: { locale?: Locale }) {
  return (
    <div className="rounded-3xl bg-md-surface p-6 md:p-8">
      <div className="grid gap-3 md:grid-cols-3">
        {nodes.map((node, index) => (
          <div key={node} className={`rounded-2xl border border-md-outline/20 bg-md-background p-5 text-center ${index === nodes.length - 1 ? "md:col-start-2" : ""}`}>
            <p className="text-sm font-medium text-md-primary">{String(index + 1).padStart(2, "0")}</p>
            <p className="mt-2 font-semibold text-md-onSurface">{localizeText(node, locale)}</p>
          </div>
        ))}
      </div>
      <p className="mt-5 text-center text-sm text-md-onSurfaceVariant">
        {localizeText("The ecosystem connects people, chapters, partners, and contributors into co-building projects.", locale)}
      </p>
    </div>
  )
}
