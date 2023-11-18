import axios from 'axios';

export const getAllCategories = async () => {
  const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

  const response = await axios.get("/api/categories1");

//   headers: {
// 	'Cache-Control': 'no-cache',
// 	'Pragma': 'no-cache',
// 	'Expires': '0',
//   },

  
  await delay(5000);

  return response;
};
