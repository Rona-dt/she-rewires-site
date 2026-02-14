# Technical Design — SHE REWIRES Site

## 1. Architecture Overview
- **Frontend**: Next.js App Router + React 18 + TypeScript
- **Styling System**: Tailwind + tokenized theme in `app/globals.css`
- **State/Localization**: Client-side `LanguageProvider`
- **Content Layer**:
  - `lib/events.ts` for detailed event content
  - `lib/social-posts.ts` for social/media feed cards

## 2. Rendering Strategy
- Route-level pages as server components where possible.
- Interactive language and node-map components as client components.
- Markdown-like long event content rendered in event detail page.

## 3. Data Model

### `Event` model (site-native long content)
- slug, title, date, cover, location, tags, content
- derived display fields for bilingual rendering

### `SocialPost` model (channel sync cards)
- id, channel, type(event/media), date
- titleEn/titleZh, summaryEn/summaryZh
- url, optional image

## 4. Social Sync Design
- Current: manual/assisted one-time capture and curation into `social-posts.ts`.
- Future: scheduled importer (cron) writing into JSON/DB.

### Recommended pipeline
1. Fetch source posts (API/connector/manual extract)
2. Normalize into `SocialPost[]`
3. Validate required fields
4. Publish to source store
5. Rebuild/redeploy

## 5. WeChat Import Design
- Constraint: hotlink image blocking and unstable external access.
- Recommended import:
  1. parse article body
  2. download images
  3. upload to owned storage (Vercel Blob/S3/R2)
  4. rewrite image links
  5. publish as event entry

## 6. Feature Flags / Display Controls
- `showSiteEvents` boolean in Events list client controls whether Upcoming/Past site-native blocks are visible.
- Social feed remains visible by default.

## 7. Reliability / Edge Cases
- Remote images may fail (expired signed URLs, anti-hotlink).
- Use stable placeholders if source image is not durable.
- Sorting by date must use ISO-like values (`YYYY-MM-DD`).

## 8. Security / Privacy
- Outbound links use `target="_blank" rel="noreferrer"`.
- Lead intake currently uses `mailto` (client-side, no server persistence).
- If server form is added, add anti-spam + rate limit + validation.

## 9. Testing Strategy
- Build validation: `pnpm build`
- Type validation: `pnpm exec tsc --noEmit`
- UI regression snapshots via Playwright screenshots

