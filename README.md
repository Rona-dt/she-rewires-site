# She Rewires Website

*Automatically synced with your [v0.dev](https://v0.dev) deployments (historical setup).*

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/ronas-projects-c21e25ee/v0-she-rewrites-website)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.dev-black?style=for-the-badge)](https://v0.dev/chat/projects/HfYoOqw7SsQ)

---

## 1) Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript + React 18
- **Styling**: Tailwind CSS + design tokens in `app/globals.css`
- **UI Primitives**: shadcn-style components in `components/ui/*`
- **Content source**:
  - Structured event data in `lib/events.ts`
  - Social/media sync data in `lib/social-posts.ts`
- **Rendering**:
  - Server components for route-level pages
  - Client components for language switching and interactive UI

---

## 2) Project Architecture

```text
app/
  page.tsx                    # Homepage
  about/page.tsx              # About + Global Impact
  events/                     # Event list + detail pages
  media/page.tsx              # Media coverage
  contact/page.tsx            # Contact flow (email draft)
  get-involved/page.tsx       # Join-us flow (email draft)
  team-portrait/page.tsx      # Team portrait interactive page

components/
  navigation.tsx footer.tsx
  language-provider.tsx       # EN/ZH translations + switch
  ui/*                        # Button/Card/Input/Textarea etc.

lib/
  events.ts                   # Site event model + event content
  social-posts.ts             # Unified social/media feed model

docs/
  UIUX_RULES.md               # Visual and interaction baseline
  CONTENT_SYNC_PLAYBOOK.md    # Social/WeChat sync playbook
  PRD.md                      # Product requirements doc
  TECHNICAL_DESIGN.md         # Engineering design doc
```

---

## 3) Development Workflow

### Local development (recommended)

```bash
pnpm install
pnpm dev
```

Open: `http://localhost:3000`

### Production build check

```bash
pnpm build
```

### Type-check

```bash
pnpm exec tsc --noEmit
```

> Note: there is currently a known historical typing issue in `components/theme-provider.tsx`.

---

## 4) Content Operations

- Add/update social feed entries in `lib/social-posts.ts`
- Add/update long-form events in `lib/events.ts`
- Follow `docs/CONTENT_SYNC_PLAYBOOK.md` for channel sync and WeChat image mirroring

---

## 5) Product & Technical Docs

- PRD: `docs/PRD.md`
- Technical Design: `docs/TECHNICAL_DESIGN.md`
- UI/UX baseline: `docs/UIUX_RULES.md`
