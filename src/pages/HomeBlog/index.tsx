import { Box, Grid, Typography } from "@mui/material"
import { Cards } from "../HomeBlog/partials/Cards"
import { useMediaQueryTheme } from "../../hooks/useMediaQueryTheme";
import { AuthLayout } from '../../layout/AuthLayout';
import usePostsRender from "../../hooks/usePostsRender";

export const HomeBlog = () => {
  const themeMediaQuery = useMediaQueryTheme("md")
  const {userPost ,fetchUserPosts} = usePostsRender()

  return (
    <>
      <Box marginTop={8}>
        {
          userPost?.length === 0 ? (
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
                    userPost?.sort((a,b)=>b.id-a.id).map(post => <Cards 
                      key={post.id} 
                      post={post} 
                      idPost={post.id}
                      fetchUserPosts={fetchUserPosts}
                      />)
                  }
                </Grid>
              </Grid>
            ) : (
              <Grid container>
                {
                  userPost?.sort((a,b)=>b.id-a.id).map(post => <Cards 
                    key={post.id} 
                    post={post} 
                    idPost={post.id} 
                    fetchUserPosts={fetchUserPosts}
                    />)
                }
              </Grid>
            )
        }
      </Box >
    </>
  )
}
