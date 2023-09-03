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
import Swal from 'sweetalert2';
import { User } from '../../interfaces/User.interface';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

interface IUserLogin {
  email: string;
  password: string;
}

export const LoginUser = () => {
  const { setUserAuthenticated } = useContext(UserContext)
  const URL = import.meta.env.VITE_REACT_APP_API_URL;
  const themeMediaQuery = useMediaQueryTheme("md");
  const navigate = useNavigate();
  
  const { handleSubmit, register, formState } = useForm({
    defaultValues: {
      email: "",
      password: ""
    }
  });

  const onSubmit = async (data: IUserLogin) => {
    try {
      const response = await fetch(`${URL}/users`)
      const users: User[] = await response.json()
      const user = users.find(user => user.email === data.email)
      
      if (!user) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Usuario o contraseña incorrecta',
          footer: 'Intenta de nuevo'
        })
        return
      }
      const isValidPassword = user.password === data.password;
      if (isValidPassword) {
        setUserAuthenticated(user)
        Swal.fire(
          'Bienvenido',
          `${user.name}`,
          'success'
        )
        navigate('/home')
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Usuario o contraseña incorrecta',
          footer: 'Intenta de nuevo'
        })
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
              {...register("email", { required: true, pattern: /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/, minLength: 5, maxLength: 256 })}
              label="Correo"
              type='email'
              placeholder='correo@gmail.com'
              fullWidth
            />
            {formState?.errors?.email?.type === "required" && <Typography color="red">El campo email es requerido</Typography>}
            {formState?.errors?.email?.type === "pattern" && <Typography color="red">Correo no valido</Typography>}
            {formState?.errors?.email?.type === "minLength" && <Typography color="red">Debe superar los 5 caracteres</Typography>}
            {formState?.errors?.email?.type === "maxLength" && <Typography color="red">No debe superar los 256 caracteres</Typography>}
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              {...register("password", { required: true, minLength: 4, maxLength: 25 })}
              label="Contraseña"
              type='password'
              placeholder='1234ABC'
              fullWidth
            />
            {formState?.errors?.password?.type === "required" && <Typography color="red">El campo contraseña es requerido</Typography>}
            {formState?.errors?.password?.type === "minLength" && <Typography color="red">Debe superar los 4 caracteres</Typography>}
            {formState?.errors?.password?.type === "maxLength" && <Typography color="red">No debe superar los 25 caracteres</Typography>}
          </Grid>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={12}>
              <Button variant='contained' type='submit' fullWidth>
                Ingresar
              </Button>
            </Grid>
            <Grid container justifyContent="end" sx={{ mt: 1 }}>
              {
                themeMediaQuery ? (
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
