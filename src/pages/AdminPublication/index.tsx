import { AuthLayout } from "../../layout/AuthLayout";
import { CreatePosts } from "./partials/CreatePost";
import { ListPostsUser } from "./partials/ListPostsUser";
import { TitleComponent } from "../../components";
import usePosts from "../../hooks/usePosts";

export const AdminPublication = () => {

  const {fetchUserPosts, userPost} = usePosts();
  const URL = import.meta.env.VITE_REACT_APP_API_URL;

  return (
    <AuthLayout title="Crear nueva publicación">
      <CreatePosts fetchUserPosts={fetchUserPosts} />
      <TitleComponent title="Tus Publicaciones"/>
      {
        userPost?.length > 0 ? (
          userPost?.map((post) => (
            <ListPostsUser
              key={post.id}
              post={post}
              idPublicationUrl={`${URL}/posts/${post.id}`}
              fetchUserPosts={fetchUserPosts}
              idPublication={post.id}
            />
          ))
        ) : (
          <TitleComponent title="Reliza tu primera publicación"/>
        )
      }
    </AuthLayout>
  )
}
