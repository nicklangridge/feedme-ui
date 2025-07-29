import type { FeedConfig } from '@/types/config';

export const feeds: FeedConfig[] = [
  {
    "name": "Clash",
    "slug": "clash",
    "homepage_url": "http://www.clashmusic.com",
    "active": 1
  },
  {
    "name": "Crack",
    "slug": "crack",
    "homepage_url": "https://crackmagazine.net",
    "active": 0
  },
  {
    "name": "DIY",
    "slug": "diy",
    "homepage_url": "https://diymag.com",
    "active": 0
  },
  {
    "name": "Guardian",
    "slug": "guardian",
    "homepage_url": "https://www.theguardian.com",
    "active": 1
  },
  {
    "name": "Inverted Audio",
    "slug": "invertedaudio",
    "homepage_url": "https://inverted-audio.com",
    "active": 1
  },
  {
    "name": "Loud and Quiet",
    "slug": "loudandquiet",
    "homepage_url": "https://www.loudandquiet.com",
    "active": 1
  },
  {
    "name": "MusicOHM",
    "slug": "musicohm",
    "homepage_url": "https://www.musicomh.com",
    "active": 1
  },
  {
    "name": "NME",
    "slug": "nme",
    "homepage_url": "http://www.nme.com",
    "active": 1
  },
  {
    "name": "Pitchfork",
    "slug": "pitchfork",
    "homepage_url": "http://pitchfork.com",
    "active": 1
  },
  {
    "name": "Reggae Vibes",
    "slug": "reggaevibes",
    "homepage_url": "https://www.reggae-vibes.com",
    "active": 1
  },
  {
    "name": "Resident Advisor",
    "slug": "residentadvisor",
    "homepage_url": "https://www.residentadvisor.net",
    "active": 1
  },
  {
    "name": "The Line of Best Fit",
    "slug": "bestfit",
    "homepage_url": "https://www.thelineofbestfit.com",
    "active": 1
  },
  {
    "name": "The Quietus",
    "slug": "quietus",
    "homepage_url": "http://thequietus.com",
    "active": 1
  },
  {
    "name": "XS Noize",
    "slug": "xsnoize",
    "homepage_url": "https://www.xsnoize.com",
    "active": 1
  },
  {
    "name": "Consequence of Sound",
    "slug": "cos",
    "homepage_url": "https://consequenceofsound.net/",
    "active": 0
  },
  {
    "name": "Drowned In Sound",
    "slug": "drownedinsound",
    "homepage_url": "http://drownedinsound.com",
    "active": 0
  },
  {
    "name": "Gig Soup",
    "slug": "gigsoup",
    "homepage_url": "http://www.gigsoupmusic.com",
    "active": 0
  },
  {
    "name": "Juno",
    "slug": "juno",
    "homepage_url": "https://www.juno.co.uk",
    "active": 0
  },
  {
    "name": "Juno Download",
    "slug": "junodownload",
    "homepage_url": "https://www.junodownload.com",
    "active": 0
  },
  {
    "name": "Under the Radar",
    "slug": "undertheradar",
    "homepage_url": "http://www.undertheradarmag.com",
    "active": 0
  },
  {
    "name": "XLR8R",
    "slug": "xlr8r",
    "homepage_url": "https://www.xlr8r.com",
    "active": 0
  }
];

export const feedSlugToName = new Map<string, string>(
  feeds.map(feed => [feed.slug, feed.name])
);