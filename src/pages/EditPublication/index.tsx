import { Typography, Grid, TextField, Button, Link } from "@mui/material"
import { AuthLayout } from "../../layout/AuthLayout";
import { useForm } from "react-hook-form";
import { useParams, useNavigate, Link as RoterLink } from "react-router-dom";
import Swal from "sweetalert2";
import usePostsById from "../../hooks/usePostsById";
import {useEffect} from 'react'

interface IEditPost {
  title: string;
  author: string;
  description: string;
  datePublication: string;
  linkImage: string;
  liked: number;
}

export const EditPublication = () => {
  const URL = `${import.meta.env.VITE_REACT_APP_API_URL}/posts`;
  const navigate = useNavigate();
  const { id = "0" } = useParams()
  const { userPost } = usePostsById(id)
  

  const { handleSubmit, register, formState, reset } = useForm({
    defaultValues: {
      title: userPost?.title ?? "",
      author: userPost?.author ?? "",
      description: userPost?.description ?? "",
      datePublication: userPost?.datePublication ?? "",
      linkImage: userPost?.linkImage ?? "",
      liked: userPost?.liked ?? 0,
    }
  });

  const onSubmit = async (data: IEditPost) => {
    const postData = {
      ...data,
      title: data.title.trim(),
      description: data.description.trim(),
      linkImage: data.linkImage.trim()
    }

    try {
      await fetch(`${URL}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(postData)
      })

      Swal.fire(
        '¡¡Cambios guardados!!',
        `${postData.title}`,
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

  useEffect(() => {
    if (userPost) {
      reset({
        title: userPost.title,
        author: userPost.author,
        description: userPost.description,
        datePublication: userPost.datePublication,
        linkImage: userPost.linkImage,
        liked: userPost.liked
      });
    }
  }, [userPost])
  

  if (!userPost) {
    return null
  }

  return (
    <>
      <AuthLayout title="Editar publicación">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6} sx={{ mt: 1 }}>
              <TextField
                {...register("title", { required: true, minLength: 4, maxLength: 20, pattern: /^[a-zA-Z\s]+$/ })}
                label='Titulo'
                defaultValue={userPost.title}
                type='text'
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
                label="Fecha"
                defaultValue={userPost.datePublication}
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
                label="Comentario"
                defaultValue={userPost.description}
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
                {...register("linkImage", { required: true, pattern: /^https?:\/\/[\w-]+(\.[\w-]+)+[/#?]?.*$/ })}
                label="Link de la imagen"
                defaultValue={userPost.linkImage}
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
                <Grid container justifyContent="center" alignItems="center" sx={{ mt: 1 }}>
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