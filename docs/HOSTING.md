# Hosting and launch

Everything here is on free plans. Use a **center email address** (for example `web@westcottcc.org` or `info@westcottcc.org`) to create every account, so the accounts stay with the center when people change jobs. Add at least two staff members as admins on each account.

## 1. GitHub (where the site's files live)

1. Create a free GitHub organization (for example `westcottcc`) signed up with the center email.
2. Transfer this repository into it: repository **Settings → General → Transfer ownership**. Links and history move with it.
3. Update `repo:` in `public/admin/config.yml` to the new location.
4. Each staff editor makes a free GitHub account and is invited to the organization with **Write** access to this repository. That account is how they sign in to the editor.

## 2. Cloudflare Pages (publishes the site)

Why Cloudflare: unlimited visitors and 500 rebuilds a month on the free plan. Each save in the editor is one rebuild.

1. Create a free Cloudflare account with the center email.
2. **Workers & Pages → Create → Pages → Connect to Git**, pick this repository.
3. Build settings: framework preset **Astro**, build command `npm run build`, output folder `dist`. Add an environment variable `NODE_VERSION` = `22`.
4. Save. Cloudflare gives a preview address like `westcott-website.pages.dev`. **This is the address staff review before launch.**

## 3. Editor sign-in (one-time)

The editor needs a small free helper to let staff sign in with GitHub. It is the official Sveltia CMS Authenticator, which runs on Cloudflare Workers at no cost. Follow the steps in its README: <https://github.com/sveltia/sveltia-cms-auth>. In short:

1. Deploy the worker to the center's Cloudflare account (one button in that README).
2. In the GitHub organization, create an **OAuth App** (Settings → Developer settings → OAuth Apps). Homepage: the site address. Callback URL: the worker address followed by `/callback`.
3. In the worker's settings, add the OAuth App's client ID and secret, and set the allowed domain to the site's domain (and the `pages.dev` preview address during review).
4. Put the worker address in `base_url:` in `public/admin/config.yml`.

Until this is done, a developer can still sign in to `/admin/` with a GitHub personal access token.

## 4. Launch: switching westcottcc.org to the new site

**Do this only after staff approve the preview, and with the Executive Director's OK.** It changes where westcottcc.org points.

Before switching:

- [ ] Staff have reviewed every page on the preview and the review list in [MIGRATION.md](MIGRATION.md) is cleared.
- [ ] The annual report PDFs have a new home (see MIGRATION.md). They are still linked to the old WordPress site, which stops working at launch.
- [ ] Email for `@westcottcc.org` is **not** affected: check that the DNS records for email (MX, SPF/TXT, DKIM) are copied exactly if DNS moves.
- [ ] Download a full backup of the WordPress site (hosting control panel, or a backup plugin) and keep it on the center's shared drive.

Switching:

1. In Cloudflare Pages, open the project → **Custom domains → Set up a domain**, add `westcottcc.org` and `www.westcottcc.org`.
2. Cloudflare shows the DNS records to add. Either move the domain's DNS to Cloudflare (recommended, it will copy existing records, so check the email ones), or add the records at the current DNS provider.
3. Wait for the green "Active" status, then visit the site and a few old addresses (like `/food-pantry/`) to confirm the redirects.
4. Keep the old WordPress hosting for 30 days in case anything was missed, then cancel it.

## Costs

| Item | Cost |
|---|---|
| GitHub organization | Free |
| Cloudflare Pages + sign-in worker | Free |
| Sveltia CMS | Free, open source |
| Domain westcottcc.org | Renewal fee at the current registrar (unchanged) |
| Old WordPress hosting | Can be cancelled after launch |
