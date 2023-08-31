import { Grid, TextField, Button } from "@mui/material"
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form"
import './styles.css'

export const LoginUser = () => {
  const { handleSubmit, register, formState } = useForm();
  const navigate = useNavigate();
  const URL = import.meta.env.VITE_REACT_APP_API_URL;

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
    <Grid
      item
      xs={3}
      sx={{ padding: 3, borderRadius: 2 }}
    >
      <form className='d-flex' onSubmit={handleSubmit(onSubmit)}>
        <Grid item lg={4} md={4} sm={12}>
          <TextField
            {...register("email", { required: true, pattern: /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/, minLength: 2 })}
            label="Correo"
            type="email"
            placeholder="correo@google.com"
            fullWidth
            sx={{ backgroundColor: 'white' }}
          />
          {formState?.errors?.email?.type === "required" && <span>El campo email es requerido</span>}
          {formState?.errors?.email?.type === "pattern" && <span>Correo incorrecto</span>}
        </Grid>
        <Grid item lg={4} md={4} sm={12} sx={{ ml: 3 }}>
          <TextField
            {...register("password", { required: true, minLength:2 })}
            label="Contraseña"
            type="password"
            placeholder="1234Prueba"
            fullWidth
            sx={{ backgroundColor: 'white' }}
            />
            {formState?.errors?.email?.type === "required" && <span>El campo email es requerido</span>}
            {formState?.errors?.email?.type === "pattern" && <span>Correo incorrecto</span>}
        </Grid>
        <Grid item lg={4} md={4} sm={12} sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          ml: 2
        }}>
          <Button variant="contained" color="secondary" type="submit">
            Login
          </Button>
        </Grid>
      </form>
    </Grid>
  )
}
