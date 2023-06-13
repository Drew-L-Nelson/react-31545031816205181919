import React, { useState, useEffect } from 'react';
import '../styles/About.css'
import { getAboutImageUrl } from '../firebase-config.js'
import AboutTextBlock from './AboutTextBlock.js';
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
        pages={2}
        offset={0}
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
          {
            children: <AboutTextBlock />
          }
        ]}
        className="aspect-[2/1]"
      >

        <ParallaxBannerLayer speed={-10}> 
          {/* <AboutTextBlock /> */}
        </ParallaxBannerLayer>
        
      </ParallaxBanner>
      
    </div>
  )
}

export default About;