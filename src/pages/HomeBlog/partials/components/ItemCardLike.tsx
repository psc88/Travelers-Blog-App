import { Grid, IconButton, Typography } from "@mui/material"
import FavoriteIcon from '@mui/icons-material/Favorite';
import { FC } from 'react';

interface ItemCardLikeProps {
  countLiked: number;
}

export const ItemCardLike: FC<ItemCardLikeProps> = ({countLiked}) => {
  return (
    <Grid container direction="row" justifyContent="left" alignItems="center">
      <IconButton aria-label="add to favorites">
        <FavoriteIcon sx={{ color: 'white' }} />
      </IconButton>
      <Typography variant="h6" color="white">
        {`${countLiked} Me gusta`}
      </Typography>
    </Grid>
  )
}
