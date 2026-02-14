export interface MediaMention {
  id: string
  date: string
  source: string
  titleEn: string
  titleZh: string
  summaryEn: string
  summaryZh: string
  url: string
}

export const mediaMentions: MediaMention[] = [
  {
    id: "technode-2025-05-23",
    date: "2025-05-23",
    source: "TechNode",
    titleEn: "BEYOND Expo 2025: She Rewires founder Jill Tang on empowering women in tech",
    titleZh: "BEYOND Expo 2025：She Rewires 创始人 Jill Tang 谈科技女性赋能",
    summaryEn:
      "Interview coverage focused on women in tech, ecosystem building, and future-facing leadership from the BEYOND Expo context.",
    summaryZh: "报道聚焦科技女性、生态共建与未来领导力，来自 BEYOND Expo 语境下的创始人访谈。",
    url: "https://technode.com/2025/05/23/beyond-expo-2025-she-rewires-founder-jill-tang-on-empowering-women-in-tech/",
  },
]
