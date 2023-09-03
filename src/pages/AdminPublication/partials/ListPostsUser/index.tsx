import { FC } from 'react'
import { Grid, IconButton, Avatar, Typography, Box } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useMediaQueryTheme } from "../../../../hooks/useMediaQueryTheme";
import '../../style.css'
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { Post } from "../../../../interfaces/Posts.interface";
import { firstCharacter } from '../../../../helpers/firstCharacter';

interface IListPostsUser {
  post: Post;
  idPublicationUrl: string;
  fetchUserPosts: () => Promise<void>;
  idPublication: number;
}

export const ListPostsUser: FC<IListPostsUser> = ({ post, idPublicationUrl, fetchUserPosts, idPublication }) => {

  const themeMediaQuery = useMediaQueryTheme("sm");
  const navigate = useNavigate()
  
  const deletePost = () => {
      Swal.fire({
        title: '¿Quieres eliminar la publicación?',
        showDenyButton: true,
        confirmButtonText: 'Eliminar',
        denyButtonText: 'Cancelar'
      }).then(async(result) => {
        if (result.isConfirmed) {
          try {
            await fetch(idPublicationUrl, {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json"
              }
            });
            Swal.fire('Publicacion eliminada correctamente', '', 'success')
            fetchUserPosts();
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
        themeMediaQuery ? (
          <>
            <Grid container sx={{ justifyContent: "center" }}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Avatar sx={{ bgcolor: "purple", width: 30, height: 30 }} aria-label="recipe">
                  {firstCharacter(post.author)}
                </Avatar>
                <Typography variant="body2" sx={{ pl: 1 }} className="truncate-text-list">{post.title}</Typography>
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
                {firstCharacter(post.author)}
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
