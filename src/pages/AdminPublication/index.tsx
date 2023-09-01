import { Typography, List, Grid } from "@mui/material"
import { CreatePosts } from "./CreatePosts"
import { AuthLayout } from "../../layout/AuthLayout";
import { useEffect, useState } from "react";
import { ListPosts } from "./ListPosts";


export const AdminPublication = () => {
  const [data, setData] = useState([])
  const URL = import.meta.env.VITE_REACT_APP_API_URL;
  const storedUser = sessionStorage.getItem('user');
  const { name } = JSON.parse(storedUser) || []

  useEffect(() => {
    getApi();
  }, [])

  const getApi = async () => {
    try {
      const response = await fetch(`${URL}/posts`);
      const data = await response.json();
      const filteredData = data?.filter(post => post.author === name);
      setData(filteredData)
    } catch (error) {
      console.log(error);
    }
  }
  console.log(data);


  return (
    <>
      <AuthLayout title="Crear nueva publicación">
        <CreatePosts />
        <Grid container justifyContent="center">
          <Typography variant="h5" sx={{ mt: 4 }}>Tus Publicaciones</Typography>
        </Grid>
          {
            data?.map(post => <ListPosts key={post.id} post={post} />)
          }
      </AuthLayout>
    </>
  )
}
