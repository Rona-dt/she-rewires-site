import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { horizonSpeakers } from "./speakers-data"

const agenda = [
  { time: "09:00 - 09:45", topic: "签到与社群早餐 / Check-in & Networking Breakfast" },
  { time: "10:00 - 10:20", topic: "开幕欢迎 / Opening Welcome" },
  { time: "10:20 - 11:00", topic: "Opening Keynote: Rewiring Leadership in AI" },
  { time: "11:15 - 12:15", topic: "Panel: Capital, Community & Global Expansion" },
  { time: "13:30 - 15:00", topic: "Tracks: Founders / Investors / Next Gen" },
  { time: "15:15 - 16:30", topic: "Founder Showcases & Community Spotlights" },
  { time: "16:30 - 17:00", topic: "Closing + Group Photo" },
]

const highlights = [
  "50+ speakers & facilitators",
  "500+ founders, operators, investors",
  "3 themed tracks + 1 expo zone",
  "Cross-border collaboration focus",
]

const faqs = [
  { q: "活动需要门票吗？", a: "是的，活动报名将通过外部活动平台完成，请点击报名链接。" },
  { q: "是否支持品牌合作与赞助？", a: "支持。请邮件联系或下载赞助手册了解完整权益。" },
  { q: "是否有社群合作伙伴计划？", a: "有，欢迎媒体、社群组织与机构共同发起合作场次。" },
]

export default function RewiresHorizon2026Page() {
  return (
    <div className="bg-md-background pt-20 text-md-onSurface">
      <section className="relative overflow-hidden border-b border-md-outlineVariant/30 py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(131,96,255,0.14),transparent_40%),radial-gradient(circle_at_92%_5%,rgba(55,142,255,0.16),transparent_36%),linear-gradient(180deg,rgba(250,247,255,0.95),rgba(245,246,255,1))]" />
        <div className="container relative">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-md-primary">She Rewires Summit 2026</p>
          <h1 className="text-4xl font-semibold md:text-6xl">Rewires Horizon 2026</h1>
          <p className="mt-4 max-w-3xl text-lg text-md-onSurfaceVariant">一个面向未来的女性科技峰会：连接创新者、创始人、投资人和社群伙伴，共同探索 AI 与全球协作的新叙事。</p>

          <div className="mt-8 grid gap-3 text-base md:grid-cols-3">
            <div className="rounded-2xl bg-white/90 p-4 shadow-sm">📅 2026年6月13日（周六）</div>
            <div className="rounded-2xl bg-white/90 p-4 shadow-sm">📍 上海·新天地</div>
            <div className="rounded-2xl bg-white/90 p-4 shadow-sm">🌍 Bilingual Sessions / 中英双语</div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="https://www.eventbrite.com/" target="_blank" rel="noreferrer"><Button>立即报名 / Register Now</Button></a>
            <Link href="/contact"><Button variant="outline">Inquire More</Button></Link>
            <a href="mailto:partnerships@sherewires.com"><Button variant="outline">Sponsor: Email Us</Button></a>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="container grid gap-6 lg:grid-cols-4">
          {highlights.map((item) => (
            <Card key={item}><CardContent className="p-6 text-center"><p className="font-medium">{item}</p></CardContent></Card>
          ))}
        </div>
      </section>

      <section className="py-10">
        <div className="container grid gap-8 lg:grid-cols-3">
          <Card className="lg:col-span-2">
            <CardHeader><CardTitle>峰会议程 / Agenda</CardTitle></CardHeader>
            <CardContent>
              <div className="space-y-4">
                {agenda.map((item) => (
                  <div key={item.time} className="flex flex-col gap-1 border-b border-md-outlineVariant/30 pb-3 md:flex-row md:items-center md:justify-between">
                    <p className="font-medium text-md-primary">{item.time}</p>
                    <p className="text-md-onSurfaceVariant">{item.topic}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle>报名 / Registration</CardTitle></CardHeader>
            <CardContent className="space-y-3 text-sm text-md-onSurfaceVariant">
              <p>我们已将票务与报名流程迁移到外部活动平台，便于统一管理票种与核销。</p>
              <a href="https://www.eventbrite.com/" target="_blank" rel="noreferrer"><Button className="w-full">前往活动链接 / Open Event Page</Button></a>
              <p>如果你是企业团体报名，请发邮件联系我们获取团体通道。</p>
              <a href="mailto:hello@sherewires.com"><Button variant="outline" className="w-full">团体报名咨询</Button></a>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-14">
        <div className="container">
          <div className="mb-6 flex items-end justify-between gap-4">
            <h2 className="text-3xl font-semibold">嘉宾阵容 / Speakers</h2>
            <p className="text-sm text-md-onSurfaceVariant">点击嘉宾查看照片与 Bio（持续更新中）</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {horizonSpeakers.map((speaker) => (
              <Link key={speaker.slug} href={`/events/rewires-horizon-2026/speakers/${speaker.slug}`}>
                <Card className="h-full transition hover:scale-[1.01]"><CardHeader><img src={speaker.photo} alt={speaker.name} className="h-44 w-full rounded-xl object-cover" /></CardHeader><CardContent><CardTitle className="text-xl">{speaker.name}</CardTitle><p className="mt-2 text-sm text-md-onSurfaceVariant">{speaker.title}</p><p className="mt-4 text-sm">Session: {speaker.session}</p><p className="mt-2 text-sm text-md-primary">查看简介 / View Bio →</p></CardContent></Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="container grid gap-6 lg:grid-cols-3">
          <Card className="lg:col-span-2">
            <CardHeader><CardTitle>赞助商合作 / Sponsorship</CardTitle></CardHeader>
            <CardContent className="space-y-4 text-md-onSurfaceVariant">
              <p>我们提供冠名、主题论坛、展位展示、社群共创等多层级赞助方案。</p>
              <div className="flex flex-wrap gap-3">
                <a href="mailto:partnerships@sherewires.com"><Button>Sponsor: Email Us</Button></a>
                <a href="https://www.sherewires.com" target="_blank" rel="noreferrer"><Button variant="outline">下载赞助手册 / Download Deck</Button></a>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle>快速联系</CardTitle></CardHeader>
            <CardContent className="space-y-3 text-sm text-md-onSurfaceVariant">
              <p>邮箱：partnerships@sherewires.com</p>
              <p>微信：SheRewires_Official（占位）</p>
              <div className="flex h-28 items-center justify-center rounded-xl border border-dashed border-md-outlineVariant">微信二维码占位</div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-14"><div className="container"><h2 className="mb-6 text-3xl font-semibold">往届回顾 / Past Highlights</h2><div className="grid gap-6 md:grid-cols-3">{["2025 SHETECH Summit @ 澳门 BEYOND Expo", "2024 HerGorithm Women in Tech", "2023 Community Innovation Sessions"].map((item) => <Card key={item}><CardContent className="p-6"><h3 className="font-medium">{item}</h3><p className="mt-2 text-sm text-md-onSurfaceVariant">可在此接入活动图集、视频回放、媒体报道与关键数据成果。</p></CardContent></Card>)}</div></div></section>

      <section className="pb-20 pt-10"><div className="container"><h2 className="mb-6 text-3xl font-semibold">FAQ</h2><div className="grid gap-4">{faqs.map((item) => <Card key={item.q}><CardContent className="p-5"><p className="font-medium">{item.q}</p><p className="mt-2 text-md-onSurfaceVariant">{item.a}</p></CardContent></Card>)}</div></div></section>
    </div>
  )
}
