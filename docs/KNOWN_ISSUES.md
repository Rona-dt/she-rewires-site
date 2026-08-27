# Known Issues

Last updated: 2026-08-27

## Severity Key

- P0: blocks local build or production deployment
- P1: visible user-facing defect or broken core workflow
- P2: review-blocking polish or content issue
- P3: follow-up improvement

## Current Issues

| ID | Severity | Area | Status | Issue | Recommended Action |
| --- | --- | --- | --- | --- | --- |
| KI-001 | P1 | Encoding | Open | Chinese/public-facing text contains mojibake. Examples observed include the Chinese brand name in `content/site-config.ts` and separator text in Join Us. | Fix encoding/source text before visual review. |
| KI-002 | P1 | Join Us form | Resolved | The submit handler now requires at least one selected entry path and reports the validation error accessibly. | Keep covered by browser QA. |
| KI-003 | P2 | Join Us form | Expected limitation | The form opens a pre-filled `mailto:` draft. It does not submit to a server or store data. | Keep for launch only if accepted; otherwise introduce a real form backend or CMS/workflow later. |
| KI-004 | P2 | CMS/admin | Deferred | There is no admin backend yet. Current content is code-managed local TypeScript. | Decide whether CMS is required before launch. |
| KI-005 | P2 | Visual direction | Open | Current redesign may have replaced too much of the previous base version, which the founder considered generally usable. | Complete design preservation audit before more visual changes. |
| KI-006 | P2 | Media/stories | Open | Media, podcast, video, and story links are not fully migrated into a reviewed media/story system. | Do content inventory and migrate approved public items. |
| KI-007 | P2 | Preview deployment | Open | Current redesign branch has not been committed, pushed, or deployed to Vercel Preview. | Commit and push only after stabilization and review. |
| KI-008 | P3 | Browser QA | Open | Browser-level click testing and console checks were not completed in this status pass. | Run browser QA after local dev server is stable. |
| KI-009 | P1 | Public copy | Resolved | Stories no longer exposes CMS/editor language, and Join Us uses audience-facing email guidance. | Re-run the public-copy scan when content changes. |
| KI-010 | P1 | Deployment workflow | Open | The repository did not previously state the required Git-triggered Vercel workflow, so manual CLI deployments could create deployments without Git commit metadata. | Use the workflow in `AGENTS.md`; verify branch and commit metadata on every Preview. |
| KI-011 | P2 | Language persistence QA | Open | Locale switching works in the current browser pass, but route-to-route persistence needs a dedicated verification after hydration because pages initially render with the English default. | Verify that a selected locale persists across every primary route and full reload without mixed-language content. |

## Recently Verified As Passing

- `pnpm lint`
- `pnpm exec tsc --noEmit`
- `pnpm build`
- Merge conflict marker search

## Not Classified As Bugs

- Removed `/events` pages: accepted direction based on instruction that Horizon and old event pages are no longer needed.
- No CMS yet: intentional if launch remains CMS-ready first, CMS-integrated later.
- No Vercel Preview yet: expected because current redesign changes are not committed or pushed.
