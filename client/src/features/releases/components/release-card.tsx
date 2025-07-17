import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

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
        <Typography gutterBottom variant="h6" component="div">
          { release.artist_name }
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
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
        { release.genres.length > 0 && (
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2, mb: 0 }}>
            { release.genres.map((genre) => (
              <Chip 
                key={genre.name}
                label={genre.name}
                size="small"
                color="secondary"
                onClick={()=>1}
              />
            ))}
          </Box>
        )}
      </CardContent>
    </Card>
  );
}