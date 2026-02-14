"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight, ExternalLink, Linkedin, Instagram, Youtube, Twitter, Podcast } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { socialPosts } from "@/lib/social-posts"
import { mediaMentions } from "@/lib/media-mentions"

const platformLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/company/sherewires/posts/?feedView=all", name: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/sherewires/", name: "Instagram" },
  { icon: Youtube, href: "https://www.youtube.com/@sherewiresdigital395", name: "YouTube" },
  { icon: Twitter, href: "https://x.com/sherewires", name: "X" },
  { icon: Podcast, href: "https://podcasts.apple.com/ca/podcast/she-rewires-digital/id1559104327", name: "Apple Podcast" },
]

export default function MediaPage() {
  const { t, language } = useLanguage()
  const mediaPosts = socialPosts.filter((post) => post.type === "media")

  return (
    <div className="bg-md-background pt-20">
      <section className="py-16">
        <div className="container text-center">
          <h1 className="mb-6 text-4xl font-semibold text-md-onSurface md:text-6xl">{t("media.title")}</h1>
          <p className="mx-auto max-w-3xl text-xl text-md-onSurfaceVariant">{t("media.subtitle")}</p>
        </div>
      </section>

      <section className="pb-8">
        <div className="container">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-medium text-md-onSurface">{language === "en" ? "Official channels" : "官方渠道"}</h2>
              <div className="mt-4 flex flex-wrap gap-3">
                {platformLinks.map((item) => (
                  <a key={item.name} href={item.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-md-background px-4 py-2 text-sm text-md-onSurface transition-colors hover:bg-md-primary/10 hover:text-md-primary">
                    <item.icon className="h-4 w-4" /> {item.name}
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-6">
        <div className="container">
          <h2 className="mb-6 text-3xl font-medium text-md-onSurface">{language === "en" ? "Media interviews (web search sync)" : "媒体采访（全网检索同步）"}</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {mediaMentions.map((item) => (
              <Card key={item.id}>
                <CardContent className="p-6">
                  <p className="text-xs text-md-onSurfaceVariant">{item.date} · {item.source}</p>
                  <h3 className="mt-2 text-xl font-medium text-md-onSurface">{language === "en" ? item.titleEn : item.titleZh}</h3>
                  <p className="mt-2 text-sm text-md-onSurfaceVariant">{language === "en" ? item.summaryEn : item.summaryZh}</p>
                  <a href={item.url} target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center text-sm text-md-primary">
                    {language === "en" ? "Read article" : "查看原文"} <ExternalLink className="ml-1 h-3 w-3" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="container">
          <h2 className="mb-8 text-3xl font-medium text-md-onSurface">{language === "en" ? "Social media feed" : "社交媒体动态"}</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {mediaPosts.map((post) => (
              <Card key={post.id} className="group">
                <CardContent className="p-6">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="rounded-full bg-accent/50 px-3 py-1 text-sm font-medium text-md-onSurface">{post.channel.toUpperCase()}</span>
                    <ExternalLink className="h-4 w-4 text-md-onSurfaceVariant" />
                  </div>
                  <h3 className="mb-3 line-clamp-2 text-xl font-medium text-md-onSurface">{language === "en" ? post.titleEn : post.titleZh}</h3>
                  <div className="mb-3 flex items-center text-md-onSurfaceVariant">
                    <Calendar className="mr-2 h-4 w-4" />
                    <span className="text-sm">{post.date}</span>
                  </div>
                  <p className="mb-4 line-clamp-3 text-sm text-md-onSurfaceVariant">{language === "en" ? post.summaryEn : post.summaryZh}</p>
                  <Button className="w-full" onClick={() => window.open(post.url, "_blank")}>
                    {language === "en" ? "Open source" : "打开来源"}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
