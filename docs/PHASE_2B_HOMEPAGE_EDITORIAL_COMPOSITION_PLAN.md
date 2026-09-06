# Phase 2B Homepage Editorial Composition Plan

Status: planning-only; no application code is authorised by this document.

This plan translates the approved homepage direction into a reviewable editorial-composition brief for Phase 2B. It is subordinate to `docs/FOUNDER_ALIGNMENT.md`, `docs/HOMEPAGE_VISUAL_SPEC.md`, and the other brand documents listed in the project documentation. The brand documents remain authoritative when a technical recommendation and a visual decision conflict.

Phase 2B is a visual reset of homepage composition, not an architectural rewrite. Preserve the existing routes, structured content model, TypeScript content types, Stories and Projects content, and Sanity-ready separation of content from presentation. Phase 1 narrative implementation must remain unblocked by this plan.

## 1. Approved sequence and composition intent

The order is fixed:

```text
Identity
→ Why
→ Evolution
→ Co-building Model
→ Metrics
→ People
→ Projects
→ Partners
→ Stories
→ Join Us
```

Metrics is a supporting proof band, not a primary narrative section. Projects remain before Partners; this plan does not reopen that decision.

The reset should move the page from repeated landing-page blocks to a paced editorial experience:

- Header: founder logo treatment, with the latest `.ai` file as the sole authoritative source. The supplied cropped black/white PNGs are provisional preview assets only.
- Hero: one content language per view, English by default; the top-right control switches the complete page to Chinese. The bilingual logo lockup may remain visible, but `She Rewires / 她原力` must not be used as a mixed-language headline.
- Meaning before proof: Why and Evolution establish human meaning before Metrics.
- Mechanism before evidence: Co-building explains the system, then Metrics and People make it tangible.
- Curated evidence: Projects, Partners, and Stories should feel selected and editorial, not exhaustive or dashboard-like.
- Invitation: Join Us closes with a confident statement and clear existing-route actions.

## 2. Global guardrails

### Media boundary

Phase 2B may create image-ready composition: reserved media zones, crop intent, captions, responsive behaviour, and an intentional empty state for review. It must not invent or use placeholder people, dummy logos, stock imagery, avatar initials, lorem ipsum, fake metrics, or public-facing coming-soon blocks. Real rights-cleared people, project, partner, story, photo, video, and audio assets are required for Phase 3 integration and final founder-facing approval, not for the initial static Phase 2 review. Absent media must be recorded as an unresolved dependency, never simulated.

### Section differentiation

Do not render every section through one template. No more than two consecutive sections may share the same composition, card pattern, alignment, or background treatment. Variation should come from hierarchy, content width, spacing, alignment, open versus grouped composition, and approved media—not decoration for its own sake.

### CTA and route rules

Homepage CTAs must use existing approved routes and participation paths. No new routes, membership framing, course claims, or unapproved conversion flow may be introduced. CTA presence is subordinate to each section's narrative purpose; not every section needs a CTA.

### Decision ownership

- **Founder approval required:** brand identity, logo treatment and exports, hero language treatment, section narrative meaning, final copy, people/projects/partners/stories selection, media rights, colour prominence, and motion direction.
- **Design-review provisional decisions:** composition variants, crop intent, type hierarchy, spacing rhythm, open-versus-grouped treatment, provisional PNG preview use, and image-ready empty states. These are reviewable proposals, not final brand approval.
- **Engineering implementation decisions:** component composition, semantic HTML, responsive mechanics, route wiring, loading strategy, asset optimisation, focus behaviour, and implementation details that do not change the approved visual meaning.

### Technical guardrails from Modern Web Guidance

The Modern Web Guidance recommendations below are implementation guardrails; they do not determine She Rewires' brand design:

- Use landmarks, sequential heading order, lists for repeated content, native controls, labels, the correct document `lang`, visible `:focus-visible`, meaningful alt text, captions/transcripts where applicable, and keyboard-reachable interactions.
- Test at least 4.5:1 contrast for normal text, 3:1 for large text and non-text UI indicators, and at 200% zoom. Avoid justified text and keep ordinary reading measures near eighty characters where practical.
- Use grid, flex, intrinsic sizing, and container queries only where they solve a real responsive composition problem; use media queries for page-level layout. Do not use `100vw` for ordinary containers.
- Use responsive images with known dimensions, appropriate loading priority, and deliberate crop/focal-point behaviour. Protect the hero and other above-the-fold content as LCP-sensitive.
- Below-the-fold heavy content may be deferred with `content-visibility` and an intrinsic-size reservation only after keyboard reachability and layout stability are verified. Do not apply that strategy to the initial viewport by default.
- Apply `text-wrap: balance` selectively to short headings and `text-wrap: pretty` selectively to longer copy, with progressive enhancement rather than global rules.

