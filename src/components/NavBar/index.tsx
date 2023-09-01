import { AppBar, Toolbar, Tabs, Tab, Button, Typography } from '@mui/material'
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import { useState } from 'react';
import { NavBarDrawer } from './NavBarDrawer';
import { useLocation, useNavigate } from 'react-router-dom';
import { LoginUser } from '..';
import { useMediaQueryTheme } from '../../hooks/useMediaQueryTheme';

export const NavBar = () => {
  const [valueIndicationColor, setValueIndicationColor] = useState(0)

  const storedUser = sessionStorage.getItem('user');
  const location = useLocation();
  const navitate = useNavigate();
  const { name, lastName } = JSON.parse(storedUser) || []
  const theme = useMediaQueryTheme();

  const handleLogOut = () => {
    sessionStorage.removeItem('user');
    navitate('/loginUser');
  }

  const handleDirection = (direction: string) => {
    navitate(direction);
  }

  return (
    <AppBar color='primary'>
      <Toolbar>
        <TravelExploreIcon />
        {
          theme ? (
            <>
              <Typography sx={{ pl: 1 }}>Blog Viajeros</Typography>
              <NavBarDrawer />
            </>
          ) : location.pathname === '/home' ? (
            storedUser ? (
              <>
                <Tabs
                  textColor='inherit'
                  value={valueIndicationColor}
                  indicatorColor='secondary'
                  onChange={(e, valueIndicationColor) => setValueIndicationColor(valueIndicationColor)}
                >
                  <Tab label="Inicio" onClick={() => handleDirection('/home')} />
                  <Tab label="Administrador" onClick={() => handleDirection('/detailpublication')} />
                </Tabs>
                <Tabs sx={{ marginLeft: "auto" }} value={0} textColor='inherit'>
                  <Tab label={`Hola ${name} ${lastName}`} disableTouchRipple />
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
                  value={valueIndicationColor}
                  indicatorColor='secondary'
                  onChange={(e, valueIndicationColor) => setValueIndicationColor(valueIndicationColor)}
                >
                  <Tab label="Inicio" onClick={() => handleDirection('/home')} />
                </Tabs>
                <Button
                  sx={{ marginLeft: "auto" }}
                  variant="contained"
                  color="secondary"
                  onClick={() => handleDirection('/loginUser')}>Ingresar</Button>
              </>
            )
          ) : (
            <>
              <Tabs
                textColor='inherit'
                value={valueIndicationColor}
                indicatorColor='secondary'
                onChange={(e, valueIndicationColor) => setValueIndicationColor(valueIndicationColor)}
              >
                <Tab label="Inicio" onClick={() => handleDirection('/home')} />
              </Tabs>
              <LoginUser />
            </>
          )
        }
      </Toolbar>
    </AppBar>
  )
}
