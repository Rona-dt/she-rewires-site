# Design Gap Analysis

Last updated: 2026-08-04

## Scope and evidence

This is a no-code review of the current uncommitted redesign branch against `docs/DESIGN_DIRECTION.md` and `docs/DESIGN_PRESERVATION_AUDIT.md`.

Evidence reviewed:

- Current homepage composition in `app/page.tsx` and `content/pages/platform.ts`.
- Current reusable sections in `components/sections/*`.
- Current navigation and footer.
- The pre-redesign homepage, navigation, and footer at `HEAD` (`355d490d5c6205c314f783a1c566f3abd023567b`).
- Founder-approved reference criteria recorded in the design direction.

This review is structural and code-based. It is not a substitute for a screenshot-by-screenshot comparison with the live production baseline, a browser review, or a final brand approval.

## Executive conclusion

The redesign has a sound platform architecture but an unapproved presentation layer. It has moved too quickly from a recognisable women-led community site to a generic ecosystem prototype.

The most material gap is narrative order: the current page opens with scale and an abstract "Global Human Agency Platform" label before establishing who She Rewires is, why it exists, or its women-led roots. The second is presentation: repeated generic cards and text-only surfaces displace the previous brand presence, visual rhythm, and bilingual cues without replacing them with an equally distinctive editorial experience.

The route, content, and component architecture should be retained. The homepage narrative, public copy, visual hierarchy, imagery strategy, bilingual decision, and select shared-surface details should be revised through controlled implementation.

## Preserve from the previous version

| Element | Why it matters | Recommendation |
| --- | --- | --- |
| `She Rewires` plus `她原力` identity | The bilingual mark gave the brand immediate recognition and anchored its origin. | Preserve; decide exact first-viewport treatment with founder. |
| Centred hero with clear brand name | It established identity before proof or navigation choices. | Adapt into the new narrative-led hero. |
| Icon-led impact metrics | It made scale legible and visually rhythmic. | Adapt as supporting proof after the why/evolution story. |
| Blobs, card rhythm, and elevated CTAs | These supplied warmth, movement, and a recognisable visual language. | Preserve selectively only if aligned to the refined visual system. |
| Clear About, Impact, and Get Involved progression | It gave users a simple orientation and action path. | Preserve the simplicity while mapping it to the new IA. |
| Language toggle | It supported the existing bilingual audience. | Restore or deliberately replace only after an explicit product decision. |

## Keep from the current redesign

| Element | Recommendation |
| --- | --- |
| `/about`, `/community`, `/build`, `/stories`, `/join-us` route architecture | Keep. It supports the intended platform model and avoids event-first navigation. |
| Local structured content under `content/*` and `types/content.ts` | Keep. It separates content from presentation and remains suitable for later CMS integration. |
| Reusable section components | Keep as a starting point, but evolve the components so their visual output is not uniformly card-based. |
| Legacy redirects | Keep. Avoid recreating obsolete standalone event, media, and contact surfaces. |

## Homepage section-by-section gap

| Current surface | Current behaviour | Gap against direction | Recommended change | Priority |
| --- | --- | --- | --- | --- |
| Hero | Leads with `80,000+ people. 150+ co-builders. 16 cities.` under `Global Human Agency Platform`. | Proof and an abstract future position appear before the identity, human reason, and women-led origin. | Replace with a brand-led hero: name, approved emotional statement, brief positioning, one primary action, and an intentional bilingual treatment. Move metrics later. | P0 |
| Stats band | Appears immediately after the hero as four equal cards. | Reinforces a dashboard/SaaS reading before meaning is established. | Place metrics after Why or Evolution; use them as concise proof with visual rhythm, not the central narrative. | P0 |
| Direction section | States the women-in-STEM origin after the metrics. | Correct subject, but too late and too compressed to make origin clear. | Establish Why first, then use a visible evolution sequence from women in STEM to human agency. | P0 |
| Ecosystem section | Explains the system before showing the people who make it real. | Abstract system language arrives before emotional proof. | Turn this into an editorial co-building model following the evolution and people sections. | P1 |
| Projects | Uses uniform `ProjectCard` components and a public sentence about a "CMS-ready snapshot". | Projects are over-emphasised; developer language is visible; cards lack media and editorial differentiation. | Remove CMS wording. Curate fewer, richer project stories after people/model sections. | P0 |
| Stories | Uses four uniform text-only cards under "Proof from the ecosystem". | The section lacks real people, images, journeys, and reading rhythm. | Lead with selected authentic story assets; vary layout and make stories evidence of participation rather than a content grid. | P1 |
| Partners | Available in component architecture but not a deliberate homepage narrative moment. | No premium, curated partner treatment. | Add only when approved partner content and logos exist; use a limited editorial presentation, not a wall. | P2 |
| Final CTA | Has a clear single action. | It does not yet differentiate participation pathways. | Keep the CTA pattern; clarify co-builder, chapter builder, partner, and contributor routes. | P1 |

