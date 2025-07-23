import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import { Link as RouterLink } from 'react-router';
import TimeAgo from 'react-timeago';

import { type Release } from '@/types/api';
import { cardSize } from '@/theme';
import { paths } from '@/config/paths';


export default function ReleaseCard(release: Release) {
  return (
    <Card sx={{ width: cardSize }}>
      <CardActionArea
        component={ RouterLink }
        to={ paths.release.getHref(release.album_id, release.album_slug) }
        sx={{ textDecoration: 'none', color: 'inherit' }}
      >
        <CardMedia
          sx={{ width: cardSize, height: cardSize }}
          image={ release.image}
          title={ release.album_name }
        />
      </CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{ mb: 0.2 }}>
          { release.album_name }
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          { release.artist_name }
        </Typography>
        { release.reviews[0] && (
          <Typography variant="body2" component="div" sx={{ color: 'text.secondary', mt: '0.6rem' }}>
            <span style={{ fontStyle: 'italic', fontWeight: 'bold', marginRight: '0.3rem' }}>
              { release.reviews[0].name }
            </span>
            { release.reviews[0].snippet || 'No preview available' }
            { release.reviews.length > 1 && (
              <p style={{ fontStyle: 'italic', marginTop: '0.2rem', marginBottom: 0 }}>
                + { release.reviews.length - 1 } more review{ release.reviews.length > 2 ? 's' : '' }
              </p>
            )}
          </Typography>
        )}
        { release.created && (
          <Typography variant="body2" sx={{ color: 'text.secondary', mt: 2, mb:0, fontStyle: 'normal', fontize : '0.8em' }}>
            Found <TimeAgo date={release.created} />
          </Typography>
        )}
        { release.genres.length > 0 && (
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2, mb: 0, p: 0 }}>
            { release.genres.map((genre) => (
              <Chip 
                key={genre.name}
                label={genre.name}
                size="small"
                color="secondary"
                component={ RouterLink }
                clickable
                to={ paths.genre.getHref(genre.slug) }
              />
            ))}
          </Box>
        )}
      </CardContent>
    </Card>
  );
}