import React, { useState, useEffect } from 'react';
import '../styles/About.css'
import { getAboutImageUrl } from '../firebase-config.js'
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';

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
    <div className="image-overlay">
      
      <ParallaxBanner
        style={{ aspectRatio: '2 / 1' }}
        layers={[
          { image: imageUrl, speed: -20 },
          { 
            speed: -10,
            children: (
              <div className="headline">
                <h1>My Headline</h1>
              </div>
            ),
          },
        ]}
        className="aspect-[2/1]"
      >

      </ParallaxBanner>
      
    </div>
  )
}

export default About;