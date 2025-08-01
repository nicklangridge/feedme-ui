import Typography from '@mui/material/Typography';
import { Link as RouterLink } from 'react-router';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { TagCloud, type Tag } from 'react-tagcloud';
import Chip from '@mui/material/Chip';

import Spinner from '@/components/ui/spinner';
import { paths } from '@/config/paths';
import { type TopGenres } from '@/types/api';
import { useTopGenres } from '@/features/feeds/api/get-genres';

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

function convertTopGenresToTags(genres: TopGenres): Tag[] {
  return genres.map(genre => ({
    value: genre.name,
    count: genre.count,
    props: { slug: genre.slug },
  }));
}

type GenreTag = Tag & { props: { slug: string } };

function tagRenderer(tag: Tag, size: number, color: string): React.JSX.Element {
  const slug = (tag as GenreTag).props.slug;
  return (
    <Chip
      key={tag.value}
      label={tag.value}
      component={RouterLink}
      clickable
      to={paths.genre.getHref(slug)}
      sx={{fontSize: size, margin: 0.75, padding: 1, height: 48, color: color }}
    />
  )
}

export default function TopGenres() {
  
  const { isPending, error, data } = useTopGenres();
  const genres = data?.data;
  
  if (isPending) return Loading();
  
  if (error) { /* Handle */ }
  
  if (!genres) return NotFound();
  
  return (
    <>
      <Card>
        <CardContent>
          <Typography variant="h5" component="div">
            Top 50 Genres
          </Typography>
          <TagCloud 
            minSize={14}
            maxSize={40}
            tags={convertTopGenresToTags(genres)} 
            colorOptions={{ luminosity: 'dark', hue: 'monochrome' }}
            renderer={tagRenderer}
            /* @ts-expect-error: style *should* be allowed */
            style={{ marginTop: '1em', display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}
          />
        </CardContent>
      </Card>
    </>
  );
};
