import { Post } from "../interfaces/Posts.interface";
import { useState, useEffect, useContext } from 'react'
import { getData } from "../services/getData";
import { UserContext } from "../context/UserContext";

/**
 * Obtains information about the posts from the endpoint.
 * @returns {{userPost: Post[], fetchUserPosts: () => Promise<void>}}
 */

const usePosts = (): {userPost: Post[]; fetchUserPosts: () => Promise<void>} => {

  const [userPost, setUserPost] = useState<Post[]>([])
  const {userAuthenticated} = useContext(UserContext)
  const URL = import.meta.env.VITE_REACT_APP_API_URL;
  
  const fetchUserPosts = async () => {
    try {
      const posts = await getData<Post[]>(`${URL}/posts`);
      const filteredPostsByUser = posts.filter(post => post.author === userAuthenticated.name)

      setUserPost(filteredPostsByUser.sort((a,b)=>b.id-a.id))
    } catch (error) {
      setUserPost([])
    }
  }

  useEffect(() => {
    fetchUserPosts();
  }, [])

  return {
    userPost,
    fetchUserPosts
  }
}

export default usePosts;
