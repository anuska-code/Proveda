// Content.jsx
import React from 'react';
import styles from './Content.module.css';
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Content = () => {
  return (
    <>
      <div className={styles.contentWrapper}>
        
        {/* Enhanced Social Media Icons - Left Side */}
        <div className={styles.socialSidebar}>
          <div className={styles.socialIconsContainer}>
            {/* Facebook */}
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`${styles.socialIcon} ${styles.facebook}`}
            >
              <FaFacebook className={styles.iconSvg} />
            </a>

            {/* Instagram */}
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`${styles.socialIcon} ${styles.instagram}`}
            >
              <FaInstagram className={styles.iconSvg} />
            </a>

            {/* LinkedIn */}
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`${styles.socialIcon} ${styles.linkedin}`}
            >
              <FaLinkedin className={styles.iconSvg} />
            </a>
          </div>
        </div>

        {/* Latest News Banner */}
        <div className={styles.newsWrapper}>
          <div className={styles.newsBar}>
              Latest News
          </div>
                     
          <div className={styles.TextBar}>
            <marquee>
              A DREAM DOESN'T BECOME REALITY THROUGH MAGIC; IT TAKES SWEAT, DETERMINATION AND HARD WORK.
            </marquee>
          </div>
        </div>
                 
        {/* Main Content */}
        <div className={styles.contentBox}>
          <div className={styles.contentParagraph}>
            Founded in 2076 B.S. and headquartered in Tilottama-6, Gorkatta, Rupandehi, Proveda Pvt. Ltd. 
            has quickly emerged as one of the most trusted names in cosmetics and cleaning products 
            in Nepal. From humble beginnings, our journey has been guided by a strong vision—to create 
            world-class products that enhance beauty, promote hygiene, and improve everyday living for 
            individuals and families alike.

          </div>
                     
          <div className={styles.contentParagraph}>
            At Proveda, we believe that true quality is defined not only by effectiveness but also by safety, affordability, and sustainability. Every product we create is carefully researched, formulated, and tested to ensure that it meets the highest standards of care. From skincare and personal care to household cleaning solutions, our portfolio reflects our commitment to serving diverse customer needs while maintaining reliability and trust.

          </div>
                     
          <div className={styles.contentParagraph}>
            Over the years, our dedication to innovation, customer satisfaction, and social responsibility has helped us establish ourselves as one of the best cosmetic and cleaning brands in Nepal. We are proud to see our products being used in households across the country, making a positive impact on people’s lives and setting new benchmarks for quality and value.

          </div>
                     
          <div className={styles.contentParagraph}>
            Beyond business, Proveda is driven by a purpose—to contribute to community well-being, 
            encourage sustainable practices, and empower local talent. Our success is deeply
            rooted in the trust and loyalty of our customers, the hard work of our team, and 
            the values of integrity, innovation, and service that guide us every day.

          </div>
                     
          <div className={styles.contentParagraph}>
            
Our mission is simple yet powerful:<br/>
To make every day healthier, cleaner, and more beautiful.

          </div>
                     
          <div className={styles.contentParagraph}>
            
As we look ahead, Proveda remains committed to growth, innovation, and excellence—continuing to bring confidence, care, and cleanliness to 
every home in Nepal and beyond.
          </div>
                     
         
        </div>
                       
      </div>
    </>
  );
};

export default Content;
