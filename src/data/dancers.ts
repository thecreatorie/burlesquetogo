// Dancer roster — bios are faithful copy from the source /team/<name>/ pages.
import type { ImageMetadata } from 'astro';

import dakotaImg from '../assets/dancers/dakota.jpg';
import daniSteelImg from '../assets/dancers/dani-steel.jpg';
import fawniaImg from '../assets/dancers/fawnia.jpg';
import hollyWeedImg from '../assets/dancers/holly-weed.jpg';
import infinitiImg from '../assets/dancers/infiniti.jpg';
import jonnyImg from '../assets/dancers/jonny.jpg';
import margaritaImg from '../assets/dancers/margarita.jpg';
import nyritaImg from '../assets/dancers/nyrita.jpg';
import roseHolidayImg from '../assets/dancers/rose-holiday.jpg';
import sophieImg from '../assets/dancers/sophie.jpg';
import stellaNoirImg from '../assets/dancers/stella-noir.jpg';
import urtreenImg from '../assets/dancers/urtreen.jpg';

export interface Dancer {
  slug: string;
  name: string;
  /** SEO title from the source /team/ page — preserved. */
  title: string;
  metaDescription: string;
  /** Short one-liner for roster cards (faithful excerpt from the bio). */
  oneLiner: string;
  bio: string[];
  group: 'dancers' | 'boylesque';
  image: ImageMetadata;
  imageAlt: string;
  /** Job titles for Person JSON-LD. */
  jobTitle: string;
  featured?: boolean;
}

