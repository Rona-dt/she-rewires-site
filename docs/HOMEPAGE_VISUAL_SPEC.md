# She Rewires Homepage Visual Specification

Last updated: 2026-08-09

## Purpose and phase boundary

This document defines the Phase 2 visual refinement target for the homepage. It does not block Phase 1 narrative implementation. Phase 1 may implement approved narrative order and human-facing content while retaining clearly provisional visual treatments and the legacy logo placeholder.

Phase 2 may begin only after the relevant approval gates in `docs/DESIGN_REVIEW_CHECKLIST.md` are satisfied. This specification describes composition and hierarchy, not JSX, CSS, Tailwind classes, exact pixel values, final copy, or invented assets.

## Authoritative inputs

- `docs/FOUNDER_ALIGNMENT.md`
- `docs/HOMEPAGE_STRATEGY.md`
- `docs/DESIGN_DIRECTION.md`
- `docs/VISUAL_FOUNDATIONS.md`
- `docs/DESIGN_GAP_ANALYSIS.md`
- `docs/DESIGN_PRESERVATION_AUDIT.md`
- `docs/DESIGN_REVIEW_CHECKLIST.md`

## Approved homepage sequence

```text
Identity
  → Why
  → Evolution
  → Co-building Model
  → People
  → Projects
  → Partners
  → Stories
  → Join Us
```

Projects, partners, stories, and metrics are evidence of the system. They must not displace identity, purpose, origin, or people as the opening experience.

The Metrics proof band is a supporting proof moment placed after Co-building Model and before People. It is not an additional primary narrative section and does not change the approved sequence.

## Global visual foundations

- Treat the latest founder-provided `.ai` logo file as the sole authoritative logo source. Existing SVG, JPG, and text-only treatments are legacy/provisional.
- Final logo exports must be reviewed as web-safe variants for light, dark, desktop, and compact/mobile contexts before founder-facing visual approval.
- Use the 2024 palette as inherited brand DNA, not mandatory historical proportions: `#BFFE01`, `#DEC4FF`, `#8A55ED`, `#FFFFFF`, `#E6E6E6`, and `#303030`.
- The intended 2026 hierarchy is editorial black/white/neutral foundation, purple as the core brand signal, light purple as atmosphere, and fluorescent green as a restrained signal accent.
- OPPO Sans and Nimbus Sans are historical typography references. Webfont use remains provisional until licensing, delivery, fallback, and mixed-script rendering are verified.
- Do not copy reference-site layouts, final copy, colours, logos, or identity.
- Do not invent people, photography, video, partner logos, gradients, or final copy.
- No exact pixel value in this document is final unless an existing approved token or source explicitly establishes it.
- Do not use fake placeholders, dummy logos, avatar initials, lorem ipsum, or public-facing coming-soon blocks anywhere on the homepage.

## Language and logo-lockup rule

- The logo may remain a bilingual brand lockup (`她原力` plus `sherewires`) because it is identity artwork.
- Page copy, navigation labels, headings, body text, buttons, and form labels must use one content language per view. Do not use `She Rewires / 她原力` as a mixed-language Hero headline.
- English is the default page locale. The top-right language control must switch the complete page locale to Chinese; it must not create a partially translated or mixed-language view.
- The Hero should use the approved single-language positioning copy while the bilingual logo remains in the header or another intentional identity placement.
- `she-rewires-logo-white-cropped-provisional.png` and `she-rewires-logo-black-cropped-provisional.png` are provisional cropped preview assets supplied for Phase 2 exploration. They may support static composition review after asset inspection, but they are not the authoritative source and must not be treated as final production exports.

## Global section differentiation rule

Do not render every section through the same template. No more than two consecutive sections should share the same composition, card pattern, alignment, or background treatment. Variation should come from hierarchy, content width, spacing, alignment, and approved media—not arbitrary decoration or unapproved assets.

## Decision ownership

- **Founder approval required:** brand identity, final logo variants, hero treatment, bilingual logo and locale-switch behaviour, final colour prominence, real media/partner selection, and founder-facing visual approval.
- **Design-review provisional decisions:** composition variants, card-versus-open-editorial choices, spacing rhythm, typography roles, colour roles, and optional future motion direction until reviewed against the foundations and screenshots.
- **Engineering implementation decisions:** component reuse, content mapping, responsive structure, accessibility implementation, performance, route-safe CTA wiring, and technical constraints within the approved direction.

Engineering decisions must not silently turn a provisional design choice into a final brand decision.

## Section specifications

### 1. Identity

**Purpose:** Establish what She Rewires is before showing scale or proof.

