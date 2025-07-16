import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Masonry, type RenderComponentProps } from "masonic";

import { useReleases } from '../api/get-releases';
import Spinner from '@/components/ui/spinner';
import ReleaseCard from '../components/release-card';
import { type Release } from '@/types/api';

// todo: move to config or theme
const cardSize = 320;
const gutterSize = 16; 

function gridWidth(cols: number): number {
  return (cardSize * cols) + (gutterSize * (cols - 1));
}

const MasonryCard = ({ data }: RenderComponentProps<Release>) => ( <ReleaseCard {...data} /> ); 

export default function ReleasesList() {
  const releasesQuery = useReleases({});

  if (releasesQuery.isLoading) return (<Spinner />);

  const releases = releasesQuery.data?.pages.flatMap((page) => page.data.albums);

  if (!releases?.length) return (<div>No releases to show</div>);

  return (
    <>
      <Box sx={{ 
        margin: '0 auto',
        [`@media (min-width: ${gridWidth(4)}px)`]: { width: `${gridWidth(4)}px` },
        [`@media (max-width: ${gridWidth(4)}px)`]: { width: `${gridWidth(3)}px` },
        [`@media (max-width: ${gridWidth(3)}px)`]: { width: `${gridWidth(2)}px` },
        [`@media (max-width: ${gridWidth(2)}px)`]: { width: `${gridWidth(1)}px` }
      }}>
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
            <Button variant="contained" onClick={() => releasesQuery.fetchNextPage()}>
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
