// Header.tsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

import logo from "../../assets/logo_carl.png";
import facebook from "../../assets/logo_facebook.webp";
import instagram from "../../assets/logo_insta.webp";
import twitter from "../../assets/logo_twitter.webp";
import youtube from "../../assets/logo_youtube.webp";
import MenuIcon from "../../assets/menu-icon.svg";

const Header: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const open = Boolean(anchorEl);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setIsMobileMenuOpen(false); // Ajoutez cette ligne pour fermer également le menu mobile
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
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
        <button
          className={`mobile-menu-icon ${
            isMobileMenuOpen ? "active-icon" : ""
          }`}
          onClick={toggleMobileMenu}
        >
          <img src={MenuIcon} alt="Menu" />
        </button>
      </div>
      <div className="container">
        <div className="empty"></div>
        <div>
          <ul role="list" className="navigation">
            <div className="header-nav">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                >
                  Accueil
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/nos-actions"
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                >
                  Nos actions
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/nous-soutenir"
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                >
                  Nous soutenir
                </NavLink>
              </li>
              <li>
                <Button
                  aria-controls="simple-menu"
                  aria-haspopup="true"
                  className="menu-dropdown"
                  onClick={handleMenuClick}
                >
                  Plus
                </Button>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={open}
                  onClose={handleMenuClose}
                >
                  <MenuItem
                    onClick={handleMenuClose}
                    component={NavLink}
                    to="/notre-equipe"
                  >
                    Notre équipe
                  </MenuItem>
                  <MenuItem
                    onClick={handleMenuClose}
                    component={NavLink}
                    to="/faire-un-don"
                  >
                    Faire un don
                  </MenuItem>
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

        {isMobileMenuOpen && (
          <div className="mobile-menu">
            <ul role="list" className="navigation">
              <li onClick={closeMobileMenu}>
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                >
                  Accueil
                </NavLink>
              </li>
              <li onClick={closeMobileMenu}>
                <NavLink
                  to="/nos-actions"
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                >
                  Nos actions
                </NavLink>
              </li>
              <li onClick={closeMobileMenu}>
                <NavLink
                  to="/nous-soutenir"
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                >
                  Nous soutenir
                </NavLink>
              </li>
              <li>
                <Button
                  aria-controls="simple-menu"
                  aria-haspopup="true"
                  className={`menu-dropdown ${isDropdownOpen ? "active" : ""}`}
                  onClick={handleMenuClick}
                >
                  Plus
                </Button>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={open}
                  onClose={handleMenuClose}
                >
                  <MenuItem
                    onClick={handleMenuClose}
                    component={NavLink}
                    to="/notre-equipe"
                  >
                    Notre équipe
                  </MenuItem>
                  <MenuItem
                    onClick={handleMenuClose}
                    component={NavLink}
                    to="/faire-un-don"
                  >
                    Faire un don
                  </MenuItem>
                </Menu>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
