import React from 'react';
import styles from './Footer.module.css';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footerWrapper}>
      <div className={styles.footerContainer}>
        
        {/* Logo Section */}
        <div className={styles.logoSection}>
          <img src="\images\footerlogo.png" alt="Proveda Nepal" className={styles.logo}/>
          {/* <p className={styles.brandName}>PROVEDA <br /> NEPAL</p> */}
        </div>
        
        {/* Navigation Section */}
        <div className={styles.navigationSection}>
          <h3 className={styles.sectionTitle}>Navigations</h3>
          <div className={styles.linksList}>
            <a href="/" className={styles.footerLink}>Home</a>
            <a href="/products" className={styles.footerLink}>Products</a>
            <a href="/about" className={styles.footerLink}>About Us</a>
            <a href="/contact" className={styles.footerLink}>Contact Us</a>
          </div>
        </div>
        
        {/* Policies Section */}
        <div className={styles.policiesSection}>
          <h3 className={styles.sectionTitle}>Policies</h3>
          <div className={styles.linksList}>
            <a href="/privacy" className={styles.footerLink}>Privacy Policy</a>
            <a href="/terms" className={styles.footerLink}>Terms</a>
            <a href="/support" className={styles.footerLink}>Supports</a>
          </div>
        </div>
        
        {/* Follow Us Section */}
        <div className={styles.socialSection}>
          <h3 className={styles.sectionTitle}>Follow Us</h3>
          <div className={styles.socialIcons}>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className={styles.iconSvg} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className={styles.iconSvg} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className={styles.iconSvg} />
            </a>
          </div>
        </div>
        
        {/* Contact Us Section */}
        <div className={styles.contactSection}>
          <h3 className={styles.sectionTitle}>Contact Us</h3>
          <div className={styles.contactItem}>
            <FaEnvelope className={styles.contactIcon} />
            <div>
              <p className={styles.contactLabel}>Email</p>
              <p className={styles.contactValue}>nepalproveda@gmail.com</p>
            </div>
          </div>
          <div className={styles.contactItem}>
            <FaPhone className={styles.contactIcon} />
            <div>
              <p className={styles.contactLabel}>Phone</p>
              <p className={styles.contactValue}>9857049884</p>
            </div>
          </div>
          <div className={styles.contactItem}>
            <FaMapMarkerAlt className={styles.contactIcon} />
            <div>
              <p className={styles.contactLabel}>Address</p>
              <p className={styles.contactValue}>Tilottama-06, Gorkatta Rupendehi</p>
            </div>
          </div>
        </div>
        
      </div>
      
      {/* Copyright Section */}
      <div className={styles.copyrightSection}>
        <p>© 2025 Proveda. All rights reserved.</p>
        <p>Developed by <span className={styles.devLink}>Somarjun Tech Company</span></p>
      </div>
    </footer>
  );
};

export default Footer;