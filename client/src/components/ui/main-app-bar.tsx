
import AppBar from '@mui/material/AppBar';
import AlbumIcon from '@mui/icons-material/Album';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Slide from '@mui/material/Slide';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography'; 
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { useLocation } from 'react-router';

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
  const path = useLocation().pathname;

  // TODO: make a appbar button component to encapsulate the mess below
  
  return (  
    <HideOnScroll>
      <AppBar position="fixed" elevation={0} style={{ backgroundColor: '#f5f5f5', boxShadow: 'none'}}>
        <Toolbar sx={ constrainedGridWidth }>
          <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >  
            <AlbumIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>
          {/* <Chip size="small" label="ambient" onClick={null} onDelete={() => {}} /> */}
          <Button
            color="inherit" 
            href={ paths.home.path }
            sx={{ fontWeight: path.match(/^\/(|genre\/.+|feed\/.+)$/) ? 'bold' : 'normal' }}
          >
            Latest
          </Button>
          <Button 
            color="inherit"
            sx={{ fontWeight: path.match(/^\/feeds$/i) ? 'bold' : 'normal' }}
            href={ paths.feeds.path }
          >
            Feeds
          </Button>
          <Button
            color="inherit"
            sx={{ fontWeight: path.match(/^\/genres$/i) ? 'bold' : 'normal' }}
            href={ paths.genres.path }
          >
            Genres
          </Button>
          <Button 
            color="inherit"
            sx={{ fontWeight: path.match(/^\/random$/i) ? 'bold' : 'normal' }}
            href={ paths.random.path }
          >
            Random
          </Button>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
}