import type { Chapter, JoinPath, Locale, PageContent, Partner, Person, Project, Story } from "@/types/content"
import { chapters } from "@/content/chapters"
import { joinPaths } from "@/content/pages/join-paths"
import { partners } from "@/content/partners"
import { people } from "@/content/people"
import { projects } from "@/content/projects"
import { stories } from "@/content/stories"
import { platformStats, siteConfig } from "@/content/site-config"

const zh: Record<string, string> = {
  "A global movement evolving from women in STEM into a human agency platform for the AI era.": "一个从女性 STEM 社群发展而来的全球平台，在 AI 时代培育人的主体性。",
  "A global human agency platform connecting people, ideas, and ecosystems to co-build what is next.": "连接人、思想与生态，共同建造下一步的全球人的主体性平台。",
  "Building the future is not about waiting for change.": "塑造未来，不是等待变化发生。",
  "She Rewires is a global women-led co-building platform connecting people, ideas, and ecosystems to cultivate human agency for the AI era. It is about co-building it together.": "她原力是一个由女性引领的全球共建平台，连接人、思想与生态，在 AI 时代培育人的主体性。未来需要我们共同建造。",
  "Explore the Ecosystem": "探索生态",
  "Technology amplifies human potential, but people define its direction and purpose.": "技术放大人的潜能，但方向与目的由人来定义。",
  "Human connection, creativity, judgment, empathy, and agency matter more as technology changes quickly.": "当技术快速变化时，人的连接力、创造力、判断力、同理心与主体性更加重要。",
  "From Access to Agency": "从机会到主体性",
  "We started with women in STEM. We are building for human agency.": "我们从女性 STEM 社群出发，正在为人的主体性而共建。",
  "Since 2017, She Rewires has grown from a women in STEM community into a global ecosystem that helps people connect, co-build, incubate, and scale ideas for the AI era.": "自 2017 年以来，她原力从女性 STEM 社群发展为一个全球生态，帮助人们在 AI 时代连接、共建、孵化并扩大有意义的想法。",
  "A system for people who build what is next": "为建造下一步的人而生的系统",
  "The platform brings together co-builders, chapters, contributors, partners, and projects so resonance can become creation.": "平台汇聚共建者、社区、贡献者、伙伴与项目，让共鸣成为创造。",
  Discover: "发现",
  Connect: "连接",
  "Co-build": "共建",
  Incubate: "孵化",
  Scale: "拓展",
  "Individuals bring interests, expertise, experiences, and aspirations into the ecosystem.": "人们将兴趣、专长、经验与愿景带入生态。",
  "People with complementary capabilities and shared purpose find each other.": "拥有互补能力与共同目标的人彼此相遇。",
  "Teams create projects, initiatives, communities, and collaborations.": "团队共同创造项目、倡议、社区与合作。",
  "She Rewires provides visibility, connections, and resources to help ideas grow.": "她原力提供连接、资源与被看见的机会，帮助想法成长。",
  "Successful initiatives expand across communities, regions, and ecosystems.": "有生命力的倡议在社区、地区与生态之间展开。",
  "People make it real": "人让一切成为真实",
  "Founders, co-builders, partner leaders, community builders, and women innovators shape the ecosystem.": "创始人、共建者、伙伴领袖、社区建设者与女性创新者共同塑造这个生态。",
  "Partners build alongside us": "伙伴与我们并肩共建",
  "Organizations building alongside us through co-creation, not just sponsorship.": "组织通过共同创造与我们并肩建设，而不只是提供赞助。",
  "Why We Exist": "我们为何存在",
  "The belief, evolution, and philosophy behind She Rewires.": "她原力背后的信念、演进与理念。",
  "About She Rewires": "关于她原力",
  "Rewiring the Future, One Human at a Time": "从每一个人开始，重塑未来",
  "She Rewires was founded in 2017 with a simple belief: the future should be built by everyone, and women should have an equal role in shaping it.": "她原力成立于 2017 年，始终相信：未来应由所有人共同建造，女性应平等参与塑造未来。",
  "Our Story": "我们的故事",
  "From women in STEM to human agency": "从女性 STEM 社群到人的主体性",
  "Our Evolution": "我们的演进",
  "Growing together with technology and society": "与技术和社会共同成长",
  "Each chapter of She Rewires expands the mission: access, connection, co-building, and now human agency for the AI era.": "她原力的每个阶段都在拓展使命：从机会、连接、共建，到 AI 时代的人的主体性。",
  "Our Philosophy": "我们的理念",
  "Access creates opportunity. Agency creates impact.": "机会创造可能，主体性创造影响。",
  "Technology amplifies human potential, but people define its direction and purpose. We believe communities are ecosystems of contributors, creators, and builders.": "技术放大人的潜能，但方向与目的由人来定义。我们相信，社区是由贡献者、创造者与建设者组成的生态。",
  "The She Rewires Collective": "她原力共同体",
  "Who is inside the system: people, chapters, contributors, and partners.": "谁在这个系统之中：人、社区、贡献者与伙伴。",
  Community: "共同体",
  "A global collective built by people who believe the future can be created together.": "一个由相信未来可以共同创造的人组成的全球共同体。",
  "Build": "共建",
  About: "关于",
  Navigation: "导航",
  "Build with us across China, Singapore, India, the UK, and future chapters.": "与我们一起在中国、新加坡、印度、英国及未来的社区共同建设。",
  "The ecosystem connects people, chapters, partners, and contributors into co-building projects.": "生态连接人、社区、伙伴与贡献者，共同推进共建项目。",
  "© 2026 She Rewires. All rights reserved.": "© 2026 她原力。保留所有权利。",
  "Co-builders": "共建者",
  "Individuals who move beyond participation to create projects, communities, and collaborations.": "从参与走向创造项目、社区与合作的个人。",
  "Chapters": "社区",
  Individuals: "个人",
  Partners: "伙伴",
  Contributors: "贡献者",
  "Co-building Projects": "共建项目",
  "What We Build": "我们共建的内容",
  "Active ecosystem initiatives": "正在推进的生态倡议",
  "Selected projects that turn shared purpose into meaningful action.": "把共同目标转化为实际行动的精选项目。",
  "Proof from the ecosystem": "来自生态的实践证明",
  "Find your way to build with us": "找到与你共建的方式",
  "Enter as a co-builder, chapter builder, partner, contributor, or ecosystem supporter.": "你可以作为共建者、社区建设者、伙伴、贡献者或生态支持者加入。",
  "The next chapter is human agency": "下一章，关于人的主体性",
  "Explore the people and ecosystem now building this platform across regions.": "探索正在不同地区共同建设这个平台的人与生态。",
  "Meet the Collective": "认识共同体",
  "Explore Build Model": "探索共建模型",
  "Open opportunities": "开放中的机会",
  "We are looking for co-builders, partners, contributors, speakers, researchers, and sponsors.": "我们正在寻找共建者、伙伴、贡献者、演讲者、研究者与支持者。",
  "Find Your Path": "找到你的路径",
  "Stories from the ecosystem": "来自生态的故事",
  "Explore stories from people, projects, conversations, and the wider ecosystem.": "探索来自人物、项目、对话与更广泛生态的故事。",
  "Have a story to contribute?": "你有故事想分享吗？",
  "Share a people story, project story, conversation, or ecosystem learning with She Rewires.": "与她原力分享人物故事、项目故事、对话或生态经验。",
  "Share Your Expertise": "分享你的专长",
  "Co-builders and Contributors": "共建者与贡献者",
  "The people shaping the ecosystem": "塑造生态的人们",
  "Global Chapters": "全球社区",
  "Local communities, connected globally": "连接全球的本地社区",
  "Ecosystem Partners": "生态伙伴",
  "Partnership is co-creation": "伙伴关系是共同创造",
  "Build inside the system": "在系统中共建",
  "See how resonance becomes projects, initiatives, chapters, and scalable collaborations.": "了解共鸣如何成为项目、倡议、社区与可持续拓展的合作。",
  "Choose how you want to enter the system": "选择你想进入这个系统的方式",
  "Tell us how you want to build with us": "告诉我们你想如何与我们共建",
  Name: "姓名",
  "Your name": "你的姓名",
  City: "城市",
  "Your city": "你的城市",
  "Entry paths": "参与路径",
  Message: "留言",
  "Tell us what you want to build, contribute, or explore.": "告诉我们你想共建、贡献或探索什么。",
  "Your message will open in your email app for review before sending.": "你的留言会在邮件应用中打开，发送前可以先检查内容。",
  "Select at least one entry path.": "请至少选择一条参与路径。",
  "Open email draft": "打开邮件草稿",
  "Direct channels": "直接联系",
  WeChat: "微信",
  "For partnerships": "合作联系",
  "Organizations can contact the partnership team for programs, research, sponsorship, and ecosystem collaboration.": "组织可以联系合作团队，讨论项目、研究、赞助与生态合作。",
  "Turning Resonance into Creation": "让共鸣成为创造",
  "What happens inside the system: the creation mechanism of She Rewires.": "系统内部发生什么：她原力的创造机制。",
  "Ideas become reality when the right people come together.": "当合适的人相遇，想法才会成为现实。",
  "Stories": "故事",
  "What emerges from the system: knowledge, proof, and shared imagination.": "从系统中生长出的内容：知识、实践与共同想象。",
  "Documenting the people, ideas, and possibilities we create together.": "记录我们共同创造的人、想法与可能性。",
  "Join Us": "加入我们",
  "Find Your Way to Build With Us": "找到与你共建的方式",
  "How people enter the system: participation pathways for individuals and organizations.": "人们如何进入这个系统：个人与组织的参与路径。",
  "Find your way to build with She Rewires.": "找到与你原力共建的方式。",
  "Whether you want to create, contribute expertise, build locally, partner institutionally, or support the ecosystem, there is a pathway into the system.": "无论你想创造、贡献专长、建设本地社区、开展机构合作，还是支持生态，都能找到进入系统的路径。",
  "80,000+": "80,000+",
  people: "人",
  "A growing global movement": "不断成长的全球运动",
  "co-builders": "共建者",
  "People shaping initiatives from within": "从内部塑造倡议的人",
  cities: "城市",
  "Local networks connected globally": "连接全球的本地网络",
  "global ecosystem": "全球生态",
  "Built through shared purpose": "由共同目标共同建造",
  "Annual Human Agency Leadership Summit": "年度人的主体性领导力峰会",
  "A flagship gathering for leaders, builders, founders, and partners exploring human agency in the AI era.": "面向探索 AI 时代人的主体性的领袖、建设者、创始人与伙伴的旗舰聚会。",
  "Thought leadership": "思想领导力",
  "Cross-border collaboration": "跨境合作",
  "Builder visibility": "建设者的可见度",
  "Women Who Master China": "驾驭中国的女性",
  "A storytelling and collaboration initiative highlighting women using technology to create impact.": "通过故事与合作，呈现运用技术创造影响力的女性。",
  "People stories": "人物故事",
  "Partner collaboration": "伙伴合作",
  "Leadership visibility": "领导力影响",
  "Global Chapter Building": "全球社区建设",
  "Supporting local builders as they create She Rewires chapters in new cities and regions.": "支持本地建设者在新的城市与地区创建她原力社区。",
  "Local communities": "本地社区",
  "Regional programs": "区域项目",
  "Sustainable operating models": "可持续运营模式",
  "Conversations and Podcast": "对话与播客",
  "A media ecosystem for documenting builders, ideas, and the cultural imagination behind technology.": "记录建设者、想法与技术背后文化想象力的媒体生态。",
  Interviews: "访谈",
  "Audio stories": "音频故事",
  "Knowledge archive": "知识档案",
  "Singapore Builder Interview Series": "新加坡建设者访谈系列",
  "A people-story series documenting emerging builders and community voices in Singapore.": "记录新加坡新兴建设者与社区声音的人物故事系列。",
  "SHETECH Summit Recap": "SHETECH 峰会回顾",
  "A project story documenting the summit, community actions, and cross-border collaboration at BEYOND Expo.": "记录峰会、社区行动以及 BEYOND Expo 跨境合作的项目故事。",
  "She Rewires Conversations": "她原力对话",
  "Podcast and video conversations from the media ecosystem.": "来自媒体生态的播客与视频对话。",
  "Ecosystem Partner Stories": "生态伙伴故事",
  "Stories showing how partnership becomes co-creation across companies, universities, investors, and communities.": "展示企业、大学、投资者与社区如何通过伙伴关系共同创造。",
  "Chapter Builders": "社区建设者",
  "Local ecosystem builders": "本地生态建设者",
  "Co-builders initiate communities, projects, and collaborations inside the She Rewires ecosystem.": "共建者在她原力生态中发起社区、项目与合作。",
  "Project Leads": "项目负责人",
  "Initiative owners": "倡议发起人",
  "Project leads turn shared purpose into concrete initiatives, programs, and stories of impact.": "项目负责人将共同目标转化为具体倡议、项目与影响力故事。",
  "Mentors and Advisors": "导师与顾问",
  "Ecosystem contributors": "生态贡献者",
  "Contributors share expertise, open connections, mentor builders, and strengthen the system.": "贡献者分享专长、打开连接、指导建设者并强化系统。",
  "She Rewires China": "她原力中国",
  "East Asia": "东亚",
  "The founding ecosystem and primary base for cross-border community building.": "跨境社区建设的发源生态与主要基地。",
  "Human agency": "人的主体性",
  "AI literacy": "AI 素养",
  "Women in STEAM": "女性 STEAM",
  "Ecosystem partnerships": "生态伙伴关系",
  "She Rewires Singapore": "她原力新加坡",
  "South-East Asia": "东南亚",
  "A regional chapter connecting builders, founders, and community leaders across Southeast Asia.": "连接东南亚建设者、创始人与社区领袖的区域社区。",
  "Digital economy": "数字经济",
  Leadership: "领导力",
  "Regional collaboration": "区域合作",
  "She Rewires India": "她原力印度",
  "South Asia": "南亚",
  "An emerging chapter for local builders and partners exploring technology, creativity, and agency.": "面向探索技术、创造力与主体性的本地建设者与伙伴的新兴社区。",
  "Chapter building": "社区建设",
  "Local partnerships": "本地伙伴关系",
  "Young builders": "青年建设者",
  "She Rewires UK": "她原力英国",
  Europe: "欧洲",
  "A growing network for European contributors, partners, and cross-border projects.": "连接欧洲贡献者、伙伴与跨境项目的成长中网络。",
  "Global chapters": "全球社区",
  Research: "研究",
  "Ecosystem exchange": "生态交流",
  "Corporate Partners": "企业伙伴",
  "Organizations collaborating on leadership, technology, talent, and ecosystem programs.": "在领导力、技术、人才与生态项目上开展合作的组织。",
  "University Partners": "大学伙伴",
  "Academic communities supporting young builders, research, and future-facing learning.": "支持青年建设者、研究与面向未来学习的学术共同体。",
  "Investor Partners": "投资伙伴",
  "Capital and ecosystem partners helping founders and initiatives scale responsibly.": "帮助创始人与倡议负责任地拓展的资本与生态伙伴。",
  "Communities, media, innovation hubs, and institutions building alongside She Rewires.": "与她原力并肩建设的社区、媒体、创新中心与机构。",
  "Become a Co-builder": "成为共建者",
  "For individuals who want to create": "面向希望创造的个人",
  "Start initiatives, build communities, contribute expertise, and collaborate with others.": "发起倡议、建设社区、贡献专长并与他人合作。",
  "Start initiatives": "发起倡议",
  "Build communities": "建设社区",
  "Contribute expertise": "贡献专长",
  "Collaborate with others": "与他人合作",
  "Build a Chapter": "建设社区",
  "For people who want to build locally": "面向希望在本地建设的人",
  "Create a local She Rewires community connected to the global ecosystem.": "创建连接全球生态的本地她原力社区。",
  China: "中国",
  Singapore: "新加坡",
  India: "印度",
  UK: "英国",
  "Future locations": "未来地区",
  "Partner With Us": "与我们合作",
  "For organizations": "面向组织",
  "Collaborate as a corporation, university, innovation organization, foundation, or ecosystem partner.": "以企业、大学、创新组织、基金会或生态伙伴的身份开展合作。",
  Programs: "项目",
  "Community building": "社区建设",
  "Co-marketing": "联合推广",
  "For mentors, advisors, speakers, and researchers": "面向导师、顾问、演讲者与研究者",
  "Support builders by sharing expertise, opening connections, and contributing knowledge.": "通过分享专长、打开连接与贡献知识来支持建设者。",
  Mentoring: "导师支持",
  Speaking: "演讲",
  Advising: "顾问支持",
  "Support the Ecosystem": "支持生态",
  "For investors, strategic partners, and sponsors": "面向投资者、战略伙伴与支持者",
  "Help promising initiatives grow through capital, resources, visibility, and long-term support.": "通过资本、资源、可见度与长期支持帮助有潜力的倡议成长。",
  Sponsor: "赞助",
  Invest: "投资",
  "Open resources": "开放资源",
  "Scale initiatives": "拓展倡议",
}

