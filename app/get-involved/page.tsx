"use client"

import { useState, type FormEvent } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { UserPlus, Lightbulb, MapPin, Handshake, Send } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export default function GetInvolvedPage() {
  const { t, language } = useLanguage()
  const [selectedRoles, setSelectedRoles] = useState<string[]>([])
  const [form, setForm] = useState({ name: "", city: "", email: "", social: "" })

  const roles = [
    { id: "cobuilder", icon: <UserPlus className="h-8 w-8 text-md-primary" />, title: t("role.cobuilder"), scope: t("role.cobuilder.scope"), benefits: t("role.cobuilder.benefits") },
    { id: "incubator", icon: <Lightbulb className="h-8 w-8 text-md-primary" />, title: t("role.incubator"), scope: t("role.incubator.scope"), benefits: t("role.incubator.benefits") },
    { id: "catalyst", icon: <MapPin className="h-8 w-8 text-md-primary" />, title: t("role.catalyst"), scope: t("role.catalyst.scope"), benefits: t("role.catalyst.benefits") },
    { id: "partner", icon: <Handshake className="h-8 w-8 text-md-primary" />, title: t("role.partner"), scope: t("role.partner.scope"), benefits: t("role.partner.benefits") },
  ]

  const toggleRole = (roleId: string) => {
    setSelectedRoles((prev) => (prev.includes(roleId) ? prev.filter((role) => role !== roleId) : [...prev, roleId]))
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    const subject = encodeURIComponent(`Join Us - ${form.name || "New applicant"}`)
    const body = encodeURIComponent(
      `${t("form.name")}: ${form.name}\n${t("form.city")}: ${form.city}\n${t("form.email")}: ${form.email}\n${t("form.roles")}: ${selectedRoles
        .map((roleId) => roles.find((role) => role.id === roleId)?.title)
        .filter(Boolean)
        .join(", ")}\n${t("form.linkedin")}: ${form.social}`
    )
    window.location.href = `mailto:cobuilder@sherewires.com?subject=${subject}&body=${body}`
  }

  return (
    <div className="bg-md-background pt-20">
      <section className="py-16">
        <div className="container text-center">
          <h1 className="mb-6 text-4xl font-semibold text-md-onSurface md:text-6xl">{t("getInvolved.title")}</h1>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-md-onSurfaceVariant">{t("getInvolved.description")}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
            {roles.map((role) => (
              <Card key={role.id} className="hover:scale-[1.02]">
                <CardContent className="p-8">
                  <div className="mb-4 flex items-center">
                    {role.icon}
                    <h3 className="ml-3 text-2xl font-medium text-md-onSurface">{role.title}</h3>
                  </div>
                  <div className="mb-4">
                    <h4 className="mb-2 font-medium text-md-primary">{language === "en" ? "Scope" : "范围"}</h4>
                    <p className="leading-relaxed text-md-onSurfaceVariant">{role.scope}</p>
                  </div>
                  <div>
                    <h4 className="mb-2 font-medium text-md-primary">{language === "en" ? "What You Get" : "你将获得"}</h4>
                    <p className="leading-relaxed text-md-onSurfaceVariant">{role.benefits}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-medium text-md-onSurface md:text-4xl">{t("getInvolved.cta.title")}</h2>
            <p className="text-lg text-md-onSurfaceVariant">{t("getInvolved.cta.desc")}</p>
          </div>

          <Card className="mx-auto max-w-2xl">
            <CardContent className="p-8">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="mb-2 block text-sm font-medium text-md-onSurfaceVariant">{t("form.name")} *</label>
                  <Input type="text" required placeholder={language === "en" ? "Your name" : "您的姓名"} value={form.name} onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))} />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-md-onSurfaceVariant">{t("form.city")} *</label>
                  <Input type="text" required placeholder={language === "en" ? "Your city" : "您的城市"} value={form.city} onChange={(event) => setForm((prev) => ({ ...prev, city: event.target.value }))} />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-md-onSurfaceVariant">{t("form.email")} *</label>
                  <Input type="email" required placeholder={language === "en" ? "your@email.com" : "您的邮箱"} value={form.email} onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))} />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-md-onSurfaceVariant">{t("form.roles")} *</label>
                  <div className="grid grid-cols-2 gap-3">
                    {roles.map((role) => (
                      <button
                        key={role.id}
                        type="button"
                        onClick={() => toggleRole(role.id)}
                        className={`rounded-2xl border p-3 text-left transition-all ${
                          selectedRoles.includes(role.id)
                            ? "border-md-primary bg-md-primary/10 text-md-onSurface"
                            : "border-md-outline/30 bg-md-background text-md-onSurfaceVariant hover:border-md-primary/40"
                        }`}
                      >
                        <span className="text-sm font-medium">{role.title}</span>
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-md-onSurfaceVariant">{t("form.linkedin")}</label>
                  <Input type="url" placeholder="https://linkedin.com/in/..." value={form.social} onChange={(event) => setForm((prev) => ({ ...prev, social: event.target.value }))} />
                </div>
                <p className="text-xs text-md-onSurfaceVariant">
                  {language === "en"
                    ? "After submit, your email app opens with all information prefilled and sends to cobuilder@sherewires.com."
                    : "提交后将打开邮件客户端，并将信息预填后发送到 cobuilder@sherewires.com。"}
                </p>
                <Button type="submit" className="w-full">
                  <Send className="h-4 w-4" /> {t("form.submit")}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
