import { useState } from 'react'
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';

export const NavBarDrawer = () => {
  const [openDrawer, setOpenDrawer] = useState(false)
  const itemsDrawer = ["Inicio", "Administrador", "Ingresar", "Cerrar sesión"]  

  return (
    <>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
          {
            itemsDrawer.map((items, index) => (
              <ListItemButton key={index}>
                <ListItemIcon>
                  <ListItemText>{items}</ListItemText>
                </ListItemIcon>
              </ListItemButton>
            ))
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
