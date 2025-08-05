import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import Spinner from '@/components/ui/spinner';
import GenreCloud from './genre-cloud';
import { useTopGenres } from '@/features/genres/api/get-genres';

function Loading() {
  return (
    <Spinner />
  );
}

function NotFound() {
  return (
    <Typography variant="h5" component="div" sx={{ textAlign: 'center', marginTop: 4 }}>
      No genres found
    </Typography>
  );
}

export default function GenresExplore() {
  
  const { isPending, error, data } = useTopGenres();
  const genres = data?.data;
  
  if (isPending) return Loading();
  
  if (error) { /* Handle */ }
  
  if (!genres) return NotFound();
  
  return (
    <>
      <Card>
        <CardContent>
          <Typography variant="h5" component="div" sx={{ textAlign: 'center' }}>
            Top 50 Genres
          </Typography>
          <GenreCloud genres={genres} action="explore" />
        </CardContent>
      </Card>
    </>
  );
};
