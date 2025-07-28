import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import { Link as RouterLink } from 'react-router';
import TimeAgo from 'react-timeago';

import RssFeedIcon from '@mui/icons-material/RssFeed';
import SellIcon from '@mui/icons-material/Sell';

import { type Release } from '@/types/api';
import { cardSize, CardSizeXs } from '@/theme';
import { paths } from '@/config/paths';

const cardSizes = { xs: CardSizeXs, sm: cardSize };

export default function ReleaseCard(release: Release) {
  return (
    <Card sx={{ width: cardSizes }}>
      <CardActionArea
        component={ RouterLink }
        to={ paths.release.getHref(release.album_id, release.album_slug) }
        sx={{ textDecoration: 'none', color: 'inherit' }}
      >
        <CardMedia
          sx={{ width: cardSizes, height: cardSizes }}
          image={ release.image}
          title={ release.album_name }
        />
        <CardContent>
          <Typography gutterBottom variant="h3" component="div" sx={{ mb: 0.2 }}>
            { release.album_name }
          </Typography>
          <Typography gutterBottom variant="h4" component="div" sx={{ mb: 0 }}>
            by { release.artist_name }
          </Typography>
          { release.genres.length > 0 && (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2, mb: 0, p: 0 }}>
              { release.genres.slice(0, 3).map((genre) => (
                <Chip key={genre.name} label={genre.name} size="small" color="secondary" icon={<SellIcon />} />
              ))}
            </Box>
          )}
          { release.reviews.length > 0 && (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2, mb: 0, p: 0 }}>
              { release.reviews.map((review) => (
                  <Chip key={review.name} label={review.name} size="small" color="secondary" icon={<RssFeedIcon />} />
              ))}
            </Box>
          )}
        { release.created && (
          <Typography variant="body2" sx={{ color: 'text.secondary', mt: 2, mb:0, fontStyle: 'normal', fontize : '0.8em' }}>
            Found <TimeAgo date={release.created} />
          </Typography>
        )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}