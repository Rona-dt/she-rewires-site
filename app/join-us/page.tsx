"use client"

import { useState, type FormEvent } from "react"
import { Mail, MapPin, MessageCircle, Send } from "lucide-react"
import { HeroSection } from "@/components/sections/hero-section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { joinUsPage } from "@/content/pages/platform"
import { localizeJoinPaths, localizePage, localizeText } from "@/content/localization"
import { useLocale } from "@/components/language-provider"
import { siteConfig } from "@/content/site-config"

export default function JoinUsPage() {
  const { locale } = useLocale()
  const page = localizePage(joinUsPage, locale)
  const joinPaths = localizeJoinPaths(locale)
  const [selectedPaths, setSelectedPaths] = useState<string[]>([])
  const [form, setForm] = useState({ name: "", city: "", email: "", message: "" })
  const [pathError, setPathError] = useState(false)

  const togglePath = (pathId: string) => {
    setSelectedPaths((current) => current.includes(pathId) ? current.filter((item) => item !== pathId) : [...current, pathId])
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    if (selectedPaths.length === 0) {
      setPathError(true)
      return
    }
    setPathError(false)
    const selectedLabels = selectedPaths
      .map((pathId) => joinPaths.find((path) => path.id === pathId)?.title)
      .filter(Boolean)
      .join(", ")
    const subject = encodeURIComponent(`Join She Rewires - ${form.name || "New collaborator"}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nCity: ${form.city}\nEmail: ${form.email}\nEntry paths: ${selectedLabels}\n\nMessage:\n${form.message}`
    )
    window.location.href = `mailto:${siteConfig.contactEmail}?subject=${subject}&body=${body}`
  }

  return (
    <div className="bg-md-background">
      <HeroSection hero={page.hero} />

      <section className="py-14">
        <div className="container">
          <div className="mb-8 max-w-4xl">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-md-primary">{localizeText("Entry Paths", locale)}</p>
            <h2 className="mt-2 text-3xl font-semibold text-md-onSurface md:text-4xl">{localizeText("Choose how you want to enter the system", locale)}</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {joinPaths.map((path) => (
              <Card key={path.id} className="h-full">
                <CardHeader>
                  <p className="text-sm font-medium text-md-primary">{path.audience}</p>
                  <CardTitle>{path.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-md-onSurfaceVariant">{path.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {path.actions.map((action) => (
                      <span key={action} className="rounded-full bg-md-primary/10 px-3 py-1 text-xs text-md-primary">{action}</span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="container grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <Card>
            <CardHeader>
              <CardTitle>{localizeText("Tell us how you want to build with us", locale)}</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-md-onSurfaceVariant">{localizeText("Name", locale)} *</label>
                    <Input required value={form.name} onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))} placeholder={localizeText("Your name", locale)} />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-md-onSurfaceVariant">{localizeText("City", locale)} *</label>
                    <Input required value={form.city} onChange={(event) => setForm((current) => ({ ...current, city: event.target.value }))} placeholder={localizeText("Your city", locale)} />
                  </div>
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-md-onSurfaceVariant">Email *</label>
                  <Input type="email" required value={form.email} onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))} placeholder="your@email.com" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-md-onSurfaceVariant">{localizeText("Entry paths", locale)} *</label>
                  <div className="grid gap-3 md:grid-cols-2">
                    {joinPaths.map((path) => (
                      <button
                        key={path.id}
                        type="button"
                        onClick={() => {
                          togglePath(path.id)
                          setPathError(false)
                        }}
                        className={`rounded-2xl border p-3 text-left text-sm transition-all ${selectedPaths.includes(path.id) ? "border-md-primary bg-md-primary/10 text-md-onSurface" : "border-md-outline/30 bg-md-background text-md-onSurfaceVariant hover:border-md-primary/40"}`}
                      >
                        {path.title}
                      </button>
                    ))}
                  </div>
                  {pathError && <p className="mt-2 text-sm text-red-700" role="alert">{localizeText("Select at least one entry path.", locale)}</p>}
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-md-onSurfaceVariant">{localizeText("Message", locale)}</label>
                  <Textarea rows={5} value={form.message} onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))} placeholder={localizeText("Tell us what you want to build, contribute, or explore.", locale)} />
                </div>
                <p className="text-xs text-md-onSurfaceVariant">
                  {localizeText("Your message will open in your email app for review before sending.", locale)}
                </p>
                <Button type="submit" className="w-full">
                  <Send className="h-4 w-4" /> {localizeText("Open email draft", locale)}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-5">
            <Card>
              <CardContent className="space-y-4 p-6">
                <h3 className="text-xl font-medium text-md-onSurface">{localizeText("Direct channels", locale)}</h3>
                <a className="flex items-center gap-3 rounded-2xl bg-md-background p-3 hover:bg-md-primary/5" href={`mailto:${siteConfig.contactEmail}`}>
                  <Mail className="h-5 w-5 text-md-primary" />
                  <span>{siteConfig.contactEmail}</span>
                </a>
                <div className="flex items-center gap-3 rounded-2xl bg-md-background p-3">
                  <MessageCircle className="h-5 w-5 text-md-primary" />
                  <span>{localizeText("WeChat", locale)}: {siteConfig.wechat}</span>
                </div>
                <div className="flex items-center gap-3 rounded-2xl bg-md-background p-3">
                  <MapPin className="h-5 w-5 text-md-primary" />
                  <span>China · Singapore · India · UK</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-medium text-md-onSurface">{localizeText("For partnerships", locale)}</h3>
                <p className="mt-3 text-sm text-md-onSurfaceVariant">{localizeText("Organizations can contact the partnership team for programs, research, sponsorship, and ecosystem collaboration.", locale)}</p>
                <a className="mt-4 inline-flex text-sm font-medium text-md-primary hover:underline" href={`mailto:${siteConfig.partnershipEmail}`}>{siteConfig.partnershipEmail}</a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
