
import AppBar from '@mui/material/AppBar';
import AlbumIcon from '@mui/icons-material/Album';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Slide from '@mui/material/Slide';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography'; 
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { useLocation, Link as RouterLink, useParams } from 'react-router';

import Chip from '@mui/material/Chip';

import { paths } from '@/config/paths';
import { constrainedGridWidth } from '@/theme';

function HideOnScroll({ children }: { children: React.ReactElement }) {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children ?? <div />}
    </Slide>
  );
}

function FilterChip({ label }: {label: string} ) {
  return (
    <Chip 
      component={RouterLink}
      label={label}
      to={paths.home.getHref()}
      clickable 
      onDelete={ ()=>{ } }
      sx={{ ...constrainedGridWidth, margin: '0 auto' }}
    />
  )
}

function ContentSpacer({ hasFilter }: { hasFilter: boolean }) {
  return (
    <Box sx={{ mt: hasFilter ? '7em' : 0 }}></Box>
  )    
}

// TODO: fetch the display name instead of using this horrible hack (which doesn't even work for
// many feed slugs.
function slugToDisplayName(slug: string): string {
  return slug.toLowerCase().split('-').map(
    (word) => word.charAt(0).toUpperCase() + word.substring(1)
  ).join(' ');
}

export default function MainAppBar() {  
  const params = useParams(); 
  const hasFilter = Boolean(params.genre || params.feed);
  const path: string = useLocation().pathname;
  
  function NavButton({ to, children, match }: { to: string; children: React.ReactNode; match: RegExp }) {
    return (
      <Button
        component={RouterLink}
        to={to}
        color="inherit"
        sx={{ fontWeight: path.match(match) ? 'bold' : 'normal' }}
      >
        {children}
      </Button>
    );
  }
  
  return (
    <>
      <HideOnScroll>
        <AppBar position="fixed" elevation={0} style={{ backgroundColor: '#f5f5f5', boxShadow: 'none'}}>
          <Toolbar sx={ constrainedGridWidth }>
            {/* @ts-expect-error TODO: understand why component=RouterLink not liked by linter */}
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                href={ paths.home.path }
                component={ RouterLink }
              >  
              <AlbumIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>
            <NavButton to={ paths.home.path } match={ /^\/($|genre\/.+|feed\/.+)/i }>Latest</NavButton>
            <NavButton to={ paths.feeds.path } match={ /^\/feeds/i }>Feeds</NavButton>
            <NavButton to={ paths.genres.path } match={ /^\/genres/i }>Genres</NavButton>
          </Toolbar>
          { params.genre && ( <FilterChip label={ slugToDisplayName(params.genre) } /> ) }
          { params.feed  && ( <FilterChip label={ slugToDisplayName(params.feed) } /> ) }
        </AppBar>
      </HideOnScroll>
      <ContentSpacer hasFilter={ hasFilter } />
    </>
  );
}