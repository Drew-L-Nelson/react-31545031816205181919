import React, { useState, useEffect } from 'react';
import '../styles/About.css'
import { getAboutImageUrl } from '../firebase-config.js'
import { useParallax } from 'react-scroll-parallax';

const About = () => {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    const fetchImageUrl = async () => {
      const url = await getAboutImageUrl();
      setImageUrl(url);
    };

    fetchImageUrl();
  }, []);



  return (
    <div>
      {imageUrl && <img src={imageUrl} className='main-about-image' alt="AboutImage" />}
    </div>
  )
}

export default About;