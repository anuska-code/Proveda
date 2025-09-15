import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { FaBars, FaTimes } from "react-icons/fa"; // hamburger + close icons

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Top Support Bar */}
      <div className={styles.topWrapper}>
        <div className={styles.topContainer}>
          <div className={styles.supportBar}>
            <div className={styles.supportText}>
              <p>
                For any assistance call on our toll free number - 1800 103 0214
              </p>
            </div>
            <div className={styles.socialIcons}>
              <img
                src="/images/insta (1).png"
                alt="Instagram"
                className={styles.socialIcon}
              />
              <img
                src="/images/fb.png"
                alt="Facebook"
                className={styles.socialIcon}
              />
              <img
                src="/images/twitter.png"
                alt="Twitter"
                className={styles.socialIcon}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className={styles.navbarWrapper}>
        <div className={styles.navbarContainer}>
          <div className={styles.navContent}>
            {/* Logo Section */}
            <div className={styles.logoSection}>
              <img
                src="/images/provedalogo.png"
                alt="Proveda Logo"
                className={styles.logoImage}
              />
            </div>

            {/* Navigation Links */}
            <div
              className={`${styles.navigationLinks} ${
                isMenuOpen ? styles.showMenu : ""
              }`}
            >
              <a href="/" className={styles.navLink}>
                Home
              </a>
              <a href="/products" className={styles.navLink}>
                Products
              </a>
              <a href="/about" className={styles.navLink}>
                About Us
              </a>
            </div>

            {/* Right Side Actions */}
            <div className={styles.actionSection}>
              <button className={styles.loginButton}>Contact Us</button>
            </div>

            {/* Hamburger Icon (Mobile only) */}
          <div
  className={`${styles.hamburger} ${isMenuOpen ? styles.open : ""}`}
  onClick={toggleMenu}
>
  {isMenuOpen ? <FaTimes size={24} color="red" /> : <FaBars size={24} />}
</div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
