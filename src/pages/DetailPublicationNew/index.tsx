import { useState, useEffect } from "react";
import { Grid, Typography, Avatar, CardHeader, CardMedia } from "@mui/material"
import { useParams } from "react-router-dom";
import { DetailPublicationComment } from "./DetailPublicationComment";


export const DetailPublicationNew = () => {
  const { id } = useParams()
  const URL = `${import.meta.env.VITE_REACT_APP_API_URL}/posts`;
  const [dataPost, setdataPost] = useState({
    title: "",
    author: "",
    description: "",
    datePublication: "",
    linkImage: "",
    liked: 0
  })

  useEffect(() => {
    getApi();
  }, [])

  const getApi = async () => {
    try {
      const response = await fetch(URL);
      const posts = await response.json();
      const filteredData = posts?.find(post => post.id === parseInt(id));
      const { title, author, description, datePublication, linkImage, liked } = filteredData
      setdataPost({ title, author, description, datePublication, linkImage, liked })
    } catch (error) {
      console.log(error);
    }
  }

  const getFirstCharacter = (author: string) => {
    return author.charAt(0).toUpperCase();
  };

  return (
    <>
      <Grid
        container
        direction="column"
        sx={{ backgroundColor: "secondary.main" }}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Grid>
          <Typography sx={{ mt:3 }} variant="h3" color="white">{dataPost.title}</Typography>
        </Grid>
        <Grid container justifyContent="center" alignItems="center">
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: "coral" }} aria-label="recipe">
                {getFirstCharacter(dataPost.author)}
              </Avatar>
            }
            title={<Typography color="white">{`Por ${dataPost.author} - Publicado el ${dataPost.datePublication}`}</Typography>}
          />
          <CardMedia
            component="img"
            image={dataPost.linkImage}
            alt="Paisaje"
          />
        </Grid>
        <Typography variant="inherit" color="initial" sx={{ mx: 10 }}>{dataPost.description}</Typography>
        <DetailPublicationComment />
      </Grid>
    </>
  )
}
