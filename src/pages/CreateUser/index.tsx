import {
  Button,
  Grid,
  TextField,
  Typography,
  Link
} from '@mui/material'
import { useContext } from 'react'
import { Link as RoterLink, useNavigate } from 'react-router-dom';
import { useMediaQueryTheme } from '../../hooks/useMediaQueryTheme';
import { AuthLayout } from '../../layout/AuthLayout';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { UserContext } from '../../context/UserContext';
import { useFetch } from '../../hooks/useFetch';
import { User } from '../../interfaces/User.interface';
interface ICreateUser {
  name: string;
  email: string;
  password: string;
}

export const CreateUser = () => {
  const { setUserAuthenticated } = useContext(UserContext)
  const themeMediaQuery = useMediaQueryTheme("md");
  const navigate = useNavigate();
  const { handleSubmit, register, formState } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: ''
    }
  });

  const URL = import.meta.env.VITE_REACT_APP_API_URL;
  const { data } = useFetch(`${URL}/users`)
  const listUser = data as User[]

  const onSubmit = async (data: ICreateUser) => {
    try {
      const emailExists = listUser?.some((user) => user.email === data.email);

      if (emailExists) {
        Swal.fire({
          icon: 'error',
          title: 'Correo electrónico existente',
          text: 'El correo electrónico ya está registrado. Por favor, utiliza otro.',
        });
        return;
      }
      const response = await fetch(`${URL}/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
      const userResponse = await response.json();
      Swal.fire(
        'Usuario creado correctamente',
        `${data.name}`,
        'success'
      )
      setUserAuthenticated(userResponse);
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
              {...register("name", { required: true, pattern: /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ ]+$/, minLength: 5, maxLength: 40 })}
              label="Nombre completo"
              type='text'
              placeholder='Pablo Castillo'
              fullWidth
            />
            {formState?.errors?.name?.type === "required" && <Typography color="red">El nombre es requerido</Typography>}
            {formState?.errors?.name?.type === "pattern" && <Typography color="red">Debe contener solo letras</Typography>}
            {formState?.errors?.name?.type === "minLength" && <Typography color="red">Debe superar los 5 caracteres</Typography>}
            {formState?.errors?.name?.type === "maxLength" && <Typography color="red">No debe superar los 40 caracteres</Typography>}
          </Grid>
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
              placeholder='correo@gmail.com'
              fullWidth
            />
            {formState?.errors?.password?.type === "required" && <Typography color="red">El campo contraseña es requerido</Typography>}
            {formState?.errors?.password?.type === "minLength" && <Typography color="red">Debe superar los 4 caracteres</Typography>}
            {formState?.errors?.password?.type === "maxLength" && <Typography color="red">No debe superar los 25 caracteres</Typography>}
          </Grid>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={12}>
              <Button type='submit' variant='contained' fullWidth>
                Crear Cuenta
              </Button>
            </Grid>
            <Grid container justifyContent="end" sx={{ mt: 1 }}>
              {
                themeMediaQuery ? (
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
