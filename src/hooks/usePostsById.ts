import { useState, useEffect } from 'react'
import { Post } from "../interfaces/Posts.interface";
import { getData } from "../services/getData";
import { useNavigate } from 'react-router-dom';

/**
 * Obtains information about a post based on the ID.
 * and author passed as parameters
 * @param url 
 * @returns {Post}
 */

const usePostsById = (id: string, author?:string) => {

  const URL = `${import.meta.env.VITE_REACT_APP_API_URL}/posts`;
  const [userPost, setUserPost] = useState<Post>()
  const navigate = useNavigate()

  
  const fetchUserPostsById = async () => {
    try {
      const posts = await getData<Post[]>(URL);
      const post = posts?.find(post => post.id === parseInt(id));
      
      if ( author && (!post || post.author !== author)) {
        navigate('/admin')
      }

      setUserPost(post)
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
