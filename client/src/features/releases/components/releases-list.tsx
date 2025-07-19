import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Masonry, type RenderComponentProps } from "masonic";
import Typography from '@mui/material/Typography';

import Spinner from '@/components/ui/spinner';
import { useReleases } from '../api/get-releases';
import ReleaseCard from '../components/release-card';
import { type Release } from '@/types/api';
import { cardSize, gutterSize } from '@/theme';

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

export default function ReleasesList() {
  const releasesQuery = useReleases({});

  if (releasesQuery.isLoading) return Loading();

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
