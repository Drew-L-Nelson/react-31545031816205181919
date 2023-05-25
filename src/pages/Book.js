import React, { useEffect, useState } from 'react';
import '../styles/Book.css';

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
      <h1>THIS IS THE BOOK</h1>
      {/* {imageUrl && <img src={imageUrl} className='background-map-image' alt="HomeImage" />} */}
      {<img src={imageUrl} usemap="#image_map" className='background-map-image'/>}

      <map name="image_map">
        <area alt="planet link" title="planet link" href="/characters" coords="293,285,110" shape="circle" />
        <area alt="Cloud link" title="Cloud link" href="/book" coords="847,340 880,343 943,350 961,347 1022,343 1076,349 1121,349 1194,345 1217,338 1214,324 1279,309 1278,297 1228,283 1209,271 1178,249 1163,246 1138,219 1109,217 1091,219 1064,223 1034,234 989,246 962,255 943,275 945,289 934,295 914,302 935,309 941,317 927,328 907,323 886,328 878,331 " shape="polygon" />
        <area alt="Shop link" title="Shop link" href="/shop" coords="258,827,38" shape="circle" />
      </map>

    </div>
  );
};

export default Book;