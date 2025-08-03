import ArrowBackIcon from '@mui/icons-material/ArrowBack'; 
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip'; 
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import SellIcon from '@mui/icons-material/Sell';
import ShareIcon from '@mui/icons-material/Share';
import Typography from '@mui/material/Typography';
import { Link as RouterLink, useNavigate } from 'react-router';

import Snippet from './snippet';
import Spinner from '@/components/ui/spinner';
import { useRelease } from '../api/get-release';
import { paths } from '@/config/paths';
import { type Release } from '@/types/api';
import ArtistBio from './artist-bio';

type ReleaseDetailProps = {
  releaseId: number;
};

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
 
function navigateBack(navigate: ReturnType<typeof useNavigate>) {
  //if (document.referrer != "") {
    navigate(-1);
  //} else {
  //  navigate(paths.home.getHref());
  //}
}

export default function ReleaseDetail({ releaseId }: ReleaseDetailProps) {
  
  const { isPending, error, data } = useRelease({ releaseId });
  const release = data?.data;
  const navigate = useNavigate();

  if (isPending) return Loading();
  
  if (error) { /* Handle */ }
  
  if (!release?.album_id) return NotFound();
  
  return (
    <>
      <Grid container spacing={2}>
        <Grid size={{xs: 12, sm: 5, md: 5, lg: 4, xl: 6 }}>
          <ReleaseInfo release={release} />
        </Grid>
        <Grid size={{xs: 12, sm: 7, md: 7, lg: 8, xl: 6 }}>
          <ReleaseReviews release={release} />
          <ReleaseGenres release={release} />
          <ReleaseFeeds release={release} />
          <ArtistBio artistName={release.artist_name} />
        </Grid>
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        <Button startIcon={<ArrowBackIcon />} onClick={() => navigateBack(navigate)}>Back</Button>
      </Box>
    </>
  );
};

function ReleaseInfo({ release }: { release: Release }) {
  return (
    <Card>
      <Box
      component="img"
      sx={{ width: '100%', cursor: 'pointer' }}
      title={ release.album_name }
      src={ release.image }
      onClick={() => { window.location.href = release.album_uri }}
      />
      <CardContent>
        <Typography gutterBottom variant="h3" component="div" sx={{ mb: 0.2 }}>
          { release.album_name }
        </Typography>
        <Typography gutterBottom variant="h4" component="div" sx={{ mb: 0 }}>
          by { release.artist_name }
        </Typography>
      </CardContent>
      <CardActions>
        <Button startIcon={<PlayCircleIcon />} color="inherit" onClick={() => { window.location.href = release.album_uri }}>Spotify</Button>
        <Button startIcon={<ShareIcon />} color="inherit" onClick={()=>navigator.share({title: release.album_name, url: location.href })}>Share</Button>
      </CardActions>
    </Card>
  );
}

function ReleaseReviews({ release }: { release: Release }) {
  if (release.reviews.length <= 0) return null;
  return (
    <Card>
      <CardContent>
        <Typography variant="h5"> 
          Reviews
        </Typography>
        <List>
        { release.reviews.map((review) => (
          <ListItem sx={{ p:0, m: 0 }} key={review.slug}>
            <ListItemButton href={review.url} target="_blank" rel="noopener noreferrer">
              <ListItemText primary={review.name} secondary={ <Snippet text={review.snippet} /> } />
              <ListItemIcon sx={{ minWidth: 'auto', ml:2, mr: 0 }}>
                <OpenInNewIcon />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        ))}
        </List>
      </CardContent>
    </Card>
  );
}

function ReleaseGenres({ release }: { release: Release }) {
  if (release.genres.length <= 0) return null;
  return (
    <Card sx={{ mt: 2 }}>
      <CardContent>
        <Typography variant="h5" sx={{ mb: 2 }}>
          Genres
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2, mb: 0, p: 0 }}>
          { release.genres.map((genre) => (
            <ReleaseTag label={genre.name} type="genre" key={genre.slug} to={paths.genre.getHref(genre.slug)} />
          ))}
        </Box>
      </CardContent>
    </Card>
  )
}

function ReleaseFeeds({ release }: { release: Release }) {
  if (release.reviews.length <= 0) return null;
  return (
    <Card sx={{ mt: 2 }}>
      <CardContent>
        <Typography variant="h5" sx={{ mb: 2 }}>
          Feeds
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1,  p: 0 }}>
          { release.reviews.map((review) => (
            <ReleaseTag label={review.name} key={review.slug} type="feed" to={paths.feed.getHref(review.slug)} />
          ))}
        </Box>
      </CardContent>
    </Card>
  )
}

function ReleaseTag({ label, type, to }: { label: string; type: "feed" | "genre"; to: string }) {
  const icon = type === "feed" ? <RssFeedIcon /> : <SellIcon />;
  return (
    <Chip
      key={label}
      label={label}
      color="secondary"
      component={RouterLink}
      clickable
      to={to}
      icon={icon}
    />
  );
}