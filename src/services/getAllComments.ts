export const getAllComments = async (postSlug: number) => {
	const response = await fetch(`/api/comments?postSlug=${postSlug}`,{
		cache: "no-store",
	});

	if (!response.ok) {
		throw new Error("Failed");
	}

	return response.json();
};