- **Layout composition:** A calm, brand-led opening with a strong focal statement, a clear positioning explanation, and one primary route into participation or discovery. The brand mark and bilingual treatment must be intentional, not an accidental text stack.
- **Desktop structure:** A centred or carefully balanced hero field with a controlled headline width and generous negative space. Navigation should remain simple and subordinate to the identity.
- **Mobile structure:** Preserve the identity-first order. Stack mark, headline, supporting explanation, and CTA without forcing dense line lengths or pushing the primary action below an excessive text block.
- **Content width:** Narrow enough for confident reading and headline rhythm; do not use the full viewport for paragraph copy.
- **Spacing rhythm:** Largest pause and strongest breathing room on the page. Use a deliberate gap between identity statement, explanation, and action; exact values remain provisional.
- **Typography role:** Display/headline typography carries the brand. Supporting copy uses a readable neutral sans-serif role. Chinese and English hierarchy must be reviewed together.
- **Colour role:** White or warm neutral foundation with dark primary text. Purple is a selective action or label signal; fluorescent green is optional micro-accent only.
- **Imagery/media role:** Optional approved human/community image or video may support the entry, but must never obscure the message. No placeholder media.
- **Card versus open editorial:** Open editorial composition. Do not put the hero inside a generic card.
- **CTA treatment:** One clear primary CTA; secondary discovery action only if it does not dilute the first action. Use a verified accessible purple treatment or neutral alternative.
- **Preserve from previous version:** Centred brand presence, recognisable bilingual identity, approachable CTA, and welcoming first impression.
- **Anti-patterns:** Stats-first hero, abstract Human Agency label without context, generic AI gradient, event banner, or oversized card shell.
- **Optional future motion:** Subtle entrance or media movement after reduced-motion review; no decorative motion required for Phase 2.
- **Unresolved decisions:** Final hero copy; Chinese first-viewport treatment within the locale switch; authoritative logo exports; neutral versus restrained lavender/media background.

### 2. Why

**Purpose:** Explain why the system exists and give human meaning to technological change.

- **Layout composition:** Editorial text-led section with one clear idea and supporting explanation, followed by an optional small proof or pull-quote only when approved.
- **Desktop structure:** A strong heading column paired with a readable body column or a controlled asymmetrical composition. Avoid a symmetrical card grid.
- **Mobile structure:** Heading followed by body in a natural reading order; preserve generous vertical pauses without creating a long wall of undifferentiated text.
- **Content width:** Body copy should remain comfortably readable; heading and body may use different widths to create hierarchy.
- **Spacing rhythm:** A clear transition from the hero, then a measured pause before the next section. Use editorial pacing rather than repeated equal section heights.
- **Typography role:** Headline establishes belief; body text supports comprehension. Avoid decorative or overtly feminine type treatments.
- **Colour role:** Neutral background and dark text. Light purple may identify a quiet emphasis surface; green should not carry the section.
- **Imagery/media role:** No media required. If used, it must be approved and directly support the human reason for existence.
- **Card versus open editorial:** Prefer open editorial layout. Use a card only for a genuinely distinct, approved piece of evidence.
- **CTA treatment:** Usually no competing CTA; link to About only when it improves orientation.
- **Preserve from previous version:** Clear About-style orientation and easy comprehension.
- **Anti-patterns:** Mission boilerplate, corporate ESG language, abstract ecosystem terminology, or multiple equal feature cards.
- **Optional future motion:** None required; restrained text reveal may be considered only after hierarchy approval.
- **Unresolved decisions:** Final Why copy and whether a supporting quote or evidence element is needed.

### 3. Evolution

**Purpose:** Make the path from women in STEM to the future Human Agency position legible without erasing the origin.

- **Layout composition:** A simple progression with four meaningful stages: women in STEM, women-led movement, co-building platform, and Human Agency for the AI era.
- **Desktop structure:** A horizontal or gently stepped editorial progression may be considered, provided the relationship remains readable without a complex diagram.
- **Mobile structure:** Convert the progression into a vertical sequence with clear stage labels and enough separation for scanning.
- **Content width:** Sequence labels may span more than body text, but descriptions must remain controlled and readable.
- **Spacing rhythm:** Repeated but not mechanical pauses between stages; use one visual anchor rather than a dense timeline.
- **Typography role:** Stage labels use a distinct metadata or subheading role; the current chapter receives emphasis only if content approval supports it.
- **Colour role:** Use neutral stages with selective purple emphasis. Green may mark one transition or signal, not every stage.
- **Imagery/media role:** Optional approved archive or community imagery may provide human context. Do not use unverified event posters as decoration.
- **Card versus open editorial:** Prefer open sequence. Small grouped panels are acceptable only if they remain editorial rather than dashboard-like.
- **CTA treatment:** A subtle About link may follow the sequence; no conversion-heavy CTA is necessary.
- **Preserve from previous version:** Origin story, bilingual recognition, and the sense of evolution rather than replacement.
- **Anti-patterns:** Hiding women in STEM, presenting Human Agency as the original identity, dense roadmap diagrams, or a technology-only timeline.
- **Optional future motion:** A restrained progression cue may be explored after motion approval and reduced-motion design.
- **Unresolved decisions:** Final stage labels and dates; horizontal versus vertical desktop treatment; available approved historical media.

