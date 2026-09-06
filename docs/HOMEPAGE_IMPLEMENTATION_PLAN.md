# Homepage Implementation Plan

Last updated: 2026-08-05

## Status

Planning only. No application code is changed by this document. Implementation must wait until the approval gates in `docs/HOMEPAGE_STRATEGY.md` are resolved.

## Inputs and constraints

Read these documents before implementation:

- `docs/FOUNDER_ALIGNMENT.md`
- `docs/HOMEPAGE_STRATEGY.md`
- `docs/DESIGN_DIRECTION.md`
- `docs/DESIGN_GAP_ANALYSIS.md`
- `docs/DESIGN_PRESERVATION_AUDIT.md`

Preserve the current route architecture, local structured content layer, and CMS-ready types. Do not introduce a CMS, rebuild the entire site, or add unapproved imagery, logo conversions, partner logos, or motion.

## Current implementation assessment

### Route and composition

`app/page.tsx` currently composes `HeroSection`, `StatsBand`, two data-driven `ContentSection` blocks, a projects grid, a stories grid, and one final CTA. The current order is:

```text
Hero → Stats → Direction → Ecosystem → Projects → Stories → CTA
```

This does not yet match the approved sequence because identity and proof are not clearly separated, people and partners are absent from the homepage, and metrics appear before meaning.

### Content source

`content/pages/platform.ts` provides the homepage hero and two sections. The hero currently uses an abstract platform eyebrow and metrics-led title. The sections contain the women-in-STEM evolution and ecosystem model, but do not yet provide enough distinct Why, Evolution, People, or Co-building content for the approved sequence.

### Reusable components

| Current component | Decision | Reason |
| --- | --- | --- |
| `HeroSection` | Modify | Retain the reusable API where possible; keep the bilingual logo as identity artwork, use one content language per view, and provide controlled single-language Hero copy for each locale. |
| `StatsBand` | Keep, reposition | Use as supporting proof after identity and meaning; avoid dashboard emphasis. |
| `ContentSection` | Modify | Retain structured-content rendering but add editorial variants so every section is not an identical card/grid pattern. |
| `SectionHeader` | Keep, refine if needed | Useful for hierarchy; review type scale and reading width during visual refinement. |
| `ProjectCard` | Modify | Remove internal CMS language from surrounding copy and support richer, curated project evidence when approved media exists. |
| `StoryCard` | Modify | Support people-led story presentation and avoid a uniform text-only archive grid. |
| `PartnerLogoWall` | Keep for later, do not place yet | The component exists, but partner assets and curation are not approved for homepage use. |
| `PersonProfile` | Reuse or adapt | Use only when approved people data and rights-cleared images are available; People must precede Projects. |
| `EcosystemDiagram` | Defer or simplify | A complex system diagram is not required for the first narrative pass; prefer a legible co-building sequence. |
| `CTASection` | Keep, modify copy | Preserve the clear CTA pattern and clarify distinct participation paths. |

## Target composition

```text
1. Identity / Hero
2. Why
3. Evolution
4. Co-building Model
5. People First
6. Projects
7. Partners
8. Stories
9. Join Us
```

Metrics appear as contextual proof after the first identity/meaning block, not as the first section after the hero.

## Implementation phases

### Phase 0 — Review blockers and approvals

**Objective:** make the branch safe to review without changing its visual direction.

**Files likely affected:** existing public copy sources, `content/site-config.ts`, footer/navigation only if encoding is confirmed there.

**Tasks:**

- Resolve visible mojibake in public-facing content.
- Resolve the Join Us required-field mismatch documented in `docs/KNOWN_ISSUES.md`.
- Confirm the final English and Chinese locale treatment; do not mix both languages in one Hero headline.
- Restore/implement the top-right language control with English as the default and a complete Chinese locale switch.
- Register `she-rewires-logo-white-cropped-provisional.png` and `she-rewires-logo-black-cropped-provisional.png` as provisional preview assets only; they must not replace the authoritative `.ai` source.
- Confirm first-release people, project, partner, and media assets.
- Confirm how the founder-supplied `.ai` logo will be converted to an approved web asset.

**Risks:** changing copy before approval can create another brand-direction loop; converting the logo without Illustrator/source review can alter the mark.

**Acceptance criteria:** no known encoding defects in reviewed surfaces; five homepage approval gates are recorded; no unapproved assets are introduced; page copy is single-language per view; English is the default; and the top-right control switches the complete page to Chinese.

### Phase 1 — Narrative correction

**Objective:** align homepage structure and public copy with the approved narrative while keeping components and content interfaces stable.

**Files likely affected:** `app/page.tsx`, `content/pages/platform.ts`, `content/site-config.ts`, possibly `content/pages/*` for shared copy.

**Tasks:**

- Replace the stats-led hero with the approved identity-led hero.
- Add explicit Why and Evolution content before metrics.
- Present the co-building model as a clear sequence: Discover → Connect → Co-build → Incubate → Scale.
- Move StatsBand after identity and meaning.
- Remove public references to CMS readiness, snapshots, schema, or editors.
- Keep Projects and Stories as proof, not the opening identity.

