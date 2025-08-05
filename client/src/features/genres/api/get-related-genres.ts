import { useQuery, queryOptions } from '@tanstack/react-query';

import { api } from '@/lib/api-client';
import { type RelatedGenres } from '@/types/api';

export const getRelatedGenres = (genre: string): Promise<{ data: RelatedGenres }> => {
  return api.get(`/related-genres/${genre}`);
};

export const getRelatedGenresQueryOptions = (genre: string) => {
  return queryOptions({
    queryKey: ['related-genres', genre],
    queryFn: () => getRelatedGenres(genre),
  });
};

type UseRelatedGenresOptions = {
  genre: string;
};

export const useRelatedGenres = ({genre}: UseRelatedGenresOptions) => {
  return useQuery(getRelatedGenresQueryOptions(genre));
};
