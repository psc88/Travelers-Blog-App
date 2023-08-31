import { Grid, ListItem, IconButton, ListItemAvatar, Avatar, ListItemText, Typography } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';


export const ListPosts = ({post}) => {

    const getFirstCharacter = (author: string) => {
        return author.charAt(0).toUpperCase();
      };

    return (
        <ListItem>
            <ListItemAvatar>
                <Avatar sx={{ bgcolor: "purple" }} aria-label="recipe">
                    {getFirstCharacter(post.author)}
                </Avatar>
            </ListItemAvatar>
            <ListItemText
                primary="Viajando por Argentina"
            />
            <ListItemText>
                <Grid container alignItems="center" sx={{ mx: 1 }}>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon sx={{ color: "primary" }} />
                    </IconButton>
                    <Typography variant="h6" color="black">
                        {`1500 Me gusta`}
                    </Typography>
                </Grid>
            </ListItemText>
            <ListItemText>
                <Grid sx={{mx:1}}>
                    <IconButton edge="end" aria-label="delete" sx={{ bgcolor: "cyan" }}>
                        <EditIcon sx={{ color: "black" }} />
                    </IconButton>
                    <IconButton edge="end" aria-label="delete" sx={{ bgcolor: "red", ml: 3 }}>
                        <DeleteIcon sx={{ color: "black" }} />
                    </IconButton>
                </Grid>
            </ListItemText>
        </ListItem>
    )
}
