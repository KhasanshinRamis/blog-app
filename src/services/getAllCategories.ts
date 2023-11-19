import axios from 'axios';

export const getAllCategories = async () => {
	const response = await axios.get("/api/categories1", {
		// next: { revalidate: 3600 },
		timeout: 60000,
		// headers: {
		// 	'Cache-Control': 'no-cache',
		// 	'Pragma': 'no-cache',
		// 	'Expires': '0',
		// },
	});
	return response;
};
