import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { horizonSpeakers } from "./speakers-data"

const agenda = [
  { time: "09:00 - 09:45", topic: "签到与社群早餐 / Check-in & Networking Breakfast" },
  { time: "10:00 - 10:20", topic: "开幕欢迎 / Opening Welcome" },
  { time: "10:20 - 11:00", topic: "主题演讲 / Keynote" },
  { time: "11:15 - 12:15", topic: "圆桌论坛：科技、领导力与未来 / Panel Discussion" },
  { time: "12:15 - 13:30", topic: "午餐与社群连接 / Community Lunch" },
  { time: "13:30 - 15:00", topic: "工作坊 / Workshops" },
  { time: "15:15 - 16:30", topic: "创始人闪电分享 / Founder Lightning Talks" },
  { time: "16:30 - 17:00", topic: "闭幕与合影 / Closing & Group Photo" },
]

const ticketTiers = [
  { name: "Early Bird", price: "¥399", perks: ["全天峰会入场", "社群午餐", "资料包下载"] },
  { name: "General", price: "¥599", perks: ["全天峰会入场", "工作坊席位", "社群午餐 + 茶歇"] },
  { name: "VIP", price: "¥999", perks: ["前排席位", "VIP Luncheon", "闭门交流会"] },
]

const faqs = [
  { q: "门票可以退款吗？", a: "正式开票后 7 天内可申请退款；活动前 14 天起不支持退款，可转让名额。" },
  { q: "是否有英文内容？", a: "峰会采用中英双语主持，部分场次配有中英即时字幕。" },
  { q: "如何申请成为赞助商？", a: "请发邮件至 partnerships@sherewires.com，团队会发送 Sponsorship Deck。" },
]

export default function RewiresHorizon2026Page() {
  return (
    <div className="bg-md-background pt-20 text-md-onSurface">
      <section className="relative overflow-hidden border-b border-md-outlineVariant/30 py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(181,129,255,0.28),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(100,170,255,0.22),transparent_45%),linear-gradient(180deg,rgba(16,15,24,0.8),rgba(16,15,24,0.96))]" />
        <div className="container relative">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-md-primary">She Rewires Summit</p>
          <h1 className="text-4xl font-semibold md:text-6xl">Rewires Horizon 2026</h1>
          <p className="mt-4 max-w-3xl text-lg text-md-onSurfaceVariant">面向下一代女性科技领导者的峰会，连接创始人、投资人、研究者与社群行动者。</p>

          <div className="mt-8 grid gap-3 text-base md:grid-cols-3">
            <div className="rounded-2xl bg-md-surfaceContainer/80 p-4">📅 日期：2026年6月13日</div>
            <div className="rounded-2xl bg-md-surfaceContainer/80 p-4">📍 地点：新天地</div>
            <div className="rounded-2xl bg-md-surfaceContainer/80 p-4">🎟️ 活动类型：线下峰会</div>
          </div>

          <div className="mt-6 grid max-w-xl grid-cols-4 gap-3 text-center">
            {[
              { unit: "Days", value: "39" },
              { unit: "Hours", value: "12" },
              { unit: "Mins", value: "08" },
              { unit: "Secs", value: "24" },
            ].map((item) => (
              <div key={item.unit} className="rounded-xl border border-md-outlineVariant/60 bg-md-surfaceContainer/70 p-3">
                <p className="text-2xl font-semibold">{item.value}</p>
                <p className="text-xs text-md-onSurfaceVariant">{item.unit}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="https://www.eventbrite.com/" target="_blank" rel="noreferrer"><Button>买票 / Buy Tickets</Button></a>
            <Link href="/contact"><Button variant="outline">Inquire More</Button></Link>
            <a href="mailto:partnerships@sherewires.com"><Button variant="outline">Sponsor: Email Us</Button></a>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="container">
          <h2 className="mb-6 text-3xl font-semibold">票种 / Ticket Tiers</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {ticketTiers.map((tier) => (
              <Card key={tier.name}>
                <CardHeader><CardTitle className="flex items-center justify-between">{tier.name}<span className="text-md-primary">{tier.price}</span></CardTitle></CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-md-onSurfaceVariant">{tier.perks.map((perk) => <li key={perk}>• {perk}</li>)}</ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14"><div className="container"><h2 className="mb-6 text-3xl font-semibold">峰会议程 / Agenda</h2><div className="grid gap-4">{agenda.map((item) => (<Card key={item.time}><CardContent className="flex flex-col justify-between gap-3 p-5 md:flex-row md:items-center"><p className="font-medium text-md-primary">{item.time}</p><p className="text-md-onSurfaceVariant">{item.topic}</p></CardContent></Card>))}</div></div></section>

      <section className="py-14">
        <div className="container">
          <h2 className="mb-6 text-3xl font-semibold">嘉宾阵容 / Speakers</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {horizonSpeakers.map((speaker) => (
              <Link key={speaker.slug} href={`/events/rewires-horizon-2026/speakers/${speaker.slug}`}>
                <Card className="h-full transition hover:scale-[1.01]"><CardHeader><img src={speaker.photo} alt={speaker.name} className="h-44 w-full rounded-xl object-cover" /></CardHeader><CardContent><CardTitle className="text-xl">{speaker.name}</CardTitle><p className="mt-2 text-sm text-md-onSurfaceVariant">{speaker.title}</p><p className="mt-4 text-sm">Session: {speaker.session}</p><p className="mt-2 text-sm text-md-primary">查看简介 / View Bio →</p></CardContent></Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14"><div className="container grid gap-6 lg:grid-cols-2"><Card><CardHeader><CardTitle>赞助权益 / Sponsorship Packages</CardTitle></CardHeader><CardContent><ul className="space-y-2 text-sm text-md-onSurfaceVariant"><li>• Logo placement（主视觉、会场物料、官网）</li><li>• Speaking slot（主题分享或圆桌）</li><li>• Booth access（品牌展示与招募）</li><li>• Community co-marketing（社群联合传播）</li></ul><div className="mt-5"><a href="mailto:partnerships@sherewires.com"><Button variant="outline">下载赞助方案 / Request Deck</Button></a></div></CardContent></Card><Card><CardHeader><CardTitle>赞助商 & 社群伙伴 Logo 区</CardTitle></CardHeader><CardContent><div className="grid grid-cols-2 gap-4">{["Sponsor A","Sponsor B","Partner A","Partner B"].map((name)=> <div key={name} className="flex h-20 items-center justify-center rounded-xl border border-dashed border-md-outlineVariant text-sm text-md-onSurfaceVariant">{name} Logo</div>)}</div></CardContent></Card></div></section>

      <section className="py-14"><div className="container"><h2 className="mb-6 text-3xl font-semibold">往届回顾 / Past Highlights</h2><div className="grid gap-6 md:grid-cols-3">{["2025 SHETECH Summit 澳门","2024 HerGorithm 峰会","2023 社群行动专场"].map((item)=><Card key={item}><CardContent className="p-6"><h3 className="font-medium">{item}</h3><p className="mt-2 text-sm text-md-onSurfaceVariant">这里可放往届数据、照片、媒体引用或短视频链接。</p></CardContent></Card>)}</div></div></section>

      <section className="pb-20 pt-10"><div className="container"><h2 className="mb-6 text-3xl font-semibold">FAQ</h2><div className="grid gap-4">{faqs.map((item)=><Card key={item.q}><CardContent className="p-5"><p className="font-medium">{item.q}</p><p className="mt-2 text-md-onSurfaceVariant">{item.a}</p></CardContent></Card>)}</div></div></section>
    </div>
  )
}
