import { AppBar, Toolbar, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar sx={{ marginY: 1 }}>
        <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
          Blog Viajeros
        </Typography>
            <NavLink
              className={({ isActive }) => `nav-item nav-link fs-3 ps-2 ${isActive ? 'active' : ''}`}
              to="/authentication"
            >
              Login
            </NavLink>
            <NavLink
              className={({ isActive }) => `nav-item nav-link fs-3 ps-2 ${isActive ? 'active' : ''}`}
              to="/admin"
            >
              Administrador
            </NavLink>
      </Toolbar>
    </AppBar >
  )
}