## 3. Section plans

Each section uses the following review vocabulary:

- **Preserve:** useful meaning or recognisable quality from the previous version.
- **Redesign:** the intended Phase 2B composition change.
- **Remove:** patterns that conflict with the approved direction.

### 3.1 Identity

**Purpose:** Establish what She Rewires is before introducing future-facing language.

- **Preserve:** welcoming first impression, recognisable bilingual brand presence in the logo, clear primary orientation, and approachable route into the platform.
- **Redesign:** header uses a provisional cropped founder PNG only for static preview; the `.ai` source remains authoritative. Hero removes the mixed-language brand headline and gives one approved language a single dominant statement, with restrained supporting positioning and one primary action.
- **Remove:** text-only logo as a claimed final identity, `She Rewires / 她原力` as a headline, stats-first treatment, multiple equal CTAs, and accidental bilingual copy mixing.
- **Desktop:** calm header with clear logo safe area and restrained navigation; hero uses an editorial focal point, controlled text measure, and optional reserved media area without unapproved media.
- **Mobile:** compact header with an accessible language control; logo remains legible; hero stacks in a natural reading order and keeps the primary action easy to reach without crowding.
- **Content width:** broad enough for confidence but constrained enough to preserve headline hierarchy and reading clarity; no final pixel values are set here.
- **Spacing rhythm:** largest opening pause on the page, followed by a deliberate transition into Why; do not fill whitespace with decorative UI.
- **Typography role:** identity statement is the dominant type role; supporting copy is secondary. One locale is rendered at a time.
- **Colour role:** editorial white/dark-neutral foundation; purple may signal the primary action or a restrained atmospheric field. Green is not a hero background default.
- **Imagery/media role:** image-ready slot is allowed; no invented image. Any final human/community media must be rights-cleared.
- **Composition:** open editorial composition, not a card grid.
- **CTA treatment:** one primary action using an existing approved route; any secondary orientation link is subordinate.
- **Anti-patterns:** logo repetition, purple-heavy event-site styling, unapproved gradient, fake media, and a page that looks like an app dashboard.
- **Optional future motion:** restrained entrance or language-state transition only after motion approval and reduced-motion review.
- **Unresolved:** final SVG exports, hero background, exact approved copy, final control label/persistence behaviour, and media selection.

### 3.2 Why

**Purpose:** Explain why human connection, creativity, judgment, empathy, and agency matter as technology changes.

- **Preserve:** immediate comprehension and warm human meaning.
- **Redesign:** turn the ordinary text block into an oversized editorial statement with a distinct reading rhythm and supporting explanation.
- **Remove:** generic mission boilerplate, equal feature cards, unexplained ecosystem language, and a repeated Hero template.
- **Desktop:** use a strong statement area paired with a readable supporting column or controlled asymmetry; alignment should visibly differ from Identity.
- **Mobile:** statement first, supporting copy second, with a clear pause rather than a dense wall of text.
- **Content width:** statement may be wider; body remains a comfortable reading measure near eighty characters.
- **Spacing rhythm:** generous entry and exit space, but with a different cadence from Hero.
- **Typography role:** oversized statement leads; body and any approved evidence are secondary.
- **Colour role:** neutral background and dark text; light purple is optional atmosphere, never a required fill.
- **Imagery/media role:** none required; an approved quote or human evidence may occupy an image-ready slot.
- **Composition:** open editorial layout; no repeated cards.
- **CTA treatment:** normally none; an existing About route may be used only if it clarifies orientation.
- **Anti-patterns:** corporate ESG panel, floating statistic cards, and decorative abstraction without meaning.
- **Optional future motion:** restrained text reveal after static hierarchy approval.
- **Unresolved:** final copy and whether supporting evidence is needed.

### 3.3 Evolution

