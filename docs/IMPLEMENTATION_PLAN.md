# Implementation Plan

Last updated: 2026-08-03

## Guiding Principle

Preserve the useful engineering work from the redesign, but stop uncontrolled full-site rewriting.

The project should move from:

1. architecture migration
2. status documentation
3. baseline comparison
4. targeted fixes
5. controlled visual update
6. preview deployment
7. approval and production release

## Phase 0: Freeze And Document

State: In progress

Goal: Make the current redesign branch understandable and recoverable before any further page changes.

Tasks:

- Create `docs/PROJECT_STATUS.md`.
- Create `docs/IMPLEMENTATION_PLAN.md`.
- Create `docs/KNOWN_ISSUES.md`.
- Create `docs/DESIGN_PRESERVATION_AUDIT.md`.
- Confirm no application code is changed during this documentation step.
- Keep all redesign work on `redesign/human-agency-platform`.

Exit criteria:

- Current status, known issues, and next plan are documented.
- The team can distinguish implemented, verified, and approved work.

## Phase 1: Stabilize Current Branch

State: Next

Goal: Fix small defects that block accurate review without changing the full design.

Tasks:

- Fix Chinese encoding/mojibake in public-facing text.
- Fix Join Us entry path validation, or remove the required marker if optional.
- Restart and confirm the local dev server.
- Re-check `pnpm lint`.
- Re-check `pnpm exec tsc --noEmit`.
- Re-check `pnpm build`.

Exit criteria:

- No known encoding defects in visible text.
- Form behavior matches visible labels.
- Local site runs.
- Quality gates pass.

## Phase 2: Design Preservation Audit

State: Planned

Goal: Decide what should be preserved from the previous production version before doing further visual work.

Tasks:

- Identify the last stable production baseline.
- Compare old homepage, navigation, footer, content hierarchy, bilingual behavior, visual tone, spacing, typography, and CTA structure against the current redesign branch.
- Document which old visual elements should be preserved.
- Document which new architecture elements should remain.
- Document where the redesign may have changed more than necessary.
- Incorporate founder questionnaire feedback when available.
- Incorporate approved reference websites, including BEYOND Expo, only as selective references.

Exit criteria:

- A visual baseline is selected.
- The team agrees which old advantages to preserve.
- No additional visual implementation begins until this is reviewed.

## Phase 3: Controlled Visual Recovery

State: Deferred until Phase 2 is approved

Goal: Restore useful visual and usability strengths from the previous site while keeping the new architecture.

Possible tasks:

- Restore or redesign the bilingual brand presentation intentionally.
- Decide whether to bring back the language toggle.
- Restore stronger homepage hierarchy if current version feels too plain.
- Reintroduce approved visual assets and brand motifs.
- Reduce placeholder-like copy in user-facing areas.
- Preserve existing route/content/component architecture unless a specific issue requires change.

Exit criteria:

- Visual baseline is approved by founder or project owner.
- Page changes are scoped and reviewable.

## Phase 4: Content Inventory And Migration

State: Deferred

Goal: Replace placeholder/sample content with approved public content.

Tasks:

- Inventory existing public content only.
- Classify content into pages, people, chapters, projects, stories, partners, media, and join paths.
- Do not rewrite private or unpublished source material without approval.
- Populate local structured content first.
- Keep the structure Sanity-ready.

Exit criteria:

- Public content inventory exists.
- New pages use approved content.
- No placeholder content remains in launch-critical surfaces.

## Phase 5: CMS Decision

State: Deferred

Goal: Decide whether admin editing is required for launch or can follow launch.

Decision point:

- If founder requires admin editing for launch, introduce Sanity before launch.
- If founder accepts CMS-ready launch, keep local content for first release and add Sanity after launch.

Recommended default:

- Do not add CMS before the initial relaunch unless the founder explicitly makes backend editing a launch requirement.
- Keep Vercel as the deployment platform.
- Later add Sanity Studio for non-technical volunteer/admin content management.

Exit criteria:

- CMS timing is explicitly approved.
- Admin roles, editor count, and budget expectations are documented.

## Phase 6: QA And Preview

State: Deferred

Tasks:

- Test desktop and mobile navigation.
- Test all CTAs.
- Test redirects.
- Test mailto links.
- Test external social/media links.
- Check console errors.
- Check responsive layout.
- Run `pnpm lint`.
- Run `pnpm exec tsc --noEmit`.
- Run `pnpm build`.
- Commit changes intentionally.
- Push feature branch.
- Generate Vercel Preview.

Exit criteria:

- Preview URL exists.
- Preview matches the reviewed branch commit.
- QA issues are documented or fixed.

## Phase 7: Approval And Production

State: Deferred

Tasks:

- Review preview with founder/project owner.
- Confirm content.
- Confirm visual direction.
- Confirm CMS timing.
- Merge only after approval.
- Deploy production only after approval.

Exit criteria:

- Production deployment corresponds to approved commit.
- Documentation is updated after deployment.
