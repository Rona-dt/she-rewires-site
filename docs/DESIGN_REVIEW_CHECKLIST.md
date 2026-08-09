# She Rewires Design Review Checklist

Last updated: 2026-08-05

## Purpose

Use this checklist after every homepage implementation phase and before any founder-facing preview. It translates the approved founder alignment, design direction, homepage strategy, gap analysis, preservation audit, and implementation plan into repeatable review gates.

This is a review record, not an implementation brief. Do not mark a criterion **Approved** merely because it is implemented or technically verified.

## Review metadata

| Field | Value |
| --- | --- |
| Phase reviewed | `Phase 0 / Phase 1 / Phase 2 / Phase 3 / Phase 4` |
| Branch / commit |  |
| Reviewer |  |
| Review date |  |
| Preview or local URL |  |
| Baseline screenshots |  |
| Overall status | `Pass / Fail / Needs revision` |

## Status definitions

- **Implemented:** the intended code/content change exists in the reviewed branch.
- **Verified:** the implemented change was checked in the relevant environment, viewport, interaction, or quality gate.
- **Approved:** the verified result is accepted by the founder/project owner for the current phase.

Use one status per checklist row:

`[ ] Not started` · `[ ] Implemented` · `[ ] Verified` · `[ ] Approved` · `[ ] Fail` · `[ ] Needs revision`

Never use **Approved** as a substitute for **Verified**. A passing build is not visual or founder approval.

## 1. Brand identity checks

| Check | Evidence / notes | Status |
| --- | --- | --- |
| The first viewport identifies She Rewires as a women-led global movement before introducing Human Agency. |  |  |
| The positioning communicates a global women-led co-building platform connecting people, ideas, and ecosystems. |  |  |
| The approved hero thought is used or an explicitly approved alternative is documented. |  |  |
| The women-in-STEM origin remains visible and is not replaced by future-facing language. |  |  |
| The bilingual identity (`She Rewires` / `她原力`) is preserved or its intentional omission is explicitly approved. |  |  |
| The logo asset is an approved web conversion of the founder-provided vector; no unreviewed redraw is used. |  |  |
| The page feels human, visionary, global, intelligent, purpose-led, community-driven, warm, and inclusive. |  |  |
| The page does not read as corporate, NGO-like, overly feminine/pink, SaaS, event-first, or abstract without meaning. |  |  |
| Public copy contains no CMS, schema, snapshot, editor, migration, or developer language. |  |  |

## 2. Homepage narrative checks

| Check | Evidence / notes | Status |
| --- | --- | --- |
| The sequence is Identity → Why → Evolution → Co-building Model → People → Projects → Partners → Stories → Join Us. |  |  |
| The hero answers “What is She Rewires?” before showing scale or project proof. |  |  |
| The Why section explains why human connection, creativity, judgment, empathy, and agency matter. |  |  |
| The Evolution section explains Women in STEM → women-led movement → co-building platform → Human Agency. |  |  |
| The Co-building Model explains Discover → Connect → Co-build → Incubate → Scale in plain language. |  |  |
| People appear before Projects and are represented by approved real people or clearly marked pending content. |  |  |
| Projects are curated evidence of the system, not the homepage identity. |  |  |
| Partners are framed as co-creators and limited to approved, curated material. |  |  |
| Stories include people, ideas, project learning, and conversations rather than functioning as an event archive. |  |  |
| Join Us presents distinct paths for co-builders, chapter builders, partners, contributors, and supporters. |  |  |
| Metrics use the approved simple proof and appear after identity and meaning: 80,000+ people, 150+ co-builders, 16+ cities, One global movement. |  |  |

## 3. Visual hierarchy checks

| Check | Evidence / notes | Status |
| --- | --- | --- |
| Hero typography is the strongest visual entry point and has a controlled reading width. |  |  |
| Whitespace creates editorial pacing rather than a continuous stack of equal blocks. |  |  |
| The page does not feel like Hero → Stats → Cards → Cards → CTA. |  |  |
| Cards are used only where grouping improves comprehension; non-card editorial sections provide variation. |  |  |
| Typography has clear display, headline, body, metadata, and bilingual roles. |  |  |
| Imagery prioritises real people, conversations, workshops, dinners, and making over posters or generic stock. |  |  |
| Partner presentation is restrained and premium, with no uncurated logo wall. |  |  |
| Any motion supports orientation or emotional emphasis and respects reduced-motion preferences. |  |  |
| BEYOND-inspired qualities are limited to scale, confidence, editorial layout, whitespace, navigation, partner curation, and purposeful motion. |  |  |
| No reference site has been copied in content, layout, colour system, or identity. |  |  |

## 4. Preservation checks against the previous version