### 4. Co-building Model

**Purpose:** Explain how the system operates: Discover → Connect → Co-build → Incubate → Scale.

- **Layout composition:** A clear sequence with concise explanations and visible relationships between people, ideas, projects, ecosystems, and impact.
- **Desktop structure:** An editorial process flow or lightly structured sequence with one visual centre; avoid a complex operating-system diagram.
- **Mobile structure:** A vertical step sequence with explicit numbers or labels and no dependency on horizontal scrolling.
- **Content width:** Each step should be short enough to scan; the explanatory introduction may use a wider but controlled measure.
- **Spacing rhythm:** Consistent step rhythm with a larger pause before and after the model. Do not make every step a separate full card.
- **Typography role:** Step labels are prominent; explanations remain secondary and concise.
- **Colour role:** Neutral foundation, dark text, purple as sequence emphasis or connector, and green only as a small signal if needed.
- **Imagery/media role:** Diagrammatic language is acceptable; real media is optional and should not compete with the mechanism explanation.
- **Card versus open editorial:** Prefer open sequence or restrained grouped blocks over six equal cards.
- **CTA treatment:** Link to Build or Join Us after the model, not inside every step.
- **Preserve from previous version:** Clear orientation toward participation and approachable action.
- **Anti-patterns:** Technical architecture, dense ecosystem map, unexplained nodes, or a repeated card grid.
- **Optional future motion:** Sequential emphasis may be explored later, with pause/reduced-motion alternatives.
- **Unresolved decisions:** Final diagram language, whether a static visual is needed, and the exact relationship between model and metrics.

### 5. Metrics Proof Band

**Purpose:** Provide concise credibility proof after visitors understand how the system works and immediately before the people who make it real.

- **Layout composition:** A restrained horizontal or grouped proof band using the approved simple metrics: 80,000+ people, 150+ co-builders, 16+ cities, One global movement. Treat these as context, not a dashboard.
- **Desktop structure:** A single supporting band with clear rhythm and generous separation from Co-building Model and People. Avoid a dominant four-card dashboard.
- **Mobile structure:** A readable vertical or compact grouped arrangement that preserves the sequence and does not create a dense statistics wall.
- **Content width:** Contained enough to read as one proof moment, not a full-width analytics surface.
- **Spacing rhythm:** Shorter than narrative sections, with clear breathing room before People.
- **Typography role:** Dark, legible values with restrained labels; metrics must not compete with the hero headline.
- **Colour role:** Neutral foundation with limited purple signal. Fluorescent green may mark one small signal only; do not use it for every value.
- **Imagery/media role:** No imagery required. Do not add decorative icons unless approved and meaningful.
- **Card versus open editorial:** Prefer an open band or lightly grouped treatment; avoid a repeated dominant card grid.
- **CTA treatment:** No competing CTA. Any link must use an existing approved route and remain subordinate to the proof.
- **Preserve from previous version:** Legible impact metrics and visual rhythm, repositioned after meaning rather than before it.
- **Anti-patterns:** Stats-first narrative, dashboard cards, unsupported numbers, animated counters that imply false precision, or metrics as the primary brand identity.
- **Optional future motion:** A restrained reveal may be considered after motion approval; static content must remain complete.
- **Unresolved decisions:** Final metric wording/source verification and the exact open-band versus lightly grouped treatment.

### 6. People

**Purpose:** Demonstrate that people, not abstract systems or logos, make the ecosystem real.

