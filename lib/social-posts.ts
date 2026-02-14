export interface SocialPost {
  id: string
  channel: "linkedin" | "x" | "instagram" | "web"
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
    id: "x-2026-02-03",
    channel: "x",
    type: "event",
    date: "2026-02-03",
    titleEn: "WomenWhoMaster spotlight: Huiyan Huang",
    titleZh: "WomenWhoMaster 聚焦：Huiyan Huang",
    summaryEn:
      "X post: WomenWhoMaster celebrates long-term impact in STEM and introduces Huiyan Huang with She Rewires x Logitech context.",
    summaryZh: "X 平台内容：WomenWhoMaster 强调女性在 STEM 的长期影响力，并介绍 Huiyan Huang。",
    url: "https://x.com/sherewires",
    image: "https://pbs.twimg.com/amplify_video_thumb/2018512936113782784/img/lXQo6dOOz_fs7leJ.jpg",
  },
  {
    id: "x-2026-01-27",
    channel: "x",
    type: "event",
    date: "2026-01-27",
    titleEn: "WomenWhoMaster: Dr. Meng story",
    titleZh: "WomenWhoMaster：Dr. Meng 故事",
    summaryEn:
      "X post on Dr. Meng and medical AI application in 20+ hospitals across China, Hong Kong and Southeast Asia.",
    summaryZh: "X 内容提到 Dr. Meng 及其医疗 AI 在中国、香港和东南亚 20+ 医院的应用。",
    url: "https://x.com/sherewires",
    image: "https://pbs.twimg.com/amplify_video_thumb/2016011131307892736/img/Atz_5uBvl4POZ5j-.jpg",
  },
  {
    id: "x-2025-12-25",
    channel: "x",
    type: "event",
    date: "2025-12-25",
    titleEn: "She Rewires Singapore Christmas gathering",
    titleZh: "She Rewires 新加坡圣诞社群活动",
    summaryEn:
      "X post recap: Singapore afternoon tea with digital-economy leadership discussion and inclusion themes.",
    summaryZh: "X 活动回顾：新加坡圣诞下午茶，围绕数字经济、领导力与包容展开交流。",
    url: "https://x.com/sherewires",
    image: "https://pbs.twimg.com/media/G9ANZyNXcAAO41s?format=jpg&name=small",
  },
  {
    id: "ig-2026-02-03",
    channel: "instagram",
    type: "event",
    date: "2026-02-03",
    titleEn: "Instagram: WomenWhoMaster latest highlight",
    titleZh: "Instagram：WomenWhoMaster 最新内容",
    summaryEn:
      "Instagram post highlights women using technology to create impact and redefine STEM leadership.",
    summaryZh: "Instagram 内容聚焦女性如何以科技创造影响力、重塑 STEM 领导力。",
    url: "https://www.instagram.com/p/DUR3DI2EZIW/",
    image:
      "https://scontent-iad3-1.cdninstagram.com/v/t51.2885-15/627162165_17945643978101884_8109413137457293083_n.jpg",
  },
  {
    id: "ig-2026-01-27",
    channel: "instagram",
    type: "event",
    date: "2026-01-27",
    titleEn: "Instagram: Dr. Meng in WomenWhoMaster",
    titleZh: "Instagram：WomenWhoMaster 中的 Dr. Meng",
    summaryEn:
      "Instagram post focuses on practical medical AI solutions and She Rewires collaboration context.",
    summaryZh: "Instagram 内容强调医疗 AI 的落地实践与 She Rewires 的合作场景。",
    url: "https://www.instagram.com/p/DUAFWTSFTqE/",
    image:
      "https://scontent-iad3-1.cdninstagram.com/v/t51.2885-15/622965479_17944400448101884_6879472260977762328_n.jpg",
  },
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
    id: "media-technode-2025-05-23",
    channel: "web",
    type: "media",
    date: "2025-05-23",
    titleEn: "TechNode interview: Jill Tang on empowering women in tech",
    titleZh: "TechNode 专访：Jill Tang 谈科技女性赋能",
    summaryEn:
      "Public media coverage discussing She Rewires’ mission and Jill Tang’s view on women’s leadership in tech.",
    summaryZh: "公开媒体采访，讨论 She Rewires 的使命与 Jill Tang 对女性科技领导力的观点。",
    url: "https://technode.com/2025/05/23/beyond-expo-2025-she-rewires-founder-jill-tang-on-empowering-women-in-tech/",
    image: "https://technode.com/wp-content/uploads/2025/05/shetech.jpg",
  },
]
