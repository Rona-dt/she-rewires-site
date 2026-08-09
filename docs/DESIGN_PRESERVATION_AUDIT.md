# Design Preservation Audit

Last updated: 2026-08-03

## Purpose

This audit exists because the founder has clarified that the previous base version was generally usable and satisfactory. The redesign should not be treated as a full visual replacement by default.

The intended direction is:

- keep the new CMS-ready architecture where useful
- preserve the strongest parts of the previous production design
- update the content architecture for About / Community / Build / Stories / Join Us
- use BEYOND Expo and other approved references selectively
- avoid another uncontrolled full-site rewrite

## Versions Compared

| Version | Source | Notes |
| --- | --- | --- |
| Previous baseline | `HEAD` / `origin/main` at `355d490d5c6205c314f783a1c566f3abd023567b` | This is the pre-redesign code currently available locally. It should still be compared against actual production before final visual decisions. |
| Current redesign | Working tree on `redesign/human-agency-platform` | Uncommitted local changes. Not pushed. Not deployed to preview. |
| Production deployment | Latest listed ready production deployment is 90d old | Vercel deployment list confirms current redesign is not production. |

## Previous Baseline Strengths To Consider Preserving

- Clear bilingual brand presentation: `She Rewires` plus Chinese brand name.
- Language toggle existed in navigation.
- Hero had stronger brand presence and centered identity.
- Homepage had clear sections for About, Impact, and Get Involved.
- Impact metrics were visually emphasized with icon cards.
- Existing Material-style visual language used blobs, cards, elevated CTAs, and stronger visual rhythm.
- Old navigation matched the previous event/media/contact site and was internally consistent.

## Current Redesign Strengths To Preserve

- New route architecture matches the platform direction:
  - `/about`
  - `/community`
  - `/build`
  - `/stories`
  - `/join-us`
- Legacy routes redirect instead of remaining as dead pages.
- Content is separated from presentation through `content/*`.
- CMS-ready content interfaces exist in `types/content.ts`.
- Reusable section components exist under `components/sections/*`.
- Build validation is stricter than before because lint/type errors are no longer ignored in production build config.

## Possible Overreach In Current Redesign

- The previous visual hierarchy may have been replaced too broadly before visual approval.
- The bilingual language system was removed, but this decision has not been explicitly approved.
- The current homepage reads more like an architecture/content prototype than a finished public brand surface.
- Some copy is meta/editorial, for example describing content as CMS-ready.
- Media and story surfaces are present structurally but not yet populated with real reviewed assets.
- The design currently has fewer strong visual assets/signals than the previous version.

## Open Visual Decisions

- Should the bilingual language toggle return?
- Should the Chinese brand name remain visible in the first viewport?
- Which previous visual motifs should be preserved: blobs, card rhythm, impact metrics, centered hero, icon-led cards, or CTA style?
- Which BEYOND Expo elements are approved references: information density, event credibility, visual scale, partner/logo treatment, media layout, or motion?
- Should current route architecture stay while page composition is visually adjusted back toward the old base version?

## Recommendation

Do not continue full-site visual modification until this audit is reviewed.

Recommended next step:

1. Fix encoding and small functional defects.
2. Capture screenshots of the previous production version and current redesign.
3. Mark old visual elements as `preserve`, `adapt`, or `remove`.
4. Mark current redesign elements as `keep`, `revise`, or `replace`.
5. Only then implement targeted visual recovery.
