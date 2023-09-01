import {
  Button,
  Grid,
  TextField,
  Typography,
  Link
} from '@mui/material'
import { Link as RoterLink } from 'react-router-dom';
import { useMediaQueryTheme } from '../../hooks/useMediaQueryTheme';
import { AuthLayout } from '../../layout/AuthLayout';

export const CreateUser = () => {
  const theme = useMediaQueryTheme();

  return (
    
    <AuthLayout title="Crear tu usuario">
        <form>
          <Grid container>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Nombre completo"
                type='text'
                placeholder='Pablo Castillo'
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Correo"
                type='email'
                placeholder='correo@gmail.com'
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Contraseña"
                type='password'
                placeholder='correo@gmail.com'
                fullWidth
              />
            </Grid>
            <Grid container spacing={2} sx={{ mt: 1 }}>
              <Grid item xs={12}>
                <Button variant='contained' fullWidth>
                  Crear Cuenta
                </Button>
              </Grid>
              <Grid container justifyContent="end" sx={{ mt: 1 }}>
                {
                  theme ? (
                    <Grid container direction="column" alignItems="center">
                      <Typography variant="inherit" color="initial">¿Ya tienes una cuenta?</Typography>
                      <Link component={RoterLink} to="/loginUser">Ingresar</Link>
                    </Grid>
                  ) : (
                    <>
                      <Typography variant="inherit" color="initial">¿Ya tienes una cuenta? -</Typography>
                      <Link component={RoterLink} to="/loginUser" sx={{ml: 1}}>Ingresar</Link>
                    </>
                  )
                }
              </Grid>
            </Grid>
          </Grid>
        </form>
    </AuthLayout>
  )
}