**Risks:** overloading the homepage with copy; changing content IDs could break anchors or future CMS mapping.

**Acceptance criteria:** a visitor can identify She Rewires as women-led and co-building before seeing metrics; order matches the target composition; all public copy is human-facing.

### Phase 2 — Editorial visual refinement

**Objective:** replace the generic repeated-card rhythm with a restrained editorial hierarchy.

**Files likely affected:** `components/sections/hero-section.tsx`, `content-section.tsx`, `section-header.tsx`, `stats-band.tsx`, `project-card.tsx`, `story-card.tsx`, `app/page.tsx`, and scoped styles in `app/globals.css` if required.

**Tasks:**

- Establish display, headline, body, metadata, and bilingual typography roles.
- Increase deliberate whitespace and vary section composition.
- Keep cards only where grouping improves comprehension.
- Preserve useful baseline warmth and CTA rhythm without recreating a dashboard.
- Introduce motion only after hierarchy is approved and with reduced-motion support.

**Risks:** visual changes can drift toward BEYOND imitation or remove too much of the recognisable baseline; broad component changes can affect inner pages.

**Acceptance criteria:** homepage no longer reads as a repeated card grid or SaaS dashboard; desktop and mobile hierarchy is coherent; inner routes remain visually stable unless explicitly scoped.

### Phase 3 — People, projects, partners, and media

**Objective:** replace placeholder proof with approved human evidence.

**Files likely affected:** `content/people/*`, `content/projects/*`, `content/partners/*`, `content/stories/*`, `components/sections/person-profile.tsx`, `project-card.tsx`, `story-card.tsx`, `partner-logo-wall.tsx`, and `app/page.tsx`.

**Tasks:**

- Add rights-cleared people imagery and meaningful alt text.
- Curate representative projects for brand evolution, not only scale.
- Add no more than 10–15 approved partners when source assets are available.
- Shape Stories around people, ideas, project learning, and conversations.
- Keep posters and promotional event graphics secondary.

**Risks:** missing rights, incomplete metadata, placeholder content being mistaken for approved launch content, and an uncurated logo wall.

**Acceptance criteria:** every displayed asset has an approved source/usage note; People precedes Projects; partner count and selection are approved; no placeholder or internal CMS copy remains.

### Phase 4 — QA and preview

**Objective:** validate the controlled homepage recovery before any production decision.

**Files likely affected:** tests or QA notes only; no new test framework is required for this phase.

**Tasks:**

- Compare old baseline and current homepage screenshots at desktop and mobile sizes.
- Test navigation, language behaviour, CTAs, redirects, and Join Us flow.
- Check responsive layout, keyboard focus, image alt text, reduced motion, and console errors.
- Run `pnpm lint`, `pnpm exec tsc --noEmit`, and `pnpm build`.
- Create a Vercel Preview only after the reviewed commit is ready.

**Risks:** approving from a local desktop view only; confusing a passing build with visual approval; deploying before founder review.

**Acceptance criteria:** quality gates pass, screenshot comparison is documented, preview matches the reviewed branch, and founder/project owner approves the visual direction before production.

## Content model impact

No new CMS is required for the first implementation pass. Existing `PageContent`, `Project`, `Story`, `Person`, and `Partner` types should remain the source contracts. Add fields only when a concrete presentation or editorial requirement cannot be represented by the current model; document any additions before coding.

## Explicit non-goals

- No full-site rewrite.
- No route renaming or removal of the approved primary IA.
- No CMS integration in the homepage visual pass.
- No invented partner logos, people, video, or animation.
- No automatic replacement of the founder-provided logo without an approved web conversion.
- No production deployment before preview and founder approval.

## Definition of ready for implementation

Implementation may begin when Phase 0 approval items are recorded, the homepage asset inventory is available, and the first phase can be reviewed as a focused diff touching only the homepage, its content sources, and necessary shared sections.

## Logo and CMS launch decisions

The latest founder-provided `.ai` file is the single authoritative logo source. Existing SVG, JPG, and text-only treatments are legacy/provisional. Phase 1 may retain one clearly provisional treatment, but reviewed SVG exports for light, dark, desktop, and compact/mobile use are required before founder-facing visual approval.

Approval gates are separate: founder alignment and narrative before Phase 1; reviewed logo exports and visual foundations before Phase 2; approved logo, people, project, partner, and media assets before Phase 3; and motion/reduced-motion approval before any motion implementation.

The August launch decision remains open: confirm whether CMS-ready architecture is sufficient or whether an operational CMS with preview, draft, version history, and editor workflow is required. Record this before launch scope is frozen.

## Historical brand-guideline inputs

Before Phase 2 visual refinement, review the 2024 Brand Guidelines palette and typography references. Treat `#BFFE01` as a restrained signal accent, not a dominant colour. Verify OPPO Sans/Nimbus Sans licensing, webfont loading, fallback, and mixed-script rendering before any font files are added; do not download or commit fonts speculatively.
