import { Typography, Grid, TextField, Button, Link } from "@mui/material"
import { useEffect, useState } from "react";
import { AuthLayout } from "../../layout/AuthLayout";
import { useForm } from "react-hook-form";
import { useParams, useNavigate, Link as RoterLink } from "react-router-dom";
import Swal from "sweetalert2";


export const EditPublication = () => {
  const navigate = useNavigate();
  const [dataPost, setdataPost] = useState({
    title: "",
    author: "",
    description: "",
    datePublication: "",
    linkImage: "",
    liked: 0
  })
  const { handleSubmit, register, formState } = useForm();
  const { id } = useParams()
  const URL = `${import.meta.env.VITE_REACT_APP_API_URL}/posts`;

  useEffect(() => {
    getApi();
  }, [])

  const getApi = async () => {
    try {
      const response = await fetch(URL);
      const posts = await response.json();
      const filteredData = posts?.find(post => post.id === parseInt(id));
      const { title, author, description, datePublication, linkImage, liked } = filteredData
      setdataPost({ title, author, description, datePublication, linkImage, liked })
    } catch (error) {
      console.log(error);
    }
  }

  const onSubmit = async (data) => {
    const trimmed = {
      title: data.title.trim(),
      description: data.description.trim(),
      linkImage: data.linkImage.trim()
    }

    const additionalData = {
      author: dataPost.author,
      liked: dataPost.liked,
      datePublication: dataPost.datePublication
    };

    const postData = {
      ...trimmed,
      ...additionalData,
    };

    try {
      const response = await fetch(`${URL}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(postData)
      })
      console.log(response);

      Swal.fire(
        '¡¡Cambios guardados!!',
        `${trimmed.title}`,
        'success'
      )
      navigate('/admin')
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No fue posible guardar los cambios',
        footer: 'Intenta de nuevo'
      })
    }
  }

  return (
    <>
      <AuthLayout title="Editar publicación">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6} sx={{ mt: 1 }}>
              <TextField
                {...register("title", { required: true, minLength: 4, maxLength: 20, pattern: /^[a-zA-Z\s]+$/ })}
                defaultValue={dataPost.title}
                type='text'
                placeholder='Titulo'
                fullWidth
                multiline
              />
              {formState?.errors?.title?.type === "required" && <Typography color="red">El campo Titulo es requerido</Typography>}
              {formState?.errors?.title?.type === "minLength" && <Typography color="red">Debe contener al menos 4 caracteres</Typography>}
              {formState?.errors?.title?.type === "maxLength" && <Typography color="red">No debe superar los 20 caracteres</Typography>}
              {formState?.errors?.title?.type === "pattern" && <Typography color="red">Ingresar solo letras</Typography>}
            </Grid>
            <Grid item xs={12} sm={6} sx={{ mt: 1 }}>
              <TextField
                {...register("datePublication")}
                defaultValue={dataPost.datePublication}
                type='text'
                placeholder='01/01/2000'
                disabled
                fullWidth
                multiline
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                {...register("description", { required: true, minLength: 20, maxLength: 1000 })}
                defaultValue={dataPost.description}
                type='text'
                placeholder='Descripción'
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
                defaultValue={dataPost.linkImage}
                type='url'
                placeholder='Link de la imagen'
                fullWidth
                multiline
              />
              {formState?.errors?.linkImage?.type === "required" && <Typography color="red">Link es requerido</Typography>}
              {formState?.errors?.linkImage?.type === "pattern" && <Typography color="red">Formato de link incorrecto</Typography>}
            </Grid>
            <Grid container spacing={2} sx={{ mt: 1 }}>
              <Grid item xs={12}>
                <Button type='submit' variant='contained' fullWidth>
                  Guardar cambios
                </Button>
                <Grid container justifyContent="center" alignItems="center" sx={{ mt:1 }}>
                  <Link component={RoterLink} to="/admin">Regresar</Link>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </AuthLayout>
    </>
  )
}