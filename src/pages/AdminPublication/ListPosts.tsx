import { Grid, IconButton, Avatar, Typography, Box } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useMediaQueryTheme } from "../../hooks/useMediaQueryTheme";
import './style.css'
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export const ListPosts = ({ post, idPublicationUrl, getApi, idPublication }) => {

  const theme = useMediaQueryTheme("sm");
  const navigate = useNavigate()

  const getFirstCharacter = (author: string) => {
    return author.charAt(0).toUpperCase();
  };  
  
  const deletePost = () => {
      Swal.fire({
        title: '¿Quieres eliminar la publicación?',
        showDenyButton: true,
        confirmButtonText: 'Eliminar',
        denyButtonText: 'Cancelar'
      }).then(async(result) => {
        if (result.isConfirmed) {
          try {
            const response = await fetch(idPublicationUrl, {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json"
              }
            });
            Swal.fire('Publicacion eliminada correctamente', '', 'success')
            getApi();
          } catch (error) {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'No fue posible eliminar la publicación',
              footer: 'Intenta de nuevo'
            })
          }
        }
      })
  }

  const editPost = () => {
    navigate(`/editPublication/${idPublication}`)
  }
  return (
    <Grid container direction="row" justifyContent="space-between" alignItems="center" sx={{ mt: 1 }}>
      {
        theme ? (
          <>
            <Grid container sx={{ justifyContent: "center" }}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Avatar sx={{ bgcolor: "purple", width: 30, height: 30 }} aria-label="recipe">
                  {getFirstCharacter(post.author)}
                </Avatar>
                <Typography variant="body2" sx={{ pl: 1 }} className="truncate-text">{post.title}</Typography>
                <IconButton edge="end" aria-label="edit" sx={{ bgcolor: "cyan", mx: 1, width: 33, height: 33 }} onClick={editPost}>
                  <EditIcon sx={{ color: "black" }}/>
                </IconButton>
                <IconButton edge="end" aria-label="delete" sx={{ bgcolor: "red", mx: 1, width: 33, height: 33 }} onClick={deletePost}>
                  <DeleteIcon sx={{ color: "black" }} />
                </IconButton>
              </Box>
            </Grid>
          </>
        ) : (
          <>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Avatar sx={{ bgcolor: "purple" }} aria-label="recipe">
                {getFirstCharacter(post.author)}
              </Avatar>
              <Typography variant="inherit" sx={{ pl: 1 }} >{post.title}</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", marginLeft:"auto"}}>
              <FavoriteIcon sx={{ color: "red", mr: 1 }} />
              <Typography variant="h6" color="black">
                {`${post.liked} Me gusta`}
              </Typography>
            </Box>
            <Grid>
              <IconButton edge="end" aria-label="edit" sx={{ bgcolor: "cyan", mx: 1 }} onClick={editPost}>
                <EditIcon sx={{ color: "black" }} />
              </IconButton>
              <IconButton edge="end" aria-label="delete" sx={{ bgcolor: "red", mx: 1 }} onClick={deletePost}>
                <DeleteIcon sx={{ color: "black" }} />
              </IconButton>
            </Grid>
          </>
        )
      }

    </Grid >
  )
}
