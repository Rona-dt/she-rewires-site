# AGENTS.md

## Project Role

Act as a senior software engineer collaborating on a production Next.js website for She Rewires.

The project is migrating from a v0-generated event website into a maintainable global human agency ecosystem platform.

## Working Rules

- **Canonical workspace:** `D:\Projects\Active\she-rewires-site` is the only active repository for this project. All future reads, edits, tests, commits, branches, and pushes must use this D-drive workspace.
- **Retired workspace:** `C:\Users\Rona\Documents\New project 2` is an old workspace and must be treated as read-only/archive. Do not use it as a source of truth, and do not copy changes from it without an explicit comparison and approval.
- **Workspace verification:** Before implementation or Git operations, verify the working directory with `git rev-parse --show-toplevel`, then verify branch, HEAD, upstream, and `git status` from the D-drive workspace.
- **Migration safety:** Never reconcile C- and D-drive histories by force-reset, blind copy, or unreviewed merge. If the two workspaces diverge, compare commits and working-tree changes first and preserve unrelated work.

- Do not work directly on `main` for feature work.
- Use a feature branch for architecture, redesign, content, or deployment changes.
- Do not push to `main` directly.
- Keep changes scoped to the requested phase.
- Preserve existing behavior only when it still belongs to the new platform direction.
- Old v0/event-site files may be removed when they have git history and no longer serve the new architecture.

## Architecture Principles

- Keep content separate from presentation.
- Page components should compose reusable sections and structured content.
- Large content blocks should live under `content/*`, not inside route components.
- Content interfaces in `types/content.ts` should remain CMS-ready and map cleanly to future Sanity schemas.
- Do not introduce CMS until content models and editorial workflows are stable.

## Current Primary Routes

- `/`
- `/about`
- `/community`
- `/build`
- `/stories`
- `/join-us`

Legacy routes should redirect into the new structure rather than remain as standalone pages.

## Quality Gates

Before declaring success, run:

```bash
pnpm lint
pnpm exec tsc --noEmit
pnpm build
```

Do not skip lint or type validation in production builds.

## Modern Web Guidance

For every HTML, CSS, layout, browser API, client-side interaction, form, animation, image-performance, or accessibility change:

- Run the installed `modern-web-guidance` skill search before implementation.
- Use an action-oriented query that describes the intended web behavior.
- Retrieve the most relevant guide before choosing an implementation pattern.
- On Windows, use `npx.cmd` when invoking the guidance CLI if `npx` is unavailable.
- Prefer native platform capabilities and small, progressive enhancements over custom JavaScript or new dependencies.
- Treat browser compatibility and accessibility as implementation requirements, not afterthoughts.
- Follow the guide's fallback recommendations for features that are not Baseline Widely available.
- Verify responsive behavior, keyboard operation, reduced motion, loading priority, and Core Web Vitals impact for user-facing changes.
- Do not add a polyfill, animation library, or browser-specific technique without documenting its compatibility and fallback rationale.

This guidance does not apply to backend-only work, Git operations, or CI/CD configuration.

## Documentation

Keep README and docs aligned with the current platform architecture. Do not leave references to deleted legacy modules such as `lib/events.ts`, `lib/social-posts.ts`, old `/events` pages, or v0 deployment sync as active instructions.

## Deployment Workflow

This repository uses Git-triggered Vercel deployments through the existing GitHub integration.

- Never run `vercel deploy`, `vercel --prod`, Vercel API deployment actions, or create a new Vercel project unless explicitly requested.
- For Preview, commit approved changes on `redesign/human-agency-platform` and push to `origin/redesign/human-agency-platform`.
- Let the existing GitHub integration create the Preview deployment automatically.
- Verify that the Preview metadata references the pushed Git commit and branch.
- Keep Production attached to `main`.
- Do not merge, promote a Preview, or deploy Production without explicit approval.
