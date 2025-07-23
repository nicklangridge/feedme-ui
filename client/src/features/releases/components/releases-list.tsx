import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Masonry, type RenderComponentProps } from "masonic";

import Spinner from '@/components/ui/spinner';
import ReleaseCard from '../components/release-card';
import { useReleases } from '../api/get-releases';
import { cardSize, gutterSize } from '@/theme';
import { type Release } from '@/types/api';

const MasonryCard = ({ data }: RenderComponentProps<Release>) => ( <ReleaseCard {...data} /> ); 

function Loading() {
  return (
    <Spinner />
  );
}

function NoReleases() {
  return (
    <Typography variant="h5" component="div" sx={{ textAlign: 'center', marginTop: 4 }}>
      No releases to show
    </Typography>
  );
}

interface ReleasesListProps {
  genre?: string;
  feed?: string;
}

export default function ReleasesList({ genre, feed }: ReleasesListProps) {
  console.log('ReleasesList genre/feed', genre, '/', feed);
  const releasesQuery = useReleases({ genres: genre, feeds: feed });

  if (releasesQuery.isLoading) return Loading();
  
  // TODO: use Masonry infinite loader https://www.npmjs.com/package/masonic#useinfiniteloaderloadmoreitems-options 
  const releases = releasesQuery.data?.pages.flatMap((page) => page.data.albums);

  if (!releases?.length) return NoReleases();

  return (
    <>
      <Masonry 
        items={releases}
        render={MasonryCard}
        columnWidth={cardSize}
        maxColumnWidth={cardSize}
        columnGutter={gutterSize}
        rowGutter={gutterSize}
        maxColumnCount={4}
      />
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
        { releasesQuery.hasNextPage && (
          <>
            { releasesQuery.isFetchingNextPage ? (
              <Spinner />
            ) : (
              <Button variant="contained" color="secondary" onClick={() => releasesQuery.fetchNextPage()}>
                Feed me more
              </Button>
            )}
          </>  
        )}
        { !releasesQuery.hasNextPage && (
          <p>That's the lot</p>
        )}
      </Box>
    </>
  );
};
