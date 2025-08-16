"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, MapPin, Heart, Twitter, Instagram, Linkedin, Github } from "lucide-react"
import Image from "next/image"

export default function SheRewiresLanding() {
  const [language, setLanguage] = useState<"en" | "zh">("en")

  const content = {
    en: {
      nav: {
        about: "About",
        join: "Join Us",
        impact: "Impact",
      },
      hero: {
        headline: "Rewiring the Future of Women in STEAM",
        description:
          "Empowering women in Science, Technology, Engineering, Arts & Mathematics across China and beyond.",
        cta: "Join Us",
      },
      about: {
        title: "About Us",
        content:
          "SHE REWIRES focuses on the development of women in science, technology, engineering, art, and mathematics (STEAM). We're committed to igniting and reshaping women's passion and development for STEAM. As the most active women-in-STEAM community in China, we represent a new and vibrant image of Chinese women in technology.",
      },
      joinUs: {
        title: "Join Our Community",
        description:
          "Be part of a movement that's reshaping the future of women in STEAM. Connect, learn, and grow with like-minded women across the globe.",
        member: "Become a Member",
        volunteer: "Volunteer",
      },
      stats: {
        title: "Our Global Impact",
        members: "Global Members",
        builders: "Co-builders",
        cities: "Cities Network",
      },
      footer: {
        description: "Empowering women in STEAM across China and beyond.",
        rights: "© 2024 SHE REWIRES. All rights reserved.",
      },
    },
    zh: {
      nav: {
        about: "关于我们",
        join: "加入我们",
        impact: "影响力",
      },
      hero: {
        headline: "重塑女性 STEAM 未来",
        description: "赋能中国及全球女性在科学、技术、工程、艺术和数学领域的发展。",
        cta: "加入我们",
      },
      about: {
        title: "关于我们",
        content:
          "SHE REWIRES 她原力聚焦于女性在科学、技术、工程、艺术和数学（STEAM）领域的发展。我们致力于点燃和重塑女性对于 STEAM 的热爱和发展，展现一种全新而充满活力的中国科技女性新形象。",
      },
      joinUs: {
        title: "加入我们的社区",
        description: "成为重塑女性 STEAM 未来运动的一部分。与全球志同道合的女性建立联系、学习和成长。",
        member: "成为会员",
        volunteer: "志愿者招募",
      },
      stats: {
        title: "我们的全球影响力",
        members: "全球会员",
        builders: "共建者",
        cities: "城市网络",
      },
      footer: {
        description: "赋能中国及全球女性在 STEAM 领域的发展。",
        rights: "© 2024 SHE REWIRES 她原力. 保留所有权利。",
      },
    },
  }

  const t = content[language]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-purple-100">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">SR</span>
            </div>
            <span className="font-bold text-purple-900">SHE REWIRES</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-700 hover:text-purple-600 transition-colors">
              {t.nav.about}
            </a>
            <a href="#join" className="text-gray-700 hover:text-purple-600 transition-colors">
              {t.nav.join}
            </a>
            <a href="#impact" className="text-gray-700 hover:text-purple-600 transition-colors">
              {t.nav.impact}
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setLanguage(language === "en" ? "zh" : "en")}
              className="px-3 py-1 text-sm border border-purple-200 rounded-full hover:bg-purple-50 transition-colors"
            >
              {language === "en" ? "中文" : "EN"}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-8 flex justify-center">
            <Image
              src="/she-rewires-logo.png"
              alt="SHE REWIRES 她原力 Logo"
              width={300}
              height={200}
              className="rounded-2xl shadow-lg"
            />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
              {t.hero.headline}
            </span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">{t.hero.description}</p>

          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            {t.hero.cta}
          </Button>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">{t.about.title}</h2>
            <p className="text-lg text-gray-700 leading-relaxed">{t.about.content}</p>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section id="impact" className="py-16 px-4 bg-gradient-to-r from-purple-600 to-purple-700">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">{t.stats.title}</h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-center">
              <CardContent className="p-8">
                <Users className="w-12 h-12 text-white mx-auto mb-4" />
                <div className="text-4xl font-bold text-white mb-2">70,000+</div>
                <div className="text-purple-100">{t.stats.members}</div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-center">
              <CardContent className="p-8">
                <Heart className="w-12 h-12 text-white mx-auto mb-4" />
                <div className="text-4xl font-bold text-white mb-2">130+</div>
                <div className="text-purple-100">{t.stats.builders}</div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-center">
              <CardContent className="p-8">
                <MapPin className="w-12 h-12 text-white mx-auto mb-4" />
                <div className="text-4xl font-bold text-white mb-2">16+</div>
                <div className="text-purple-100">{t.stats.cities}</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section id="join" className="py-16 px-4 bg-purple-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{t.joinUs.title}</h2>

          <p className="text-lg text-gray-700 mb-10 max-w-2xl mx-auto">{t.joinUs.description}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {t.joinUs.member}
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 bg-transparent"
            >
              {t.joinUs.volunteer}
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">SR</span>
                </div>
                <span className="font-bold text-xl">SHE REWIRES 她原力</span>
              </div>
              <p className="text-gray-400 max-w-md">{t.footer.description}</p>
            </div>

            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>{t.footer.rights}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
