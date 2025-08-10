import fs from "fs"
import path from "path"
import matter from "gray-matter"

export interface EventFrontmatter {
  title: string
  title_en: string
  date: string
  location_zh: string
  location_en: string
  cover_image: string
  tags: string[]
  type: "upcoming" | "past"
}

export interface Event extends EventFrontmatter {
  slug: string
  content: string
}

const eventsDirectory = path.join(process.cwd(), "content/events")

export function getAllEvents(): Event[] {
  try {
    const fileNames = fs.readdirSync(eventsDirectory)
    const events = fileNames
      .filter((name) => name.endsWith(".md"))
      .map((name) => {
        const slug = name.replace(/\.md$/, "")
        const fullPath = path.join(eventsDirectory, name)
        const fileContents = fs.readFileSync(fullPath, "utf8")
        const { data, content } = matter(fileContents)

        return {
          slug,
          content,
          ...(data as EventFrontmatter),
        }
      })
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

    return events
  } catch (error) {
    console.error("Error reading events:", error)
    return []
  }
}

export function getEventBySlug(slug: string): Event | null {
  try {
    const fullPath = path.join(eventsDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, "utf8")
    const { data, content } = matter(fileContents)

    return {
      slug,
      content,
      ...(data as EventFrontmatter),
    }
  } catch (error) {
    console.error(`Error reading event ${slug}:`, error)
    return null
  }
}
