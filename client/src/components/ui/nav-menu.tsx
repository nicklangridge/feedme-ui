import React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link as RouterLink } from 'react-router';
import { paths } from '@/config/paths';

export default function NavMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  return (
    <>
      <IconButton color="inherit" onClick={handleClick}><ExpandMoreIcon /></IconButton>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuList dense>
          <MenuItem onClick={handleClose} component={RouterLink} to={paths.about.getHref()}>About</MenuItem>
        </MenuList>
      </Menu>
    </>
  );
}