import { useParams } from 'react-router';
import ReleaseDetail from '@/features/releases/components/release-detail';

const ReleaseRoute = () => {
  const params = useParams();
  return (
    <>
      <ReleaseDetail releaseId={ Number(params.releaseId) } />
    </>
  );
};

export default ReleaseRoute;