| Check | Evidence / notes | Status |
| --- | --- | --- |
| Recognisable `She Rewires` plus `她原力` identity is retained or intentionally redesigned with approval. |  |  |
| The centred, welcoming brand presence of the previous hero is preserved or consciously adapted. |  |  |
| Warm community feeling is not lost while moving toward a more editorial international tone. |  |  |
| Bilingual behaviour and language toggle changes are documented as preserve, adapt, or remove. |  |  |
| Impact metrics remain legible and visually rhythmic, but are no longer the first meaning users receive. |  |  |
| Useful blobs, icons, cards, and elevated CTAs are individually marked preserve, adapt, or remove. |  |  |
| The new About / Community / Build / Stories / Join Us architecture remains intact. |  |  |
| Structured content, content interfaces, reusable components, and redirects remain intact unless a documented exception exists. |  |  |
| The redesign has not become a full-site rewrite or generic ecosystem prototype. |  |  |

## 5. Functional regression checks

| Check | Evidence / notes | Status |
| --- | --- | --- |
| Homepage loads without runtime or console errors. |  |  |
| Primary navigation reaches About, Community, Build, Stories, and Join Us. |  |  |
| Mobile navigation opens, closes, and closes after selecting a route. |  |  |
| Hero primary and secondary CTAs resolve to the intended destinations. |  |  |
| Join Us paths, required fields, mailto behaviour, and visible labels agree. |  |  |
| Legacy redirects still resolve to the new information architecture. |  |  |
| External social and partner links use the correct destination and safe target behaviour. |  |  |
| Images have meaningful alt text, links have accessible names, and keyboard focus is visible. |  |  |
| Reduced-motion preferences are respected. |  |  |
| `pnpm lint` passes. |  |  |
| `pnpm exec tsc --noEmit` passes. |  |  |
| `pnpm build` passes. |  |  |

## 6. Desktop and mobile review checks

### Desktop

| Check | Evidence / notes | Status |
| --- | --- | --- |
| Review at the agreed desktop viewport and capture a full-page screenshot. |  |  |
| Hero scale, navigation, reading widths, and section rhythm feel intentional above the fold. |  |  |
| No section becomes an information-dense dashboard at wide widths. |  |  |
| Images, partner marks, and grids have consistent alignment and sufficient whitespace. |  |  |

### Mobile

| Check | Evidence / notes | Status |
| --- | --- | --- |
| Review at the agreed mobile viewport and capture a full-page screenshot. |  |  |
| Hero copy remains legible without excessive scrolling or awkward line breaks. |  |  |
| Navigation and CTAs remain usable with touch targets and visible focus/active states. |  |  |
| Editorial order is preserved; no important section is hidden or reordered into proof-first content. |  |  |
| Cards, imagery, metrics, and partner marks do not overflow or become unreadably dense. |  |  |

## 7. Founder approval checklist

Founder/project owner must explicitly review and record a decision for each item:

| Decision | Decision / notes | Status |
| --- | --- | --- |
| Hero English copy |  | `Pass / Fail / Needs revision` |
| Hero Chinese copy and first-viewport treatment |  | `Pass / Fail / Needs revision` |
| Logo conversion and black-and-white treatment |  | `Pass / Fail / Needs revision` |
| Language toggle and bilingual behaviour |  | `Pass / Fail / Needs revision` |
| Homepage narrative order |  | `Pass / Fail / Needs revision` |
| Typography and whitespace direction |  | `Pass / Fail / Needs revision` |
| People, project, story, and partner assets and usage rights |  | `Pass / Fail / Needs revision` |
| BEYOND-inspired elements and motion direction |  | `Pass / Fail / Needs revision` |
| Mobile experience |  | `Pass / Fail / Needs revision` |
| Readiness for Vercel Preview |  | `Pass / Fail / Needs revision` |

## 8. Phase sign-off record

| Phase | Implemented by | Verified by | Founder approved by | Final status | Date / commit |
| --- | --- | --- | --- | --- | --- |
| Phase 0 — Review blockers and approvals |  |  |  | `Pass / Fail / Needs revision` |  |
| Phase 1 — Narrative correction |  |  |  | `Pass / Fail / Needs revision` |  |
| Phase 2 — Editorial visual refinement |  |  |  | `Pass / Fail / Needs revision` |  |
| Phase 3 — People, projects, partners, and media |  |  |  | `Pass / Fail / Needs revision` |  |
| Phase 4 — QA and preview |  |  |  | `Pass / Fail / Needs revision` |  |

## Review outcome rule

The phase is **Pass** only when all required criteria are implemented, verified in the relevant desktop/mobile or build environment, and approved where founder approval is required. Use **Needs revision** for incomplete or conflicting evidence. Use **Fail** for a regression, an unapproved direction change, missing required content/asset rights, or a quality gate failure.

## Logo and phase approval gates

- **Before Phase 1:** confirm founder alignment and homepage narrative. A clearly provisional legacy logo may remain while narrative implementation proceeds.
- **Before Phase 2:** review the authoritative founder `.ai` source and approve web-safe SVG exports for light, dark, desktop, and compact/mobile use.
- **Before Phase 3:** use only approved logo variants with approved people, project, partner, and media assets.
- **Before motion implementation:** explicitly approve motion, reduced-motion behaviour, and logo/colour transitions.

Final logo conversion is required before founder-facing visual approval, but does not block Phase 1 narrative implementation.

Record the unresolved August launch decision: CMS-ready architecture versus an operational CMS with preview, draft, version history, and editor workflow.
