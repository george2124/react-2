import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { NavLink } from 'react-router-dom';

const pages = [{enlace:'/categoria/Mas vendidos', nombre:'Mas vendidos'}, {enlace:'/categoria/vegana', nombre:'Especiales Veganos'}, {enlace:'/categoria/ofertas', nombre:'Promo y ofertas'} ];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export default function NavBar() {
 
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
            <button onClick={'/Cart'}>
              {/* <CartWidget/> */}
            </button>
            
              <NavLink className='links' to="/Cart" style={{ textDecoration: 'none'}}> 
                {/* <CartWidget/> */}
              </NavLink>
           
        </Toolbar>
      </AppBar>
    </Box>
  );
};

