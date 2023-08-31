import { AppBar, Grid, Toolbar, Typography } from '@mui/material';
import { NavLink, useLocation } from 'react-router-dom';
import { LoginUser } from '..';

export const NavBar = () => {

  const storedUser = sessionStorage.getItem('user');
  const location = useLocation();
  const { name, lastName } = JSON.parse(storedUser) || []


  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h4" sx={{ flexGrow: 1 }}>
          <NavLink
            className={`nav-item nav-link fs-3 ps-2`}
            to="/home"
          >
            Blog Viajeros
          </NavLink>
        </Typography>

        {
          storedUser ?
            (<Grid container>
              <NavLink
                className={({ isActive }) => `nav-item nav-link fs-3 ps-2 ${isActive ? 'active' : ''}`}
                to="/admin"
              >
                Administrador
              </NavLink>
              <Typography>{`${name} ${lastName}`}</Typography>
              <NavLink to="/authentication">Salir</NavLink>
            </Grid>)
            :
            (
              location.pathname === '/home' ? (<NavLink
                className={({ isActive }) => `nav-item nav-link fs-3 ps-2 ${isActive ? 'active' : ''}`}
                to="/authentication"
              >
                Login
              </NavLink>) : <LoginUser />
            )
        }
        {/* <LoginUser /> */}
      </Toolbar>
    </AppBar >
  )
}
