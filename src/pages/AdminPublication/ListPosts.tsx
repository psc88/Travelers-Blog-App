import { Grid, IconButton, Avatar, Typography, Box } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useMediaQueryTheme } from "../../hooks/useMediaQueryTheme";


export const ListPosts = ({ post }) => {

  const theme = useMediaQueryTheme("sm");

  const getFirstCharacter = (author: string) => {
    return author.charAt(0).toUpperCase();
  };

  return (
    <Grid container direction="row" justifyContent="space-between" alignItems="center" sx={{ mt: 1 }}>
      {
        theme ? (
          <>
          <Grid container sx={{justifyContent:"center"}}>
            <Box sx={{ display: "flex", alignItems: "center"}}>
              <Avatar sx={{ bgcolor: "purple" }} aria-label="recipe">
                {getFirstCharacter(post.author)}
              </Avatar>
              <Typography variant="inherit" sx={{ pl: 1 }}>Viajando por europa</Typography>
              <IconButton edge="end" aria-label="edit" sx={{ bgcolor: "cyan", mx: 1 }}>
                <EditIcon sx={{ color: "black" }} />
              </IconButton>
              <IconButton edge="end" aria-label="delete" sx={{ bgcolor: "red", mx: 1 }}>
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
              <Typography variant="inherit" sx={{ pl: 1 }}>Viajando por europa</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <FavoriteIcon sx={{ color: "red", mr: 1 }} />
              <Typography variant="h6" color="black">
                {`1500 Me gusta`}
              </Typography>
            </Box>
            <Grid>
              <IconButton edge="end" aria-label="edit" sx={{ bgcolor: "cyan", mx: 1 }}>
                <EditIcon sx={{ color: "black" }} />
              </IconButton>
              <IconButton edge="end" aria-label="delete" sx={{ bgcolor: "red", mx: 1 }}>
                <DeleteIcon sx={{ color: "black" }} />
              </IconButton>
            </Grid>
          </>
        )
      }

    </Grid >
  )
}