- **Layout composition:** A people-first editorial feature followed by a small selection of profiles or moments. Prioritise founders, co-builders, partner leaders, community builders, and women innovators.
- **Desktop structure:** A varied image-and-text composition or selected feature plus supporting people; avoid equal executive headshots.
- **Mobile structure:** Feature story first, then a readable vertical sequence of approved people or stories. Preserve names, roles, and context.
- **Content width:** Image captions and bios should remain short and readable; avoid full-width biography walls.
- **Spacing rhythm:** Give the first human story more room, then tighten supporting entries without creating a catalogue.
- **Typography role:** Names and story headlines are primary; roles, locations, and short context are secondary metadata.
- **Colour role:** Neutral field so people and imagery carry warmth. Purple can support labels; green should be rare.
- **Imagery/media role:** Real, rights-cleared photography or video is required for final approval. No invented or generic stock people.
- **Card versus open editorial:** Prefer open feature layouts with limited profile groupings; cards are secondary.
- **CTA treatment:** Invite readers to meet the collective or join a path; avoid a generic “view all people” archive CTA unless needed.
- **Preserve from previous version:** Human warmth, community authenticity, and approachable identity.
- **Anti-patterns:** CEO-only portraits, stock imagery, text-only people cards as final evidence, or a speaker directory.
- **Optional future motion:** Gentle image or story transitions after media rights and reduced-motion behaviour are approved.
- **Unresolved decisions:** People roster, image rights, video availability, and first-release editorial feature.

### 7. Projects

**Purpose:** Show selected proof of co-building after the system and people are understood.

- **Layout composition:** A small curated set of representative projects with context, not an exhaustive catalogue.
- **Desktop structure:** One lead project with fewer supporting projects, or a varied editorial grid with a clear primary item.
- **Mobile structure:** Lead project first, followed by a simple vertical sequence; avoid dense multi-column compression.
- **Content width:** Project descriptions should be concise; longer detail belongs on linked pages or Stories.
- **Spacing rhythm:** Separate projects with enough whitespace to feel curated; avoid equal-height repetition.
- **Typography role:** Project title and purpose lead; category/status are quiet metadata.
- **Colour role:** Neutral surfaces and dark text. Purple can identify links or selected category; no purple-heavy project wall.
- **Imagery/media role:** Use only approved project images, video, or identity assets. Posters remain secondary.
- **Card versus open editorial:** Prefer editorial feature treatment; cards may support secondary projects only.
- **CTA treatment:** Link to Build or a specific approved project path; do not use internal CMS language.
- **Preserve from previous version:** Clear impact proof and accessible call-to-action rhythm.
- **Anti-patterns:** “CMS-ready snapshot,” project catalogue before identity, promotional poster wall, or unapproved project claims.
- **Optional future motion:** Subtle hover or transition for selected projects after accessibility review.
- **Unresolved decisions:** First-release project list, media rights, and the approved presentation treatment within the fixed position before Partners.

### 8. Partners

**Purpose:** Show selected organisations building alongside She Rewires, framed as co-creation rather than sponsorship.

- **Layout composition:** A restrained, curated partner presentation with a short contextual statement.
- **Desktop structure:** Up to approximately 10–15 approved logos or names arranged with editorial spacing; no exhaustive wall.
- **Mobile structure:** A readable stacked or compact list that preserves logo clarity and does not become a carousel dependency.
- **Content width:** Keep the partner field contained and calm; avoid letting logos dominate the page.
- **Spacing rhythm:** A clear pause before and after the partner moment; partner section should feel like proof, not a takeover.
- **Typography role:** Context statement first; partner names/logos are secondary evidence.
- **Colour role:** Neutral background. Preserve partner brand colours only where approved; monochrome treatment requires permission.
- **Imagery/media role:** Approved partner logos only; no invented marks or unapproved recolouring.
- **Card versus open editorial:** Open logo/name presentation; avoid individual cards for every partner.
- **CTA treatment:** Partnership CTA must use an existing approved route such as Join Us; do not invent a new route in the visual spec.
- **Preserve from previous version:** Credibility and ecosystem signal, without returning to an event-sponsor wall.
- **Anti-patterns:** More than the approved curated set, sponsorship-first language, logo wall, or partner section before people.
- **Optional future motion:** Very restrained reveal may be considered; never use an auto-scrolling logo ticker without explicit approval.
- **Unresolved decisions:** Which approved partners appear, logo usage rights, colour/monochrome treatment, and final inclusion timing.

### 9. Stories

**Purpose:** Show what emerges from the system through people, ideas, project learning, and conversations.

