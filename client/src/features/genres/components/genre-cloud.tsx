import { Link as RouterLink } from 'react-router';
import { TagCloud, type Tag } from 'react-tagcloud';
import Chip from '@mui/material/Chip';

import { paths } from '@/config/paths';
import { type TopGenres } from '@/types/api';

interface GenreCloudProps {  
  genres: TopGenres;
  action: 'filter' | 'explore';
}

type GenreTag = Tag & { props: { slug: string } };

function convertGenresToTags(genres: TopGenres): Tag[] {
  return genres.map(genre => ({
    value: genre.name,
    count: genre.count,
    props: { slug: genre.slug },
  })).sort((a, b) => a.value.localeCompare(b.value));
}

export default function GenreCloud({ genres, action }: GenreCloudProps): React.JSX.Element {
  
  function tagRenderer(tag: Tag, size: number, color: string): React.JSX.Element {
    const slug = (tag as GenreTag).props.slug;
    return (
      <Chip
        key={tag.value}
        label={tag.value}
        component={RouterLink}
        clickable
        to={action === 'filter' ? paths.genre.getHref(slug) : paths.genres_explore.getHref(slug)}
        sx={{fontSize: size, margin: 0.75, padding: 1, height: 48, color: color }}
      />
    )
  }

  return (
    <TagCloud 
      minSize={14}
      maxSize={30}
      shuffle={false}
      tags={convertGenresToTags(genres)} 
      colorOptions={{ luminosity: 'dark', hue: 'monochrome' }}
      renderer={tagRenderer}
      /* @ts-expect-error: style *should* be allowed */
      style={{ marginTop: '1em', display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}
    />
  );
}