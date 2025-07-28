
import AppBar from '@mui/material/AppBar';
import AlbumIcon from '@mui/icons-material/Album';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import SellIcon from '@mui/icons-material/Sell';
import Slide from '@mui/material/Slide';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography'; 
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { useLocation, Link as RouterLink, useParams } from 'react-router';

import Chip from '@mui/material/Chip';

import { paths } from '@/config/paths';

function HideOnScroll({ children }: { children: React.ReactElement }) {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children ?? <div />}
    </Slide>
  );
}

function FilterChip({ label, type }: { label: string; type: 'feed' | 'genre' }) {
  const icon = type === "feed" ? <RssFeedIcon /> : <SellIcon />;
  return (
    <Chip 
      component={RouterLink}
      label={label}
      to={paths.home.getHref()}
      clickable 
      onDelete={ ()=>{ } }
      sx={{ margin: '0 auto' }}
      icon={icon}
    />
  )
}

// TODO: fetch the display name instead of using this horrible hack (which doesn't work properly for
// many feed slugs.
function slugToDisplayName(slug: string): string {
  return slug.toLowerCase().split('-').map(
    (word) => word.charAt(0).toUpperCase() + word.substring(1)
  ).join(' ');
}

function NavButton({ to, children, match, location}: { to: string; children: React.ReactNode; match: RegExp; location: string  }) {
  return (
    <Button
      component={RouterLink}
      to={to}
      color="inherit"
      sx={{ fontWeight: location.match(match) ? 'bold' : 'normal' }}
    >
      {children}
    </Button>
  );
}

export default function MainAppBar() {  
  const params = useParams(); 
  const hasFilter = Boolean(params.genre || params.feed);
  const location: string = useLocation().pathname;
  
  return (
    <>
      <HideOnScroll>
        <AppBar  position="fixed" elevation={0} style={{ backgroundColor: '#f5f5f5', boxShadow: 'none'}}>
          <Toolbar sx={{ m: '0 auto' }}  >
            {/* @ts-expect-error TODO: understand why component=RouterLink not liked by linter */}
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                href={ paths.home.path }
                component={ RouterLink }
              >  
              <AlbumIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>
            <NavButton location={location} to={ paths.home.path } match={ /^\/($|genre\/.+|feed\/.+)/i }>Latest</NavButton>
            <NavButton location={location} to={ paths.feeds.path } match={ /^\/feeds/i }>Feeds</NavButton>
            <NavButton location={location} to={ paths.genres.path } match={ /^\/genres/i }>Genres</NavButton>
          </Toolbar>
          { (params.genre || params.feed) && (
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 0, mb: 1 }}>
              { params.genre && ( <FilterChip type="genre" label={ slugToDisplayName(params.genre) } /> ) }
              { params.feed  && ( <FilterChip type="feed" label={ slugToDisplayName(params.feed) } /> ) }
            </Box>
          )}
        </AppBar>
      </HideOnScroll>
      <Box sx={{ mt: hasFilter ? '7em' : 0 }}></Box>
    </>
  );
}