# Website handover: one page

**Goal:** Westcott Community Center owns and runs its website without depending on any one person.

## What the center owns

| Thing | Where | Owner account | Backup admin |
|---|---|---|---|
| Domain `westcottcc.org` | Current registrar *(fill in)* | Center email *(fill in)* | *(fill in)* |
| Website files and history | GitHub organization *(fill in, e.g. github.com/westcottcc)* | Center email | Ahmad (helper) |
| Hosting | Cloudflare Pages | Center email | *(fill in)* |
| Editor sign-in helper | Cloudflare Workers (same account) | Center email | |
| Email `@westcottcc.org` | *(fill in, unchanged by this project)* | | |

Passwords go in the center's password manager or the Executive Director's sealed record, never in this repository.

## Day to day

- **Staff edit content** at `/admin/`. See [STAFF-GUIDE.md](STAFF-GUIDE.md).
- **Nothing needs updating** for the site to keep running: no plugins, no security patches, no hosting bills.

## Once a year

- [ ] Renew the domain (turn on auto-renew with a center card).
- [ ] Post the new annual report (Settings → Annual reports) and update the impact numbers.
- [ ] Review who has editor access in GitHub and remove people who have left.
- [ ] Check the editor still works; if a sign-in error appears, the GitHub OAuth App secret may need renewing (see [HOSTING.md](HOSTING.md) step 3).

## When someone leaves

Remove their GitHub account from the organization, and from Cloudflare if they had access. Make sure at least two current staff remain owners of each account.

## Getting help

Any web developer familiar with Astro or static sites can work on this. Point them to the [README](../README.md). Ahmad (Digital Navigator) set it up and can help, but nothing depends on Ahmad.
