import { Grid, Typography, List } from "@mui/material"
import { CreatePosts } from "./CreatePosts"
import { ListPosts } from "./ListPosts"
import { useFetch } from "../../hooks/useFetch";
import { Post } from "../../interfaces/Posts.interface";


export const AdminPublication = () => {

    const URL = import.meta.env.VITE_REACT_APP_API_URL;
    const { data } = useFetch<Post[]>(`${URL}/posts`);
    // QUITAR LUEGO
    const authorToFilter = "Pablo Castillo"
    const filteredData = data?.filter(post => post.author === authorToFilter);

    return (
        <Grid
            container
            direction={"column"}
            alignItems={"center"}
            sx={{ m: 4 }}
        >
            <CreatePosts />
            <Typography variant="h4" color="initial" sx={{ mt: 3 }}>Tus Blogs</Typography>
            <List>
                {
                    filteredData?.map(post => <ListPosts key={post.id} post={post} />)
                }
            </List>
        </Grid>
    )
}
