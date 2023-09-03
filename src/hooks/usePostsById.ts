import { useState, useEffect } from 'react'
import { Post } from "../interfaces/Posts.interface";
import { getData } from "../services/getData";

const usePostsById = (id: string) => {

  const URL = `${import.meta.env.VITE_REACT_APP_API_URL}/posts`;
  const [userPost, setUserPost] = useState<Post>()

  
  const fetchUserPostsById = async () => {
    try {
      const posts = await getData<Post[]>(URL);
      const filteredData = posts?.find(post => post.id === parseInt(id));
      setUserPost(filteredData)
    } catch (error) {
      setUserPost(undefined);
    }
  }
  useEffect(() => {
    fetchUserPostsById();
  }, [])

  return {
    userPost,
    fetchUserPostsById
  }
}

export default usePostsById;
