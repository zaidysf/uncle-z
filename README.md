# uncle-z.com

The marketing site for **uncle-z** — an independent product studio shipping AI assistants, native apps, SaaS platforms, and developer tools, focused on Indonesian and global markets. Led by [Zaid Yasyaf](https://linkedin.com/in/zaidysf).

> **Note for future contributors / AI assistants:** the site was previously a VS Code-inspired dark-theme portfolio (Nuxt 3) — that version is gone. The current site is a **6-slide keynote-style presentation** in a brutalist-editorial **light** theme. Don't trust older screenshots, READMEs, or memory snippets that describe the VS Code design.

## Current design

- **Theme:** light (white/cream background, near-black text)
- **Accent:** orange (used on the trailing `.`, the `-` in `uncle-z`, and a few highlighted tags)
- **Type:** sans-serif headlines (large, tight tracking), monospace for tags / labels / nav (`// UNCLE-Z STUDIO`, `01 / 06`, etc.)
- **Layout:** 6 horizontal "slides", arrow-key (← →) navigation, slide counter top-right
- **Aesthetic:** brutalist-editorial — generous whitespace, no decoration, typography-first

## The 6 slides

1. **Hero** — wordmark, one-line studio pitch, contact links, "Explore →"
2. **What we build** — `Products that solve real problems.` Studio one-liner + 4 stat cards (9+ Products, 30+ Projects, 10+ Years, ∞ Team) + tag row (`AI · SaaS · Native apps · E-commerce · Dev tools`)
3. **What we ship** — 3×3 product grid (JarvisClaw, HRDex, HAKU, SplitEasy, ToolzPad, ZClawd, Quay, Skoru, Posz) — each card has name, category tag, blurb, outbound link
4. **Led by Zaid. Built by the team.** — founder bio + "previously at" tags (Tokopedia, Mekari, Perqara, Denning IT, UangTeman) + Connect links
5. **The studio stack.** — capabilities grouped by Languages / Databases / Cloud & DevOps / Frontend / Mobile / AI & ML / Domain Expertise
6. **Let's build something great.** — contact form (name, email, topic dropdown, message) + GitHub / LinkedIn / `hello@uncle-z.com`

## Positioning

uncle-z is positioned as an **independent product studio** that:
- Builds and ships its own SaaS / AI / mobile products (the 9 on slide 3)
- Takes on consulting, partnerships, and project inquiries (slide 6 contact form)

The 9 products under the umbrella are the studio's portfolio of bets. Some are run as standalone businesses on their own domains (`hrdex.co`, `jarvisclaw.id`, `hakuidn.com`, `quay.uncle-z.com`, etc.).

## Tech stack (this site itself)

- **Frontend:** Vue 3 / Nuxt 3
- **Styling:** TailwindCSS
- **Language:** TypeScript
- **Email Service:** Mailgun (for the contact form)
- **Deployment:** Vercel/Netlify

## Running locally

```bash
git clone https://github.com/zaidysf/unclez.git
cd unclez
cp .env.example .env
# fill in MAILGUN_*, GITHUB_TOKEN_ONE, etc.
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Production build

```bash
npm run generate   # static site
npm run preview    # local preview of the production build
```

## Environment variables

```env
GITHUB_TOKEN_ONE=...          # for the live GitHub stats on the studio page (if used)
MAILGUN_DOMAIN=uncle-z.com
MAILGUN_API_KEY=...
MAILGUN_FROM=hello@uncle-z.com
NUXT_PUBLIC_SITE_URL=https://uncle-z.com
```

## License

MIT.

## Contact

`hello@uncle-z.com` · [github.com/zaidysf](https://github.com/zaidysf) · [linkedin.com/in/zaidysf](https://linkedin.com/in/zaidysf)
