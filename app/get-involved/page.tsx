"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { UserPlus, Heart, Calendar, MessageCircle } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export default function GetInvolvedPage() {
  const { t, language } = useLanguage()

  const opportunities = [
    {
      icon: <UserPlus className="w-8 h-8 text-purple-600" />,
      title: language === "en" ? "Become a Member" : "成为会员",
      description:
        language === "en"
          ? "Join our global community of women in STEAM and access exclusive resources, networking opportunities, and career development programs."
          : "加入我们的全球 STEAM 女性社区，获得独家资源、网络机会和职业发展项目。",
      benefits:
        language === "en"
          ? ["Access to exclusive events", "Networking opportunities", "Career mentorship", "Resource library"]
          : ["参与独家活动", "网络交流机会", "职业导师指导", "资源库访问"],
      cta: language === "en" ? "Join Now" : "立即加入",
    },
    {
      icon: <Heart className="w-8 h-8 text-purple-600" />,
      title: language === "en" ? "Volunteer" : "志愿者",
      description:
        language === "en"
          ? "Contribute your skills and passion to help other women succeed in STEAM fields. Various volunteer opportunities available."
          : "贡献您的技能和热情，帮助其他女性在 STEAM 领域取得成功。提供多种志愿者机会。",
      benefits:
        language === "en"
          ? ["Event organization", "Mentorship programs", "Content creation", "Community outreach"]
          : ["活动组织", "导师项目", "内容创作", "社区推广"],
      cta: language === "en" ? "Apply to Volunteer" : "申请志愿者",
    },
    {
      icon: <Calendar className="w-8 h-8 text-purple-600" />,
      title: language === "en" ? "Attend Events" : "参加活动",
      description:
        language === "en"
          ? "Join our workshops, conferences, and networking events to learn, connect, and grow with like-minded women."
          : "参加我们的工作坊、会议和网络活动，与志同道合的女性一起学习、连接和成长。",
      benefits:
        language === "en"
          ? ["Skill development workshops", "Industry conferences", "Networking sessions", "Panel discussions"]
          : ["技能发展工作坊", "行业会议", "网络交流会", "小组讨论"],
      cta: language === "en" ? "View Events" : "查看活动",
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-purple-600" />,
      title: language === "en" ? "Partner with Us" : "与我们合作",
      description:
        language === "en"
          ? "Organizations and companies can partner with us to support women in STEAM through sponsorships and collaborations."
          : "组织和公司可以通过赞助和合作与我们合作，支持 STEAM 领域的女性。",
      benefits:
        language === "en"
          ? ["Brand visibility", "CSR impact", "Talent pipeline", "Community engagement"]
          : ["品牌曝光", "企业社会责任影响", "人才渠道", "社区参与"],
      cta: language === "en" ? "Contact Us" : "联系我们",
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-purple-600 to-purple-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">{t("getInvolved.title")}</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">{t("getInvolved.description")}</p>
        </div>
      </section>

      {/* Opportunities */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {opportunities.map((opportunity, index) => (
              <Card key={index} className="border-purple-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    {opportunity.icon}
                    <h3 className="text-2xl font-bold text-gray-900 ml-3">{opportunity.title}</h3>
                  </div>
                  <p className="text-gray-700 text-lg mb-6 leading-relaxed">{opportunity.description}</p>
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">
                      {language === "en" ? "What you'll get:" : "您将获得："}
                    </h4>
                    <ul className="space-y-2">
                      {opportunity.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-gray-700">
                          <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">{opportunity.cta}</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-purple-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {language === "en" ? "Ready to Make a Difference?" : "准备好改变世界了吗？"}
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            {language === "en"
              ? "Join thousands of women who are already part of our community and making an impact in STEAM fields."
              : "加入已经成为我们社区一部分并在 STEAM 领域产生影响的数千名女性。"}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-4 rounded-full font-semibold"
            >
              {t("getInvolved.member")}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-4 rounded-full font-semibold bg-transparent"
            >
              {t("getInvolved.volunteer")}
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
