# Roland Emmanuel Osaro — Portfolio

A Next.js (App Router, TypeScript) portfolio site. All swappable content lives in a single file: [`lib/site.ts`](lib/site.ts). Edit that file to update the whole site — name, title, bio, services, skills, projects, resume, and contact links.

## Editing content

Open [`lib/site.ts`](lib/site.ts). Notable things to fill in:

- **`formspreeId`** — the contact form uses [Formspree](https://formspree.io) (free, no backend). Create a form, copy its ID (the part after `formspree.io/f/`), and paste it in. Until then the form shows a friendly "not configured" message.
- **Metrics marked `[FILL IN]`** — the case studies ship with real project descriptions but placeholder numbers. Replace them with real results.
- **Portrait** — replace `public/portrait.jpg` with your photo (square works best).

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build

```bash
npm run build
npm start
```

## Deploy (Vercel)

Push to a Git repo and import it at [vercel.com/new](https://vercel.com/new), or run `npx vercel`. No environment variables are required — the Formspree form posts directly from the browser.
