import { Grid, TextField, Button, Typography, Divider  } from "@mui/material"

export const DetailPublicationComment = () => {
  return (
    <form>
        <Divider sx={{backgroundColor: "GrayText"}}/>
      <Grid container justifyContent="center">
        <Typography variant="h5" color="initial">Deja tu comentario</Typography>
      </Grid>
      <Grid container>
        <Grid item xs={12} sx={{ mt: 2 }}>
          <TextField
            label='Comentario'
            type='text'
            placeholder='Escribe un comentario'
            rows={2}
            fullWidth
            multiline
          />
        </Grid>
        <Grid item xs={12}>
          <Grid container justifyContent="center" sx={{ my: 2 }}>
            <Button type='submit' variant='contained'>
              Guardar comentario
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </form>
  )
}
