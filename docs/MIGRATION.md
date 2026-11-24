# Migration from the old WordPress site

Audited on November 24, 2026 from https://westcottcc.org.

## What moved

- **30 real pages** → 22 program pages plus About, Leadership & Board, Donate, Membership, Volunteer, Jobs and Contact.
- **42 images** → `public/uploads/`, resized for fast loading (the old site served some 2 to 3 MB photos).
- **11 PDFs** (Art Trail maps, Morningside trail maps, farmers market application) → `public/uploads/documents/`.
- **Contact details, hours, impact numbers, sponsors, social links, PayPal and Venmo links** → `src/data/site.json`.
- **Every old address** redirects to its new page (`public/_redirects`). About 25 leftover theme demo pages ("Header 1", "Pricing Table", etc.) redirect to the home page.

## Not moved yet

- **Annual reports (10 PDFs, 124 MB; the 2024 one is 38 MB).** Too large to keep in the website's files. They are still linked to the old site, so **they must move before launch**. Options: put them in a shared Google Drive or OneDrive folder owned by the center and paste the share links into Settings → Annual reports; or compress them to under 10 MB each and upload them in the editor.
- **Events.** The old site's events calendar was empty. The Art Trail 2026 was added as a past event so staff can see how events look.

## Fixed along the way

- The old **Contact Us page showed the theme's placeholder text** (a Los Angeles address and fake phone numbers). The new page uses the real details.
- National Grid hours said "11:00 **PM** – 1:00 PM"; changed to 11:00 AM.
- The Senior Companion email link pointed to `Kathyb@`; changed to Paige's address, which the text names.
- "Director of Operatons" typo.
- The old address `/admin/` was the Greater Syracuse Works page. On the new site `/admin/` is the editor, so that one old link can't redirect. Greater Syracuse Works is at `/programs/greater-syracuse-works/`.

## Please check before launch (staff review list)

- [ ] **Pantry and Senior Services:** pantry days and times (the pantry page says "twice monthly on Fridays", the senior page says "11–1"). Both are now shown as Fridays 11:00 AM to 1:00 PM.
- [ ] **Leadership:** only two staff were listed. Add more if wanted.
- [ ] **Impact numbers:** which year are they from? They are shown as "Our impact" without a year.
- [ ] **Contacts listed by first name only** (Paige, Elise, Trista): add last names if wanted.
- [ ] **Spectrum Learning Lab:** the old page had almost no detail. Add the current class list.
- [ ] **Spark Syracuse:** still a partner? It links out to sparksyracuse.org.
- [ ] **Sponsors:** list and logos are copied from the old site; confirm they are current, and add website links where missing.
- [ ] **Hours:** "Monday to Friday 9:00 AM to 4:30 PM, with some evening program hours". Still correct?
- [ ] **Newsletter:** is there a sign-up link (Mailchimp, Constant Contact)? Add it in Settings.
- [ ] **Photos:** most program pages have no photo. Good, recent photos (with permission) would help a lot.
