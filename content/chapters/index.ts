import type { Chapter } from "@/types/content"

export const chapters: Chapter[] = [
  { id: "china", name: "She Rewires China", region: "East Asia", status: "active", description: "The founding ecosystem and primary base for cross-border community building.", focus: ["Human agency", "AI literacy", "Women in STEAM", "Ecosystem partnerships"] },
  { id: "singapore", name: "She Rewires Singapore", region: "South-East Asia", status: "active", description: "A regional chapter connecting builders, founders, and community leaders across Southeast Asia.", focus: ["Digital economy", "Leadership", "Regional collaboration"] },
  { id: "india", name: "She Rewires India", region: "South Asia", status: "forming", description: "An emerging chapter for local builders and partners exploring technology, creativity, and agency.", focus: ["Chapter building", "Local partnerships", "Young builders"] },
  { id: "uk", name: "She Rewires UK", region: "Europe", status: "forming", description: "A growing network for European contributors, partners, and cross-border projects.", focus: ["Global chapters", "Research", "Ecosystem exchange"] },
]