function translate(value: string, locale: Locale) {
  return locale === "zh" ? (zh[value] ?? value) : value
}

function mapPage(page: PageContent, locale: Locale): PageContent {
  if (locale === "en") return page
  return {
    ...page,
    title: translate(page.title, locale),
    description: translate(page.description, locale),
    hero: {
      ...page.hero,
      eyebrow: page.hero.eyebrow ? translate(page.hero.eyebrow, locale) : undefined,
      title: translate(page.hero.title, locale),
      subtitle: page.hero.subtitle ? translate(page.hero.subtitle, locale) : undefined,
      primaryAction: page.hero.primaryAction ? { ...page.hero.primaryAction, label: translate(page.hero.primaryAction.label, locale) } : undefined,
      secondaryAction: page.hero.secondaryAction ? { ...page.hero.secondaryAction, label: translate(page.hero.secondaryAction.label, locale) } : undefined,
    },
    sections: page.sections.map((section) => ({
      ...section,
      eyebrow: section.eyebrow ? translate(section.eyebrow, locale) : undefined,
      title: translate(section.title, locale),
      description: section.description ? translate(section.description, locale) : undefined,
      items: section.items?.map((item) => ({ ...item, title: translate(item.title, locale), description: translate(item.description, locale) })),
    })),
  }
}

