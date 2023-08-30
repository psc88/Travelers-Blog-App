import {
  Card,
  Typography,
  CardHeader,
  Avatar,
  IconButton,
  CardMedia,
  CardContent,
  CardActions
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { colorTheme } from '../../theme';

export const Cards = () => {

  const colorRed = colorTheme.palette.error.main;
  const colorPurple = colorTheme.palette.primary.main;

  return (
    <Card sx={{ bgcolor: colorPurple, margin: 1 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: colorRed }} aria-label="recipe">
            P
          </Avatar>
        }
        title={<Typography color="white" >Pablo Castillo</Typography>}
        subheader={<Typography color="white" >Agosto 29, 2023</Typography>}
      />
      <CardMedia
        component="img"
        height="194"
        image="https://img.freepik.com/fotos-premium/campo-flores-arbol-primer-plano_865967-7108.jpg"
        alt="Paisaje"
      />
      <CardContent>
        <Typography variant="body2" color="white">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni illum est rerum? Totam neque explicabo tempora architecto eius eos inventore quia accusamus sapiente quos, numquam harum nobis iusto unde cum.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon sx={{ color: colorRed }} />
        </IconButton>
        <Typography variant="h6" color="white">
          {`1500 Me gusta`}
        </Typography>
      </CardActions>
    </Card>
  )
}
