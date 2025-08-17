"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, MessageCircle, Twitter, Instagram, Linkedin } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import Image from "next/image"

export default function ContactPage() {
  const { t, language } = useLanguage()

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-purple-600 to-purple-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">{t("contact.title")}</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            {language === "en"
              ? "Get in touch with us to learn more about our community and initiatives"
              : "联系我们，了解更多关于我们社区和倡议的信息"}
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="lg:col-span-2 border-purple-200">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  {language === "en" ? "Send us a message" : "给我们留言"}
                </h2>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{t("contact.form.name")}</label>
                    <Input
                      type="text"
                      className="border-purple-200 focus:border-purple-500 focus:ring-purple-500"
                      placeholder={language === "en" ? "Your name" : "您的姓名"}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{t("contact.form.email")}</label>
                    <Input
                      type="email"
                      className="border-purple-200 focus:border-purple-500 focus:ring-purple-500"
                      placeholder={language === "en" ? "your.email@example.com" : "您的邮箱@example.com"}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{t("contact.form.message")}</label>
                    <Textarea
                      rows={5}
                      className="border-purple-200 focus:border-purple-500 focus:ring-purple-500"
                      placeholder={language === "en" ? "Tell us about your inquiry..." : "告诉我们您的询问..."}
                    />
                  </div>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 py-3">{t("contact.form.submit")}</Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information & QR Code */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  {language === "en" ? "Get in touch" : "联系方式"}
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-purple-600 mr-3" />
                    <span className="text-gray-700">cobuilder@sherewires.com</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-purple-600 mr-3" />
                    <span className="text-gray-700">Shanghai, China</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-purple-600 mr-3" />
                    <span className="text-gray-700">Wechat: TANGTASTIC</span>
                  </div>
                </div>
              </div>

              {/* WeChat QR Code */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {language === "en" ? "Follow us on WeChat" : "关注我们的微信公众号"}
                </h3>
                <Card className="border-purple-200">
                  <CardContent className="p-4 flex flex-col items-center">
                    <div className="bg-white p-2 rounded-md w-40 h-40">
                      <Image
                        src="/wechat-qrcode.jpg"
                        alt="WeChat QR Code"
                        width={160}
                        height={160}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-sm text-gray-600 mt-2">
                      {language === "en" ? "Scan to follow" : "扫码关注"}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
