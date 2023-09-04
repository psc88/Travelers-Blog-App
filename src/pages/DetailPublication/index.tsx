import { Grid, Typography, Avatar, CardHeader, CardMedia, Card } from "@mui/material"
import { useParams } from "react-router-dom";
import { DetailPublicationComment } from "./partials/DetailPublicationComment";
import { AuthLayout } from "../../layout/AuthLayout";
import usePostsById from "../../hooks/usePostsById";
import { firstCharacter } from "../../helpers/firstCharacter";


export const DetailPublication = () => {
  const { id="0" } = useParams()
  const {userPost} = usePostsById(id)

  if (!userPost) {
    return null;
  }
  
  return (
    <AuthLayout title={userPost.title}>
      <Grid
        container
        spacing={1}
        justifyContent="center"
        alignItems="center">
        <Card sx={{p:1}}>
          <Grid container direction="column">
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: "coral" }} aria-label="recipe">
                  {firstCharacter(userPost.author)}
                </Avatar>
              }
              title={<Typography>{`Por ${userPost.author}`}</Typography>}
              subheader={userPost.datePublication}
            />
            <CardMedia
              component="img"
              height="auto"
              image={userPost.linkImage}
              alt={userPost.title}
            />
            <Typography variant="subtitle1" color="initial" sx={{p:1}}>{userPost.description}</Typography>
          </Grid>
          <DetailPublicationComment idPublication={id}/>
        </Card>
      </Grid>
    </AuthLayout>
  )
}