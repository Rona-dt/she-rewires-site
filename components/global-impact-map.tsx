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
    id: "east-asia",
    name: { en: "East Asia", zh: "东亚" },
    countries: ["China"],
    description: {
      en: "Community growth, co-builder operations, and flagship programs.",
      zh: "社群增长、共建者运营与旗舰项目落地。",
    },
  },
  {
    id: "south-east-asia",
    name: { en: "South-East Asia", zh: "东南亚" },
    countries: ["Singapore"],
    description: {
      en: "Regional collaboration, leadership incubation, and cross-border initiatives.",
      zh: "区域协作、领导力孵化与跨境共建。",
    },
  },
  {
    id: "europe",
    name: { en: "Europe", zh: "欧洲" },
    countries: ["Germany", "UK"],
    description: {
      en: "Partnerships and knowledge exchange around responsible technology and impact.",
      zh: "围绕负责任科技与影响力的合作和知识交流。",
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
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <div className="inline-flex items-center gap-2 rounded-full bg-md-primary/10 px-4 py-2 text-sm text-md-primary">
            <Globe2 className="h-4 w-4" />
            {language === "en" ? "Global Footprint" : "全球足迹"}
          </div>
          <div className="text-sm text-md-onSurfaceVariant">
            {language === "en" ? "3 Regions · 4 Countries" : "3 个地区 · 4 个国家"}
          </div>
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
