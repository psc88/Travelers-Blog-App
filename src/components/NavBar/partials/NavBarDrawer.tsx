import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import useNavBarDrawer from '../../../hooks/useNavBarDrawer';

export const NavBarDrawer = () => {

  const {
    openDrawer, 
    setOpenDrawer,
    handleOnclickHome,
    handleOnclickadmin,
    handleOnclicklogOut,
    handleOnclickloginUser,
    userAuthenticated
  } = useNavBarDrawer()

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
