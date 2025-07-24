import ArrowBackIcon from '@mui/icons-material/ArrowBack'; 
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Chip from '@mui/material/Chip'; 
import Grid from '@mui/material/Grid';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Paper from '@mui/material/Paper';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import SellIcon from '@mui/icons-material/Sell';
import ShareIcon from '@mui/icons-material/Share';
import Typography from '@mui/material/Typography';
import { Link as RouterLink, useNavigate } from 'react-router';

import Spinner from '@/components/ui/spinner';
import { useRelease } from '../api/get-release';
import { paths } from '@/config/paths';

function Loading() {
  return (
    <Spinner />
  );
}

function NotFound() {
  return (
    <Typography variant="h5" component="div" sx={{ textAlign: 'center', marginTop: 4 }}>
      Release not found
    </Typography>
  );
}

 
type Props = {
  releaseId: number;
};

export default function ReleaseDetail({ releaseId }: Props) {
  
  const { isPending, error, data } = useRelease({ releaseId });
  const release = data?.data;
  const navigate = useNavigate();
  
  if (isPending) return Loading();
  
  if (error) { /* Handle */ }
  
  if (!release?.album_id) return NotFound();
  
  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'left' }}>
        <Button startIcon={<ArrowBackIcon />} onClick={() => navigate(-1)} sx={{ float: 'right' }}>Back</Button>
      </Box>
      <Card sx={{ padding: 2, position: 'relative' }}>
        <Grid container spacing={{xs: 2, sm: 2, md: 2, lg: 2, xl: 2 }}>
          <Grid size={{xs: 12, sm: 4, md: 4, lg: 4, xl: 6 }}>
            <Box
              component="img"
              sx={{ width: '100%', cursor: 'pointer' }}
              title={ release.album_name }
              src={ release.image }
              onClick={() => { window.location.href = release.album_uri }}
              />
          </Grid>
          <Grid size={{xs: 12, sm: 8, md: 8, lg: 8, xl: 6 }}>
            <Paper color="inherit" sx={{ padding: 2, backgroundColor: '#f5f5f5', boxShadow: 'none', borderRadius: 'none' }}>
              <Typography gutterBottom variant="h3" component="div" sx={{ mb: 0.2 }}>
                { release.album_name }
              </Typography>
              <Typography gutterBottom variant="h4" component="div">
                { release.artist_name }
              </Typography>
            </Paper>  
            <Paper color="inherit" sx={{ padding: 2, backgroundColor: '#f5f5f5', boxShadow: 'none', borderRadius: 'none', mt: 2 }}>
              { release.reviews.map((review) => (
                <Typography variant="body2" component="div" sx={{ color: 'text.secondary', mt: '0.6rem' }}>
                  <div style={{ fontStyle: 'italic', fontWeight: 'bold', marginRight: '0.3rem' }}>
                    { review.name }
                  </div>
                  { review.snippet || 'No preview available' }
                  <br />
                  <Button href={ review.url } endIcon={<OpenInNewIcon />} target="_blank" rel="noopener noreferrer" color="inherit">
                    Read more
                  </Button>
                </Typography>
              ))}
            </Paper>  
            <Paper color="inherit" sx={{ padding: 2, backgroundColor: '#f5f5f5', boxShadow: 'none', borderRadius: 'none', mt: 2 }}>
              { (release.genres.length > 0 || release.reviews.length > 0) && (
                <>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1,  p: 0 }}>
                    { release.reviews.map((review) => (
                      <Chip
                      key={review.name}
                      label={review.name}
                      color="secondary"
                      component={ RouterLink }
                      clickable
                      to={ paths.feed.getHref(review.slug) }
                      icon={<RssFeedIcon />}
                      />
                    ))}
                  </Box>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2, mb: 0, p: 0 }}>
                    { release.genres.map((genre) => (
                      <Chip 
                      key={genre.name}
                        label={genre.name}
                        color="secondary"
                        component={ RouterLink }
                        clickable
                        to={ paths.genre.getHref(genre.slug) }
                        icon={<SellIcon />}
                        />
                    ))}
                  </Box>
                </>
              )}
            </Paper>
          </Grid>
        </Grid>
        <CardActions>
          <Button startIcon={<PlayCircleIcon />} color="inherit">Spotify</Button>
          <Button startIcon={<ShareIcon />} color="inherit" onClick={()=>navigator.share({title: release.album_name, url: location.href })}>Share</Button>
        </CardActions>
      </Card>
    </>
  );
};
