import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SellIcon from '@mui/icons-material/Sell';

import Spinner from '@/components/ui/spinner';
import GenreCloud from './genre-cloud';
import Button from '@mui/material/Button';
import { paths } from '@/config/paths';
import { useRelatedGenres } from '../api/get-related-genres';

function Loading() {
  return (
    <Spinner />
  );
}

function NotFound() {
  return (
    <Typography variant="h5" component="div" sx={{ textAlign: 'center', marginTop: 4 }}>
      Genre not found
    </Typography>
  );
}

export default function GenresExplore({genre}: { genre: string }) {

  const { isPending, error, data } = useRelatedGenres({ genre });
  const genres = data?.data;
  
  if (isPending) return Loading();
  
  if (error) { /* Handle */ }
  
  if (!genres?.genre) return NotFound();
  
  return (
    <>
      <Card>
        <CardContent sx={{ textAlign: 'center' }}>
          <Typography variant="h3" component="div" sx={{ textAlign: 'center', my: 2 }}>
            <SellIcon sx={{ verticalAlign: 'middle' }} /> {genres.genre.name}
          </Typography>
          <Button endIcon={<ArrowForwardIcon />} color="inherit" href={paths.genre.getHref(genre)}>
            See&nbsp;<strong>{ genres.genre.count }</strong>&nbsp;releases in this genre
          </Button>
        </CardContent>
      </Card>
      <Card sx={{ mt: 2 }}>
        <CardContent>
          <Typography variant="h5" component="div" sx={{ textAlign: 'center' }}>
            Related Genres
          </Typography>
          <GenreCloud genres={genres.related} action="explore" />
        </CardContent>
      </Card>
    </>
  );
};