**Purpose:** Make the movement from Women in STEM to Human Agency for the AI era understandable without erasing its origin.

- **Preserve:** the four-stage evolution and the women-led foundation.
- **Redesign:** use a legible timeline/progression with a visible relationship between stages rather than a paragraph or generic cards.
- **Remove:** technology-only timeline, dense roadmap diagram, and any presentation that treats Human Agency as the original label.
- **Desktop:** horizontal or gently stepped progression may be explored, with one visual anchor and clear stage labels.
- **Mobile:** vertical sequence with explicit labels and no horizontal-scroll dependency.
- **Content width:** progression can be wider than body copy; descriptions remain concise.
- **Spacing rhythm:** repeated stage rhythm without mechanical equal-height cards; a larger pause should mark the transition to the present/future.
- **Typography role:** stage labels are metadata/subheadings; the approved current meaning may receive emphasis.
- **Colour role:** neutral stages with selective purple emphasis; green can mark one signal only if approved.
- **Imagery/media role:** approved archive/community media may contextualise the story; no unverified posters as decoration.
- **Composition:** open sequence or restrained grouped progression.
- **CTA treatment:** optional existing About route after the progression, never a conversion banner.
- **Anti-patterns:** hiding Women in STEM, abstract arrow wallpaper, and equal visual weight for every stage without narrative reason.
- **Optional future motion:** progression cue or sequential emphasis only after reduced-motion approval.
- **Unresolved:** final stage labels/dates, desktop progression variant, and approved historical media.

### 3.4 Co-building Model

**Purpose:** Explain Discover → Connect → Co-build → Incubate → Scale as a human system.

- **Preserve:** approachable participation orientation and the core five-step model.
- **Redesign:** create a horizontal editorial process flow with visible relationships and concise explanations, using one visual centre rather than five equal cards.
- **Remove:** dashboard cards, technical architecture diagrams, unexplained nodes, and overly complex system maps.
- **Desktop:** horizontal flow with clear step progression, generous whitespace, and a readable introductory statement.
- **Mobile:** vertical step sequence with explicit labels/numbers and no horizontal-scroll requirement.
- **Content width:** introduction can be broader; each step remains concise and scannable.
- **Spacing rhythm:** consistent step spacing with a larger pause before Metrics.
- **Typography role:** step labels prominent; explanation secondary.
- **Colour role:** neutral foundation, dark text, purple for sequence emphasis/connectors; green only as a small signal.
- **Imagery/media role:** diagrammatic language is sufficient; reserved media is optional and must not compete with the mechanism.
- **Composition:** open flow or restrained grouped blocks, not a six-card grid.
- **CTA treatment:** existing Build or Join Us route after the model, not inside every step.
- **Anti-patterns:** engineering diagram, tiny labels, equal cards, and unexplained abstraction.
- **Optional future motion:** sequential emphasis after motion and reduced-motion approval.
- **Unresolved:** static flow language and exact relationship between model and Metrics.

### 3.5 Metrics proof band

**Purpose:** Provide concise credibility proof after Co-building and before People.

- **Preserve:** approved simple proof: 80,000+ people, 150+ co-builders, 16+ cities, One global movement, subject to source verification.
- **Redesign:** an open, restrained proof band with rhythm, not a dashboard or dominant card grid.
- **Remove:** stats-first identity, decorative icon rows, animated false precision, unsupported numbers, and four equal dashboard cards.
- **Desktop:** one supporting band visually bridging Co-building and People.
- **Mobile:** compact grouped or vertical arrangement that stays a proof moment rather than a statistics wall.
- **Content width:** contained enough to read as one proof unit, not analytics UI.
- **Spacing rhythm:** shorter than narrative sections, with clear breathing room before People.
- **Typography role:** values lead modestly; labels remain legible and subordinate to People and Hero.
- **Colour role:** neutral field with limited purple; green at most one small signal.
- **Imagery/media role:** none required; no invented icons.
- **Composition:** open band or lightly grouped treatment.
- **CTA treatment:** none; any link uses an existing route and remains subordinate.
- **Anti-patterns:** dashboard treatment and dominant visual weight.
- **Optional future motion:** restrained reveal only after motion approval; static content complete without it.
- **Unresolved:** final source verification and open-band variant.

### 3.6 People

