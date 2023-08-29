import { Box, Grid, Typography } from "@mui/material"
import { Cards } from "../../components"

export const HomeBlog = () => {

  return (
    <>
      <Box sx={{ flexGrow: 1 }} margin={5}>
        <Grid container spacing={2}>
          <Grid item lg={8} md={6} sm={12} xs={12}>
            <Cards/>
          </Grid>
          <Grid item lg={4} md={6} sm={12} xs={12}>
            <Typography className='fs-3'>xs=8</Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}
