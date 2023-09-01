import { Grid, TextField, Button } from "@mui/material"
import { useForm } from "react-hook-form";
import { GetCurrentDate } from "./getDate";

export const CreatePosts = () => {

  const URL = import.meta.env.VITE_REACT_APP_API_URL;
  const { handleSubmit, register, formState } = useForm();
  const datePublication = GetCurrentDate();

  const onSubmit = async (data) => {
    const additionalData = {
      author: authorToFilter,
      liked: 0,
    }; 

    const postData = {
      ...data,
      ...additionalData,
    };
    try {
      const response = await fetch(`${URL}/posts`,{
        method: "POST",
        headers:{
          "Content-Type": "application/json"
        },
        body: JSON.stringify(postData)
      })
    } catch (error) {
      console.log(error);
      
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6} sx={{ mt: 1 }}>
            <TextField
              {...register("title")}
              label="Titulo"
              type='text'
              placeholder='Nuevo viaje'
              fullWidth
            />
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
              {...register("description")}
              label="Comentario"
              type='text'
              placeholder='Nuevo viaje en proceso...'
              rows={6}
              fullWidth
              multiline
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 1 }}>
            <TextField
              {...register("linkImage")}
              label="Link de la imagen"
              type='url'
              placeholder='https://image.com'
              fullWidth
            />
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
