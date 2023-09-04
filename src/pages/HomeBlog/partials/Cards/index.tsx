import {
  Card,
  Typography,
  CardHeader,
  Avatar,
  CardMedia,
  CardContent,
  CardActions,
  Link,
  Grid
} from '@mui/material';
import { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Post } from "../../../../interfaces/Posts.interface";
import { ItemCardLike } from '../components/ItemCardLike';
import './style.css'
import { firstCharacter } from '../../../../helpers/firstCharacter';
interface ICardsProps{
  post: Post;
}

/**
 * A component that returns a Card with the data of 
 * 'author, publication date, publication description, number of likes'
 * with the option to view more details.
 * @param post 
 * @returns
 */

export const Cards: FC<ICardsProps> =({ post }) => {

  return (
    <Grid item md={6} xs={12}>
      <Card sx={{ bgcolor: "primary.main", margin: 1 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
              {firstCharacter(post.author)}
            </Avatar>
          }
          title={<Typography color="white" >{post.author}</Typography>}
          subheader={<Typography color="white" >{post.datePublication}</Typography>}
        />
        <CardMedia
          component="img"
          height="500px"
          image={post.linkImage}
          alt="Paisaje"
        />
        <CardContent>
          <Typography variant="body2" color="white" className='truncate-text-card'>
            {post.description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <ItemCardLike countLiked={post.liked}></ItemCardLike>
          <Grid container direction="row" justifyContent="end">
            <Link
              component={RouterLink}
              to={`/detailpublication/${post.id}`}
              sx={{ color: 'white'}}
            >
              Leer mas
            </Link>
          </Grid>
        </CardActions>
      </Card>
    </Grid>
  )
}
