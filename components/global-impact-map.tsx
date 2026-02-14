"use client"

import { useLanguage } from "@/components/language-provider"
import { useState } from "react"
import { Globe2, MapPin } from "lucide-react"

interface Region {
  id: string
  name: { en: string; zh: string }
  countries: string[]
  position: { x: number; y: number }
  description: { en: string; zh: string }
}

const regions: Region[] = [
  {
    id: "asia-pacific",
    name: { en: "Asia Pacific", zh: "亚太地区" },
    countries: ["Singapore", "China"],
    position: { x: 70, y: 45 },
    description: {
      en: "Empowering women in tech across Asia Pacific with training programs and mentorship.",
      zh: "通过培训项目和导师指导，赋能亚太地区的女性科技人才。"
    }
  },
  {
    id: "north-america",
    name: { en: "North America", zh: "北美地区" },
    countries: ["United States"],
    position: { x: 20, y: 35 },
    description: {
      en: "Building inclusive tech communities and advancing women's leadership in North America.",
      zh: "在北美建立包容性科技社区，推动女性领导力发展。"
    }
  },
  {
    id: "europe",
    name: { en: "Europe", zh: "欧洲地区" },
    countries: ["United Kingdom"],
    position: { x: 48, y: 30 },
    description: {
      en: "Creating opportunities for women in technology across European markets.",
      zh: "为欧洲市场的女性创造科技领域的机会。"
    }
  }
]

interface GlobalImpactMapProps {
  onRegionClick?: (regionId: string) => void
  highlightRegion?: string
}

export function GlobalImpactMap({ onRegionClick, highlightRegion }: GlobalImpactMapProps) {
  const { language } = useLanguage()
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null)
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null)

  const handleRegionClick = (regionId: string) => {
    setSelectedRegion(regionId)
    onRegionClick?.(regionId)
  }

  const activeRegion = hoveredRegion || selectedRegion || highlightRegion

  return (
    <div className="w-full space-y-8">
      {/* Map Visualization */}
      <div className="relative w-full aspect-[2/1] bg-gray-50 rounded-lg border border-gray-200 overflow-hidden">
        {/* Decorative world map background */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <Globe2 className="w-64 h-64 text-gray-900" />
        </div>

        {/* Region markers */}
        {regions.map((region) => {
          const isActive = activeRegion === region.id
          const isHighlighted = highlightRegion === region.id
          
          return (
            <button
              key={region.id}
              onClick={() => handleRegionClick(region.id)}
              onMouseEnter={() => setHoveredRegion(region.id)}
              onMouseLeave={() => setHoveredRegion(null)}
              className="absolute group transition-all duration-300"
              style={{
                left: `${region.position.x}%`,
                top: `${region.position.y}%`,
                transform: 'translate(-50%, -50%)'
              }}
            >
              {/* Pulse effect for highlighted region */}
              {isHighlighted && (
                <span className="absolute inset-0 animate-ping">
                  <MapPin className="w-8 h-8 text-purple-500" />
                </span>
              )}
              
              {/* Main marker */}
              <MapPin
                className={`w-8 h-8 transition-all duration-300 ${
                  isActive
                    ? 'text-purple-500 scale-125'
                    : 'text-gray-800 hover:text-purple-500'
                }`}
              />

              {/* Tooltip */}
              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-2 bg-white border border-gray-200 rounded-md shadow-lg whitespace-nowrap transition-opacity duration-200 z-10 ${
                  isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                }`}
              >
                <p className="font-semibold text-sm">
                  {region.name[language]}
                </p>
                <p className="text-xs text-gray-600">
                  {region.countries.join(', ')}
                </p>
              </div>
            </button>
          )
        })}
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="text-center p-6 bg-white border border-gray-200 rounded-lg">
          <div className="text-4xl font-bold text-purple-500 mb-2">3</div>
          <div className="text-sm text-gray-600">
            {language === 'zh' ? '个地区' : 'Regions'}
          </div>
        </div>
        <div className="text-center p-6 bg-white border border-gray-200 rounded-lg">
          <div className="text-4xl font-bold text-purple-500 mb-2">4</div>
          <div className="text-sm text-gray-600">
            {language === 'zh' ? '个国家' : 'Countries'}
          </div>
        </div>
      </div>

      {/* Region Details */}
      {activeRegion && (
        <div className="p-6 bg-purple-50 border border-purple-200 rounded-lg">
          <h3 className="font-bold text-lg mb-2">
            {regions.find(r => r.id === activeRegion)?.name[language]}
          </h3>
          <p className="text-sm text-gray-700 mb-3">
            {regions.find(r => r.id === activeRegion)?.description[language]}
          </p>
          <div className="flex flex-wrap gap-2">
            {regions.find(r => r.id === activeRegion)?.countries.map((country) => (
              <span
                key={country}
                className="px-3 py-1 bg-white text-sm rounded-full border border-purple-300"
              >
                {country}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
