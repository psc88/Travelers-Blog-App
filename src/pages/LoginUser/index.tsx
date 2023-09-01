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
import { useForm } from "react-hook-form"

export const LoginUser = () => {
  const URL = import.meta.env.VITE_REACT_APP_API_URL;
  const theme = useMediaQueryTheme();
  const { handleSubmit, register, formState } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data: any) => {
    try {
      const response = await fetch(`${URL}/users`)
      const users: any[] = await response.json()
      const user = users.find(user => user.email === data.email)

      if (!user) {
        alert('correo no encontrado');
        return
      }
      const isValidPassword = user.password === data.password;

      if (isValidPassword) {
        sessionStorage.setItem('user', JSON.stringify(user))
        navigate('/home')
      } else {
        alert('Usurio o contraseña incorrecto')
      }
    } catch (error) {
      console.log(error);

    }
  }

  return (

    <AuthLayout title="Ingresa con tu usuario">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              {...register("email", { required: true, pattern: /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/, minLength: 2 })}
              label="Correo"
              type='email'
              placeholder='correo@gmail.com'
              fullWidth
            />
            {formState?.errors?.email?.type === "required" && <span>El campo email es requerido</span>}
            {formState?.errors?.email?.type === "pattern" && <span>Correo incorrecto</span>}
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
              <Button variant='contained' type='submit' fullWidth>
                Ingresar
              </Button>
            </Grid>
            <Grid container justifyContent="end" sx={{ mt: 1 }}>
              {
                theme ? (
                  <Grid container direction="column" alignItems="center">
                    <Typography variant="inherit" color="initial">¿No tienes una cuenta?</Typography>
                    <Link component={RoterLink} to="/createUser">Crear cuenta</Link>
                  </Grid>
                ) : (
                  <>
                    <Typography variant="inherit" color="initial">¿No tienes una cuenta? -</Typography>
                    <Link component={RoterLink} to="/createUser" sx={{ ml: 1 }}>Crear cuenta</Link>
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
