

export const getPostBySlug = async ( slug: string) => {
	const response = await fetch(`http://localhost:3000/api/posts/${slug}`, {
		cache: "no-store",
	});

	if (!response.ok) {
		throw new Error("Failed");
	}

	return response.json();
};