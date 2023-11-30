// Header.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';

import logo from "../../assets/logo_carl.webp";
import facebook from "../../assets/logo_facebook.webp";
import instagram from "../../assets/logo_insta.webp";
import twitter from "../../assets/logo_twitter.webp";
import youtube from "../../assets/logo_youtube.webp";

const Header: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const imagesList = [
    {
      id: 1,
      src: instagram,
      alt: "Instagram",
    },
    {
      id: 2,
      src: facebook,
      alt: "Facebook",
    },
    {
      id: 3,
      src: twitter,
      alt: "Twitter",
    },
    {
      id: 4,
      src: youtube,
      alt: "YouTube",
    },
  ];

  return (
    <nav>
      <div className="grid-container-logo">
        <img src={logo} alt="Logo" className="logo-container" />
        <div className="input-wrapper">
          <input type="text" placeholder="Search" className="input-container" />
        </div>
      </div>
      <div className="container">
        <div className="empty"></div>
        <div>
          <ul role="list" className="navigation">
            <div className="header-nav">
              <li><Link to="/">Accueil</Link></li>
              <li><Link to="/nos-actions">Nos actions</Link></li>
              <li><Link to="/nous-soutenir">Nous soutenir</Link></li>
              <li>
                <Button aria-controls="simple-menu" aria-haspopup="true" className="Adil" onClick={handleMenuClick}>
                  Plus
                </Button>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={open}
                  onClose={handleMenuClose}
                  className="Test"
                >
                  <MenuItem onClick={handleMenuClose} component={Link} to="/notre-equipe">Notre équipe</MenuItem>
                  <MenuItem onClick={handleMenuClose} component={Link} to="/faire-un-don">Faire un don</MenuItem>
                </Menu>
              </li>
            </div>
          </ul>
        </div>

        <div className="social-nav">
          {imagesList.map((image) => (
            <img key={image.id} src={image.src} alt={image.alt} />
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Header;
