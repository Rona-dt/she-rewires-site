# Content Operations Playbook

This playbook defines how content should be managed before and after CMS adoption.

## 1. Current State

The site currently uses local structured content in `content/*` with TypeScript interfaces in `types/content.ts`.

This is intentional for the first production architecture pass. It allows the team to stabilize information architecture and content models before introducing CMS.

## 2. Content Ownership

Code-managed:

- Routes
- Components
- Layout logic
- Redirects
- Design tokens
- Core schemas/types
- Build and deployment configuration

Content-managed now, CMS-managed later:

- People profiles
- Chapters
- Projects
- Stories
- Partners
- Join paths
- Homepage stats and featured content
- Selected page copy

## 3. Editing Local Content

Edit these files for now:

- `content/site-config.ts`
- `content/pages/platform.ts`
- `content/pages/join-paths.ts`
- `content/people/index.ts`
- `content/chapters/index.ts`
- `content/projects/index.ts`
- `content/stories/index.ts`
- `content/partners/index.ts`

After editing content, run:

```bash
pnpm lint
pnpm exec tsc --noEmit
pnpm build
```

## 4. Future CMS Migration

Recommended CMS: Sanity.

Migration order:

1. Stories
2. People
3. Projects
4. Partners
5. Chapters
6. Selected page sections and homepage feature slots

Do not put routes, component layout, or design tokens into CMS.

## 5. Asset Workflow

Before CMS:

- Keep approved public assets under `public/`.
- Avoid hotlinking unstable WeChat or social media image URLs.
- Use descriptive filenames and alt text.

After CMS:

- Store editorial images in the CMS asset library.
- Use Vercel Blob or another object storage service only if file volume, downloads, or video assets require it.

## 6. Editorial QA

Before publishing content:

- Confirm names, titles, partner names, and locations.
- Check image rights and logo approval.
- Check English copy for clarity.
- Check Chinese copy for encoding and punctuation.
- Confirm story/project/chapter relationships.
- Run the full build checks before deployment.