## Visual and interaction gaps

| Area | Finding | Recommendation |
| --- | --- | --- |
| Visual hierarchy | The common pattern is centred type followed by equal grids. This reads as a content prototype, not an editorial global brand. | Introduce deliberate rhythm: stronger hero scale, varied composition, controlled reading widths, and whitespace. |
| Cards | `ContentSection`, `StatsBand`, `ProjectCard`, `StoryCard`, `PartnerLogoWall`, and other components all default to bordered cards. | Keep cards only where grouping improves comprehension; develop non-card editorial section variants. |
| Photography and media | Current reviewed homepage components are text-only. | Create an approved asset plan centred on real builders, chapters, projects, and activity. Do not use placeholders as launch content. |
| Typography | Existing type scale is technically clear but lacks distinctive editorial pacing. | Define headline, display, body, metadata, and bilingual typography roles before wide UI changes. |
| Whitespace | Spacing is consistent but repetitive (`py-14`, common grid gaps). | Use more variation to create narrative pauses and emphasis. |
| Navigation | New IA is appropriate and navigation is minimal, but the language toggle was removed. | Retain current IA; make bilingual behaviour an explicit approved decision. |
| Motion | The old baseline had modest hover and blob motion; the current redesign is mostly static. | Consider restrained, accessible motion after core hierarchy and content are approved; never add decorative motion first. |
| Footer | The footer preserves Chinese brand naming but contains visible mojibake (`漏 2026`). | Fix the encoding defect in the stabilisation phase before visual review or deployment. |

## Content gaps

- The current hero foregrounds numbers and the phrase "Human Agency Platform" rather than a visitor-friendly identity.
- Public homepage copy includes internal implementation language: "A first CMS-ready snapshot of projects that can later be managed by non-technical editors."
- The origin story is present but is not yet a clear, visible evolution narrative.
- People, chapters, and authentic evidence exist conceptually in the content architecture but have insufficient public visual presence.
- Projects and stories require approved final editorial content and real media; placeholder structures should not be mistaken for launch-ready surfaces.
- Partner proof must be curated and approved before it is shown.

## Recommended implementation order

1. **P0 — stabilise review blockers:** repair public-facing encoding defects and resolve the Join Us required-field mismatch already tracked in `docs/KNOWN_ISSUES.md`. Re-run quality gates.
2. **P0 — approve the homepage narrative:** founder reviews the hero statement, bilingual treatment, Why, evolution, and the placement/use of metrics. Capture old and current browser screenshots before changing UI.
3. **P0 — remove internal language from public copy:** replace CMS/developer framing with audience-facing project language.
4. **P1 — implement controlled homepage recovery:** introduce the approved narrative order, typography/whitespace hierarchy, and a small set of editorial section variants. Do not change routes or content interfaces unless a concrete need emerges.
5. **P1 — add approved human evidence:** integrate rights-cleared people, chapter, and activity imagery with accessible alt text.
6. **P2 — curate partners and motion:** add only approved partners and purpose-led, reduced-motion-safe motion after the core experience is validated.
7. **P2 — browser and founder QA:** test desktop/mobile, language behaviour, CTA paths, visual comparison, accessibility basics, then create a Vercel Preview for approval.

## Decisions required before UI implementation

1. Should Chinese remain in the first viewport, and should the language toggle return?
2. Which prior visual motifs are approved to preserve or adapt: blobs, icon-led metrics, cards, centred hero, or CTAs?
3. Which hero statement and supporting positioning are approved?
4. Which real people, chapters, projects, photos, partner logos, and usage rights are available for the first release?
5. Is a curated partner section required for the first release, or should it wait for approved source material?

## Completion criterion for the next implementation phase

Begin UI changes only when the five decisions above are approved and the new work can be limited to a reviewable homepage/shared-surface scope. The release target is a website that preserves its recognised She Rewires identity while making the new co-building platform direction clearer—not a wholesale replacement of the existing brand.
