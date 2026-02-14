"use client"

import { useLanguage } from "@/components/language-provider"
import { useState } from "react"
import { Globe2, MapPin } from "lucide-react"

interface Region {
  id: string
  name: { en: string; zh: string }
  countries: string[]
  description: { en: string; zh: string }
}

const regions: Region[] = [
  {
    id: "asia-pacific",
    name: { en: "Asia Pacific", zh: "亚太" },
    countries: ["China", "Singapore"],
    description: {
      en: "Core operations, mentorship circles, and flagship events live here.",
      zh: "核心运营、导师网络和旗舰活动在此持续生长。",
    },
  },
  {
    id: "north-america",
    name: { en: "North America", zh: "北美" },
    countries: ["United States"],
    description: {
      en: "Cross-border career pathways and partnerships for women entering global tech roles.",
      zh: "链接跨境职业路径与合作资源，支持女性进入全球科技岗位。",
    },
  },
  {
    id: "europe",
    name: { en: "Europe", zh: "欧洲" },
    countries: ["United Kingdom"],
    description: {
      en: "Community voices on responsible AI and inclusive product leadership.",
      zh: "聚焦负责任 AI 与包容型产品领导力的在地实践。",
    },
  },
]

interface GlobalImpactMapProps {
  onRegionClick?: (regionId: string) => void
  highlightRegion?: string
}

export function GlobalImpactMap({ onRegionClick, highlightRegion }: GlobalImpactMapProps) {
  const { language } = useLanguage()
  const [selectedRegion, setSelectedRegion] = useState(highlightRegion ?? regions[0].id)

  const activeRegion = regions.find((region) => region.id === selectedRegion) ?? regions[0]

  return (
    <div className="space-y-6">
      <div className="rounded-[32px] bg-md-surface p-8 shadow-inner">
        <div className="mb-6 flex items-center justify-between">
          <div className="inline-flex items-center gap-2 rounded-full bg-md-primary/10 px-4 py-2 text-sm text-md-primary">
            <Globe2 className="h-4 w-4" />
            {language === "en" ? "Global Footprint" : "全球足迹"}
          </div>
          <div className="text-sm text-md-onSurfaceVariant">3 {language === "en" ? "Regions" : "个地区"} · 4 {language === "en" ? "Countries" : "个国家"}</div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {regions.map((region) => {
            const isActive = region.id === activeRegion.id

            return (
              <button
                key={region.id}
                onClick={() => {
                  setSelectedRegion(region.id)
                  onRegionClick?.(region.id)
                }}
                className={`group rounded-3xl border p-5 text-left transition-all duration-300 ease-md active:scale-95 ${
                  isActive
                    ? "border-md-primary/40 bg-md-primary/10 shadow-md"
                    : "border-transparent bg-md-background hover:bg-md-primary/5"
                }`}
              >
                <div className="mb-3 flex items-center gap-2 text-md-primary">
                  <MapPin className={`h-4 w-4 ${isActive ? "scale-110" : ""}`} />
                  <span className="font-medium">{region.name[language]}</span>
                </div>
                <p className="text-sm leading-relaxed text-md-onSurfaceVariant">{region.description[language]}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {region.countries.map((country) => (
                    <span key={country} className="rounded-full bg-md-primary/10 px-3 py-1 text-xs text-md-onSurface">
                      {country}
                    </span>
                  ))}
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
