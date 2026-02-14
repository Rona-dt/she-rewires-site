export interface SocialPost {
  id: string
  channel: "linkedin"
  type: "event" | "media"
  date: string
  titleEn: string
  titleZh: string
  summaryEn: string
  summaryZh: string
  url: string
}

export const linkedInPosts: SocialPost[] = [
  {
    id: "li-2025-06-01",
    channel: "linkedin",
    type: "event",
    date: "2025-06-01",
    titleEn: "BEYOND Expo community highlights",
    titleZh: "BEYOND Expo 社群共建回顾",
    summaryEn: "Community recap and key moments from She Rewires activities at BEYOND Expo.",
    summaryZh: "She Rewires 在 BEYOND Expo 的社群活动回顾与关键时刻。",
    url: "https://www.linkedin.com/company/sherewires/posts/?feedView=all",
  },
  {
    id: "li-2025-04-14",
    channel: "linkedin",
    type: "event",
    date: "2025-04-14",
    titleEn: "Women in STEAM meetup",
    titleZh: "Women in STEAM 社群线下交流",
    summaryEn: "A local meetup designed for cross-disciplinary networking and practical support.",
    summaryZh: "聚焦跨学科链接与实践支持的线下社群交流。",
    url: "https://www.linkedin.com/company/sherewires/posts/?feedView=all",
  },
  {
    id: "li-2025-02-20",
    channel: "linkedin",
    type: "media",
    date: "2025-02-20",
    titleEn: "Founder interview on women-led innovation",
    titleZh: "女性创新生态访谈",
    summaryEn: "Interview snippets and reflections on global women-led innovation pathways.",
    summaryZh: "关于全球女性创新路径的访谈节选与观点整理。",
    url: "https://www.linkedin.com/company/sherewires/posts/?feedView=all",
  },
  {
    id: "li-2024-11-02",
    channel: "linkedin",
    type: "media",
    date: "2024-11-02",
    titleEn: "Community story: co-builder impact",
    titleZh: "社群故事：共建者影响力",
    summaryEn: "Stories from co-builders and practical impact generated through the community.",
    summaryZh: "共建者故事与社群中产生的实际影响。",
    url: "https://www.linkedin.com/company/sherewires/posts/?feedView=all",
  },
]
