import React, { useEffect, useState } from 'react';
import '../styles/Home.css';

import { getHomeImageUrl } from '../firebase-config.js'

const Home = () => {
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
      {imageUrl && <img src={imageUrl} className='main-image' alt="HomeImage" />}
    </div>
  );
};

export default Home;