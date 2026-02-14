"use client"

import { useState, type FormEvent } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, MessageCircle, Linkedin, Send, Paperclip, Instagram, Youtube, Twitter, Podcast } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/company/sherewires/posts/?feedView=all", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/sherewires/", label: "Instagram" },
  { icon: Youtube, href: "https://www.youtube.com/@sherewiresdigital395", label: "YouTube" },
  { icon: Twitter, href: "https://x.com/sherewires", label: "X" },
  { icon: Podcast, href: "https://podcasts.apple.com/ca/podcast/she-rewires-digital/id1559104327", label: "Apple Podcast" },
]

export default function ContactPage() {
  const { t, language } = useLanguage()
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [fileName, setFileName] = useState("")

  const onSubmit = (event: FormEvent) => {
    event.preventDefault()
    const subject = encodeURIComponent(`SHE REWIRES contact - ${form.name || "Website visitor"}`)
    const body = encodeURIComponent(
      `${language === "en" ? "Name" : "姓名"}: ${form.name}\n${language === "en" ? "Email" : "邮箱"}: ${form.email}\n\n${
        form.message
      }\n\n${language === "en" ? "Attachment" : "附件"}: ${fileName || (language === "en" ? "None" : "无")}`
    )
    window.location.href = `mailto:cobuilder@sherewires.com?subject=${subject}&body=${body}`
  }

  return (
    <div className="bg-md-background pt-20">
      <section className="relative overflow-hidden py-16">
        <div className="md-blob -right-20 top-10 h-64 w-64 bg-md-primary/20" aria-hidden="true" />
        <div className="container relative text-center">
          <h1 className="text-5xl font-semibold text-md-onSurface md:text-6xl">{t("contact.title")}</h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-md-onSurfaceVariant">
            {language === "en"
              ? "The fastest way to reach us is email. We usually reply within 2 business days."
              : "联系我们最快的方式是邮件。通常会在 2 个工作日内回复。"}
          </p>
        </div>
      </section>

      <section className="py-10">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
            <Card>
              <CardContent className="p-8">
                <h2 className="mb-6 text-2xl font-medium text-md-onSurface">{language === "en" ? "Send us a message" : "给我们留言"}</h2>
                <form className="space-y-6" onSubmit={onSubmit}>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-md-onSurfaceVariant">{t("contact.form.name")}</label>
                    <Input type="text" required value={form.name} onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))} placeholder={language === "en" ? "Your name" : "您的姓名"} />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-md-onSurfaceVariant">{t("contact.form.email")}</label>
                    <Input type="email" required value={form.email} onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))} placeholder={language === "en" ? "your.email@example.com" : "您的邮箱@example.com"} />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-md-onSurfaceVariant">{t("contact.form.message")}</label>
                    <Textarea rows={5} required value={form.message} onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))} placeholder={language === "en" ? "Tell us what collaboration/support you need..." : "告诉我们你希望合作或支持的内容..."} />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-md-onSurfaceVariant">{language === "en" ? "Attachment (optional)" : "附件（可选）"}</label>
                    <label className="flex h-12 cursor-pointer items-center gap-2 rounded-full border border-md-outline/40 bg-md-primary/5 px-5 text-sm text-md-onSurfaceVariant transition-colors hover:bg-md-primary/10">
                      <Paperclip className="h-4 w-4" />
                      {fileName || (language === "en" ? "Choose file" : "选择文件")}
                      <input type="file" className="hidden" onChange={(event) => setFileName(event.target.files?.[0]?.name ?? "")} />
                    </label>
                    <p className="mt-2 text-xs text-md-onSurfaceVariant">
                      {language === "en"
                        ? "Your email app will open. If needed, attach the same file before sending."
                        : "提交后会打开邮件客户端，如需发送附件，请在邮件中添加同名文件。"}
                    </p>
                  </div>
                  <Button type="submit" className="w-full">
                    <Send className="h-4 w-4" /> {language === "en" ? "Open email draft" : "打开邮件草稿"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardContent className="space-y-4 p-6">
                  <h3 className="text-xl font-medium">{language === "en" ? "Direct channels" : "直接联系"}</h3>
                  <a className="flex items-center gap-3 rounded-2xl bg-md-background p-3 hover:bg-md-primary/5" href="mailto:cobuilder@sherewires.com">
                    <Mail className="h-5 w-5 text-md-primary" />
                    <span>cobuilder@sherewires.com</span>
                  </a>
                  <div className="flex items-center gap-3 rounded-2xl bg-md-background p-3">
                    <MessageCircle className="h-5 w-5 text-md-primary" />
                    <span>WeChat: TANGTASTIC</span>
                  </div>
                  <div className="flex items-center gap-3 rounded-2xl bg-md-background p-3">
                    <MapPin className="h-5 w-5 text-md-primary" />
                    <span>China · Singapore · Europe</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-4 text-xl font-medium">{language === "en" ? "Social" : "社交平台"}</h3>
                  <div className="flex flex-wrap gap-3">
                    {socialLinks.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className="flex h-11 w-11 items-center justify-center rounded-full bg-md-background text-md-onSurfaceVariant hover:bg-md-primary/10 hover:text-md-primary"
                      >
                        <item.icon className="h-5 w-5" />
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
