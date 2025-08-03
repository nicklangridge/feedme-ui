import { useQuery, queryOptions } from '@tanstack/react-query';
import { api } from '@/lib/api-client';

interface ArtistInfo {
  artist: {
    bio: {
      content: string;
    };
  };
}


export const getArtistInfo = ({ artistName }: { artistName: string }): Promise<{ data: ArtistInfo }> => {
  return api.get(`artist-info/${artistName}`);
};

export const getArtistInfoQueryOptions = (artistName: string) => {
  return queryOptions({
    queryKey: ['artist-info', artistName],
    queryFn: () => getArtistInfo({ artistName }),
  });
};

type UseArtistInfoOptions = {
  artistName: string;
};

export const useArtistInfo = ({ artistName }: UseArtistInfoOptions) => {
  return useQuery(getArtistInfoQueryOptions(artistName));
};
