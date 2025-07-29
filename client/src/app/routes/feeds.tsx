import Feeds from '@/features/feeds/components/feeds';
import { feeds } from '@/config/feeds';

const FeedsRoute = () => {
  return (
    <>
      <Feeds feeds={feeds} />
    </>
  );
};

export default FeedsRoute;