**Purpose:** Show that people make the ecosystem real.

- **Preserve:** human warmth and community authenticity.
- **Redesign:** one lead human story plus two or three supporting people/moments, with varied editorial scale.
- **Remove:** CEO-only portraits, stock people, text-only final profiles, speaker-directory treatment, and avatar initials.
- **Desktop:** lead image-and-text story with supporting entries arranged in a distinct composition from Metrics.
- **Mobile:** lead story first, then a readable vertical sequence with names, roles, locations, and context.
- **Content width:** lead image/caption and short bios remain controlled; no biography wall.
- **Spacing rhythm:** give the lead story more room, then tighten supporting entries without catalogue density.
- **Typography role:** story headline/name leads; role and context are secondary metadata.
- **Colour role:** neutral field so people/media provide warmth; purple for labels, green rare.
- **Imagery/media role:** real rights-cleared photos/video required for Phase 3 and final approval; Phase 2 uses image-ready composition only.
- **Composition:** open feature with limited supporting groupings; cards are secondary.
- **CTA treatment:** existing Community or Join Us path if needed; no invented “view all” route.
- **Anti-patterns:** fake portraits, placeholder initials, and unapproved stock imagery.
- **Optional future motion:** gentle image/story transition after rights and reduced-motion review.
- **Unresolved:** roster, rights, first lead story, and media delivery.

### 3.7 Projects

**Purpose:** Show selected proof of co-building after people are understood.

- **Preserve:** existing structured project content and clear impact proof.
- **Redesign:** one lead project plus two or three supporting projects, with a clear primary item and varied scale.
- **Remove:** equal 2×2 card grid, exhaustive catalogue, promotional poster wall, internal CMS language, and unsupported claims.
- **Desktop:** lead project dominates an editorial composition; supporting projects have lower hierarchy.
- **Mobile:** lead project first, followed by a simple vertical sequence; no dense multi-column compression.
- **Content width:** concise project purpose and context; deeper detail remains on approved linked routes.
- **Spacing rhythm:** curated separation, no equal-height repetition.
- **Typography role:** project title and purpose lead; category/status quiet.
- **Colour role:** neutral surfaces, dark text, purple for links/selected category; no purple wall.
- **Imagery/media role:** approved project media only; posters secondary. Phase 2 reserves crop/media positions without faking content.
- **Composition:** editorial feature plus support; cards only for secondary items.
- **CTA treatment:** existing Build or approved project route; no CMS wording.
- **Anti-patterns:** project catalogue before meaning, dummy thumbnails, and invented project imagery.
- **Optional future motion:** subtle hover/transition after accessibility review.
- **Unresolved:** first-release set, media rights, and lead-project treatment.

### 3.8 Partners

**Purpose:** Show selected organisations building alongside She Rewires.

- **Preserve:** ecosystem credibility, reframed as co-creation.
- **Redesign:** restrained logo strip or editorial partner field containing up to approximately 10–15 approved partners, never a hard minimum.
- **Remove:** exhaustive logo wall, sponsorship-first language, dummy logos, unapproved marks, and partner placement before Projects.
- **Desktop:** contained field with varied editorial spacing and a short contextual statement.
- **Mobile:** readable stacked/compact list; no carousel dependency.
- **Content width:** calm and contained so logos do not take over the page.
- **Spacing rhythm:** clear pause before and after; this is evidence, not a takeover.
- **Typography role:** co-creation context first; logos/names secondary.
- **Colour role:** neutral background; preserve partner colours only when approved; monochrome only with permission.
- **Imagery/media role:** approved logos only, with usage rights; no invented or recoloured marks.
- **Composition:** open logo/name field, not one card per partner.
- **CTA treatment:** existing Join Us route for partnership intent; no new partner route.
- **Anti-patterns:** auto-scrolling ticker, sponsor wall, fake logos, and an implied minimum count.
- **Optional future motion:** restrained reveal only after explicit approval.
- **Unresolved:** partner set, rights, colour/monochrome treatment, and inclusion timing.

### 3.9 Stories

**Purpose:** Show what emerges through people, ideas, projects, and conversations.

