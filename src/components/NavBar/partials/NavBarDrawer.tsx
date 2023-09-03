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
import { useNavigate } from 'react-router-dom';

export const NavBarDrawer = () => {
  const [openDrawer, setOpenDrawer] = useState(false)
  const navigate = useNavigate();
  const navItems = [{
    label: 'Inicio',
    path: '/home',
    onclick: () => {
      navigate('/home')
      setOpenDrawer(false)
  }
  },
  {
    label: 'Administrador',
    path: '/admin',
    onclick: () => {
      navigate('/admin')
      setOpenDrawer(false)
  }
  },
  {
    label: 'Ingresar',
    path: '/loginUser',
    onclick: () => {
      navigate('/loginUser')
      setOpenDrawer(false)
  }
  },
  {
    label: 'Cerrar sesión',
    path: '/loginUser',
    onclick: () => {
      navigate('/loginUser')
      setOpenDrawer(false)
    }
  }
]

  return (
    <>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
          {
            navItems.map((item, index) => (
              <ListItemButton key={index} onClick={item.onclick}>
                <ListItemIcon>
                  <ListItemText>{item.label}</ListItemText>
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
