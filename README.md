# Westcott Community Center website

The website for [Westcott Community Center](https://westcottcc.org), Syracuse NY.

- **Staff:** you don't need anything in this repository. Edit the site at **https://westcottcc.org/admin/**. See the [staff guide](docs/STAFF-GUIDE.md).
- **Running cost:** $0 a month (free static hosting, free GitHub, free editor). The only cost is the yearly domain renewal.

## How it works

| Piece | What it does | Where it lives |
|---|---|---|
| [Astro](https://astro.build) | Turns the text files in this repo into the website | `src/` |
| [Sveltia CMS](https://sveltiacms.app) | The form-style editor at `/admin/` | `public/admin/` |
| GitHub | Stores every version of the site. Each save in the editor is a commit here | this repo |
| Cloudflare Pages | Rebuilds and publishes the site about a minute after each save | see [docs/HOSTING.md](docs/HOSTING.md) |

## Where the content is

| Content | File(s) |
|---|---|
| Programs | `src/content/programs/*.md` |
| Events | `src/content/events/*.md` |
| About, Donate, Membership, Volunteer, Jobs, Contact | `src/content/pages/*.md` |
| Home page headline, shortcut tiles, section titles | `src/data/home.json` |
| Contact info, hours, stats, sponsors, annual reports, announcement banner | `src/data/site.json` |
| Leadership and board | `src/data/people.json` |
| Images and PDFs | `public/uploads/` |
| Old WordPress addresses → new pages | `public/_redirects` |
| Interface text (menu labels, buttons) | `src/i18n/ui.ts` |
| Colors and fonts | `src/styles/global.css` |

## For developers

Requires Node 22.

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs dist/
```

Content fields are defined twice and must stay in sync: `src/content.config.ts` (what the site accepts) and `public/admin/config.yml` (what the editor shows).

### Adding a language

The site is set up for more languages. To add Spanish:

1. Add `'es'` to `locales` in `astro.config.mjs` and `es: 'Español'` to `languages` in `src/i18n/ui.ts`.
2. Copy the `en` block in `src/i18n/ui.ts` to `es` and translate it.
3. Add translated content files with `lang: es` (the content helpers in `src/lib/content.ts` already filter by language).
4. Add `[lang]` page routes under `src/pages/es/`, and turn on `i18n` in `public/admin/config.yml`.

## Other docs

- [Staff guide](docs/STAFF-GUIDE.md): how to edit the site
- [Hosting and launch](docs/HOSTING.md): accounts, preview, switching the domain
- [Handover](docs/HANDOVER.md): who owns what
- [Migration notes](docs/MIGRATION.md): what moved from the old site and what still needs checking
