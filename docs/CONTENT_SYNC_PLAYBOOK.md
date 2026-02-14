# Content Sync Playbook (LinkedIn + X + Instagram + WeChat)

## A. LinkedIn / X / Instagram (monthly)

### Current practical approach
1. Open official channels:
   - LinkedIn: `https://www.linkedin.com/company/sherewires/posts/?feedView=all`
   - X: `https://x.com/sherewires`
   - Instagram: `https://www.instagram.com/sherewires/`
2. Pick the latest posts (Events vs Media).
3. Update `lib/social-posts.ts` with title/date/summary/link/image.

### Environment notes
- X is often readable through text-proxy fetch and can provide post text + image URLs.
- Instagram frequently requires login or blocks bot traffic in CI/headless environments.

### Why not direct crawler by default
- Platform anti-bot/login walls and rate limits.
- DOM structure changes frequently.

### Recommended automation path
- Use an approved connector/API provider and run a scheduled sync job.
- Persist normalized posts to JSON/DB, then render on Events/Media pages.

## B. WeChat Official Account

### Main challenge
- Article images are often hotlink-protected (`mmbiz.qpic.cn`) and may fail in external sites.

### Stable workflow
1. Paste WeChat URL into import script.
2. Convert article to Markdown.
3. Download/mirror images to your own storage (Vercel Blob / S3 / Cloudflare R2).
4. Replace image URLs in markdown with mirrored links.
5. Publish into Events content source.

## C. Minimal manual workload design
- Keep one schema for all channels (`title/date/summary/url/type`).
- Keep a monthly “sync batch” process (10-20 posts at once).
- Use pre-defined templates to reduce editing effort.