- **Preserve:** authentic community moments and structured Stories content.
- **Redesign:** magazine-like editorial selection with one lead story and varied supporting reading paths.
- **Remove:** four equal cards, CMS collection language, news-portal density, event archive treatment, and placeholder library.
- **Desktop:** lead story with supporting items of varied scale/alignment; no uniform card matrix.
- **Mobile:** lead story followed by a vertical reading sequence with clear hierarchy.
- **Content width:** expressive headlines with controlled excerpts; full articles remain on approved routes.
- **Spacing rhythm:** publication-like pauses and section differentiation from Partners.
- **Typography role:** headline and type/date metadata establish hierarchy; source labels quiet.
- **Colour role:** neutral field, purple for selected links/metadata only.
- **Imagery/media role:** real rights-cleared photo/video/audio when used; Phase 2 can reserve media composition.
- **Composition:** open editorial feature; cards only as secondary navigation.
- **CTA treatment:** existing Stories route or contribution path; not an event archive CTA.
- **Anti-patterns:** dummy thumbnails, lorem ipsum, fake “coming soon”, and dense archive grids.
- **Optional future motion:** subtle media preview after performance/accessibility review.
- **Unresolved:** first story set, rights, content-type mix, and Conversations treatment.

### 3.10 Join Us

**Purpose:** Make participation clear after the visitor understands the system.

- **Preserve:** approachable CTA and clear participation orientation.
- **Redesign:** close with a large statement followed by distinct paths: co-builder, chapter builder, partner, expertise, and ecosystem support.
- **Remove:** generic Contact Us funnel, membership framing, event registration, form-first homepage, fake coming-soon block, and competing primary buttons.
- **Desktop:** statement-led close with one dominant next step and supporting paths.
- **Mobile:** stacked paths with readable labels/actions; keep all approved paths available without crowding.
- **Content width:** statement can be expressive; path descriptions concise and action-oriented.
- **Spacing rhythm:** generous separation so this feels like a conclusion, not a banner.
- **Typography role:** invitation leads; path labels and descriptions support choice.
- **Colour role:** neutral foundation with one approved primary CTA; purple may signal action, green is a small accent only.
- **Imagery/media role:** optional approved community image; not required if it weakens clarity.
- **Composition:** open invitation with restrained grouped paths, not equal conversion cards.
- **CTA treatment:** existing Join Us routes only; no implied membership/course.
- **Anti-patterns:** dummy path content, lorem ipsum, public-facing coming-soon, and route invention.
- **Optional future motion:** small CTA/path emphasis after accessibility approval.
- **Unresolved:** final path labels, homepage versus Join Us form boundary, and CMS editorial ownership.

## 4. Phase 2B review deliverables and gates

Phase 2B review should produce a static desktop and mobile composition review with:

- the fixed section order, including Metrics between Co-building Model and People;
- one-language rendering model with English default and complete Chinese locale behaviour represented in the design;
- provisional logo placement clearly labelled, with no claim that PNG is final production identity;
- image-ready slots and crop intent, with no fake media;
- per-section preserve/redesign/remove notes and unresolved decisions;
- route mapping for every CTA;
- accessibility and responsive review notes informed by Modern Web Guidance;
- a record of assets and rights still required for Phase 3.

Phase 2B does not authorise final founder-facing approval. Before Phase 3, final reviewed logo exports and rights-cleared content assets are required. Before motion, motion direction and reduced-motion behaviour require separate founder approval. The August launch decision—CMS-ready architecture versus an operational CMS with preview, drafts, version history, and editor workflow—remains unresolved and must not be silently assumed.

## 5. Approval record

| Decision | Owner | Status | Evidence required |
| --- | --- | --- | --- |
| Brand identity, logo source and final exports | Founder | Unresolved / approval required | `.ai` source review and light/dark/desktop/compact exports |
| Homepage sequence and narrative meaning | Founder | Approved direction | Founder alignment and homepage strategy |
| Phase 2B composition variants | Design review | Provisional | Static desktop/mobile review |
| Responsive, semantic, performance and route implementation | Engineering | Implementation decision | Review against this plan and technical guardrails |
| Real media and partner/logo rights | Founder/content owner | Required before Phase 3 | Asset inventory and usage confirmation |
| Motion and reduced-motion behaviour | Founder | Required before motion | Motion review and accessibility evidence |
| CMS-ready versus operational CMS at August launch | Founder/project owner | Unresolved | Explicit launch decision |
