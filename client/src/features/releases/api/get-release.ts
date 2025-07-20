import { useQuery, queryOptions } from '@tanstack/react-query';

import { api } from '@/lib/api-client';
import { type Release } from '@/types/api';

export const getRelease = ({ releaseId }: { releaseId: number }): Promise<{ data: Release }> => {
  return api.get(`/album/${releaseId}`);
};

export const getReleaseQueryOptions = (releaseId: number) => {
  return queryOptions({
    queryKey: ['release', releaseId],
    queryFn: () => getRelease({ releaseId }),
  });
};

type UseReleaseOptions = {
  releaseId: number;
};

export const useRelease = ({ releaseId }: UseReleaseOptions) => {
  return useQuery(getReleaseQueryOptions(releaseId));
};
