import { Post } from "../interfaces/Posts.interface";
import { useState, useEffect } from 'react'
import { getData } from "../services/getData";

/**
 * Obtains information about the posts from the endpoint.
 * @returns {{userPost: Post[], fetchUserPosts: () => Promise<void>}}
 */

const usePostsRender = (): {userPost: Post[]; fetchUserPosts: () => Promise<void>} => {

  const [userPost, setUserPost] = useState<Post[]>([])
  const URL = import.meta.env.VITE_REACT_APP_API_URL;
  
  const fetchUserPosts = async () => {
    try {
      const posts = await getData<Post[]>(`${URL}/posts`);
      setUserPost(posts)
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

export default usePostsRender;
