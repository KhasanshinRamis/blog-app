
export const getPosts = async (page: number | '', category: string | '') => {
	const response =await fetch(`http://localhost:3000/api/posts?page=${page}&category=${category || ''}`, {
		cache: "no-store",
	});

	if (!response.ok) {
		throw new Error("Failed");
	}

	return response.json();
};