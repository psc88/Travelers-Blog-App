import { Grid, TextField, Typography, Button } from "@mui/material"
import { GetCurrentDate } from "./getDate";
import { useState } from "react";

export const CreatePosts = () => {

  const URL = import.meta.env.VITE_REACT_APP_API_URL;

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [linkImage, setLinkImage] = useState("")

  const datePublication = GetCurrentDate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPost = {
      title,
      author: "Pepito Flores",
      description,
      datePublication,
      linkImage,
      liked: 0
    }

    try {
      const response = await fetch(`${URL}/posts`, {
        method: "POST",
        headers:{
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newPost)
      })
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Grid container justifyContent={"center"}>
        <Typography variant="h4" color="initial" sx={{ mb: 3, }}>Agregar nuevo Blog</Typography>
      </Grid>
      <Grid container direction="row" spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Titulo"
            type="text"
            placeholder="Nombre"
            fullWidth
            onChange={(e) => setTitle(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            value={datePublication}
            label="Fecha"
            type="text"
            disabled
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Comentario"
            type="text"
            placeholder="Comentario..."
            multiline
            fullWidth
            rows={4}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Link de Imagen"
            type="url"
            placeholder="Nombre"
            fullWidth
            onChange={(e) => setLinkImage(e.target.value)}
          />
        </Grid>
        <Grid item container justifyContent="center">
          <Button 
          variant="contained" 
          fullWidth sx={{ width: '100%', maxWidth: { sm: '50%' } }}
          type="submit"
          >
            Agregar
          </Button>
        </Grid>
      </Grid>
    </form>
  )
}
