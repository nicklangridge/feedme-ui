import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import Spinner from '@/components/ui/spinner';
import ReleaseCard from '../components/release-card';
import { useReleases } from '../api/get-releases';

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
  
  const releases = releasesQuery.data?.pages.flatMap((page) => page.data.albums);

  if (!releases?.length) return NoReleases();

  return (
    <>
      <Grid container spacing={2}>
        { releases.map((release) => (
          <Grid key={release.album_id} size={{ xs: 6, sm: 6, md: 4, lg: 3, xl: 3 }} >
            <ReleaseCard {...release} />
          </Grid>
        )) }
      </Grid>
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
