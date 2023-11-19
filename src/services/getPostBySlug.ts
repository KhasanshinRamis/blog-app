import axios from 'axios';

export const getPostBySlug = async ( slug: string) => {
  const response = await axios.get(`/api/posts/${slug}`, {
    headers: {
      'Cache-Control': 'no-cache',
      'Pragma': 'no-cache',
      'Expires': '0',
    } 
  });
  return response.data.post.slug;
};