import {
  Card,
  Typography,
  CardHeader,
  Avatar,
  CardContent,
  Grid
} from '@mui/material';
import {FC} from 'react'
import { firstCharacter } from '../../../helpers/firstCharacter';

interface IListCommentsUser {
  author: string;
  dateComment: string;
  description: string;
}

export const ListCommentPublication: FC<IListCommentsUser>  = ({ author, dateComment, description }) => {
  return (
    <Grid item xs={12}>
      <Card sx={{ bgcolor: "primary.main", margin: 1 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
              {firstCharacter(author)}
            </Avatar>
          }
          title={<Typography color="white" >{`Por ${author}`}</Typography>}
          subheader={<Typography color="white" >{dateComment}</Typography>}
        />
        <CardContent>
          <Typography variant="body2" color="white" className='truncate-text-card'>
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  )
}
