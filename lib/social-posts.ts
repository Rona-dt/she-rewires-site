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
    summaryZh: "X 帖子：WomenWhoMaster 强调女性在 STEM 的长期影响力，并介绍 Huiyan Huang。",
    url: "https://x.com/sherewires/status/2018513106729584814",
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
    summaryZh: "X 帖子：Dr. Meng 医疗 AI 在中国、香港和东南亚 20+ 医院应用。",
    url: "https://x.com/sherewires/status/2016011301433053544?s=20",
    image: "https://pbs.twimg.com/amplify_video_thumb/2016011131307892736/img/Atz_5uBvl4POZ5j-.jpg",
  },
  {
    id: "x-2026-01-23",
    channel: "x",
    type: "event",
    date: "2026-01-23",
    titleEn: "WomenWhoMaster partner in China: Jie Zhang",
    titleZh: "WomenWhoMaster 中国合作伙伴：Jie Zhang",
    summaryEn: "A long-game-in-tech story focused on women leadership and ecosystem building.",
    summaryZh: "聚焦女性领导力与生态共建的长期主义科技故事。",
    url: "https://x.com/sherewires",
    image: "https://pbs.twimg.com/amplify_video_thumb/2014594906392551424/img/dSEeh3SqiAzUtvWL.jpg",
  },
  {
    id: "x-2025-12-25",
    channel: "x",
    type: "event",
    date: "2025-12-25",
    titleEn: "She Rewires Singapore Christmas gathering",
    titleZh: "She Rewires 新加坡圣诞社群活动",
    summaryEn:
      "X recap: Singapore afternoon tea discussing digital economy leadership and inclusion.",
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
    id: "ig-2025-12-25",
    channel: "instagram",
    type: "event",
    date: "2025-12-25",
    titleEn: "Instagram: She Rewires Singapore Christmas special",
    titleZh: "Instagram：She Rewires 新加坡圣诞特别场",
    summaryEn: "Community gathering recap focused on women leading the digital future.",
    summaryZh: "社群活动回顾，聚焦女性引领数字未来。",
    url: "https://www.instagram.com/reel/DSrjH82ggbQ/",
    image:
      "https://scontent-iad3-1.cdninstagram.com/v/t51.2885-15/606984097_17939884461101884_6679849880418186304_n.jpg",
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
    summaryEn: "Coverage discussing She Rewires mission and women’s leadership in technology.",
    summaryZh: "报道聚焦 She Rewires 使命与女性科技领导力。",
    url: "https://technode.com/2025/05/23/beyond-expo-2025-she-rewires-founder-jill-tang-on-empowering-women-in-tech/",
    image: "https://technode.com/wp-content/uploads/2025/05/shetech.jpg",
  },
  {
    id: "media-logitech-2025-01-01",
    channel: "web",
    type: "media",
    date: "2025-01-01",
    titleEn: "Logitech feature: Jill Tang, Championing Women in STEM",
    titleZh: "Logitech 报道：Jill Tang 与女性 STEM 赋能",
    summaryEn: "Feature profile introducing Jill Tang and She Rewires collaboration in WomenWhoMaster.",
    summaryZh: "人物报道介绍 Jill Tang 及 She Rewires 在 WomenWhoMaster 中的合作。",
    url: "https://www.logitech.com/en-us/discover/women-who-master/meet/jill-tang",
    image:
      "https://resource.logitech.com/c_fill,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/mx/women-who-master/articles/jill-tang/logi-women-who-master-article-jill-tang-",
  },
  {
    id: "media-beyondexpo-2025-03-19",
    channel: "web",
    type: "media",
    date: "2025-03-19",
    titleEn: "BEYOND Expo: She Rewires co-hosts BEYOND SHETECH SUMMIT",
    titleZh: "BEYOND Expo 报道：She Rewires 联合主办 SHETECH 峰会",
    summaryEn: "Official event announcement and contextual media coverage from BEYOND Expo.",
    summaryZh: "来自 BEYOND Expo 官方的活动发布与背景报道。",
    url: "https://www.beyondexpo.com/2025/03/19/she-beyond-breaking-boundaries-creating-the-future-beyond-expo-and-she-rewires-co-host-beyond-shetech-summit/",
    image: "http://www.beyondexpo.com/wp-content/uploads/2025/03/SheTech-Forum-2025-English-Introduction-1024x576.png",
  },
  {
    id: "media-sina-2024-03-08",
    channel: "web",
    type: "media",
    date: "2024-03-08",
    titleEn: "Sina Finance interview with Jill Tang",
    titleZh: "新浪财经对话 Jill Tang",
    summaryEn: "Interview discussing gender inclusion and women’s pathways in technology.",
    summaryZh: "采访讨论科技领域中的性别包容与女性成长路径。",
    url: "https://finance.sina.com.cn/esg/sr/2024-03-08/doc-inamqvxr9025061.shtml",
    image: "https://n.sinaimg.cn/finance/transform/162/w550h412/20240308/2c27-ab5b6c0156a1c2f11141443e882b72b8.jpg",
  },
]
