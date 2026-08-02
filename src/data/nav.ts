import { dancers } from './dancers';

export interface NavLink { label: string; href: string; note?: string; external?: boolean; }
export interface NavGroup { label: string; href?: string; note?: string; links: NavLink[]; }

const roster = dancers.filter((d) => d.group === 'dancers');
const boylesque = dancers.filter((d) => d.group === 'boylesque');

export const PHONE_DISPLAY = '(702) 205-1440';
export const PHONE_TEL = '+17022051440';
export const SMS_HREF =
  'sms:+17022051440?&body=' + encodeURIComponent('I would like to book a burlesque entertainer');
export const INSTAGRAM = 'https://www.instagram.com/burlesquetogo';

/* Primary nav — Dancers carries a full submenu of every performer. */
export const NAV_GROUPS: NavGroup[] = [
  {
    label: 'Performers',
    href: '/dancers',
    note: dancers.length + ' entertainers',
    links: [
      { label: 'All Performers', href: '/dancers', note: 'The full roster' },
      ...roster.map((d) => ({ label: d.name, href: `/dancers/${d.slug}`, note: d.jobTitle })),
      { label: 'Boylesque', href: '/dancers/boylesque', note: 'Male performers' },
      ...boylesque.map((d) => ({ label: d.name, href: `/dancers/${d.slug}`, note: d.jobTitle })),
    ],
  },
  {
    label: 'Plan Your Event',
    href: '/book',
    note: 'Pricing, packages, questions',
    links: [
      { label: 'Book a Performance', href: '/book', note: 'Text or send a request' },
      { label: 'Pricing & Packages', href: '/#pricing', note: 'From $150' },
      { label: 'FAQ', href: '/faq', note: 'How booking works' },
      { label: 'What Is Burlesque?', href: '/what-is-burlesque', note: 'The art form, explained' },
    ],
  },
  {
    label: 'About',
    href: '/about',
    note: 'Who we are',
    links: [
      { label: 'About Burlesque To Go', href: '/about', note: 'Our story & performer bios' },
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms & Conditions', href: '/terms' },
    ],
  },
];
