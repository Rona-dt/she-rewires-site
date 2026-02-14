"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { UserPlus, Lightbulb, MapPin, Handshake, Upload } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export default function GetInvolvedPage() {
  const { t, language } = useLanguage()
  const [selectedRoles, setSelectedRoles] = useState<string[]>([])

  const roles = [
    {
      id: "cobuilder",
      icon: <UserPlus className="w-8 h-8 text-purple-500" />,
      title: t("role.cobuilder"),
      scope: t("role.cobuilder.scope"),
      benefits: t("role.cobuilder.benefits"),
    },
    {
      id: "incubator",
      icon: <Lightbulb className="w-8 h-8 text-purple-500" />,
      title: t("role.incubator"),
      scope: t("role.incubator.scope"),
      benefits: t("role.incubator.benefits"),
    },
    {
      id: "catalyst",
      icon: <MapPin className="w-8 h-8 text-purple-500" />,
      title: t("role.catalyst"),
      scope: t("role.catalyst.scope"),
      benefits: t("role.catalyst.benefits"),
    },
    {
      id: "partner",
      icon: <Handshake className="w-8 h-8 text-purple-500" />,
      title: t("role.partner"),
      scope: t("role.partner.scope"),
      benefits: t("role.partner.benefits"),
    },
  ]

  const toggleRole = (roleId: string) => {
    setSelectedRoles((prev) =>
      prev.includes(roleId) ? prev.filter((r) => r !== roleId) : [...prev, roleId]
    )
  }

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-black">{t("getInvolved.title")}</h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-700 leading-relaxed">
            {t("getInvolved.description")}
          </p>
        </div>
      </section>

      {/* Roles */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {roles.map((role, index) => (
              <Card
                key={index}
                className="border-purple-200 hover:shadow-lg transition-shadow bg-white"
              >
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {role.icon}
                    <h3 className="text-2xl font-bold text-black ml-3">{role.title}</h3>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold text-purple-600 mb-2">
                      {language === "en" ? "Scope" : "范围"}
                    </h4>
                    <p className="text-gray-700 leading-relaxed">{role.scope}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-600 mb-2">
                      {language === "en" ? "What You Get" : "您将获得"}
                    </h4>
                    <p className="text-gray-700 leading-relaxed">{role.benefits}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA & Form */}
      <section className="py-16 bg-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              {t("getInvolved.cta.title")}
            </h2>
            <p className="text-lg text-gray-700">{t("getInvolved.cta.desc")}</p>
          </div>

          {/* Form */}
          <Card className="max-w-2xl mx-auto border-purple-200 bg-white">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    {t("form.name")} *
                  </label>
                  <Input
                    type="text"
                    placeholder={language === "en" ? "Your name" : "您的姓名"}
                    className="border-gray-200 focus:border-purple-500 focus:ring-purple-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    {t("form.city")} *
                  </label>
                  <Input
                    type="text"
                    placeholder={language === "en" ? "Your city" : "您的城市"}
                    className="border-gray-200 focus:border-purple-500 focus:ring-purple-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    {t("form.email")} *
                  </label>
                  <Input
                    type="email"
                    placeholder={language === "en" ? "your@email.com" : "您的邮箱"}
                    className="border-gray-200 focus:border-purple-500 focus:ring-purple-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    {t("form.roles")} *
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {roles.map((role) => (
                      <button
                        key={role.id}
                        type="button"
                        onClick={() => toggleRole(role.id)}
                        className={`p-3 rounded-lg border text-left transition-all ${
                          selectedRoles.includes(role.id)
                            ? "border-purple-500 bg-purple-50 text-black"
                            : "border-gray-200 bg-white text-gray-600 hover:border-purple-300"
                        }`}
                      >
                        <span className="text-sm font-medium">{role.title}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    {t("form.linkedin")}
                  </label>
                  <Input
                    type="url"
                    placeholder="https://linkedin.com/in/..."
                    className="border-gray-200 focus:border-purple-500 focus:ring-purple-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    {t("form.upload")}
                  </label>
                  <div className="border-2 border-dashed border-gray-200 rounded-lg p-6 text-center hover:border-purple-300 transition-colors cursor-pointer">
                    <Upload className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                    <p className="text-sm text-gray-700">
                      {language === "en"
                        ? "Click to upload or drag and drop"
                        : "点击上传或拖放文件"}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      PDF, DOC, DOCX (max 10MB)
                    </p>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-purple-500 hover:bg-purple-600 text-white py-4 rounded-full font-semibold text-lg"
                >
                  {t("form.submit")}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
