"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Users, Globe, Heart } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export default function AboutPage() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: "Who We Are",
      content: `We began in 2017, originally launched under the name Ladies Who Tech, dedicated to inspiring more women and girls to pursue their dreams in technology and innovation, igniting their passion for STEAM fields, and building a vibrant community to support their growth, leadership, and lasting impact.

In 2023, we evolved into She Rewires, transforming into a women-led open innovation ecosystem focused on co-creating impact. As China's most influential community of women in technology, She Rewires centers on the development of women in science, technology, engineering, arts, and mathematics (STEAM). Starting from China and connecting globally, we are committed to shaping a sustainable STEAM future, embracing change, and jointly building a diverse, innovative, and inclusive world with a female perspective and ally support, where everyone becomes a super individual in their own field.

Today, we empower super individuals and collaborate with mission-driven organizations to creatively co-build and empower sustainable business and the new talent, connecting the world and creating the future together.`,
    },
    zh: {
      title: "我们是谁",
      content: `我们始于2017年，最初以Ladies Who Tech 名义发起，致力于激励更多女性和女孩勇敢追寻科技与创新的梦想，点燃她们对STEAM领域的热爱，打造一个充满活力的社群，助力她们茁壮成长、引领未来，创造持久影响力。

2023年，我们升级为她原力（She Rewires），转型为女性主导的开源创新生态，专注于共创影响力。作为中国最具影响力的科技女性社群，她原力聚焦女性在科学、技术、工程、艺术和数学（STEAM）领域的发展。我们从中国出发，链接全球，致力于塑造一个可持续的STEAM未来，拥抱时代变化，同时共同构建一个有女性视角和盟友支持的多元、创新与包容的世界，让每个人都成为自己领域的超级个体。

如今，我们赋能超级个体，与使命驱动的组织携手，通过影响力创意共建推动可持续商业发展和新型人才的培养，联结全球，共同开创未来。`,
    },
  }

  const t = content[language]

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-purple-600 to-purple-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">{t.title}</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            {language === "en"
              ? "From Ladies Who Tech to She Rewires - Our Journey of Empowerment"
              : "从 Ladies Who Tech 到她原力 - 我们的赋能之旅"}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <div className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">{t.content}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-purple-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            {language === "en" ? "Our Values" : "我们的价值观"}
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center border-purple-200">
              <CardContent className="p-8">
                <Users className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">{language === "en" ? "Inclusivity" : "包容性"}</h3>
                <p className="text-gray-700">
                  {language === "en"
                    ? "Creating spaces where all women feel welcome and valued in STEAM fields."
                    : "创造让所有女性在 STEAM 领域都感到受欢迎和被重视的空间。"}
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-purple-200">
              <CardContent className="p-8">
                <Globe className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">{language === "en" ? "Innovation" : "创新"}</h3>
                <p className="text-gray-700">
                  {language === "en"
                    ? "Fostering creative thinking and breakthrough solutions in technology."
                    : "培养创造性思维和技术突破性解决方案。"}
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-purple-200">
              <CardContent className="p-8">
                <Heart className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">{language === "en" ? "Community" : "社区"}</h3>
                <p className="text-gray-700">
                  {language === "en"
                    ? "Building strong networks of support and collaboration among women."
                    : "在女性之间建立强大的支持和协作网络。"}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
