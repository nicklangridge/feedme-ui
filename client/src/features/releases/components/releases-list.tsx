import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

import { useReleases } from '../api/get-releases';
import Spinner from '@/components/ui/spinner';

export default function ReleasesList() {
  const releasesQuery = useReleases({});

  if (releasesQuery.isLoading) return (<Spinner />);

  const releases = releasesQuery.data?.pages.flatMap((page) => page.data.albums);

  if (!releases?.length) return (<div>No releases to show</div>);

  return (
    <>
      <ul>
        {releases.map((release, index) => (
          <li key={index}>
            {release.album_name} by {release.artist_name}
          </li>
        ))}
      </ul>

      <div>
        { releasesQuery.hasNextPage && (
          <>
            { releasesQuery.isFetchingNextPage ? (
              <Spinner />
            ) : (
              <Button variant="contained" onClick={() => releasesQuery.fetchNextPage()}>
                Feed me more
              </Button>
            )}
          </>  
        )}
        
        {!releasesQuery.hasNextPage && (
          <div>That's the lot</div>
        )}
      </div>

    </>
  );
};
