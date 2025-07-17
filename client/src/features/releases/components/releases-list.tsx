import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Masonry, type RenderComponentProps } from "masonic";

import { useReleases } from '../api/get-releases';
import Spinner from '@/components/ui/spinner';
import ReleaseCard from '../components/release-card';
import { type Release } from '@/types/api';
import { cardSize, gutterSize, constrainedGridWidth } from '@/theme';

const MasonryCard = ({ data }: RenderComponentProps<Release>) => ( <ReleaseCard {...data} /> ); 

export default function ReleasesList() {
  const releasesQuery = useReleases({});

  if (releasesQuery.isLoading) return (<Spinner />);

  const releases = releasesQuery.data?.pages.flatMap((page) => page.data.albums);

  if (!releases?.length) return (<div>No releases to show</div>);

  return (
    <>
      <Box sx={{ margin: '0 auto', ...constrainedGridWidth }}>
        <Masonry 
          items={releases}
          render={MasonryCard}
          columnWidth={cardSize}
          maxColumnWidth={cardSize}
          columnGutter={gutterSize}
          rowGutter={gutterSize}
          maxColumnCount={4}
        />
      </Box>
      { releasesQuery.hasNextPage && (
        <>
          <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
          { releasesQuery.isFetchingNextPage ? (
            <Spinner />
          ) : (
            <Button variant="contained" color="secondary" onClick={() => releasesQuery.fetchNextPage()}>
              Feed me more
            </Button>
          )}
          </Box>
        </>  
      )}
      { !releasesQuery.hasNextPage && (
        <div>That's the lot</div>
      )}
    </>
  );
};
