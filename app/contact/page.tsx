"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, MessageCircle, Twitter, Instagram, Linkedin } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export default function ContactPage() {
  const { t, language } = useLanguage()

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gray-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">{t("contact.title")}</h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-300">
            {language === "en"
              ? "Get in touch with us to learn more about our community and initiatives"
              : "联系我们，了解更多关于我们社区和倡议的信息"}
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="border-gray-200 bg-white">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  {language === "en" ? "Send us a message" : "给我们留言"}
                </h2>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{t("contact.form.name")}</label>
                    <Input
                      type="text"
                      className="border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                      placeholder={language === "en" ? "Your name" : "您的姓名"}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{t("contact.form.email")}</label>
                    <Input
                      type="email"
                      className="border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                      placeholder={language === "en" ? "your.email@example.com" : "您的邮箱@example.com"}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{t("contact.form.message")}</label>
                    <Textarea
                      rows={5}
                      className="border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                      placeholder={language === "en" ? "Tell us about your inquiry..." : "告诉我们您的询问..."}
                    />
                  </div>
                  <Button className="w-full bg-gray-800 hover:bg-gray-900 text-white py-3">{t("contact.form.submit")}</Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  {language === "en" ? "Get in touch" : "联系方式"}
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-lime mr-3" />
                    <span className="text-gray-600">hello@sherewires.org</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-purple-500 mr-3" />
                    <span className="text-gray-600">Beijing, China</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-gray-800 mr-3" />
                    <span className="text-gray-600">+86 xxx xxxx xxxx</span>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {language === "en" ? "Follow us" : "关注我们"}
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-800 hover:bg-lime transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-800 hover:bg-lime transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-800 hover:bg-lime transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-800 hover:bg-lime transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Office Hours */}
              <Card className="border-gray-200 bg-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    {language === "en" ? "Office Hours" : "办公时间"}
                  </h3>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex justify-between">
                      <span>{language === "en" ? "Monday - Friday" : "周一 - 周五"}</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{language === "en" ? "Saturday" : "周六"}</span>
                      <span>10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{language === "en" ? "Sunday" : "周日"}</span>
                      <span>{language === "en" ? "Closed" : "休息"}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
              {language === "en" ? "Frequently Asked Questions" : "常见问题"}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-gray-200 bg-white">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">
                    {language === "en" ? "How can I join SHE REWIRES?" : "如何加入她原力？"}
                  </h3>
                  <p className="text-gray-600">
                    {language === "en"
                      ? "You can join by visiting our Get Involved page and filling out the membership application form."
                      : "您可以访问我们的参与页面并填写会员申请表来加入。"}
                  </p>
                </CardContent>
              </Card>
              <Card className="border-gray-200 bg-white">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">
                    {language === "en" ? "Are there membership fees?" : "是否有会员费？"}
                  </h3>
                  <p className="text-gray-600">
                    {language === "en"
                      ? "Basic membership is free. Premium memberships with additional benefits are available."
                      : "基础会员免费。提供具有额外福利的高级会员。"}
                  </p>
                </CardContent>
              </Card>
              <Card className="border-gray-200 bg-white">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">
                    {language === "en" ? "Can men participate in events?" : "男性可以参加活动吗？"}
                  </h3>
                  <p className="text-gray-600">
                    {language === "en"
                      ? "While our focus is on women in STEAM, we welcome allies and supporters at many of our events."
                      : "虽然我们专注于 STEAM 领域的女性，但我们欢迎盟友和支持者参加我们的许多活动。"}
                  </p>
                </CardContent>
              </Card>
              <Card className="border-gray-200 bg-white">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">
                    {language === "en" ? "How can my company partner with you?" : "我的公司如何与您合作？"}
                  </h3>
                  <p className="text-gray-600">
                    {language === "en"
                      ? "Please contact us directly to discuss partnership opportunities and sponsorship options."
                      : "请直接联系我们讨论合作机会和赞助选项。"}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
