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
            At Proveda Nepal, we're not just growing fast — we're growing with purpose. As one of the fastest-growing direct selling companies in India, 
            our goal has always been simple: to help people chase their dreams and actually achieve them.
          </div>
                     
          <div className={styles.contentParagraph}>
            We're a team of passionate leaders, dreamers, and doers who believe that everyone deserves a chance to succeed. And over the years, 
            we've seen people from all walks of life — students, homemakers, professionals — discover their strength, build their own business, and 
            change their lives with us.
          </div>
                     
          <div className={styles.contentParagraph}>
            It's not just about money. It's about confidence. It's about freedom. It's about rediscovering who you really are.
          </div>
                     
          <div className={styles.contentParagraph}>
            Take our SlimExpert, our most powerful product range like SlimExpert, which helps people take charge of their health and fitness 
            in a smart, sustainable way. Whether it's losing weight, gaining muscle, or simply feeling better in your body — SlimExpert is making wellness 
            simple and achievable.
          </div>
                     
          <div className={styles.contentParagraph}>
            And with Jom Vital, we're bringing the timeless power of Ayurvedic herbs to modern life — boosting stamina, energy, and overall vitality for 
            those who want to feel their best every single day.
          </div>
                     
          <div className={styles.contentParagraph}>
            These aren't just products. They're tools for transformation. And they're already helping thousands of people feel stronger, healthier, 
            and more confident — inside and out.
          </div>
                     
          <div className={`${styles.contentParagraph} ${styles.lastParagraph}`}>
            At Proveda, we're not just building a company. We're building a community where people grow, support each other, and rise together.
          </div>
        </div>
                       
      </div>
    </>
  );
};

export default Content;
