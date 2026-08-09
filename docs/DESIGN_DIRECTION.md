# She Rewires Website Design Direction v1.0

Last updated: 2026-08-04

## Purpose and authority

This document defines the approved working direction for future visual and content changes. It is a design constraint, not an implementation brief: no page should be visually rebuilt from it without a scoped, reviewed implementation plan.

It synthesizes founder guidance, the design-preservation audit, and the intended lessons from BEYOND Expo, Women in Tech, IDEO, TED, Stripe Press, Apple, Notion, and Airbnb. It does not authorize copying another brand's content, layouts, colours, or visual identity.

## Design north star

She Rewires is a continuously evolving, women-led global co-building platform. It connects people, ideas, and ecosystems to cultivate human agency for the AI era.

The website must help a first-time visitor understand, in this order:

1. What She Rewires is.
2. Why it exists.
3. Where it came from and how it has evolved.
4. How people and organisations co-build within it.
5. How to participate.

Projects, events, stories, partners, and metrics are proof of the ecosystem. They are not its opening identity.

## Positioning and narrative order

| Evolution | Meaning on the website |
| --- | --- |
| Past: women in technology community | Preserve this origin, its people, and its credibility. |
| Present: women-led global co-building platform | Make this the clearest first-time visitor understanding. |
| Future: human agency platform for the AI era | Introduce as the long-term mission after the identity is understood. |

The narrative rule is **known to new**: visitors should first meet a women-led global movement, then understand its co-building model, then encounter human agency as its future-facing purpose.

Recommended primary positioning:

> She Rewires is a global women-led co-building platform connecting people, ideas, and ecosystems to cultivate human agency for the AI era.

Recommended hero thought:

> Building the future is not about waiting for change. It is about co-building it together.

Use the final editorial wording only after founder review. Do not substitute generic claims such as "global platform", "innovation ecosystem", or "future of AI" without a human meaning.

## Brand character

The experience should feel human, visionary, global, intelligent, and purpose-led.

- **Human:** lead with real builders, communities, and stories; use real photography where approved.
- **Visionary:** convey possibility and confidence without empty futurist language.
- **Global:** show cross-border connection and multicultural participation without looking like a local event organiser.
- **Intelligent:** privilege thoughtful, edited content over a news-feed or dashboard feel.
- **Purpose-led:** make the mission visible; avoid corporate, SaaS, consultancy, accelerator, or membership-platform conventions.

## Homepage narrative architecture

| Order | Visitor question | Required role |
| --- | --- | --- |
| 1. Identity | What is She Rewires? | A strong brand statement, name, emotional entry point, and one clear action. |
| 2. Why | Why does it exist? | Explain why human connection, creativity, and agency matter in technological change. |
| 3. Evolution | Where did it come from? | Make the women-led origin visible: women in STEM to women-led community to global co-building platform to human agency era. |
| 4. Co-building model | How does it work? | Explain the path from people and ideas to projects, ecosystems, and impact. |
| 5. People | Who makes it real? | Prioritise founders, co-builders, chapter builders, contributors, and innovators. |
| 6. Projects | What has it enabled? | Treat projects as selected evidence, not the primary homepage identity. |
| 7. Partners | Who builds alongside it? | Use a limited, curated, premium presentation of key partners. |
| 8. Stories | What does participation look like? | Surface people, journeys, conversations, and selected moments; do not make this an event archive. |
| 9. Join | What can I do next? | Offer distinct paths for co-builders, chapter builders, partners, and contributors. |

Metrics may appear after identity and purpose are established. They must provide context, not become the hero message or a dashboard.

## Reference use

| Reference | Learn | Do not copy |
| --- | --- | --- |
| BEYOND Expo | International confidence, hero scale, editorial hierarchy, whitespace, typography, restrained navigation, curated partners, and purposeful motion. | Conference-first IA, dense schedules, content overload, or its event-brand expression. |
| Women in Tech | Authentic communities, real people, activity photography, and a global chapter feeling. | Its visual style, colour system, information hierarchy, event-heavy navigation, or traditional community-site expression. |
| IDEO | Human-centred storytelling and innovation narrative. | Its brand language or page templates. |
| TED | Ideas first and people behind ideas. | Talk-library or media-archive structure. |
| Stripe Press | Editorial confidence, paced reading, and a publication-quality content surface. | Publication identity or editorial design verbatim. |
| Apple | Restraint, clarity, confidence, typography, and whitespace. | Product-launch patterns or visual identity. |
| Notion | Simplicity, clear navigation, and easy comprehension. | Excessive cards or product UI conventions. |
| Airbnb | Human warmth, belonging, and story-led browsing. | Marketplace or booking behaviours. |

## Visual principles

1. Use large, disciplined typography and controlled reading widths to create hierarchy.
2. Use generous whitespace and deliberate pacing; not every idea needs a card.
3. Prefer editorial composition and occasional asymmetric groupings over repeated dashboard grids.
4. Use real, rights-cleared people and community imagery before abstract diagrams or generic stock imagery.
5. Keep navigation simple, clear, and minimal. The current route architecture remains the intended primary navigation.
6. Present partners selectively: approximately 10–15 key partners when content exists, never an uncurated logo wall.
7. Motion, if introduced, should support orientation or emotional emphasis and respect reduced-motion preferences.
8. Preserve or intentionally redesign the bilingual brand expression. The prior Chinese name and language control must not disappear by accident.

## Anti-patterns

Do not make the public website look like:

- a SaaS landing page with endless feature cards and conversion blocks;
- a dashboard led by statistics;
- a schedule-first event website;
- a traditional women-in-tech community portal;
- an NGO or corporate showcase;
- a generic AI startup using abstract terms without people or purpose.

Do not expose internal engineering language such as "CMS-ready", "content model", "snapshot", or instructions for non-technical editors in public-facing copy.

## Implementation guardrails

- Preserve the new route architecture, structured content layer, content interfaces, and reusable components where they serve this direction.
- Preserve useful strengths from the pre-redesign baseline: bilingual recognition, clear centred brand presence, icon-led impact proof, visual rhythm, and confident CTAs. Each should be explicitly marked preserve, adapt, or remove before implementation.
- Do not perform a full-site visual rewrite. Address the highest-impact gaps in small, reviewable changes.
- Before UI work, compare the implementation with this document and `docs/DESIGN_PRESERVATION_AUDIT.md`; identify what to keep, revise, and remove.
- Founder approval is required for final hero copy, bilingual behaviour, real imagery, partner selection, and any material design-system change.
- The latest founder-provided `.ai` logo file is the single authoritative logo source. Existing SVG, JPG, and text-only treatments are legacy/provisional; export and review light, dark, desktop, and compact/mobile SVG variants before founder-facing visual approval.
- A provisional legacy logo may remain during Phase 1 narrative implementation, but final logo conversion is required before founder-facing visual approval.
- The 2024 Brand Guidelines are the historical formal source for the colour and typography DNA: `#BFFE01`, `#DEC4FF`, `#8A55ED`, `#FFFFFF`, `#E6E6E6`, `#303030`, with OPPO Sans for Chinese and Nimbus Sans for English. The 2026 site should preserve these as source references while using a restrained black/white/neutral editorial foundation.
- `#BFFE01` is a signal/energy accent, not the primary colour. It must not create a fluorescent-green-heavy event or NGO visual system.
- Font licensing and webfont delivery must be verified before committing or loading OPPO Sans or Nimbus Sans; do not download fonts speculatively.
