import { Grid, Typography } from '@mui/material'

export const AuthLayout = ({ children, title }) => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{ minHeight: '100vh', backgroundColor: 'secondary.main', padding: 4 }}
    >
      <Grid
        item
        className='box-shadow'
        xs={3}
        sx={{ 
          width: { md:600 },
          backgroundColor: 'white', 
          padding: 3, 
          borderRadius: 2 
        }}
      >
        <Grid container justifyContent="center">
          <Typography variant="h5" sx={{ mb: 1 }}>{title}</Typography>
        </Grid>
        {
          children
        }
      </Grid>
    </Grid>
  )
}
