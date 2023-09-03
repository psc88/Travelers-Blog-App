import { Typography, Grid } from "@mui/material"
import {FC} from 'react'

interface ITitleComponentProps {
  title: string;
}

export const TitleComponent: FC<ITitleComponentProps> = ({ title }) => {
  return (
    <Grid container justifyContent="center" sx={{py:1}}>
      <Typography variant="h6" color="initial">{title}</Typography>
    </Grid>
  )
}
