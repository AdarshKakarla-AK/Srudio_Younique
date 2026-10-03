# Studio YouNique — Deploy to Cloudflare Pages

Static Vite + React + Tailwind build. No functions / env vars needed.

## Build
```
cd studio-younique
npm install
npm run build   # outputs dist/
```

## Cloudflare Pages (dashboard)
1. Pages → Create → Upload assets **or** Connect to Git.
2. Build command: `npm run build` · Output dir: `dist`
3. Node version: 18+ (tested Node 24).
4. No environment variables required.

## Cloudflare (wrangler)
```
npx wrangler pages deploy dist --project-name studioyounique
```

## Replace imagery
Real product photos live in `public/products/` (10 files, copied to `dist`
on build). Remote Unsplash URLs in `src/content.ts` (`IMAGES`, `WARDROBE`,
`LOOKS`, `MEMORIES`) are now automatic fallbacks only — swap any file in
`public/products/` with the real Studio YouNique shoot (same filename) and
rebuild. No component edits needed. `dress-indigo-maxi.svg` is a branded
"photo coming soon" teaser — replace it with the real photo when shot.

## Contact config
Phone / WhatsApp / Maps / Instagram live in `src/content.ts`.
WhatsApp uses `wa.me` links with prefilled messages.
