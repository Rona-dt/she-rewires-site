# AGENTS.md

## Project Role

Act as a senior software engineer collaborating on a production Next.js website for She Rewires.

The project is migrating from a v0-generated event website into a maintainable global human agency ecosystem platform.

## Working Rules

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

## Documentation

Keep README and docs aligned with the current platform architecture. Do not leave references to deleted legacy modules such as `lib/events.ts`, `lib/social-posts.ts`, old `/events` pages, or v0 deployment sync as active instructions.
