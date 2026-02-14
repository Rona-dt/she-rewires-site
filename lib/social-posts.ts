export interface SocialPost {
  id: string
  channel: "linkedin" | "x" | "instagram"
  type: "event" | "media"
  date: string
  titleEn: string
  titleZh: string
  summaryEn: string
  summaryZh: string
  url: string
  image?: string
}

export const socialPosts: SocialPost[] = [
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
    id: "x-2026-02-14-1",
    channel: "x",
    type: "event",
    date: "2026-02-14",
    titleEn: "#WomenWhoMaster spotlight: Dr. Meng",
    titleZh: "#WomenWhoMaster 聚焦：孟博士",
    summaryEn:
      "From medical AI research to real-world deployment in 20+ hospitals across China, Hong Kong, and South-East Asia.",
    summaryZh: "从医疗 AI 研究到在中国、香港、东南亚 20+ 医院落地的女性科技领导者故事。",
    url: "https://x.com/sherewires",
    image: "https://pbs.twimg.com/amplify_video_thumb/2016011131307892736/img/Atz_5uBvl4POZ5j-.jpg",
  },
  {
    id: "x-2026-02-14-2",
    channel: "x",
    type: "event",
    date: "2026-02-14",
    titleEn: "She Rewires Singapore community tea meetup",
    titleZh: "She Rewires 新加坡社群下午茶",
    summaryEn:
      "A Christmas Afternoon Tea with Nimisha Tailor exploring opportunities and inclusion in the digital economy.",
    summaryZh: "与 Nimisha Tailor 的圣诞下午茶交流，探讨数字经济中的机会与包容性领导力。",
    url: "https://x.com/sherewires/status/2004116681296388520",
    image: "https://pbs.twimg.com/media/G9ANZyNXcAAO41s?format=jpg&name=small",
  },
  {
    id: "ig-2026-02-14",
    channel: "instagram",
    type: "event",
    date: "2026-02-14",
    titleEn: "Instagram highlights (profile feed)",
    titleZh: "Instagram 精选内容（主页动态）",
    summaryEn:
      "Direct profile link synced. Full post extraction is currently limited in this environment due Instagram anti-bot/login restrictions.",
    summaryZh: "已同步主页入口。当前环境受 Instagram 登录与反爬策略限制，暂无法稳定批量抓取完整贴文。",
    url: "https://www.instagram.com/sherewires/",
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
]
