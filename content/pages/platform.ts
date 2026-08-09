import type { PageContent } from "@/types/content"

export const homePage: PageContent = {
  slug: "home",
  title: "She Rewires",
  description: "A global movement evolving from women in STEM into a human agency platform for the AI era.",
  hero: {
    eyebrow: "Global Human Agency Platform",
    title: "80,000+ people. 150+ co-builders. 16 cities. One global movement.",
    subtitle: "She Rewires connects people, ideas, and ecosystems to co-build a future where individuals can create meaningful impact.",
    primaryAction: { label: "Join Us", href: "/join-us" },
    secondaryAction: { label: "Explore the Ecosystem", href: "/community" },
  },
  sections: [
    {
      id: "direction",
      eyebrow: "From Access to Agency",
      title: "We started with women in STEM. We are building for human agency.",
      description:
        "Since 2017, She Rewires has grown from a women in STEM community into a global ecosystem that helps people connect, co-build, incubate, and scale ideas for the AI era.",
    },
    {
      id: "ecosystem",
      title: "A system for people who build what is next",
      description:
        "The platform brings together co-builders, chapters, contributors, partners, and projects so resonance can become creation.",
    },
  ],
}

export const aboutPage: PageContent = {
  slug: "about",
  title: "Why We Exist",
  description: "The belief, evolution, and philosophy behind She Rewires.",
  hero: {
    eyebrow: "About She Rewires",
    title: "Rewiring the Future, One Human at a Time",
    subtitle:
      "She Rewires was founded in 2017 with a simple belief: the future should be built by everyone, and women should have an equal role in shaping it.",
  },
  sections: [
    {
      id: "story",
      eyebrow: "Our Story",
      title: "From women in STEM to human agency",
      description:
        "We began by creating spaces where women could access knowledge, build confidence, find opportunities, and see themselves as creators of the future. Over time, we discovered the deeper challenge was agency: the ability to imagine possibilities, make decisions, create solutions, and shape one's own future.",
    },
    {
      id: "evolution",
      eyebrow: "Our Evolution",
      title: "Growing together with technology and society",
      description:
        "Each chapter of She Rewires expands the mission: access, connection, co-building, and now human agency for the AI era.",
      items: [
        { title: "1.0 Women in STEM", meta: "2017-2019", description: "Creating visibility, confidence, and access for women entering technology and innovation." },
        { title: "2.0 Women in STEAM", meta: "2020-2022", description: "Connecting science, technology, engineering, arts, and mathematics across disciplines and geographies." },
        { title: "3.0 Super Individuals", meta: "2023-2025", description: "Moving from inspiration to action through open co-building and individual initiative." },
        { title: "4.0 Human Agency", meta: "2026-", description: "Cultivating imagination, judgment, creativity, responsibility, leadership, and purpose in the AI era." },
      ],
    },
    {
      id: "philosophy",
      eyebrow: "Our Philosophy",
      title: "Access creates opportunity. Agency creates impact.",
      description:
        "Technology amplifies human potential, but people define its direction and purpose. We believe communities are ecosystems of contributors, creators, and builders.",
      items: [
        { title: "Access creates opportunity", description: "Inclusion means opening doors and empowering people to walk through them." },
        { title: "The future is built through co-creation", description: "Meaningful innovation emerges when diverse people, ideas, disciplines, and experiences come together." },
        { title: "Technology amplifies human potential", description: "The AI era makes imagination, judgment, empathy, and responsibility more important, not less." },
      ],
    },
  ],
}

export const communityPage: PageContent = {
  slug: "community",
  title: "The She Rewires Collective",
  description: "Who is inside the system: people, chapters, contributors, and partners.",
  hero: {
    eyebrow: "Community",
    title: "A global collective built by people who believe the future can be created together.",
    subtitle:
      "She Rewires brings together people from different backgrounds, industries, and geographies. When aligned values and complementary strengths meet, ideas become co-building projects.",
  },
  sections: [
    { id: "co-builders", title: "Co-builders", description: "Individuals who move beyond participation to create projects, communities, and collaborations." },
    { id: "chapters", title: "Global Chapters", description: "Local communities built by people on the ground and connected through a shared philosophy." },
    { id: "contributors", title: "Contributors", description: "Mentors, advisors, speakers, researchers, and collaborators who enrich the ecosystem." },
    { id: "partners", title: "Ecosystem Partners", description: "Organizations building alongside us through co-creation, not just sponsorship." },
  ],
}

export const buildPage: PageContent = {
  slug: "build",
  title: "Turning Resonance into Creation",
  description: "What happens inside the system: the creation mechanism of She Rewires.",
  hero: {
    eyebrow: "Build",
    title: "Ideas become reality when the right people come together.",
    subtitle:
      "She Rewires provides the environment, connections, and ecosystem support for individuals to transform shared purpose into co-building projects.",
    primaryAction: { label: "Launch a Project", href: "/join-us" },
  },
  sections: [
    {
      id: "model",
      eyebrow: "Build Model",
      title: "From Connection to Creation",
      description: "Discover, connect, co-build, incubate, and scale: this is the operating model behind the ecosystem.",
      items: [
        { title: "Discover", description: "Individuals bring interests, expertise, experiences, and aspirations into the ecosystem." },
        { title: "Connect", description: "People with complementary capabilities and shared purpose find each other." },
        { title: "Co-build", description: "Teams create projects, initiatives, communities, and collaborations." },
        { title: "Incubate", description: "She Rewires provides visibility, connections, and resources to help ideas grow." },
        { title: "Scale", description: "Successful initiatives expand across communities, regions, and ecosystems." },
      ],
    },
  ],
}

export const storiesPage: PageContent = {
  slug: "stories",
  title: "Stories",
  description: "What emerges from the system: knowledge, proof, and shared imagination.",
  hero: {
    eyebrow: "Stories",
    title: "Documenting the people, ideas, and possibilities we create together.",
    subtitle:
      "Stories are the visible output of co-building: people stories, project stories, conversations, media, and ecosystem learning.",
  },
  sections: [
    { id: "people", title: "People Stories", description: "Interviews and profiles of builders, leaders, and emerging voices." },
    { id: "project", title: "Project Stories", description: "Summit recaps, chapter progress, collaboration outcomes, and partner stories." },
    { id: "conversation", title: "Conversations", description: "Podcasts, videos, talks, and ideas from the ecosystem." },
  ],
}

export const joinUsPage: PageContent = {
  slug: "join-us",
  title: "Find Your Way to Build With Us",
  description: "How people enter the system: participation pathways for individuals and organizations.",
  hero: {
    eyebrow: "Join Us",
    title: "Find your way to build with She Rewires.",
    subtitle:
      "Whether you want to create, contribute expertise, build locally, partner institutionally, or support the ecosystem, there is a pathway into the system.",
  },
  sections: [
    { id: "paths", title: "Entry Paths", description: "Choose the pathway that matches how you want to contribute." },
    { id: "contact", title: "Contact", description: "Reach us by email or WeChat. The current form opens a pre-filled email draft and does not store data on a server." },
  ],
}
