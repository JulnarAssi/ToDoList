# To-Do List MCP — Website

Public project showcase for the **To-Do List MCP** server, built for
NextFlows Academy Demo Day. This is a static marketing/portfolio site for
the project — it does **not** run or embed the MCP server itself.

Built with Next.js (App Router) + TypeScript. Fonts are self-hosted via
`@fontsource` (no external font CDN required at build or run time).

## Install

```bash
cd web
npm install
```

## Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Type check & lint

```bash
npm run typecheck
npm run lint
```

## Build for production

```bash
npm run build
npm start
```

`npm run build` produces a fully static export of the page (no server
runtime features are used — no API routes, no server actions, no
middleware), so it is safe to deploy to any static or Node hosting target.

## Deploy

The simplest path is [Vercel](https://vercel.com), the company behind
Next.js:

1. Push this repository to GitHub (already the case).
2. Go to [vercel.com/new](https://vercel.com/new) and import the
   `JulnarAssi/ToDoList` repository.
3. Set the **Root Directory** to `web/` in the import settings.
4. Framework preset: **Next.js** (auto-detected).
5. Build command: `npm run build` (default). Output: handled automatically
   by the Next.js Vercel adapter.
6. Deploy.

No environment variables are required — the website contains no secrets,
API keys, or references to the MCP server's Google Calendar credentials.

Any other Node-capable static host (Netlify, Cloudflare Pages, Render,
etc.) will also work with the same `npm install && npm run build` steps.

## Editing content

All editable content lives under `app/data/`:

- `app/data/team.ts` — team member names, roles, GitHub/LinkedIn links,
  optional photo paths
- `app/data/tools.ts` — MCP tool cards (kept in sync with `src/tools/` in
  the main repository)
- `app/data/highlights.ts` — the "Project Highlights" checklist

See the comments at the top of each file for the exact shape to fill in.

## Known items

- `npm audit` reports advisories tied to Next.js features this site does
  not use (Server Actions, Middleware, the remote Image Optimizer). The
  site is fully static with no API routes, so these do not apply here;
  they're flagged only because of how npm's advisory ranges are matched.
