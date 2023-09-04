import { Grid, IconButton, Typography } from "@mui/material"
import FavoriteIcon from '@mui/icons-material/Favorite';
import { FC, useContext, useState } from 'react';
import usePostsById from "../../../../hooks/usePostsById";
import { UserContext } from "../../../../context/UserContext";

interface ItemCardLikeProps {
  countLiked: number;
  idPost: number;
  fetchUserPosts: () => Promise<void>;
}
interface IEditPost {
  title: string;
  author: string;
  description: string;
  datePublication: string;
  linkImage: string;
  liked: number;
}

export const ItemCardLike: FC<ItemCardLikeProps> = ({ countLiked, idPost, fetchUserPosts }) => {
  const URL = `${import.meta.env.VITE_REACT_APP_API_URL}/posts`;
  const [colorHeart, setcolorHeart] = useState(true)
  const { userPost } = usePostsById(idPost.toString());
  const [currentLiked] = useState(countLiked);
  const { userAuthenticated } = useContext(UserContext)
  console.log(userAuthenticated);


  const handleOnClickLike = async (data: IEditPost) => {
    const updatedLiked = currentLiked + 1;

    const postData: IEditPost = {
      ...data,
      liked: updatedLiked,
    }

    try {
      await fetch(`${URL}/${idPost}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(postData)
      })
      fetchUserPosts();
      setcolorHeart(false)
    } catch (error) {
      return
    }
  }

  return (
    <Grid container direction="row" justifyContent="left" alignItems="center">
      {
        userAuthenticated.name === '' ? (
          <div></div>
        ) :
          (<IconButton aria-label="add to favorites" onClick={() => handleOnClickLike(userPost!)}>
            {
              colorHeart ? <FavoriteIcon sx={{ color: 'white' }} />
                : <FavoriteIcon sx={{ color: 'red' }} />
            }
          </IconButton>)
      }
      <Typography variant="h6" color="white">
        {`${countLiked} Me gusta`}
      </Typography>
    </Grid>
  )
}
