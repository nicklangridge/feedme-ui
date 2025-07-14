export const paths = {
  home: {
    path: '/',
    getHref: () => '/',
  },
  genre: {
    path: '/genre/:genereId',
    getHref: (id: string) => `/genre/${id}`,
  },
  release: {
    path: '/release/:releaseId',
    getHref: (id: string) => `/release/${id}`,
  },
} as const;
