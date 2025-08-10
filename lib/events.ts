import fs from "fs"
import path from "path"
import matter from "gray-matter"

export interface EventFrontmatter {
  title: string
  author?: string
  date: string
  cover?: string
  head?: any[]
  // 为了兼容性，添加可选的英文字段
  title_en?: string
  location_zh?: string
  location_en?: string
  cover_image?: string
  tags?: string[]
  type?: "upcoming" | "past"
}

export interface Event extends EventFrontmatter {
  slug: string
  content: string
  // 处理后的字段
  displayTitle: string
  displayTitleEn: string
  displayDate: string
  displayCover: string
  displayLocation: string
  displayLocationEn: string
  displayTags: string[]
  displayType: "upcoming" | "past"
}

const eventsDirectory = path.join(process.cwd(), "content/events")

// 从日期字符串中提取标准日期格式
function parseDate(dateStr: string): string {
  // 处理中文日期格式：2025年06月02日
  const chineseDateMatch = dateStr.match(/(\d{4})年(\d{2})月(\d{2})日/)
  if (chineseDateMatch) {
    const [, year, month, day] = chineseDateMatch
    return `${year}-${month}-${day}`
  }

  // 如果已经是标准格式，直接返回
  if (dateStr.match(/^\d{4}-\d{2}-\d{2}$/)) {
    return dateStr
  }

  // 默认返回原始字符串
  return dateStr
}

// 从标题中提取位置信息
function extractLocationFromTitle(title: string): { zh: string; en: string } {
  // 从标题中提取位置信息，比如 "澳门BEYOND EXPO"
  if (title.includes("澳门")) {
    return { zh: "澳门", en: "Macau" }
  }
  if (title.includes("北京")) {
    return { zh: "北京", en: "Beijing" }
  }
  if (title.includes("上海")) {
    return { zh: "上海", en: "Shanghai" }
  }
  if (title.includes("深圳")) {
    return { zh: "深圳", en: "Shenzhen" }
  }

  return { zh: "中国", en: "China" }
}

// 从标题和内容中提取标签
function extractTags(title: string, content: string): string[] {
  const tags: string[] = []

  if (title.includes("峰会") || title.includes("SUMMIT")) {
    tags.push("summit")
  }
  if (title.includes("科技") || title.includes("TECH")) {
    tags.push("technology")
  }
  if (title.includes("女性") || title.includes("Women")) {
    tags.push("women-in-tech")
  }
  if (title.includes("社群") || title.includes("Community")) {
    tags.push("community")
  }
  if (content.includes("AI") || content.includes("人工智能")) {
    tags.push("ai")
  }
  if (content.includes("创新") || content.includes("Innovation")) {
    tags.push("innovation")
  }

  return tags.length > 0 ? tags : ["event"]
}

// 判断活动类型（过去或即将到来）
function determineEventType(dateStr: string): "upcoming" | "past" {
  const eventDate = new Date(parseDate(dateStr))
  const now = new Date()
  return eventDate > now ? "upcoming" : "past"
}

export function getAllEvents(): Event[] {
  try {
    if (!fs.existsSync(eventsDirectory)) {
      console.warn("Events directory does not exist:", eventsDirectory)
      return []
    }

    const fileNames = fs.readdirSync(eventsDirectory)
    const events = fileNames
      .filter((name) => name.endsWith(".md"))
      .map((name) => {
        const slug = name.replace(/\.md$/, "")
        const fullPath = path.join(eventsDirectory, name)
        const fileContents = fs.readFileSync(fullPath, "utf8")
        const { data, content } = matter(fileContents)

        const frontmatter = data as EventFrontmatter
        const location = extractLocationFromTitle(frontmatter.title)
        const standardDate = parseDate(frontmatter.date)

        return {
          slug,
          content,
          ...frontmatter,
          // 处理后的显示字段
          displayTitle: frontmatter.title,
          displayTitleEn: frontmatter.title_en || frontmatter.title,
          displayDate: standardDate,
          displayCover:
            frontmatter.cover_image || frontmatter.cover || "/placeholder.svg?height=400&width=600&text=Event",
          displayLocation: frontmatter.location_zh || location.zh,
          displayLocationEn: frontmatter.location_en || location.en,
          displayTags: frontmatter.tags || extractTags(frontmatter.title, content),
          displayType: frontmatter.type || determineEventType(frontmatter.date),
        } as Event
      })
      .sort((a, b) => new Date(b.displayDate).getTime() - new Date(a.displayDate).getTime())

    return events
  } catch (error) {
    console.error("Error reading events:", error)
    return []
  }
}

export function getEventBySlug(slug: string): Event | null {
  try {
    const fullPath = path.join(eventsDirectory, `${slug}.md`)
    if (!fs.existsSync(fullPath)) {
      console.warn("Event file does not exist:", fullPath)
      return null
    }

    const fileContents = fs.readFileSync(fullPath, "utf8")
    const { data, content } = matter(fileContents)

    const frontmatter = data as EventFrontmatter
    const location = extractLocationFromTitle(frontmatter.title)
    const standardDate = parseDate(frontmatter.date)

    return {
      slug,
      content,
      ...frontmatter,
      // 处理后的显示字段
      displayTitle: frontmatter.title,
      displayTitleEn: frontmatter.title_en || frontmatter.title,
      displayDate: standardDate,
      displayCover: frontmatter.cover_image || frontmatter.cover || "/placeholder.svg?height=400&width=600&text=Event",
      displayLocation: frontmatter.location_zh || location.zh,
      displayLocationEn: frontmatter.location_en || location.en,
      displayTags: frontmatter.tags || extractTags(frontmatter.title, content),
      displayType: frontmatter.type || determineEventType(frontmatter.date),
    } as Event
  } catch (error) {
    console.error(`Error reading event ${slug}:`, error)
    return null
  }
}
