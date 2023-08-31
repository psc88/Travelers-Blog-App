import {
  Card,
  Typography,
  CardHeader,
  Avatar,
  IconButton,
  CardMedia,
  CardContent,
  CardActions,
  Link,
  Grid
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { colorTheme } from '../../theme';
import { Link as RouterLink } from 'react-router-dom';

import './style.css'

// FIXME: Problema de tipo de datos
export const Cards = ({post}) => {
  
  const colorRed = colorTheme.palette.error.main;
  const colorPurple = colorTheme.palette.primary.main;

  return (
    <Card sx={{ bgcolor: colorPurple, margin: 1 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: colorRed }} aria-label="recipe">
            P
          </Avatar>
        }
        title={<Typography color="white" >{post.author}</Typography>}
        subheader={<Typography color="white" >{post.datePublication}</Typography>}
      />
      <CardMedia
        component="img"
        height="100%"
        image={post.linkImage}
        alt="Paisaje"
      />
      <CardContent>
        <Typography variant="body2" color="white" className='truncate-text'>
          {post.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Grid container direction="row" justifyContent="left">
          <IconButton aria-label="add to favorites">
            <FavoriteIcon sx={{ color: colorRed }} />
          </IconButton>
          <Typography variant="h6" color="white">
            {`${post.liked} Me gusta`}
          </Typography>
        </Grid>
        <Grid container direction="row" justifyContent="end">
          <Link
            component={RouterLink}
            to="/detailpublication"
            sx={{ color: 'white', mr: 3 }}
          >
            Leer mas
          </Link>
        </Grid>
      </CardActions>
    </Card>
  )
}
