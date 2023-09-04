import { Box, Grid, Typography } from "@mui/material"
import { Cards } from "../HomeBlog/partials/Cards"
import { useMediaQueryTheme } from "../../hooks/useMediaQueryTheme";
import { Post } from "../../interfaces/Posts.interface";
import { AuthLayout } from '../../layout/AuthLayout';
import { useFetch } from '../../hooks/useFetch';

export const HomeBlog = () => {
  const themeMediaQuery = useMediaQueryTheme("md")
  const URL = import.meta.env.VITE_REACT_APP_API_URL;
  const { data } = useFetch<Post[]>(`${URL}/posts`);

  return (
    <>
      <Box marginTop={8}>
        {
          data?.length === 0 ? (
            <AuthLayout title='ERROR 404'>
              <Grid container justifyContent="center" alignItems="center">
                <Typography variant="h4" gutterBottom>
                  Sin Publicaciones
                </Typography>
              </Grid>
            </AuthLayout>
          ) :
            themeMediaQuery ? (
              <Grid container>
                <Grid item lg={8} md={6} xs={12}>
                  {
                    data?.sort((a,b)=>b.id-a.id).map(post => <Cards key={post.id} post={post} />)
                  }
                </Grid>
              </Grid>
            ) : (
              <Grid container>
                {
                  data?.sort((a,b)=>b.id-a.id).map(post => <Cards key={post.id} post={post} />)
                }
              </Grid>
            )
        }
      </Box >
    </>
  )
}
