import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { type Release } from '@/types/api';

const cardSize = 320;

export default function ReleaseCard(release: Release) {
  return (
    <Card sx={{ width: cardSize }}>
      <CardMedia
        sx={{ width: cardSize, height: cardSize }}
        image={ release.image}
        title={ release.album_name }
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{ mb: 0.3 }}>
          { release.album_name }
        </Typography>
        <Typography gutterBottom variant="h6" component="div" sx={{ color: 'text.secondary' }}>
          { release.artist_name }
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          { release.reviews[0]?.snippet || 'No reviews available' }
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
      </CardActions>
    </Card>
  );
}