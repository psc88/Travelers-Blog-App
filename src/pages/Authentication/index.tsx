import {
  Button,
  Grid,
  TextField,
  Typography,
  Container,
  CardMedia
} from '@mui/material'

export const Authentication = () => {
  return (
    <Grid container spacing={1}>
      <Grid item lg={6} md={6} sm={6} xs={12}>
        <CardMedia
          component="img"
          width="100%"
          image="https://i.pinimg.com/736x/e9/34/16/e93416ff185642e88d8e2db02ab89c95.jpg"
          alt="viajeros"
          sx={{p:1}}
        />
      </Grid>
      <Grid item lg={6} md={6} sm={6} xs={12}>
        <Container sx={{ mt: 3 }}>
          <Typography variant="h3" color="initial">Crea una cuenta</Typography>
          <Typography variant="subtitle1" color="initial">Es rápido y fácil</Typography>
        </Container>
        <Grid
          sx={{ p: 3, borderRadius: 2 }}
        >
          <form>
            <Grid container spacing={1}>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <TextField
                  type="text"
                  placeholder="Nombre"
                  fullWidth
                  sx={{ backgroundColor: 'white' }}
                />
              </Grid>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <TextField
                  type="text"
                  placeholder="Apellido"
                  fullWidth
                  sx={{ backgroundColor: 'white' }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="email"
                  placeholder="Correo electrónico"
                  fullWidth
                  sx={{ backgroundColor: 'white' }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="password"
                  placeholder="Contraseña"
                  fullWidth
                  sx={{ backgroundColor: 'white' }}
                />
              </Grid>
            </Grid>
            <div className='d-flex justify-content-center'>
              <Button
                variant="contained"
                color="secondary"
                fullWidth
                sx={{ mt: 1 }}
              >
                Crear cuenta
              </Button>
            </div>
          </form>
        </Grid>
      </Grid>
    </Grid>
  )
}
