# Product Requirements - She Rewires Global Human Agency Platform

## 1. Product Vision

Build a production-ready global ecosystem platform for She Rewires: a public home for the people, ideas, chapters, projects, stories, and partners that co-build human agency in the AI era.

The site should evolve beyond an event archive into an operating surface for a global movement.

## 2. Product Positioning

She Rewires started with women in STEM and is evolving into a human agency platform.

The website must communicate:

- Access creates opportunity; agency creates impact.
- Communities are ecosystems of contributors, creators, and builders.
- Technology amplifies human potential when people shape it with imagination, judgment, empathy, and responsibility.

## 3. Target Users

- Individuals who want to become co-builders
- Local chapter builders and community operators
- Mentors, advisors, speakers, and researchers
- Corporations, universities, investors, foundations, and ecosystem partners
- Media and visitors looking for proof, stories, and context
- Future non-technical volunteers managing website content

## 4. Information Architecture

Primary navigation:

- About: Our Story, Our Evolution, Our Philosophy
- Community: Co-builders, Global Chapters, Contributors, Ecosystem Partners
- Build: Co-building Model, Active Projects, Open Opportunities
- Stories: People Stories, Project Stories, Conversations, Media
- Join Us: Co-builder, Chapter, Partner, Expertise, Ecosystem Support pathways

Legacy event/media/contact pages are not primary surfaces. They should redirect or be migrated into Stories and Join Us.

## 5. Functional Requirements

- Render the five primary routes as production-ready public pages.
- Keep content separate from presentation.
- Store current content in local structured files that can map to future CMS schemas.
- Support contact and participation through mailto-based flows until server forms are intentionally introduced.
- Preserve stable redirects from old public URLs to new pages.
- Keep the site buildable through lint, typecheck, and production build.

## 6. Content Requirements

Core content types:

- Pages
- People
- Chapters
- Projects
- Stories
- Partners
- Join paths
- Site config

High-frequency editorial content should be CMS-managed in the future. Page structure, components, routes, and design tokens should remain code-managed.

## 7. Non-Functional Requirements

- Responsive layout across mobile, tablet, and desktop
- Accessible navigation, buttons, forms, and content cards
- Stable SEO metadata and route redirects
- Maintainable content models
- Minimal operational burden for future non-technical volunteers
- Vercel-compatible deployment and preview workflow

## 8. Success Metrics

- Clear comprehension of She Rewires 4.0 positioning
- Join Us engagement and qualified inbound emails
- Time required to publish a new story/project/chapter update
- Number of active content contributors who can maintain content without code edits after CMS adoption
- Successful lint/typecheck/build before deployment
