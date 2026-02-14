# PRD — SHE REWIRES Official Website

## 1. Product Vision
Build a bilingual (EN/ZH) brand and community website that acts as:
- public-facing awareness and trust entry point,
- event/media archive,
- lead intake funnel for members, partners, and collaborators.

## 2. Target Users
- Women in STEAM looking for community and opportunities
- Potential co-builders and volunteers
- Partner organizations and media
- Existing community members checking updates/events/media

## 3. Core Product Goals
1. Clearly communicate brand mission and global impact.
2. Convert visitors into actionable leads (join/contact).
3. Continuously surface latest channel content (X/Instagram/LinkedIn).
4. Preserve long-term knowledge assets (event pages, media archive).

## 4. Key Pages and Functions
- **Home**: brand intro, impact summary, get-involved CTA.
- **About**: mission, 4 pillars, global impact, team portrait entry.
- **Events**:
  - Social channel highlights (date-sorted)
  - Site-native event pages (kept in code, can be toggled in UI)
- **Media**: external interview/report cards + official channels.
- **Get Involved**: role selection + prefilled mailto flow.
- **Contact**: direct channels + prefilled mailto flow.
- **Team Portrait**: interactive 14-node constellation narrative page.

## 5. Functional Requirements
- EN/ZH language switch across key copy.
- Social cards support title/date/summary/link/image.
- Events feed sorted by date descending.
- Contact and Join forms must route to official inbox (`cobuilder@sherewires.com`).
- Direct channels must include WeChat (`TANGTASTIC`).

## 6. Non-Functional Requirements
- Responsive design for mobile/tablet/desktop.
- Accessible interactive elements (focus states, meaningful labels).
- Maintainable content model (`lib/events.ts`, `lib/social-posts.ts`).
- Visual consistency with UIUX rules (`docs/UIUX_RULES.md`).

## 7. Content Operations Requirements
- Monthly sync cycle for social feed updates.
- WeChat imports require image mirroring to owned storage.
- Media coverage entries should include source URL and publication date.

## 8. Success Metrics
- CTR to Get Involved / Contact pages.
- Number of submitted lead emails.
- Time to publish new event/media entry.
- Coverage freshness (latest post latency).

