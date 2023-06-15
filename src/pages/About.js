import React, { useState, useEffect } from 'react';
import '../styles/About.css';
import { getAboutImageUrl } from '../firebase-config.js';
import AboutTextBlock from './AboutTextBlock.js';
import { Parallax } from 'react-parallax';

import {
  Parallax,
  ParallaxBanner,
  ParallaxBannerLayer,
} from 'react-scroll-parallax';

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
      <Parallax strength={400} bgImage={imageUrl}>
        <div className="content">
          <div className="text-content">Normal Parallax</div>
        </div>
      </Parallax>

      <Parallax strength={300} blur={{ min: -5, max: 15 }} >
        <div className="content">
          <div className="text-content">Blur</div>
        </div>
      </Parallax>

      <Parallax strength={-300} >
        <div className="content">
          <div className="text-content">Reverse Parallax</div>
        </div>
      </Parallax>
    </div>
  );
};

export default About;

{
  /* <Parallax pages={2}>
    <ParallaxBanner style={{ aspectRatio: '2 / 1', height: '50%' }}>
      <ParallaxBannerLayer speed={0} >
        <img src={imageUrl} className='main-about-image' alt="HomeImage" style={{ zIndex: -1 }}/>
      </ParallaxBannerLayer>
    </ParallaxBanner>

    <ParallaxBanner
      layers={[]}
      style={{ height: '100vh', zIndex: 1 }}
      offset={1}
    >
      <ParallaxBannerLayer speed={80}>
        <AboutTextBlock />
      </ParallaxBannerLayer>
    </ParallaxBanner>
  </Parallax> */
}

{
  /* <div className='main-about-image'>
        {imageUrl && <img src={imageUrl} className='main-image' alt="HomeImage" />}
      </div> */
}

// pages={2}
//         offset={0}
//         style={{ aspectRatio: '2 / 1' }}
//         layers={[
//           { image: imageUrl, speed: -20 },
//           {
//             speed: -10,
//             children: (
//               <div className="headline">
//                 <h1>My Headline</h1>
//               </div>
//             ),
//           },
//           {
//             children: <AboutTextBlock />
//           }
//         ]}
//         className="aspect-[2/1]"
