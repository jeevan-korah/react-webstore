import axios from "axios";

const fetchImage = async (query) => {
  const UNSPLASH_ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

  try {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: {
        query,
        per_page: 1, // Fetch only one image
      },
      headers: { Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}` },
    });

    const imageUrl = response.data.results[0]?.urls.raw;
    const resizedImageUrl = imageUrl ? `${imageUrl}?w=200&h=200&fit=crop` : "";

    return resizedImageUrl;
  } catch (error) {
    console.error("Error fetching image:", error);
    return null;
  }
};

export default fetchImage;
