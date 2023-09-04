import { Grid, TextField, Button, Typography, Divider } from "@mui/material"
import { useContext, FC } from "react"
import { UserContext } from "../../../context/UserContext"
import { useForm } from "react-hook-form"
import Swal from "sweetalert2"
import { GetCurrentDate } from "../../../helpers/getDate"
import { ListCommentPublication } from "./ListCommentPublication"
import usePostsComment from "../../../hooks/usePostsComment"

interface IDetailPublicationCommentProps {
  idPublication: string
}

interface ICreateCommentData {
  name: string,
  idPost: number,
  comment: string,
  datePublication: string
}

export const DetailPublicationComment: FC<IDetailPublicationCommentProps> = ({ idPublication }) => {
  const idPost = parseInt(idPublication)
  const { userComments, fetchUserComments } = usePostsComment(idPost)
  const URL = import.meta.env.VITE_REACT_APP_API_URL;
  const { userAuthenticated } = useContext(UserContext)
  const dateDay = GetCurrentDate();

  const { handleSubmit, register, formState, reset } = useForm({
    defaultValues: {
      name: userAuthenticated.name,
      idPost: idPost,
      comment: "",
      datePublication: dateDay
    }
  })

  const onSubmit = async (data: ICreateCommentData) => {
    const commentData = {
      ...data,
      comment: data.comment.trim()
    }

    try {
      await fetch(`${URL}/comments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(commentData)
      })
      Swal.fire(
        '¡¡Gracias por tu comentario!!',
        `${commentData.name}`,
        'success'
      )
      reset();
      fetchUserComments();
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
      <Divider sx={{ backgroundColor: "GrayText" }} />
      <Grid container justifyContent="center">
        <Typography variant="h5" color="initial">Deja tu comentario</Typography>
      </Grid>
      <Grid container>
        <Grid item xs={12} sx={{ mt: 2 }}>
          <TextField
            {...register("comment", { required: true, minLength: 4, maxLength: 200 })}
            label='Comentario'
            type='text'
            placeholder='Escribe un comentario'
            rows={2}
            fullWidth
            multiline
          />
          {formState?.errors?.comment?.type === "required" && <Typography color="red">El campo comentario es requerido</Typography>}
          {formState?.errors?.comment?.type === "minLength" && <Typography color="red">Debe contener al menos 4 caracteres</Typography>}
          {formState?.errors?.comment?.type === "maxLength" && <Typography color="red">No debe superar los 200 caracteres</Typography>}
        </Grid>
        <Grid item xs={12}>
          <Grid container justifyContent="center" sx={{ my: 2 }}>
            <Button type='submit' variant='contained'>
              Guardar comentario
            </Button>
          </Grid>
        </Grid>
        {
          userComments.length > 0 ?
            userComments.map((comment) =>(<ListCommentPublication
              key={comment.id}
              author={comment.name}
              dateComment={comment.datePublication}
              description={comment.comment}
            />)) : (
              <Grid container justifyContent="center">
                <Typography variant="h5" color="initial">Esta publicación no tiene comentarios</Typography>
              </Grid>
            )
        }
      </Grid>
    </form>
  )
}
