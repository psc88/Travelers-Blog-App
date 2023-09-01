import {
  Button,
  Grid,
  TextField,
  Typography,
  Link
} from '@mui/material'
import { Link as RoterLink, useNavigate } from 'react-router-dom';
import { useMediaQueryTheme } from '../../hooks/useMediaQueryTheme';
import { AuthLayout } from '../../layout/AuthLayout';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

export const CreateUser = () => {
  const theme = useMediaQueryTheme("md");
  const URL = import.meta.env.VITE_REACT_APP_API_URL;
  const { handleSubmit, register, formState } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await fetch(`${URL}/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
      Swal.fire(
        'Usuario creado correctamente',
        `${data.name}`,
        'success'
      )
      sessionStorage.setItem('user', JSON.stringify(data))
      navigate('/home')
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No fue posible crear el usuario',
        footer: 'Intenta de nuevo'
      })
    }
  }

  return (

    <AuthLayout title="Crear tu usuario">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              {...register("name")}
              label="Nombre completo"
              type='text'
              placeholder='Pablo Castillo'
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              {...register("email")}
              label="Correo"
              type='email'
              placeholder='correo@gmail.com'
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              {...register("password")}
              label="Contraseña"
              type='password'
              placeholder='correo@gmail.com'
              fullWidth
            />
          </Grid>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={12}>
              <Button type='submit' variant='contained' fullWidth>
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
                    <Link component={RoterLink} to="/loginUser" sx={{ ml: 1 }}>Ingresar</Link>
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
