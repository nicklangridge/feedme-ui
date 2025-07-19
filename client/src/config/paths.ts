export const paths = {
  // todo: next release paths
  home: {
    path: '/',
    getHref: () => '/',
  },
  genre: {
    path: '/genre/:genereId',
    getHref: (id: string) => `/genre/${id}`,
  },
  feed: {
    path: '/feed/:feedId',
    getHref: (id: string) => `/feed/${id}`,
  },
  genres: {
    path: '/genres',
    getHref: () => '/genres',
  },
  feeds: {
    path: '/feeds',
    getHref: () => '/feeds',
  },
  random: {
    path: '/random',
    getHref: () => '/random',
  },
  release: {
    path: '/release/:releaseId/:releaseSlug?',
    getHref: (id: string, slug?: string) => (`/release/${id}` + (slug ? `/${slug}` : '')),
  },
} as const;
