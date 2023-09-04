import { useState, useEffect } from 'react'
import { getData } from "../services/getData";
import { Comments } from '../interfaces/Comments.interface';

/**
 * Obtains information about the comments from the endpoint.
 * @param url 
 * @returns {Post[]}
 */

const usePostsComment = (idPost: number) => {

  const URL = import.meta.env.VITE_REACT_APP_API_URL;
  const [userComments, setUserComments] = useState<Comments[]>([])
  
  const fetchUserComments = async () => {
    try {
      const comments = await getData<Comments[]>(`${URL}/comments`);
      const filteredCommentsById = comments.filter(comment => comment.idPost === idPost)
      setUserComments(filteredCommentsById.sort((a,b)=>b.id-a.id))
    } catch (error) {
      setUserComments([])
    }
  }

  useEffect(() => {
    fetchUserComments();
  }, [])

  return {
    userComments,
    fetchUserComments
  }
}

export default usePostsComment;
