import React, { useState } from "react";
import axios from "axios";

const ImageSearch = () => {
  const [image, setImage] = useState(null);
  const [query, setQuery] = useState("nature"); // or whatever keyword you want
  const UNSPLASH_ACCESS_KEY = "TbyqJt2lcyBzrVxIh9ysogrizfaFdtLGOSV35Fytgq0";

  const fetchImage = async () => {
    try {
      const response = await axios.get(
        "https://api.unsplash.com/search/photos",
        {
          params: {
            query,
            per_page: 1, // Fetch only one image
          },
          headers: { Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}` },
        }
      );

      // Get the first image from the response
      const imageUrl = response.data.results[0].urls.raw;

      // Construct the URL with 200x200 size
      const resizedImageUrl = `${imageUrl}?w=200&h=200&fit=fill`;

      // Set the image to state
      setImage(resizedImageUrl);
    } catch (error) {
      console.error("Error fetching image:", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for images"
      />
      <button onClick={fetchImage}>Search Image</button>

      {image && (
        <div>
          <img src={image} alt={query} />
        </div>
      )}
    </div>
  );
};

export default ImageSearch;
