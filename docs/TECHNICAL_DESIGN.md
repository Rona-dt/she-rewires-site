# Technical Design - She Rewires Production Website

## 1. Architecture Overview

The site uses Next.js App Router with a local CMS-ready content layer.

Current principle:

```text
Content data -> Reusable components -> Route pages -> Vercel deployment
```

The application should avoid large hardcoded text blocks inside page components. Pages compose structured content and reusable sections.

## 2. Framework

- Next.js 14.2.35
- React 18.3.1
- TypeScript
- Tailwind CSS
- pnpm
- Vercel deployment target

## 3. Route Architecture

Current primary routes:

- `/`
- `/about`
- `/community`
- `/build`
- `/stories`
- `/join-us`

Redirected legacy routes:

- `/events` -> `/stories`
- `/events/:path*` -> `/stories`
- `/media` -> `/stories`
- `/contact` -> `/join-us`
- `/get-involved` -> `/join-us`
- `/team` -> `/community`
- `/team-portrait` -> `/community`

## 4. Content Layer

Local content lives under `content/*` and is typed by `types/content.ts`.

Current content domains:

- `content/site-config.ts`
- `content/pages/platform.ts`
- `content/pages/join-paths.ts`
- `content/people/index.ts`
- `content/chapters/index.ts`
- `content/projects/index.ts`
- `content/stories/index.ts`
- `content/partners/index.ts`

These interfaces should be treated as the future CMS contract. When introducing Sanity, each interface should map to a Sanity document or object schema.

## 5. Component Architecture

Reusable sections live under `components/sections/*`:

- `HeroSection`
- `SectionHeader`
- `ContentSection`
- `CTASection`
- `StatsBand`
- `ChapterCard`
- `ProjectCard`
- `StoryCard`
- `PersonProfile`
- `PartnerLogoWall`
- `EcosystemDiagram`

UI primitives remain under `components/ui/*`.

## 6. CMS Readiness

Do not introduce CMS until the redesign content model and page templates stabilize.

Recommended future path:

1. Keep current local structured content for launch.
2. Freeze the content schema after editorial review.
3. Introduce Sanity for Stories, People, Projects, Partners, Chapters, and selected page content.
4. Add preview/draft mode and revalidation webhooks.
5. Train non-technical editors using CMS fields and publishing guidelines.

## 7. Quality Gates

Before deployment or PR merge:

```bash
pnpm lint
pnpm exec tsc --noEmit
pnpm build
```

The build must not skip lint or type validation.

## 8. Known Follow-Ups

- Add visual QA with browser screenshots after the design pass.
- Decide whether to introduce image optimization and a durable media asset strategy.
- Add real SEO metadata per page.
- Replace placeholder content with final editorial copy and assets.
- Add CMS once content operations are ready.
