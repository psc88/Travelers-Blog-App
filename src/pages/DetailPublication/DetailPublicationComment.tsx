import { Grid, Typography, TextField } from "@mui/material"

export const DetailPublicationComment = () => {
  return (
    <Grid
        container
        direction="column"
        sx={{ m: 2 }}
        alignContent={"center"}
      >
        <Typography variant="inherit" color="initial">Escribir comentario</Typography>
        <form>
            <Grid container direction="row">
              <Grid item xs={12} sx={{mt:1}}>
                <TextField
                  label="Nombre"
                  type="text"
                  placeholder="Nombre"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sx={{mt:1}}>
                <TextField
                  label="Comentario"
                  type="text"
                  placeholder="Comentario..."
                  multiline
                  fullWidth
                  rows={4}
                />
              </Grid>
            </Grid>
        </form>
      </Grid>
  )
}
