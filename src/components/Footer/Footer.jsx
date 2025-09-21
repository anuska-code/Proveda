import React from 'react';
import styles from './Footer.module.css';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footerWrapper}>
      <div className={styles.footerContainer}>
        {/* Navigation Section */}
        <div className={styles.navigationSection}>
          <div className={styles.sectionHeader}>
            <h3 className={styles.sectionTitle}>Navigations</h3>
          </div>
          <div className={styles.linksList}>
            <div className={styles.link}>
              <a href="/" className={styles.footerLink}>Home</a>
              <a href="/products" className={styles.footerLink}>Products</a>
              <a href="/about" className={styles.footerLink}>About Us</a>
              <a href="/contact" className={styles.footerLink}>Contact Us</a>
            </div>
          </div>
        </div>

        {/* Follow Us Section */}
        <div className={styles.socialSection}>
          <div className={styles.sectionHeader}>
            <h3 className={styles.sectionTitle}>Follow Us</h3>
          </div>
          <div className={styles.socialIcons}>
             <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
              <FaFacebook className={styles.iconSvg} />
            </a>
            
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
              <FaInstagram className={styles.iconSvg} />
            </a>
           
           
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
              <FaLinkedin className={styles.iconSvg} />
            </a>
          </div>
        </div>

        {/* Policies Section */}
        <div className={styles.policiesSection}>
          <div className={styles.sectionHeader}>
            <h3 className={styles.sectionTitle}>Policies</h3>
          </div>
          <div className={styles.linksList}>
            <a href="/privacy" className={styles.footerLink}>Privacy Policy</a>
            <a href="/terms" className={styles.footerLink}>Terms</a>
            <a href="/support" className={styles.footerLink}>Supports</a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className={styles.copyrightSection}>
        <div className={styles.copyrightContainer}>
          <p className={styles.copyrightText}>
            © 2025 MyStore. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