export function localizePage(page: PageContent, locale: Locale) {
  return mapPage(page, locale)
}

export function localizeText(value: string, locale: Locale) {
  return translate(value, locale)
}

export function localizeSiteConfig(locale: Locale) {
  return { ...siteConfig, description: translate(siteConfig.description, locale) }
}

export function localizeNavigation(locale: Locale) {
  return ["About", "Community", "Build", "Stories", "Join Us"].map((label, index) => ({
    label: translate(label, locale),
    href: ["/about", "/community", "/build", "/stories", "/join-us"][index],
  }))
}

export function localizeStats(locale: Locale) {
  return platformStats.map((stat) => ({
    ...stat,
    label: translate(stat.label, locale),
    description: stat.description ? translate(stat.description, locale) : undefined,
  }))
}

export function localizeJoinPaths(locale: Locale): JoinPath[] {
  return joinPaths.map((path) => ({
    ...path,
    title: translate(path.title, locale),
    audience: translate(path.audience, locale),
    description: translate(path.description, locale),
    actions: path.actions.map((action) => translate(action, locale)),
  }))
}

export function localizeProjects(locale: Locale): Project[] { return projects.map((project) => ({ ...project, title: translate(project.title, locale), description: translate(project.description, locale), outcomes: project.outcomes.map((outcome) => translate(outcome, locale)) })) }
export function localizeStories(locale: Locale): Story[] { return stories.map((story) => ({ ...story, title: translate(story.title, locale), excerpt: translate(story.excerpt, locale), source: story.source ? translate(story.source, locale) : undefined })) }
export function localizePeople(locale: Locale): Person[] { return people.map((person) => ({ ...person, name: translate(person.name, locale), role: translate(person.role, locale), bio: translate(person.bio, locale) })) }
export function localizeChapters(locale: Locale): Chapter[] { return chapters.map((chapter) => ({ ...chapter, name: translate(chapter.name, locale), region: translate(chapter.region, locale), description: translate(chapter.description, locale), focus: chapter.focus.map((item) => translate(item, locale)) })) }
export function localizePartners(locale: Locale): Partner[] { return partners.map((partner) => ({ ...partner, name: translate(partner.name, locale), description: partner.description ? translate(partner.description, locale) : undefined })) }

export function localizeTerm(value: string, locale: Locale) {
  const terms: Record<string, string> = { active: "进行中", planned: "计划中", incubating: "孵化中", scaling: "拓展中", forming: "筹备中", leadership: "领导力", community: "社区", culture: "文化", people: "人物", project: "项目", conversation: "对话", media: "媒体", corporate: "企业", university: "大学", investor: "投资", ecosystem: "生态", "co-builder": "共建者", contributor: "贡献者" }
  return locale === "zh" ? (terms[value] ?? translate(value, locale)) : value
}
