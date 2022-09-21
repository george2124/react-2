import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';

const pages = [{enlace:'/categoria/Mas vendidos', nombre:'Mas vendidos'}, {enlace:'/categoria/vegana', nombre:'Especiales Veganos'}, {enlace:'/categoria/ofertas', nombre:'Promo y ofertas'} ];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export default function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{mr: 2}}
            >
             <MenuIcon />
            </IconButton>
            <Typography variant='h6' component='div' sx={{ flexGrow: 1}}>
              <NavLink className='links' to="/" style={{ textDecoration: 'none'}}> 
               Logo
              </NavLink>
            </Typography>
            <Typography variant='h6' component='div' sx={{ flexGrow: 1}}>
              <NavLink
              to="/categoria/Mas vendidos"
              style={{textDecoration: "none"}}
              >  
               Más vendidos
              </NavLink>
            </Typography>
            <Typography variant='h6' component='div' sx={{ flexGrow: 1}}>
              <NavLink className='links' to="/categoria/vegana" style={{ textDecoration: 'none'}}> 
               Vegana
              </NavLink>
            </Typography>
            <Typography variant='h6' component='div' sx={{ flexGrow: 1}}>
              <NavLink className='links' to="/categoria/ofertas" style={{ textDecoration: 'none'}}> 
               Ofertas
              </NavLink>
            </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

