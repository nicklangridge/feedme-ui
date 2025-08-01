import { useQuery, queryOptions } from '@tanstack/react-query';

import { api } from '@/lib/api-client';
import { type TopGenres } from '@/types/api';

export const getTopGenres = (): Promise<{ data: TopGenres }> => {
  return api.get('/top-genres');
};

export const getTopGenresQueryOptions = () => {
  return queryOptions({
    queryKey: ['top-genres'],
    queryFn: () => getTopGenres(),
  });
};

export const useTopGenres = () => {
  return useQuery(getTopGenresQueryOptions());
};
