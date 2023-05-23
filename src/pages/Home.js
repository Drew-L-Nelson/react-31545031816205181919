import React, { useEffect, useState } from 'react';

import { getHomeImageUrl } from '../firebase-config.js'

const Book = () => {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    const fetchImageUrl = async () => {
      const url = await getHomeImageUrl();
      setImageUrl(url);
    };

    fetchImageUrl();
  }, []);

  return (
    <div>
      <h1>THIS IS THE HOMEPAGE</h1>
      {imageUrl && <img src={imageUrl} alt="Book Thumbnail" />}
    </div>
  );
};

export default Book;