import { Post } from "../interfaces/Posts.interface";
import { useState, useEffect } from 'react'
import { getData } from "../services/getData";


const usePosts = () => {

  const [userPost, setUserPost] = useState<Post[]>([])
  
  const storedUser = sessionStorage.getItem('user');
  const { name } = JSON.parse(storedUser) || []
  
  const URL = import.meta.env.VITE_REACT_APP_API_URL;
  const fetchUserPosts = async () => {
    try {
      const posts = await getData<Post[]>(`${URL}/posts`);
      const filteredPostsByUser = posts.filter(post => post.author === name)

      setUserPost(filteredPostsByUser)
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
