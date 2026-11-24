// Interface text used across the site, by language.
// To add Spanish: copy the `en` block, rename it `es`, translate each value,
// and add 'es' to `locales` in astro.config.mjs.

export const languages = { en: 'English' } as const;
export const defaultLang = 'en';
export type Lang = keyof typeof languages;

export const ui = {
  en: {
    'skip': 'Skip to main content',
    'nav.programs': 'Programs',
    'nav.events': 'Events',
    'nav.about': 'About',
    'nav.leadership': 'Leadership & Board',
    'nav.involved': 'Get Involved',
    'nav.donate': 'Donate',
    'nav.membership': 'Membership',
    'nav.volunteer': 'Volunteer',
    'nav.jobs': 'Jobs',
    'nav.contact': 'Contact',
    'nav.menu': 'Menu',
    'home.findHelp': 'How can we help?',
    'home.featured': 'Popular programs',
    'home.allPrograms': 'See all programs',
    'home.upcoming': 'Coming up',
    'home.allEvents': 'See all events',
    'home.noEvents': 'No special events are scheduled right now. Our weekly programs are always running.',
    'home.impact': 'Our impact',
    'home.involved': 'Get involved',
    'home.visit': 'Visit us',
    'cat.community-services': 'Community Services',
    'cat.employment': 'Jobs & Training',
    'cat.arts-culture': 'Arts & Culture',
    'cat.collaborations': 'Collaborations',
    'program.when': 'When',
    'program.where': 'Where',
    'program.contact': 'Contact',
    'program.more': 'More information',
    'program.visit': 'Visit website',
    'program.learn': 'Learn more',
    'events.upcoming': 'Upcoming events',
    'events.weekly': 'Regular schedule',
    'events.weeklyIntro': 'These programs run on a regular schedule. Follow the link for details.',
    'events.past': 'Past events',
    'events.none': 'No upcoming special events are posted yet. Check back soon, or follow us on social media.',
    'footer.contact': 'Contact',
    'footer.hours': 'Hours',
    'footer.center': 'Center',
    'footer.annex': 'Annex',
    'footer.mailing': 'Mailing address',
    'footer.follow': 'Follow us',
    'footer.nonprofit': 'Westcott Community Center is a 501(c)(3) nonprofit organization.',
    'donate.online': 'Give online',
    'donate.paypal': 'Donate with PayPal',
    'donate.venmo': 'Donate with Venmo',
    'about.reports': 'Annual reports',
    'about.reportsIntro': 'We believe in transparency. Our annual reports show our finances and how donations are used.',
    'about.sponsors': 'Our sponsors and funders',
    'leadership.staff': 'Leadership',
    'leadership.board': 'Board of Directors',
    'contact.directions': 'Get directions',
    'notfound.title': 'Page not found',
    'notfound.text': "We couldn't find that page. It may have moved when we updated our website.",
    'back.home': 'Go to the home page',
  },
} as const;

export function useTranslations(lang: Lang = defaultLang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    return (ui[lang] as Record<string, string>)[key] ?? ui[defaultLang][key];
  };
}
