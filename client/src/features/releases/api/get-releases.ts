import { useInfiniteQuery } from '@tanstack/react-query';

import { api } from '@/lib/api-client';
import { type Releases } from '@/types/api';

const pageSize = 30;

export type GetReleasesOptions = {
  feeds?: string,
  genres?: string,
  category?: string,
  keywords?: string,
  region?: string,
}

type GetReleasesAPIParams = GetReleasesOptions & {
  offset: number,
  limit: number,
};

export const getReleases = (params: GetReleasesAPIParams): Promise<{ data: Releases }> => {
  return api.get('/albums', { params });
};

export const useReleases = (options: GetReleasesOptions) => {
  return useInfiniteQuery({
    queryKey: ['releases', options],
    queryFn: ({ pageParam = 1 }) => {
      return getReleases({
        ...options,
        offset: (pageParam - 1) * pageSize,
        limit: pageSize, 
      })
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages, lastPageParam) => {
      if (lastPage.data.albums.length === 0) {
        return undefined
      }
      return lastPageParam + 1;
    },
  });
};
