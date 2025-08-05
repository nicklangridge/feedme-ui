import { useParams } from 'react-router';
import GenresExplore from '@/features/genres/components/genres-explore';

const GenresExploreRoute = () => {
  const params = useParams();
  if (!params.exploreGenre) return null;
  return (
    <>
      <GenresExplore genre={params.exploreGenre} />
    </>
  );
};

export default GenresExploreRoute;
