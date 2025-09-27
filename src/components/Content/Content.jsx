// Content.jsx
import React from 'react';
import styles from './Content.module.css';
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useLocation } from "react-router-dom";


const Content = () => {
  const location = useLocation();
  console.log(location.pathname)


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

            {/* Twitter/X */}
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.socialIcon} ${styles.twitter}`}
            >
              <FaXTwitter className={styles.iconSvg} />
            </a>
          </div>
        </div>

        {/* Latest News Banner */}
        {/* <div className={styles.newsWrapper}>
          <div className={styles.newsBar}>
              Latest News
          </div>
                     
          <div className={styles.TextBar}>
            <marquee>
              A DREAM DOESN'T BECOME REALITY THROUGH MAGIC; IT TAKES SWEAT, DETERMINATION AND HARD WORK.
            </marquee>
          </div>
        </div> */}
                 
        {/* Main Content - Two Column Layout */}
        {/* Hide this section when on the product page */}
        {location.pathname !== "/product" && (
          <div className={styles.contentContainer}>
            {/* Left Column - Image/Placeholder */}
            <div className={styles.imageSection}>
              <div className={styles.imagePlaceholder}>
                {/* You can add an image here */}
                <img
                  src="/images/about-image.jpg"
                  alt="Proveda Company"
                  className={styles.aboutImage}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.style.backgroundColor = '#e0e0e0';
                    e.target.parentElement.innerHTML = '<div style="display: flex; align-items: center; justify-content: center; height: 100%; color: #666; font-size: 1.2rem;">Company Image</div>';
                  }}
                />
              </div>
            </div>

            {/* Right Column - Text Content */}
            <div className={styles.textSection}>
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
                Over the years, our dedication to innovation, customer satisfaction, and social responsibility has helped us establish ourselves as one of the best cosmetic and cleaning brands in Nepal. We are proud to see our products being used in households across the country, making a positive impact on people's lives and setting new benchmarks for quality and value.
              </div>

              <div className={styles.contentParagraph}>
                Beyond business, Proveda is driven by a purpose—to contribute to community well-being,
                encourage sustainable practices, and empower local talent. Our success is deeply
                rooted in the trust and loyalty of our customers, the hard work of our team, and
                the values of integrity, innovation, and service that guide us every day.
              </div>

             
            </div>
          </div>
        )}
                       
      </div>
    </>
  );
};

export default Content;
