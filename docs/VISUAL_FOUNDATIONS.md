# She Rewires Visual Foundations

Last updated: 2026-08-05

## Purpose and status

This document records the colour and visual foundations to review before homepage implementation. It is based on the approved design direction, the previous-site screenshot supplied at `the supplied previous-site screenshot`, the current repository style tokens, and the logo assets currently present in `public/`.

This is not approval of a final colour system. Values marked **confirmed** are traceable to an existing source. Values marked **provisional** are implementation references only and require approval before a visual redesign. No colour should be treated as founder-approved solely because it exists in the current code.

## 1. Colour source inventory

| Source | Observed colour/material | Exact value available? | Status | Use in decision-making |
| --- | --- | --- | --- | --- |
| Current repository `tailwind.config.ts` / `app/globals.css` | `#FFFBFE` page background | Yes | Confirmed as current implementation token; not brand-approved | Baseline to test against, not a final brand decision. |
| Current repository | `#F3EDF7` surface/card background | Yes | Confirmed as current implementation token; provisional as brand foundation | Candidate alternate section/card surface. |
| Current repository | `#E7E0EC` low surface/muted background | Yes | Confirmed as current implementation token; provisional | Candidate low-emphasis surface. |
| Current repository | `#8A55ED` primary/ring purple | Yes | Confirmed as current implementation token; provisional | Candidate interactive purple; contrast must be tested. |
| Current repository | `#DEC4FF` primary container/accent purple | Yes | Confirmed as current implementation token; provisional | Candidate restrained accent surface. |
| Current repository | `#1C1B1F` primary text | Yes | Confirmed as current implementation token; provisional | Candidate primary text on light surfaces. |
| Current repository | `#49454F` secondary text | Yes | Confirmed as current implementation token; provisional | Candidate secondary text; contrast must be tested by size. |
| Current repository | `#79747E` outline/border | Yes | Confirmed as current implementation token; provisional | Candidate border and focus-adjacent outline. |
| Previous-site screenshot | Near-white background, pale lavender section/hero atmosphere, saturated violet CTA, dark text, muted purple navigation accents | No trustworthy sampled source value supplied | Confirmed as visual reference; exact colours unresolved | Preserve the relationship and restraint, not guessed hex values. |
| Current `public/icon.svg` | Black and white symbol with colour-scheme switching | Yes, explicit `black`/`white` SVG fills | Legacy/provisional asset | May remain only as a Phase 1 placeholder; it must not replace the authoritative `.ai` source. |
| `public/logo-on-white.jpg`, `public/logo-on-black.jpg` | Raster logo variants | No vector colour specification | Legacy/provisional assets | Reference only; they must not become the final responsive logo. |
| Latest founder-provided `.ai` asset at `the latest founder-provided `.ai` logo file` | Source vector for black/white brand logo | Source file supplied by founder | Single authoritative logo source | All web variants must be exported from this file and reviewed before founder-facing visual approval. |
| BEYOND Expo / other supplied references | Reference relationships: black/white foundation, controlled accent, editorial contrast | No approved colour values supplied | Reference principle only | Do not copy another site's palette or identity. |

| 2024 Brand Guidelines `.ai` at `the 2024 Brand Guidelines `.ai` file` and supplied guideline pages | Official historical brand palette: `#BFFE01`, `#DEC4FF`, `#8A55ED`, `#FFFFFF`, `#E6E6E6`, `#303030` | Yes, shown in supplied brand-guideline artwork | Confirmed historical brand source; 2026 usage proportions provisional | Preserve as brand DNA, then apply the restrained editorial roles below. |
| Supplied guideline pages `(Chinese (Simplified)) (29).png`, `(Chinese (Simplified)) (28).png`, `39.png`, `40.png` | Palette application guidance and font specimens | Visual source supplied; no webfont files supplied | Confirmed reference evidence | Supports colour and typography decisions; does not grant webfont licensing. |

## Logo source authority

The latest founder-provided file `the latest founder-provided `.ai` logo file` is the single authoritative logo source. Existing SVG, JPG, and text-only logo treatments are legacy or provisional and must not replace it.

Export and review web-safe SVG variants from this `.ai` source for light, dark, desktop, and compact/mobile use before founder-facing visual approval. A clearly provisional existing treatment may remain during Phase 1 narrative implementation, but final logo conversion is required before founder-facing visual approval.

## Confirmed versus provisional

### Confirmed

- The current implementation contains the exact tokens listed above.
- The previous screenshot visibly uses a light neutral field, pale lavender atmosphere, dark typography, and saturated violet actions.
- The approved direction requires an editorial black/white/neutral foundation, with purple used as a recognisable but restrained signature.
- The current SVG symbol explicitly uses black and white fills.

