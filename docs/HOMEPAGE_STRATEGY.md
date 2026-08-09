# She Rewires Homepage Strategy

Last updated: 2026-08-04

## Role of this document

This is the execution specification for the homepage after founder alignment. It defines narrative purpose and content requirements before visual implementation. It must be read with `docs/FOUNDER_ALIGNMENT.md`, `docs/DESIGN_DIRECTION.md`, and `docs/DESIGN_GAP_ANALYSIS.md`.

## Page-level goals

Within 30 seconds, a first-time visitor should understand that She Rewires is a women-led global co-building platform, why it exists, how it works, and how to enter it. The page should feel like an international, human, editorial brand surface rather than an event archive, SaaS landing page, or ecosystem dashboard.

## Section specification

| Section | User question | Content requirement | Visual direction | Must avoid |
| --- | --- | --- | --- | --- |
| 1. Identity / Hero | What is She Rewires? | Brand name, approved co-building statement, one primary action, intentional bilingual treatment. | Large typography, confident whitespace, restrained navigation, optional approved human/community media. | Stats-first hero, abstract Human Agency label without context, dense copy. |
| 2. Why | Why does it exist? | Technology changes quickly; human connection, creativity, judgment, empathy, and agency matter more. | Editorial text-led section with a clear reading rhythm. | Corporate mission boilerplate and unexplained ecosystem language. |
| 3. Evolution | Where did it come from? | Women in STEM → women-led movement → co-building platform → Human Agency for the AI era. | A simple, legible progression; use timeline detail only where it improves understanding. | Hiding the women-led origin or jumping directly to the future label. |
| 4. Co-building Model | How does it work? | Discover → Connect → Co-build → Incubate → Scale. Explain people, ideas, projects, ecosystems, and impact. | Clear editorial sequence or light diagram; generous whitespace. | Complex systems diagrams, technical architecture, or card grids with no explanation. |
| 5. People First | Who makes it real? | Founders, co-builders, partner leaders, community builders, and women technology innovators. | Real approved photos/video; varied editorial composition. | CEO-only portraits, stock imagery, or text-only people cards as the final experience. |
| 6. Projects | What has it enabled? | Curated proof such as Human Agency Leadership Forum, Singapore, India, Women Beyond Wealth, and Emerging Markets Innovation Alliance. | Fewer, richer project stories with context and media. | Project catalogue, promotional poster wall, internal CMS language. |
| 7. Partners | Who builds alongside it? | 10–15 curated partners, with partnership framed as co-creation. | Premium, restrained partner treatment inspired by BEYOND's curation. | Exhaustive logo wall, sponsorship-first language, unapproved logos. |
| 8. Stories | What emerges from the system? | People stories, ideas and insights, project stories, and conversations. | Editorial pacing, real moments, clear reading paths. | Event archive or dense media library as the primary identity. |
| 9. Join Us | How can I participate? | Co-builder, chapter builder, partner, expertise, and ecosystem support paths. | Clear, warm, action-oriented CTA with distinct routes. | Generic "contact us" conversion funnel or membership framing. |

## Metrics rule

Use the approved proof simply: `80,000+ people · 150+ co-builders · 16+ cities · One global movement`. Place it after identity and meaning, not before them. Metrics should reinforce credibility without turning the page into a dashboard.

## Content and media rules

- Use real, rights-cleared photos and video as the default evidence of community.
- Prefer people, conversations, workshops, dinners, and making over posters and event banners.
- Keep public copy human; never expose CMS, schema, editor, migration, or developer notes.
- Every image needs meaningful alt text and an ownership/usage note before launch.
- Do not add video, animation, or partner logos until the source assets and permissions are confirmed.

## Design references by decision

| Decision | Reference lesson |
| --- | --- |
| Hero scale and confidence | BEYOND Expo, Apple |
| Editorial pacing and ideas | IDEO, TED, Stripe Press |
| Whitespace and clarity | Apple, Notion |
| Human warmth and belonging | Airbnb, Women in Tech |
| Partner curation | BEYOND Expo |

References provide principles only. Do not reproduce another site's design system or content.

## Colour and typography foundation

The 2024 Brand Guidelines provide the historical brand DNA: `#BFFE01`, `#DEC4FF`, `#8A55ED`, `#FFFFFF`, `#E6E6E6`, and `#303030`. Use white, black/dark neutral, and light grey as the editorial foundation; use purple as the core brand signal; use light purple atmospherically; and reserve fluorescent green for small signal accents or a single intentional editorial moment.

The guideline typography references are OPPO Sans for Chinese and Nimbus Sans for English. Treat them as provisional webfont choices until licensing, loading performance, fallback behaviour, and mixed-script rendering are verified. Do not commit font files as part of a visual exploration.

Do not let the historic green become the dominant colour, and do not apply all six colours at equal prominence. The 2026 visual direction preserves brand DNA while changing the usage hierarchy for a more international, editorial, less crowded experience.

## Implementation boundaries

Preserve the existing route architecture and CMS-ready content separation. Implement the homepage in reviewable increments: first narrative order and copy, then approved imagery and typography, then partner treatment and restrained motion. Do not rebuild the entire site or introduce a CMS as part of the visual pass.

## Approval gates

Before code changes, the founder/project owner must approve:

1. Hero English and Chinese treatment.
2. Whether the language toggle returns.
3. Evolution and co-building model wording.
4. The first-release people, projects, and partner assets.
5. Any motion direction and reduced-motion behaviour.

After implementation, verify desktop/mobile layout, navigation, CTAs, accessibility basics, content accuracy, and a Vercel Preview before production release.

### Logo and phase gates

- Before Phase 1, a legacy/provisional logo treatment may remain while the narrative is implemented.
- Before Phase 2, review the authoritative founder `.ai` source and approve exported light, dark, desktop, and compact/mobile SVG variants.
- Before Phase 3, use only approved logo variants alongside approved people, project, partner, and media assets.
- Before motion implementation, approve motion behaviour, reduced motion, and any logo/colour transitions.

Final logo conversion is required before founder-facing visual approval, but must not block Phase 1 narrative implementation.

The August launch CMS decision remains unresolved: CMS-ready architecture may be sufficient, or an operational CMS with preview, draft, version history, and editor workflow may be required. Record the decision before launch scope is frozen.
