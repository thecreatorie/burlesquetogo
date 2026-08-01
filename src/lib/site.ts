// Site-wide constants — Burlesque To Go
export const SITE_NAME = 'Burlesque To Go';
export const SITE_URL = 'https://burlesquetogo.com';
export const TAGLINE = 'Las Vegas Burlesque Dancers On Demand';

// Booking is primarily via SMS.
export const SMS_NUMBER_DISPLAY = '(702) 205-1440';
export const SMS_HREF =
  'sms:7022051440?&body=I%20would%20like%20to%20book%20a%20burlesque%20entertainer';

// Single business number sitewide (the old 1-800 was a theme-demo artifact).
export const PHONE_DISPLAY = '(702) 205-1440';
export const PHONE_HREF = 'tel:+17022051440';

/** SMS deep link prefilled with a specific dancer's name. */
export function smsBookHref(name: string): string {
  return `sms:7022051440?&body=${encodeURIComponent(`I would like to book ${name} for my event`)}`;
}

export const INSTAGRAM_URL = 'https://instagram.com/burlesquetogo';
export const INSTAGRAM_HANDLE = '@burlesquetogo';

export const PRICING = [
  {
    name: '1 Song',
    dancers: 'One Dancer',
    price: '$150',
    details: [
      'A 3-5 minute performance at the location of your choice',
      'Dancers accept tips - it is customary to have small bills to throw during performance',
    ],
  },
  {
    name: '2 Songs',
    dancers: 'One Dancer',
    price: '$200',
    details: [
      'An 8-10 minute performance at the location of your choice',
      'First song will have top, second song will not',
      'Dancers accept tips - it is customary to have small bills to throw during performance',
    ],
  },
  {
    name: '30 Minute Show',
    dancers: '4 Dancers',
    price: '$800',
    details: [
      'A 30 minute performance at the location of your choice',
      '4 dancers will do 2 songs each',
      'First song will have top, second song will not',
      'Dancers accept tips',
    ],
  },
];

export const PRICING_NOTE =
  'If you hire two or more dancers, they can perform an opening dance at no additional charge. Our dancers can perform on various props such as chairs, poles, and flow arts apparatuses.';

export const ORGANIZATION_SCHEMA = {
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  url: SITE_URL,
  name: SITE_NAME,
  description: TAGLINE,
  sameAs: [INSTAGRAM_URL],
};

export const LOCAL_BUSINESS_SCHEMA = {
  '@type': 'EntertainmentBusiness',
  '@id': `${SITE_URL}/#localbusiness`,
  name: SITE_NAME,
  description:
    'Las Vegas burlesque dancers on demand — book talented burlesque entertainers for parties, corporate events, and special occasions.',
  url: SITE_URL,
  telephone: '+1-702-205-1440',
  priceRange: '$150 - $800',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Las Vegas',
    addressRegion: 'NV',
    addressCountry: 'US',
  },
  areaServed: {
    '@type': 'City',
    name: 'Las Vegas',
  },
  sameAs: [INSTAGRAM_URL],
};
