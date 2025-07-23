import { useParams } from 'react-router';
import ReleasesList from '@/features/releases/components/releases-list';

const ReleasesRoute = () => {
  const params = useParams();
  return (
    <>
      <ReleasesList genre={params.genre} feed={params.feed} />
    </>
  );
};

export default ReleasesRoute;
