import React, { useEffect, useState } from 'react';

import { getImageUrl } from '../firebase-config.js'

const Book = () => {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    const fetchImageUrl = async () => {
      const url = await getImageUrl();
      setImageUrl(url);
    };

    fetchImageUrl();
  }, []);

  return (
    <div>
      <h1>THIS IS THE BOOK</h1>
      {imageUrl && <img src={imageUrl} alt="Book Thumbnail" />}
    </div>
  );
};

export default Book;