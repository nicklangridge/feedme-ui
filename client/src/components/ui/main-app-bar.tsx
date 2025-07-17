
import AppBar from '@mui/material/AppBar';
import AlbumIcon from '@mui/icons-material/Album';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Slide from '@mui/material/Slide';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useScrollTrigger from '@mui/material/useScrollTrigger';

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
          <Button color="inherit">Feeds</Button>
          <Button color="inherit">Genres</Button>
          <Button color="inherit">Random</Button>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
}