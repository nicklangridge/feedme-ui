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
import { paths } from '@/config/paths';

export default function ReleaseCard(release: Release) {
  return (
    <Card sx={{ height: '100%' }}>
      <CardActionArea
        component={ RouterLink }
        to={ paths.release.getHref(release.album_id, release.album_slug) }
        sx={{ textDecoration: 'none', color: 'inherit', height: '100%' }}
      >
        <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
          <CardMedia
            sx={{ width: '100%', aspectRatio: '1 / 1', objectFit: 'cover' }}
            image={ release.image}
            title={ release.album_name }
          />
          <CardContent sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <Typography gutterBottom variant="h5" component="div" sx={{ mb: 0.2 }}>
              { release.album_name }
            </Typography>
            <Typography gutterBottom variant="h6" component="div" sx={{ mb: 0 }}>
              by { release.artist_name }
            </Typography>
            { release.genres.length > 0 && (
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2, mb: 0, p: 0 }}>
                { release.genres.slice(0, 3).map((genre) => (
                  <Chip key={genre.name} label={genre.name} size="small" color="secondary" icon={<SellIcon />} 
                  component={ RouterLink } to={ paths.genre.getHref(genre.slug) } />
                ))}
              </Box>
            )}
            { release.reviews.length > 0 && (
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2, mb: 0, p: 0 }}>
                { release.reviews.map((review) => (
                  <Chip key={review.name} label={review.name} size="small" color="secondary" icon={<RssFeedIcon />} 
                  component={ RouterLink } to={ paths.feed.getHref(review.slug) } />
                ))}
              </Box>
            )}
            { release.created && (
              <>
                <Box sx={{ flexGrow: 1 }}></Box>
                <Typography variant="body2" sx={{ color: 'text.secondary', mt: 2, mb:0, fontSize : '0.8em' }}>
                  Found <TimeAgo date={release.created} />
                </Typography>
              </>
            )}
          </CardContent>
        </Box>
      </CardActionArea>
    </Card>
  );
}