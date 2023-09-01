import { Box, Grid, Typography } from "@mui/material"
import { Cards } from "../../components"
import { useFetch } from '../../hooks/useFetch';
import { Post } from "../../interfaces/Posts.interface";

export const HomeBlog = () => {

  const URL = import.meta.env.VITE_REACT_APP_API_URL;
  const { data } = useFetch<Post[]>(`${URL}/posts`);

  return (
    <>
      <Box marginTop={8}>
        <Grid container spacing={2}>
          <Grid item lg={8} md={6} sm={12} xs={12}>
            {
              data?.map(post => <Cards key={post.id} post={post}/>)
            }
          </Grid>
          <Grid item lg={4} md={6} sm={12} xs={12}>
            <Typography className='fs-3'>xs=8</Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}
