import { AppBar, Toolbar, Tabs, Tab, Button, Typography } from '@mui/material'
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useMediaQueryTheme } from '../../hooks/useMediaQueryTheme';
import { NavBarDrawer } from './partials/NavBarDrawer';

export const NavBar = () => {
  const [itemSelectionNavbar, setItemSelectionNavbar] = useState(0)
  const location = useLocation();
  const navigate = useNavigate();
  const themeMediaQuery = useMediaQueryTheme("md");

  const storedUser = sessionStorage.getItem('user');
  // FIXED: colocar contextApi
  const { name } = JSON.parse(storedUser) || []
  

  const handleLogOut = () => {
    sessionStorage.removeItem('user');
    navigate('/loginUser');
  }

  return (
    <AppBar color='primary'>
      <Toolbar>
        <TravelExploreIcon />
        {
          themeMediaQuery ? (
            <>
              <Typography sx={{ pl: 1 }}>Blog Viajeros</Typography>
              <NavBarDrawer />
            </>
          ) : location.pathname === '/home' ||
            location.pathname === '/admin' ||
            location.pathname === '/detailpublication'
            ? (
              storedUser ? (
                <>
                  <Tabs
                    textColor='inherit'
                    value={itemSelectionNavbar}
                    indicatorColor='secondary'
                    onChange={(e, itemSelectionNavbar) => setItemSelectionNavbar(itemSelectionNavbar)}
                  >
                    <Tab label="Inicio" onClick={() => navigate('/home')} />
                    <Tab label="Administrador" onClick={() => navigate('/admin')} />
                  </Tabs>
                  <Tabs sx={{ marginLeft: "auto" }} value={0} textColor='inherit'>
                    <Tab label={`Hola ${name}`} disableTouchRipple disabled />
                  </Tabs>
                  <Button
                    sx={{ marginLeft: 1 }}
                    variant="contained"
                    color="secondary"
                    onClick={handleLogOut}>Cerrar sesión</Button>
                </>
              ) : (
                <>
                  <Tabs
                    textColor='inherit'
                    value={itemSelectionNavbar}
                    indicatorColor='secondary'
                    onChange={(e, itemSelectionNavbar) => setItemSelectionNavbar(itemSelectionNavbar)}
                  >
                    <Tab label="Inicio" onClick={() => navigate('/home')} />
                  </Tabs>
                  <Button
                    sx={{ marginLeft: "auto" }}
                    variant="contained"
                    color="secondary"
                    onClick={() => navigate('/loginUser')}>Ingresar</Button>
                </>
              )
            ) : (
              <>
                <Tabs
                  textColor='inherit'
                  value={itemSelectionNavbar}
                  indicatorColor='secondary'
                  onChange={(e, itemSelectionNavbar) => setItemSelectionNavbar(itemSelectionNavbar)}
                >
                  <Tab label="Inicio" onClick={() => navigate('/home')} />
                </Tabs>
              </>
            )
        }
      </Toolbar>
    </AppBar>
  )
}
