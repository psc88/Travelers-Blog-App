import { Grid, TextField, Typography, Button } from "@mui/material"
import './styles.css'

export const LoginUser = () => {
  return (
    <Grid
      item
      xs={3}
      sx={{ padding: 3, borderRadius: 2 }}
    >
      <form className='d-flex'>
        <Grid item lg={4} md={4} sm={12}>
          <Typography variant="h5" sx={{ mb: 1 }}>Correo</Typography>
          <TextField
            type="email"
            placeholder="correo@google.com"
            fullWidth
            sx={{ backgroundColor: 'white' }}
          />
        </Grid>
        <Grid item lg={4} md={4} sm={12} sx={{ ml: 3 }}>
          <Typography variant="h5" sx={{ mb: 1 }}>Contraseña</Typography>
          <TextField
            type="password"
            placeholder="1234Prueba"
            fullWidth
            sx={{ backgroundColor: 'white' }}
          />
        </Grid>
        <Grid item lg={4} md={4} sm={12} sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          ml: 2
        }}>
          <Button variant="contained" color="secondary">
            Login
          </Button>
        </Grid>
      </form>
    </Grid>
  )
}
