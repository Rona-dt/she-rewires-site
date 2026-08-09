import type { Project } from "@/types/content"

export const projects: Project[] = [
  { id: "human-agency-summit", title: "Annual Human Agency Leadership Summit", category: "leadership", status: "planned", description: "A flagship gathering for leaders, builders, founders, and partners exploring human agency in the AI era.", outcomes: ["Thought leadership", "Cross-border collaboration", "Builder visibility"] },
  { id: "women-who-master-china", title: "Women Who Master China", category: "leadership", status: "active", description: "A storytelling and collaboration initiative highlighting women using technology to create impact.", outcomes: ["People stories", "Partner collaboration", "Leadership visibility"] },
  { id: "chapters", title: "Global Chapter Building", category: "community", status: "incubating", description: "Supporting local builders as they create She Rewires chapters in new cities and regions.", outcomes: ["Local communities", "Regional programs", "Sustainable operating models"] },
  { id: "podcast", title: "Conversations and Podcast", category: "culture", status: "active", description: "A media ecosystem for documenting builders, ideas, and the cultural imagination behind technology.", outcomes: ["Interviews", "Audio stories", "Knowledge archive"] },
]
