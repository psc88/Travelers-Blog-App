import { Grid, Typography, Avatar, CardHeader, CardMedia } from "@mui/material"
import { BreadCrumbs } from "../../components"
import { colorTheme } from "../../theme";
import { DetailPublicationComment } from "./DetailPublicationComment";

export const DetailPublication = () => {
  const colorRed = colorTheme.palette.error.main;
  return (
    <>
      <BreadCrumbs />
      <Grid
        container
        direction="column"
        sx={{ m: 2 }}
        alignContent={"center"}
      >
        <Grid>
          <Typography variant="h3" color="initial">Viajando por Argentina</Typography>
        </Grid>
        <Grid>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: colorRed }} aria-label="recipe">
                P
              </Avatar>
            }
            title={<Typography>Por Pablo Castillo, 29/08/2023</Typography>}
          />
          <CardMedia
            component="img"
            height="50%"
            image="https://img.freepik.com/fotos-premium/campo-flores-arbol-primer-plano_865967-7108.jpg"
            alt="Paisaje"
          />
        </Grid>
      </Grid>
      <Typography variant="inherit" color="initial" sx={{ mx: 10 }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus itaque, asperiores hic excepturi autem unde soluta adipisci? Enim quisquam consequatur aspernatur dolorem iure optio sunt ratione, neque, tempore fugit nam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, ab impedit libero facere earum porro voluptas nesciunt fugiat enim dignissimos modi expedita culpa similique incidunt perferendis! Eius odit consequuntur totam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque dolorem quos et enim optio aperiam officiis delectus, saepe eius sapiente reiciendis sequi cum fugiat, facere ducimus voluptatum. Doloribus veritatis error et laudantium? Iure illum consequatur dignissimos obcaecati delectus qui similique dolorem ipsa facilis distinctio, quis officiis et earum repudiandae nisi ducimus corrupti reprehenderit unde nesciunt non exercitationem magni veritatis. Nulla error sed dolore cupiditate nihil sit, nobis fugiat, accusamus ipsum iusto, ipsa natus nisi cum! Reiciendis maxime tenetur hic? Atque mollitia exercitationem ipsum, eius eum nam dicta dolores pariatur, nihil voluptates amet culpa voluptatem. Voluptas adipisci laboriosam accusantium veritatis quidem!</Typography>
      <DetailPublicationComment/>
    </>
  )
}