### Provisional

- All purple, lavender, neutral, border, and text hex values currently in the implementation as final brand values.
- Any exact colour sampled or estimated from the screenshot.
- Any gradient, dark section, logo-on-colour treatment, or alternate

## 2. Proposed colour roles

These roles describe how the existing implementation tokens could be evaluated. They do not approve a new palette.

| Role | Current candidate | Source | Status and guardrail |
| --- | --- | --- | --- |
| Brand purple | `#8A55ED` | 2024 official Brand Guidelines and current implementation | Confirmed historical brand colour; 2026 prominence provisional. Use for focused actions and selected brand cues after contrast testing. |
| Accent / light purple | `#DEC4FF` | 2024 official Brand Guidelines and current implementation | Confirmed historical brand colour; 2026 prominence provisional. Use as a quiet surface accent, not as the default page colour. |
| Signal accent / energy accent | `#BFFE01` | 2024 official Brand Guidelines | Confirmed historical brand colour; **provisional role for 2026 site**. Use sparingly as a signal, never as the primary page colour. |
| Primary text | `#1C1B1F` | Current implementation; consistent with screenshot's near-black text | Provisional but preferred direction. Use for headlines and essential copy. |
| Primary neutral text | `#303030` | 2024 official Brand Guidelines | Confirmed historical brand colour; candidate primary neutral. Verify against the final background. |
| Secondary text | `#49454F` | Current implementation; related to screenshot's muted text | Provisional. Verify contrast at body and small sizes. |
| Page background | `#FFFBFE` | Current implementation; related to screenshot's warm near-white field | Provisional. Editorial white/neutral should remain dominant. |
| Brand white | `#FFFFFF` | 2024 official Brand Guidelines | Confirmed historical brand colour; candidate light foundation. |
| Brand light grey | `#E6E6E6` | 2024 official Brand Guidelines | Confirmed historical brand colour; candidate divider/quiet surface. |
| Alternate section background | `#F3EDF7` | Current implementation; related to screenshot's pale lavender surfaces | Provisional. Use selectively for rhythm and grouping. |
| Low-emphasis surface | `#E7E0EC` | Current implementation | Provisional. Keep subordinate to page background. |
| Borders / outlines | `#79747E` | Current implementation | Provisional. Prefer subtle neutral borders; do not outline every block. |
| Interactive focus | `#8A55ED` or an approved high-contrast focus colour | Current ring token | Provisional until keyboard focus contrast is verified. |
| Success / warning / error | Not established by approved sources | None | Unresolved. Use semantic colours only after accessibility review; do not derive them from purple. |

## 3. Usage rules

### Overall balance

Use a black, white, and neutral foundation first. Purple should act as a signature and directional signal, not as the dominant identity field. A practical review target is mostly light neutral/white space, dark text, and limited purple emphasis; do not turn this into a numeric requirement until a visual prototype is reviewed.

### Purple should appear in

- Primary calls to action when contrast passes.
- Small eyebrow labels, selected states, or key links.
- A limited number of metrics or icons where purple adds recognition.
- Quiet lavender section surfaces when they improve narrative pacing.
- Focus indicators, provided the focus treatment remains clearly visible.

### Fluorescent green should appear in

- Small signal labels, arrows, keywords, selected states, or one editorial emphasis moment.
- Dark-background highlights where dark text and contrast are verified.

It should not be used for large backgrounds, long text, every button, navigation, every card/icon, or partner areas. It is an energy accent, not the primary colour.

### Purple should not appear in

- Every heading, paragraph, card border, icon, and navigation item.
- The entire page background or every section background.
- Large purple logo treatments without approved logo artwork.
- Partner logos, which must retain approved partner colours or use a controlled monochrome treatment.
- Dense gradients that make the page resemble a generic AI, NGO, or event template.
- Large fluorescent-green fields or repeated fluorescent-green sections.

### Component rules

| Surface | Rule |
| --- | --- |
| Buttons | Primary button may use brand purple with a verified readable foreground. Secondary buttons should remain neutral/outlined or use restrained purple text. Disabled buttons must not rely on colour alone. |
| Links | Use dark text by default where hierarchy allows; use purple for explicit actions or selected navigation. Always preserve underline/focus affordances where needed. |
| Cards | Prefer neutral or quiet lavender surfaces with dark text. Avoid purple card backgrounds repeated across the page. |
| Metrics | Keep values dark and legible; use purple only for labels/icons or a single emphasis treatment. Metrics are proof, not the hero colour system. |
| Section backgrounds | Keep the page foundation light and editorial. Alternate lavender sections should create rhythm, not colour overload. |
| Navigation | Use a restrained light/neutral navigation with dark text. Purple may indicate active or interactive states, not every tab. |
| Footer | Prefer dark text on a neutral or quiet surface. Do not make the footer a saturated purple block without explicit approval. |
| Partner logos | Show a curated set on a neutral field. Use monochrome only when rights/brand guidance permits; never recolour without approval. |

