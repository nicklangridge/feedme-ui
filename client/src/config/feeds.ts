import type { FeedConfig } from '@/types/config';

export const feeds: FeedConfig[] = [
  {
    "name": "Clash",
    "slug": "clash",
    "homepage_url": "http://www.clashmusic.com",
    "active": 1,
    "description": "Music magazine with news, reviews and interviews"
  },
  {
    "name": "Crack",
    "slug": "crack",
    "homepage_url": "https://crackmagazine.net",
    "active": 0,
    "description": "An independent platform for contemporary culture"
  },
  {
    "name": "DIY",
    "slug": "diy",
    "homepage_url": "https://diymag.com",
    "active": 0,
    "description": "UK-based music magazine bringing you music news, reviews, features, interviews and more"
  },
  {
    "name": "Guardian",
    "slug": "guardian",
    "homepage_url": "https://www.theguardian.com/music",
    "active": 1,
    "description": "The Guardian newspaper music section"
  },
  {
    "name": "Igloo",
    "slug": "Igloo",
    "homepage_url": "https://igloomag.com",
    "active": 1,
    "description": "Experimental electronic music magazine"
  },
  {
    "name": "Inverted Audio",
    "slug": "invertedaudio",
    "homepage_url": "https://inverted-audio.com",
    "active": 1,
    "description": "Independent online music magazine"
  },
  {
    "name": "Loud and Quiet",
    "slug": "loudandquiet",
    "homepage_url": "https://www.loudandquiet.com",
    "active": 1,
    "description": "A publication about modern music"
  },
  {
    "name": "MusicOHM",
    "slug": "musicohm",
    "homepage_url": "https://www.musicomh.com",
    "active": 1,
    "description": "An independent music reviews and features publication"
  },
  {
    "name": "NME",
    "slug": "nme",
    "homepage_url": "http://www.nme.com",
    "active": 1,
    "description": "The latest music and pop culture news and reviews"
  },
  {
    "name": "Pitchfork",
    "slug": "pitchfork",
    "homepage_url": "http://pitchfork.com",
    "active": 1,
    "description": "The Most Trusted Voice in Music [self-proclaimed]"
  },
  {
    "name": "Reggae Vibes",
    "slug": "reggaevibes",
    "homepage_url": "https://www.reggae-vibes.com",
    "active": 1,
    "description": "Online reggae and dancehall magazine"
  },
  {
    "name": "Resident Advisor",
    "slug": "residentadvisor",
    "homepage_url": "https://www.residentadvisor.net",
    "active": 1,
    "description": "A platform to discover electronic music, artists and events"
  },
  {
    "name": "The Line of Best Fit",
    "slug": "bestfit",
    "homepage_url": "https://www.thelineofbestfit.com",
    "active": 1,
    "description": "One of the largest independent music magazines"
  },
  {
    "name": "The Quietus",
    "slug": "quietus",
    "homepage_url": "http://thequietus.com",
    "active": 1,
    "description": "An independent voice in music and cultural criticism"
  },
  {
    "name": "XS Noize",
    "slug": "xsnoize",
    "homepage_url": "https://www.xsnoize.com",
    "active": 1,
    "description": "The latest music news, album reviews, and more"
  },
  {
    "name": "Consequence of Sound",
    "slug": "cos",
    "homepage_url": "https://consequenceofsound.net/",
    "active": 0,
    "description": "Breaking news about music, film, and TV"
  },
  {
    "name": "Drowned In Sound",
    "slug": "drownedinsound",
    "homepage_url": "http://drownedinsound.com",
    "active": 0,
    "description": "An online music magazine and community"
  },
  {
    "name": "Gig Soup",
    "slug": "gigsoup",
    "homepage_url": "http://www.gigsoupmusic.com",
    "active": 0,
    "description": "Music review blog [defunct]"
  },
  {
    "name": "Juno",
    "slug": "juno",
    "homepage_url": "https://www.juno.co.uk",
    "active": 0,
    "description": "Online record store"
  },
  {
    "name": "Juno Download",
    "slug": "junodownload",
    "homepage_url": "https://www.junodownload.com",
    "active": 0,
    "description": "Online store for dance music downloads"
  },
  {
    "name": "Under the Radar",
    "slug": "undertheradar",
    "homepage_url": "http://www.undertheradarmag.com",
    "active": 0,
    "description": "An independent music and culture magazine"
  },
  {
    "name": "XLR8R",
    "slug": "xlr8r",
    "homepage_url": "https://www.xlr8r.com",
    "active": 0,
    "description": "A music and culture magazine focusing on electronic music"
  }
];

export const feedSlugToName = new Map<string, string>(
  feeds.map(feed => [feed.slug, feed.name])
);