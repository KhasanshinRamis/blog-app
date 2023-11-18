import axios from 'axios';
export const getPosts = async (page: number | '', category: string | '') => {
  const response = await axios.get(`/api/posts?page=${page}&category=${category || ''}`, {
    headers: {
      'Cache-Control': 'no-cache',
      'Pragma': 'no-cache',
      'Expires': '0',
    } 
  });
  return response;
};