export const dancers: Dancer[] = [
  {
    slug: 'fawnia',
    name: 'Fawnia',
    title: 'Experience Fawnia | Playboy Model and Pole Icon | Burlesque To Go',
    metaDescription:
      'Born in BC Canada, Fawnia has appeared in over 50 fitness magazines and 4 issues of Playboy. Book this pole fitness icon for your Las Vegas event.',
    oneLiner:
      'One of the world’s most popular names in the pole fitness industry and a headlining performer in Barlesque The Show.',
    bio: [
      'Born in BC Canada, Fawnia has appeared in over 50 fitness magazines, and 4 issues of Playboy plus Playboy’s Canadian calendar. She is a Hawaiian Tropic model and national level figure competitor. Fawnia is known as one of the world’s most popular names in the pole fitness industry, and she is a headlining performer in Las Vegas’s Barlesque The Show. Experience Fawnia!',
    ],
    group: 'dancers',
    image: fawniaImg,
    imageAlt: 'Fawnia, Las Vegas burlesque performer and pole fitness icon',
    jobTitle: 'Burlesque Performer',
    featured: true,
  },
  {
    slug: 'dakota',
    name: 'Dakota',
    title: 'Book Dakota | Exotic Pole Dancer | Burlesque To Go',
    metaDescription:
      'Dakota is a 4th generation dancer who has danced in over 20 revues on the Las Vegas strip, including Jubilee, Showgirls of Magic and X-Burlesque.',
    oneLiner:
      'A 4th generation dancer who has danced in over 20 reviews on the Las Vegas strip such as Jubilee, Showgirls of Magic and X-Burlesque.',
    bio: [
      'Dakota was born to dance. She is a 4th generation dancer who started dancing at the age of 3! Dakota has danced in over 20 reviews on the Las Vegas strip such as Jubilee, Showgirls of Magic and X-Burlesque. She also traveled the world with Monster Energy as a solo dancer in the band “51fifty”. Dakota can do it all, from pole dance to lap dance! She’s a hott commodity… don’t miss this beauty!',
    ],
    group: 'dancers',
    image: dakotaImg,
    imageAlt: 'Dakota, exotic pole dancer with Burlesque To Go in Las Vegas',
    jobTitle: 'Burlesque Dancer',
    featured: true,
  },
  {
    slug: 'margarita',
    name: 'Margarita',
    title: 'Book a Talented Dancer - Margarita | Burlesque To Go',
    metaDescription:
      'Margarita is a second-generation circus performer who spent almost 10 years with Cirque du Soleil in Zed, Viva Elvis and Zarkana. Book her for your event.',
    oneLiner:
      'A second-generation circus performer who was part of Cirque du Soleil for almost 10 years.',
    bio: [
      'The talented Margarita is a choreographer and instructor, and is a second-generation circus performer, and has been performing on stage since the age of seven. She has performed all over the world and had the pleasure to be part of Cirque du Soleil for almost 10 years. Margarita was in the shows Zed, Viva Elvis, and Zarkana, and performed in several burlesque shows in Las Vegas. Bring the circus to your next event with Margarita!',
    ],
    group: 'dancers',
    image: margaritaImg,
    imageAlt: 'Margarita, choreographer and former Cirque du Soleil performer',
    jobTitle: 'Burlesque Dancer & Choreographer',
    featured: true,
  },
  {
    slug: 'holly-weed',
    name: 'Holly Weed',
    title: 'Book Holly Weed | Las Vegas LED Hula Hooper | Burlesque To Go',
    metaDescription:
      'Holly Weed is a dancer, aerialist and circus performer with a specialty in prop manipulation and a famous LED burlesque act. Book her for your event.',
    oneLiner:
      'Dancer, aerialist, and circus performer with a specialty in prop manipulation — famous for her LED burlesque act.',
    bio: [
      'Nobody elevates a party more than Holly Weed! She is a dancer, aerialist, and circus performer with a specialty in prop manipulation. When she is not teaching aerial and prop dance at Pole Fitness Studio, you will find her performing in shows such as Tinsel, and at nightclubs and corporate events. She has taken her LED act all over the country, performing it alongside artists such as Chris Lake. This entertainer has also been featured at clubs such as Peppermint Hippo and the world renowned Sapphire with her LED burlesque act. Book her for your event and watch Holly Weed light it up!',
    ],
    group: 'dancers',
    image: hollyWeedImg,
    imageAlt: 'Holly Weed, Las Vegas LED hula hoop and burlesque performer',
    jobTitle: 'Burlesque Dancer & Aerialist',
    featured: true,
  },
  {
    slug: 'nyrita',
    name: 'Nyrita',
    title: 'Book Nyrita | Dancer from Barlesque & Black Girl Magic Burlesque',
    metaDescription:
      'Nyrita has performed in Tuesday Blend, Black Girl Magic Burlesque and Barlesque The Show, and is a lead instructor at Pole Fitness Studio in Las Vegas.',
    oneLiner:
      'Performer in Tuesday Blend, Black Girl Magic Burlesque, and Barlesque The Show, and lead instructor at Pole Fitness Studio.',
    bio: [
      'Nyrita has performed in shows such as Tuesday Blend, Black Girl Magic Burlesque, Barlesque The Show, and she is also a lead instructor at Pole Fitness Studio teaching everything from pole, lap dance, Striptease, all the way down to hip-hop. Let Nyrita heat up your next event!',
    ],
    group: 'dancers',
    image: nyritaImg,
    imageAlt: 'Nyrita, Las Vegas burlesque dancer and pole instructor',
    jobTitle: 'Burlesque Dancer',
    featured: true,
  },
  {
    slug: 'stella-noir',
    name: 'Stella Noir',
    title: 'Book a Beautiful Dancer | Stella Noir | Burlesque To Go',
    metaDescription:
      'Stella Noir is a former pageant queen and X-Factor contestant, well-versed in classic, traditional, modern and neo-burlesque. Book her for your event.',
    oneLiner:
      'Former pageant queen and X-Factor contestant, well-versed in classic, traditional, modern, and neo-burlesque.',
    bio: [
      'Stella Noir is a former pageant queen, X-Factor contestant, and pole fitness instructor currently moonlighting as a casino pit boss. A seasoned performer, she made her burlesque debut in the Las Vegas-based Barlesque’s October 2022 show, “Ghouls’ Night Out”, portraying the role of a sexy serial killer. She is well-versed in the art of classic, traditional, modern, and neo-burlesque, in addition to her background as a classically-trained pop-rock chanteuse. We all deserve a little Stella Noir!',
    ],
    group: 'dancers',
    image: stellaNoirImg,
    imageAlt: 'Stella Noir, Las Vegas burlesque performer',
    jobTitle: 'Burlesque Performer',
  },
  {
    slug: 'infiniti',
    name: 'Infiniti',
    title: 'Hire Cirque Dancers For Your Event | Infiniti | Burlesque To Go',
    metaDescription:
      'Infiniti is a former contemporary ballet dancer turned aerialist and burlesque performer who has performed in NYC, Barcelona, Riyadh and Beijing.',
    oneLiner:
      'Former contemporary ballet dancer turned aerialist and burlesque performer who has performed around the world.',
    bio: [
      'A Louisiana native, Infiniti is a former contemporary ballet dancer turned aerialist and burlesque performer. As a world traveling artist, she has performed in cities such as NYC, Barcelona, Guayaquil, Riyadh and Beijing, to name a few. In small town Vegas, her acclaims include performing in An Evening with Whitney, Black Girl Magic and BARLESQUE as well as instructing at the renowned Pole Fitness Studio and now slaying in Burlesque To Go. Always on the move, get a glimpse before it’s too late of the endless possibilities with Infiniti!',
    ],
    group: 'dancers',
    image: infinitiImg,
    imageAlt: 'Infiniti, aerialist and burlesque performer in Las Vegas',
    jobTitle: 'Burlesque Performer & Aerialist',
  },
  {
    slug: 'dani-steel',
    name: 'Dani Steel',
    title: 'Dani Steel | Burlesque To Go',
    metaDescription:
      'Dani Steel has been a showcased entertainer for over 17 years and won Miss Exotic World Pole Champion in 2019. Book her for your next Las Vegas event.',
    oneLiner:
      'A showcased entertainer for over 17 years and Miss Exotic World Pole Champion 2019.',
    bio: [
      'She’s been a showcased entertainer for over 17 years now. Dani won Miss Exotic World Pole Champion in 2019. Dani is passionate about performing. You can follow her travels @poledancedani on IG to stay up to date with all of her performances, shows, and adventures.',
    ],
    group: 'dancers',
    image: daniSteelImg,
    imageAlt: 'Dani Steel, Miss Exotic World Pole Champion 2019',
    jobTitle: 'Burlesque Dancer',
  },
  {
    slug: 'rose-holiday',
    name: 'Rosé Holiday',
    title: 'Book Rosé Holiday | Las Vegas Dancer | Burlesque To Go',
    metaDescription:
      'Rosé Holiday has a background in ballet, jazz, interpretive dance, folkloric and pole dancing, and stars in her own show, Barlesque the Show.',
    oneLiner:
      'Background in ballet, jazz, interpretive dance, folkloric and pole dancing — star of her own show, Barlesque the Show.',
    bio: [
      'Rose’ Holiday, a.k.a. Imani, has a background in ballet, jazz, interpretive dance, folkloric and pole dancing. She has been in such shows as: “Viva”, “Roses of Texas”, “Ella” and “Herstory of Rock”, and currently her own show “Barlesque the Show”. She teaches Burlesque the Workout and Lap Dance at Pole Fitness Studio. Everyone needs a little Rose’ Holiday!',
    ],
    group: 'dancers',
    image: roseHolidayImg,
    imageAlt: 'Rosé Holiday, Las Vegas burlesque dancer',
    jobTitle: 'Burlesque Dancer',
  },
  {
    slug: 'sophie',
    name: 'Sophie',
    title: 'Book A Talented Performer | Sophie | Burlesque To Go',
    metaDescription:
      'Sophie is a vocalist with a background in music, theater, latin dance and ballroom, currently training as an aerialist and movement artist in Las Vegas.',
    oneLiner:
      'Vocalist with a background in music, theater, latin dance, and ballroom, training as an aerialist in Las Vegas.',
    bio: [
      'Sophie is a vocalist with a background in music, theater, latin dance, and ballroom. Originally a Miami native who has participated in all county performances throughout the East Coast with guest appearances on local television & variety shows. Sophie is currently training as an aerialist and movement artist in Las Vegas, and she would love to dance at your next event!',
    ],
    group: 'dancers',
    image: sophieImg,
    imageAlt: 'Sophie, vocalist and performer with Burlesque To Go',
    jobTitle: 'Vocalist & Performer',
  },
  {
    slug: 'jonny',
    name: 'Jonny',
    title: 'Book a Male Burlesque Performer | Jonny | Burlesque To Go',
    metaDescription:
      'Jonny is a seasoned international competitive pole dancer known for his incredible strength and flexibility. Book this male burlesque performer today.',
    oneLiner:
      'Seasoned international competitive pole dancer known for his incredible strength and flexibility.',
    bio: [
      'Jonny started his Athletic career as a yoga Instructor in 2011. He is certified in Vinyasa 200 hours and Hatha 300 hours. After being a full time yogi he the started taking private pole dance lessons in 2013 where he fell in love with the art of pole dance. He is now a seasoned International competitive pole dancer who now teaches the art of pole and performs all of the world. He is know for he’s incredible strength and combination of flexibility. Watching him perform is life changing. Book Jonny for your next event.',
    ],
    group: 'boylesque',
    image: jonnyImg,
    imageAlt: 'Jonny, male burlesque and competitive pole performer',
    jobTitle: 'Boylesque Performer',
    featured: true,
  },
  {
    slug: 'urtreen',
    name: 'Urtreen',
    title: 'Book Male Burlesque Performers | Urtreen | Burlesque To Go',
    metaDescription:
      'Urtreen has danced in shows on the Las Vegas strip including performances with Cirque du Soleil, and is a highly requested bachelorette party performer.',
    oneLiner:
      'Highly requested bachelorette party performer who has danced on the Las Vegas strip, including with Cirque du Soleil.',
    bio: [
      'Urtreen, has been pole dancing since 2017, and is a highly requested performer for bachelorette parties. Urtreen has danced in various shows on the Las Vegas strip. Including performances with Cirque du Soleil. Urtreen is not only fun to look at, he is also a comedian, and loves making people laugh. Invite Urtreen over for dancing and giggles.',
    ],
    group: 'boylesque',
    image: urtreenImg,
    imageAlt: 'Urtreen, male burlesque performer in Las Vegas',
    jobTitle: 'Boylesque Performer',
  },
];

export const femaleDancers = dancers.filter((d) => d.group === 'dancers');
export const boylesque = dancers.filter((d) => d.group === 'boylesque');
export const featuredDancers = dancers.filter((d) => d.featured);

export function personSchema(d: Dancer, siteUrl: string) {
  return {
    '@type': 'Person',
    '@id': `${siteUrl}/dancers/${d.slug}#person`,
    name: d.name,
    url: `${siteUrl}/dancers/${d.slug}`,
    jobTitle: d.jobTitle,
    description: d.bio.join(' '),
    worksFor: {
      '@type': 'Organization',
      name: 'Burlesque To Go',
      url: siteUrl,
    },
  };
}
