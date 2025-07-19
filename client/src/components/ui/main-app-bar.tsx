
import AppBar from '@mui/material/AppBar';
import AlbumIcon from '@mui/icons-material/Album';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Slide from '@mui/material/Slide';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography'; 
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { useLocation, Link as RouterLink } from 'react-router';

// import {
//   Link as RouterLink,
//   LinkProps as RouterLinkProps,
//   MemoryRouter,
//   StaticRouter,
// } from 'react-router';

//import Chip from '@mui/material/Chip';

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

export default function MainAppBar() {  
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
          {/* <Chip size="small" label="ambient" onClick={null} onDelete={() => {}} /> */}
          <NavButton to={ paths.home.path } match={ /^\/($|genre\/.+|feed\/.+)/i }>
            Latest
          </NavButton>
          <NavButton to={ paths.feeds.path } match={ /^\/feeds/i }>
            Feeds
          </NavButton>
          <NavButton to={ paths.genres.path } match={ /^\/genres/i }>
            Genres
          </NavButton>
          <NavButton to={ paths.random.path } match={ /^\/random/i }>
            Random
          </NavButton>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
}