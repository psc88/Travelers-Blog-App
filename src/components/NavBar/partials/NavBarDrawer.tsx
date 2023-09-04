import { useContext, useState } from 'react'
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../../context/UserContext';

export const NavBarDrawer = () => {
  const [openDrawer, setOpenDrawer] = useState(false)
  const navigate = useNavigate();
  const { userAuthenticated, logout } = useContext(UserContext)

  const handleOnclickHome = () => {
    navigate('/home')
    setOpenDrawer(false)
  }

  const handleOnclickadmin = () => {
    navigate('/admin')
    setOpenDrawer(false)
  }

  const handleOnclicklogOut = () => {
    logout();
    setOpenDrawer(false)
  }

  const handleOnclickloginUser = () => {
    navigate('/loginUser')
    setOpenDrawer(false)
  }

  return (
    <>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
          {
            userAuthenticated.name ? (
              <>
                <ListItemButton onClick={handleOnclickHome}>
                  <ListItemIcon>
                    <ListItemText>Inicio</ListItemText>
                  </ListItemIcon>
                </ListItemButton>
                <ListItemButton onClick={handleOnclickadmin}>
                  <ListItemIcon>
                    <ListItemText>Administrador</ListItemText>
                  </ListItemIcon>
                </ListItemButton>
                <ListItemButton onClick={handleOnclicklogOut}>
                  <ListItemIcon>
                    <ListItemText>Cerrar sesión</ListItemText>
                  </ListItemIcon>
                </ListItemButton>
              </>
            ) : (
              <>
                <ListItemButton onClick={handleOnclickHome}>
                  <ListItemIcon>
                    <ListItemText>Inicio</ListItemText>
                  </ListItemIcon>
                </ListItemButton>
                <ListItemButton onClick={handleOnclickloginUser}>
                  <ListItemIcon>
                    <ListItemText>Ingresar</ListItemText>
                  </ListItemIcon>
                </ListItemButton>
              </>
            )
          }
        </List>
      </Drawer>
      <IconButton
        sx={{ color: "white", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon />
      </IconButton>
    </>
  )
}
