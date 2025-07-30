import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List'; 
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import { Link as RouterLink } from 'react-router';
import Typography from '@mui/material/Typography';

import type { FeedConfig } from '@/types/config';
import { paths } from '@/config/paths';

interface FeedsProps {
  feeds: FeedConfig[];
}

function FeedsList({ feeds }: { feeds: FeedConfig[] }) {
  return (
    <List>
      {feeds.map((feed) => (
        <ListItem sx={{ pl: 0 }} secondaryAction={
          <IconButton edge="end" href={feed.homepage_url} target="_blank" rel="noopener noreferrer">
            <OpenInNewIcon />
          </IconButton>
        }>
          <ListItemButton component={RouterLink} to={paths.feed.getHref(feed.slug)}>
            <ListItemIcon>
              <RssFeedIcon />
            </ListItemIcon>
            <ListItemText primary={feed.name} secondary={feed.description} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  )
}

const Feeds = ({ feeds }: FeedsProps ) => {
  return (
    <>
    <Grid container spacing={2}>
      <Grid size={{xs: 12, sm: 6, md: 6, lg: 6, xl: 6 }}>
        <Card>
          <CardContent>
            <Typography variant="h5"> 
              Active Feeds
            </Typography> 
            <FeedsList feeds={ feeds.filter(feed => feed.active) } />
          </CardContent>
        </Card>
      </Grid>
      <Grid size={{xs: 12, sm: 6, md: 6, lg: 6, xl: 6 }}>
        <Card>
          <CardContent>
            <Typography variant="h5"> 
              Archived Feeds
            </Typography> 
            <FeedsList feeds={ feeds.filter(feed => !feed.active) } />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
    </>
  );
};

export default Feeds;