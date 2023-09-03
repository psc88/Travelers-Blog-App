import { AppBar, Toolbar, Tabs, Tab, Button, Typography } from '@mui/material'
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import { useState, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useMediaQueryTheme } from '../../hooks/useMediaQueryTheme';
import { NavBarDrawer } from './partials/NavBarDrawer';
import { UserContext } from '../../context/UserContext';

export const NavBar = () => {
  const [itemSelectionNavbar, setItemSelectionNavbar] = useState(0)
  const location = useLocation();
  const navigate = useNavigate();
  const themeMediaQuery = useMediaQueryTheme("md");
  const {userAuthenticated, logout} = useContext(UserContext)  

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
          ) : (
              userAuthenticated.name ? (
                <>
                  <Tabs
                    textColor='inherit'
                    value={itemSelectionNavbar}
                    indicatorColor='secondary'
                    onChange={(_e, itemSelectionNavbar) => setItemSelectionNavbar(itemSelectionNavbar)}
                  >
                    <Tab label="Inicio" onClick={() => navigate('/home')} />
                    <Tab label="Administrador" onClick={() => navigate('/admin')} />
                  </Tabs>
                  <Tabs sx={{ marginLeft: "auto" }} value={0} textColor='inherit'>
                    <Tab label={`Hola ${userAuthenticated.name}`} disableTouchRipple disabled />
                  </Tabs>
                  <Button
                    sx={{ marginLeft: 1 }}
                    variant="contained"
                    color="secondary"
                    onClick={logout}>Cerrar sesión</Button>
                </>
              ) : (
                <>
                  <Tabs
                    textColor='inherit'
                    value={itemSelectionNavbar}
                    indicatorColor='secondary'
                    onChange={(_e, itemSelectionNavbar) => setItemSelectionNavbar(itemSelectionNavbar)}
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
            ) 
        }
      </Toolbar>
    </AppBar>
  )
}
