import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import '../styles/Header2.css'

import { getCodestoneThumbnailUrl } from '../firebase-config.js';

const pages = ['Book', 'Characters', 'Newsletter', 'Our Mission', 'Shop'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout']



function Header2() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    const fetchImageUrl = async () => {
      const url = await getCodestoneThumbnailUrl();
      setImageUrl(url);
    };

    fetchImageUrl();
  }, []);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <header className="app-bar">
      <div className="container">
        <nav className="nav-bar">
          <a href="/">
            {imageUrl && (
              <img href="/" src={imageUrl} alt="Book Thumbnail" className="logo" />
            )}
          </a>
          <div className="menu-icon" onClick={handleOpenNavMenu}>
            <i className="material-icons">menu</i>
          </div>
          <ul className="menu">
            {pages.map((page) => (
              <li key={page} onClick={handleCloseNavMenu}>
                <Link to={`/${page}`}>{page}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mobile-title">
          <h5>
            {/* CODE CRAFTERS mobile browser (This is text that we can choose to display) */}
          </h5>
        </div>
        <div className="desktop-menu">
          {pages.map((page) => (
            <button
              key={page}
              onClick={handleCloseNavMenu}
              component={Link}
              to={`/${page}`}
              className="menu-button"
            >
              {page}
            </button>
          ))}
        </div>
        <div className="cart-icon">
          <i className="material-icons">shopping_cart</i>
        </div>
        <div className="user-menu">
          <div className="avatar" onClick={handleOpenUserMenu}>
            <img src="/static/images/avatar/2.jpg" alt="Remy Sharp" />
          </div>
          <ul className="user-settings">
            {settings.map((setting) => (
              <li key={setting} onClick={handleCloseUserMenu}>
                <span>{setting}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header2;
