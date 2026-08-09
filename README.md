# She Rewires Website

She Rewires is being rebuilt from a v0-generated event website into a production-ready global human agency platform.

The current architecture is CMS-ready but intentionally local-content first: non-technical content operations will be supported later through a headless CMS, with Sanity as the preferred future path.

## Current Product Direction

Primary navigation:

- `About` - why She Rewires exists: story, evolution, philosophy
- `Community` - who is inside the system: co-builders, chapters, contributors, partners
- `Build` - what happens inside the system: co-building model and projects
- `Stories` - what emerges from the system: people, projects, conversations, proof
- `Join Us` - how people enter the system: participation and contact pathways

Legacy routes such as `/events`, `/media`, `/contact`, `/get-involved`, `/team`, and `/team-portrait` redirect into the new platform structure.

## Tech Stack

- Framework: Next.js 14 App Router
- Language: TypeScript + React 18
- Styling: Tailwind CSS with existing theme tokens in `app/globals.css`
- UI primitives: local shadcn-style components in `components/ui/*`
- Content layer: local structured TypeScript content under `content/*`
- Deployment target: Vercel

## Project Structure

```text
app/
  page.tsx              # Home
  about/page.tsx        # About
  community/page.tsx    # Community ecosystem
  build/page.tsx        # Co-building model and projects
  stories/page.tsx      # Story library
  join-us/page.tsx      # Participation and contact pathways

components/
  navigation.tsx
  footer.tsx
  ui/*
  sections/*            # Reusable page sections and content cards

content/
  site-config.ts
  pages/
  people/
  chapters/
  projects/
  stories/
  partners/

types/
  content.ts            # CMS-ready content interfaces

docs/
  PRD.md
  TECHNICAL_DESIGN.md
  UIUX_RULES.md
  CONTENT_SYNC_PLAYBOOK.md
```

## Development

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

## Quality Checks

Run these before committing or deploying:

```bash
pnpm lint
pnpm exec tsc --noEmit
pnpm build
```

The production build now performs linting and type validation. Do not reintroduce `ignoreDuringBuilds` or `ignoreBuildErrors` without a documented reason.

## Content Operations

For now, edit structured content in `content/*`. Keep content separate from page components:

- Pages and core platform copy: `content/pages/*`
- Site settings and navigation: `content/site-config.ts`
- People and contributors: `content/people/*`
- Chapters: `content/chapters/*`
- Projects: `content/projects/*`
- Stories: `content/stories/*`
- Partners: `content/partners/*`

Future CMS migration should map these TypeScript interfaces to Sanity schemas.

## Deployment

The project is linked to Vercel through `.vercel/project.json`. GitHub remains the source repository, and production work should happen on feature branches with PR review before merging to `main`.
