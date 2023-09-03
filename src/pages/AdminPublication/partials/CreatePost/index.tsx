import { FC,useContext } from 'react';
import { useForm } from 'react-hook-form';
import { GetCurrentDate } from '../../../../helpers/getDate';
import { UserContext } from '../../../../context/UserContext';
import { Grid, TextField, Button, Typography } from '@mui/material';
import Swal from 'sweetalert2';

interface ICreatePosts {
  fetchUserPosts: () => Promise<void>;
}
interface ICreatePostsData {
  title: string;
  author: string
  description: string;
  datePublication: string;
  linkImage: string;
  liked: number;
}

export const CreatePosts: FC<ICreatePosts> = ({ fetchUserPosts }) => {

  const URL = import.meta.env.VITE_REACT_APP_API_URL;
  const { userAuthenticated } = useContext(UserContext)
  const datePublication = GetCurrentDate();

  const { handleSubmit, register, formState, reset } = useForm({
    defaultValues: {
      title: "",
      author: userAuthenticated.name,
      description: "",
      datePublication,
      linkImage: "",
      liked: 0
    }
  });

  const onSubmit = async (data: ICreatePostsData) => {
    const postData = {
      ...data,
      title: data.title.trim(),
      description: data.description.trim(),
      linkImage: data.linkImage.trim(),
    }

    try {
      await fetch(`${URL}/posts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(postData)
      })
      Swal.fire(
        '¡¡Publicado!!',
        `${postData.title}`,
        'success'
      )
      reset();
      fetchUserPosts();
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No fue posible realizar la publicación',
        footer: 'Intenta de nuevo'
      })
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6} sx={{ mt: 1 }}>
          <TextField
            {...register("title", { required: true, minLength: 4, maxLength: 20, pattern: /^[a-zA-Z\s]+$/ })}
            label="Titulo"
            type='text'
            placeholder='Nuevo viaje'
            fullWidth
          />
          {formState?.errors?.title?.type === "required" && <Typography color="red">El campo Titulo es requerido</Typography>}
          {formState?.errors?.title?.type === "minLength" && <Typography color="red">Debe contener al menos 4 caracteres</Typography>}
          {formState?.errors?.title?.type === "maxLength" && <Typography color="red">No debe superar los 20 caracteres</Typography>}
          {formState?.errors?.title?.type === "pattern" && <Typography color="red">Ingresar solo letras</Typography>}
        </Grid>
        <Grid item xs={12} sm={6} sx={{ mt: 1 }}>
          <TextField
            {...register("datePublication")}
            value={datePublication}
            label="Fecha"
            type='text'
            placeholder='01/01/2000'
            disabled
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sx={{ mt: 2 }}>
          <TextField
            {...register("description", { required: true, minLength: 20, maxLength: 1000 })}
            label="Comentario"
            type='text'
            placeholder='Nuevo viaje en proceso...'
            rows={6}
            fullWidth
            multiline
          />
          {formState?.errors?.description?.type === "required" && <Typography color="red">Descripcion es requerido</Typography>}
          {formState?.errors?.description?.type === "minLength" && <Typography color="red">Debe contener al menos 20 caracteres</Typography>}
          {formState?.errors?.description?.type === "maxLength" && <Typography color="red">No debe superar los 1000 caracteres</Typography>}
        </Grid>
        <Grid item xs={12} sx={{ mt: 1 }}>
          <TextField
            {...register("linkImage", { required: true, pattern: /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/ })}
            label="Link de la imagen"
            type='url'
            placeholder='https://image.com'
            fullWidth
          />
          {formState?.errors?.linkImage?.type === "required" && <Typography color="red">Link es requerido</Typography>}
          {formState?.errors?.linkImage?.type === "pattern" && <Typography color="red">Formato de link incorrecto</Typography>}
        </Grid>
        <Grid container spacing={2} sx={{ mt: 1 }}>
          <Grid item xs={12}>
            <Button type='submit' variant='contained' fullWidth>
              Publicar
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </form>
  )
}
