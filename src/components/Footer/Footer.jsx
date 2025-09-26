import React from "react"
import styles from "./Footer.module.css"
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6";
import { color } from "framer-motion";


const Footer = () => {
  return (
    <footer className={styles.footerWrapper}>
      <div className={styles.footerContainer}>
        {/* Logo Section */}
        {/* <div className={styles.logoSection}>
          <img src="\images\footerlogo.png" alt="Proveda Nepal" className={styles.logo}/>
        </div> */}

        {/* Navigation Section */}
        {/* <div className={styles.navigationSection}>
          <h3 className={styles.sectionTitle}>Navigations</h3>
          <div className={styles.linksList}>
            <a href="/" className={styles.footerLink}>Home</a>
            <a href="/products" className={styles.footerLink}>Products</a>
            <a href="/about" className={styles.footerLink}>About Us</a>
            <a href="/contact" className={styles.footerLink}>Contact Us</a>
          </div>
        </div> */}

        {/* Policies Section */}
        {/* <div className={styles.policiesSection}>
          <h3 className={styles.sectionTitle}>Policies</h3>
          <div className={styles.linksList}>
            <a href="/privacy" className={styles.footerLink}>Privacy Policy</a>
            <a href="/terms" className={styles.footerLink}>Terms</a>
            <a href="/support" className={styles.footerLink}>Supports</a>
          </div>
        </div> */}

        {/* Follow Us Section */}
        

        {/* Contact Us Section */}
        <div className={styles.contactSection}>
          <h3 className={styles.sectionTitle}>Contact Us</h3>
          <div className={styles.contactItem}>
            <FaEnvelope className={styles.contactIcon} />
            <div>
              <p className={styles.contactLabel}>
                Email : nepalproveda@gmail.com
              </p>
            </div>
          </div>
        
          <div className={styles.contactItem}>
            <FaMapMarkerAlt className={styles.contactIcon} />
            <div>
              <p className={styles.contactLabel}>
                Address : Tilottama-06, Gorkatta Rupendehi
              </p>
            </div>
          </div>


            <div className={styles.contactItem}>
            <FaPhone className={styles.contactIcon} />
            <div>
              <p className={styles.contactLabel}>Phone : +977 9857011801/ 9857010803</p>
            </div>
          </div>
        </div>

        <div className={styles.socialSection}>
          <div className={styles.socialIcons}>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className={`${styles.iconSvg} ${styles.instagramIcon}`} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className={`${styles.iconSvg} ${styles.facebookIcon}`} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter className={`${styles.iconSvg} ${styles.twitterIcon}`} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className={styles.copyrightSection}>
        <p
          style={{
            color: "white",
          }}
        >
          © 2025 Proveda. Developed by{" "}
          <span className={styles.devLink}>Somarjun Tech Company</span>
        </p>
      </div>
    </footer>
  )
}

export default Footer