- **Layout composition:** Editorial story selection with a clear lead story and varied supporting stories.
- **Desktop structure:** Feature story plus supporting items with varied scale or reading paths; avoid four identical text cards.
- **Mobile structure:** Lead story followed by a simple vertical reading sequence with clear type hierarchy.
- **Content width:** Headlines may be expressive, while excerpts remain controlled; full articles belong elsewhere.
- **Spacing rhythm:** Use publication-like pacing and pauses rather than a dense archive grid.
- **Typography role:** Story headline and type/date metadata form the hierarchy; source labels remain quiet.
- **Colour role:** Neutral editorial field; purple for selected links or metadata, not every card.
- **Imagery/media role:** Real story photography, video, or audio only when approved and rights-cleared.
- **Card versus open editorial:** Prefer open editorial feature treatment; use cards only for secondary navigation.
- **CTA treatment:** Invite reading or contribution; avoid presenting Stories as an event archive.
- **Preserve from previous version:** Authentic community moments and real stories.
- **Anti-patterns:** CMS collection language, news portal density, event archive, or text-only placeholder library presented as final.
- **Optional future motion:** Subtle media preview or transition after reduced-motion and performance review.
- **Unresolved decisions:** First story set, media rights, content types, and whether Conversations need a distinct treatment.

### 10. Join Us

**Purpose:** Make participation pathways clear and human after the visitor understands the system.

- **Layout composition:** A warm, confident invitation with distinct paths: co-builder, chapter builder, partner, expertise, and ecosystem support.
- **Desktop structure:** Clear path grouping with one dominant next step and supporting options; avoid a conversion funnel.
- **Mobile structure:** Stacked paths with readable labels and direct actions; keep the first path prominent without hiding the others.
- **Content width:** Path descriptions should be concise and action-oriented; avoid long form-first content on the homepage.
- **Spacing rhythm:** Generous separation between invitation and path choices; final CTA should feel like a conclusion, not a banner.
- **Typography role:** Invitation headline leads; path labels and short descriptions support choice.
- **Colour role:** Neutral foundation with one approved primary CTA; purple may signal action, green only as a small accent.
- **Imagery/media role:** Optional approved human/community image; not required if it distracts from clear participation choices.
- **Card versus open editorial:** Open invitation with restrained grouped paths; avoid a wall of equal conversion cards.
- **CTA treatment:** Clear, approachable actions mapped to existing Join Us routes. Do not imply membership, courses, or an accelerator.
- **Preserve from previous version:** Strong approachable CTA and simple participation orientation.
- **Anti-patterns:** Generic Contact Us, membership framing, event registration, complex form on the homepage, or multiple competing primary buttons.
- **Optional future motion:** Small CTA emphasis or path reveal after accessibility approval.
- **Unresolved decisions:** Exact path labels, homepage versus Join Us form boundary, and CMS/editor ownership of opportunities.

## Cross-section preservation rules

- Preserve the recognisable bilingual brand presence and centred welcome from the previous version unless an explicit founder decision changes it.
- Preserve warm community energy, accessible CTAs, and legible impact proof.
- Adapt blobs, cards, icons, and lavender surfaces selectively; do not reproduce the old page mechanically.
- Remove SaaS/dashboard repetition, excessive grids, internal CMS language, and uncurated partner treatment.
- Keep the approved route architecture and structured content layer stable during Phase 2.

## Phase 2 / Phase 3 media boundary

- Phase 2 may create image-ready and media-ready composition, including reserved editorial space, crop intent, caption hierarchy, and responsive behaviour, without adding unapproved assets.
- Do not invent or use placeholder people, dummy logos, stock imagery, avatar initials, lorem ipsum, fake metrics, or public-facing coming-soon blocks.
- Real, rights-cleared people, project, partner, story, photo, video, and audio assets are required for Phase 3 content integration and final founder-facing approval, not for the initial static Phase 2 review.
- Phase 2 static review must clearly label absent approved media as an unresolved asset dependency rather than simulating it.

## CTA and route rule

Homepage CTAs must use existing approved routes and participation paths. The visual specification may describe CTA intent, but it must not create new routes, imply membership or courses, or introduce an unapproved conversion flow.

Partner presentation is capped at up to approximately 10–15 approved partners when approved assets are available; this is an upper curation guideline, not a minimum.

## Phase 2 acceptance and unresolved decisions

Phase 2 is ready for founder review only when the visual hierarchy is implemented, desktop/mobile comparisons are captured, accessibility checks are recorded, approved media/rights are documented, and the final logo variants have been reviewed. It is not enough for the page to build successfully.

The following remain unresolved until explicitly approved:

- final logo exports from the authoritative `.ai` source;
- hero background treatment and any gradient;
- exact proportions of inherited purple, lavender, green, white, grey, and dark neutral;
- OPPO Sans/Nimbus Sans webfont licensing and fallback;
- bilingual typography and language-toggle behaviour;
- dark-section usage;
- people, project, partner, and story assets;
- whether August launch requires CMS-ready architecture or an operational CMS.

Optional future motion is a separate gate. Do not let motion decisions determine Phase 1 narrative readiness or Phase 2 static hierarchy approval.
