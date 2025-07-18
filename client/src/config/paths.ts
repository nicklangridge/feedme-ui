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
    getHref: () => '/feeds',
  },
  release: {
    path: '/release/:releaseId',
    getHref: (id: string) => `/release/${id}`,
  },
} as const;
