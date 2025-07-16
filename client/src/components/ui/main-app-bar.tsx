
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import AlbumIcon from '@mui/icons-material/Album';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';

// todo: move to config or theme
const cardSize = 320;
const gutterSize = 16; 

function gridWidth(cols: number): number {
  return (cardSize * cols) + (gutterSize * (cols - 1));
}

export default function MainAppBar() {
  return (
    <AppBar position="fixed" elevation={0} style={{ backgroundColor: '#f5f5f5', boxShadow: 'none'}}>
      <Toolbar sx={{ 
        backgroundColor: '#f5f5f5',
        margin: '0 auto',
        [`@media (min-width: ${gridWidth(4)}px)`]: { width: `${gridWidth(4)}px` },
        [`@media (max-width: ${gridWidth(4)}px)`]: { width: `${gridWidth(3)}px` },
        [`@media (max-width: ${gridWidth(3)}px)`]: { width: `${gridWidth(2)}px` },
        [`@media (max-width: ${gridWidth(2)}px)`]: { width: `${gridWidth(1)}px` }
      }}>
        <IconButton
            size="extra-large"
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
  );
}