## 4. Accessibility

- Test all text/background combinations against WCAG 2.2 AA: normal text at least 4.5:1, large text at least 3:1, and meaningful non-text UI boundaries at least 3:1 where applicable.
- Explicitly test primary purple against white, near-white, lavender, and dark text combinations before using it for buttons or small text.
- Test secondary text at its actual rendered size; a colour that works for large text may fail for body or metadata.
- Focus indicators must remain visible on page background, cards, navigation, buttons, and purple surfaces.
- Hover states must not be the only indication of interaction; preserve keyboard and touch clarity.
- Disabled states must communicate disabled status through opacity, cursor, and state treatment, not colour alone.
- Error, warning, and success states require distinct semantic colours with contrast and non-colour cues; these values are currently unresolved.
- Check reduced-motion behaviour for any gradient or animated colour treatment.
- Test `#BFFE01` with dark text and white text at every proposed size; do not assume the fluorescent colour supports readable white text.

## 5. Brand safeguards

- Do not use pink, blush, or soft-purple combinations as shorthand for women-led identity.
- Do not make purple-heavy styling resemble a generic NGO, event registration site, or SaaS dashboard.
- Keep black/white/neutral editorial contrast as the recognisable base.
- Preserve a restrained purple signature through selective actions, labels, and atmosphere.
- Keep the visual system human and warm through typography, real people, whitespace, and editorial composition—not colour saturation alone.
- Do not copy BEYOND Expo, Women in Tech, or other references' palettes, logo treatments, or visual identities.
- Do not convert or recolour the founder logo until the supplied vector has been reviewed and the web variant approved.

## Typography source and provisional web usage

The 2024 Brand Guidelines identify **OPPO Sans** for Chinese and **Nimbus Sans** for English. These are confirmed historical brand typography references, not yet approved webfont dependencies. Before implementation, confirm webfont licensing, self-hosting rights, file size, multilingual fallback, and mixed-script rendering. Do not download or commit font files without approval.

If the licensed fonts cannot be used, preserve the intended direction: a clean, neutral, editorial sans-serif system rather than a decorative or overtly feminine typeface.

## 6. Open decisions

| Decision | Current state | Required resolution |
| --- | --- | --- |
| Hero background treatment | Current implementation is near-white; previous screenshot includes pale lavender atmosphere. | Decide neutral-only, restrained lavender wash, approved image/video, or another treatment. |
| Final logo variants | Existing SVG/JPG assets are legacy/provisional; the latest `.ai` source is authoritative. | Approve web-safe SVG/wordmark variants for light, dark, desktop, and compact/mobile contexts. |
| Gradients | Not approved; screenshot suggests soft atmospheric colour but no source values. | Decide whether any gradient is allowed, where, and with what exact approved values. |
| Bilingual typography interaction | Previous site visibly presented English and Chinese identity; current implementation decision is unresolved. | Approve font pairing, hierarchy, line breaking, language toggle, and first-viewport treatment. |
| Dark-section usage | No approved dark-section token currently exists. | Decide whether dark sections are needed and define tested foreground/accent roles if so. |
| Semantic state colours | Not defined by supplied sources. | Define accessible success, warning, error, and info roles before form/interactive expansion. |

## Conflicts with current implementation

- The current token system is purple/lavender-forward, while the approved direction calls for an editorial black/white/neutral foundation with restrained purple.
- `#8A55ED` and related tokens are implementation values, not founder-approved brand values; their contrast and prominence are not yet approved.
- The current UI applies purple across many labels, controls, icons, and hover states, which may create the purple-heavy effect the safeguards prohibit.
- The current implementation has no documented semantic success/warning/error palette.
- The current navigation uses a light neutral treatment, but the final bilingual logo and language behaviour remain unresolved.
- Existing raster/logo assets and the founder `.ai` file are not yet represented as an approved, responsive web logo system.
- The previous screenshot's exact colour values are unavailable; any pixel sampling or visual approximation must remain provisional.

## Review outcome fields

| Item | Confirmed | Provisional | Unresolved | Notes / owner |
| --- | --- | --- | --- | --- |
| Colour sources |  |  |  |  |
| Colour roles |  |  |  |  |
| Accessibility combinations |  |  |  |  |
| Logo variants |  |  |  |  |
| Hero background |  |  |  |  |
| Gradients / dark sections |  |  |  |  |
| Bilingual typography |  |  |  |  |
