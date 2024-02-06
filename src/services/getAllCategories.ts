export const getAllCategories = async () => {
	const response = await fetch("http://localhost:3000/api/categories", {
		cache: "no-store",
	});
	
	if (!response.ok) {
		throw new Error("Failed");
	}
	
	return response.json();
};

