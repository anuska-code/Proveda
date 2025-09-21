import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import sliderData from './sliderdata.json';
import styles from './Slider.module.css';

const Slider = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % sliderData.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + sliderData.length) % sliderData.length);
  };

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, [index]); // Restart interval on index change

  return (
    <div className={styles.sliderwrap}>
      <div className={styles.sliderContainer}>
        <button onClick={prevSlide} className={`${styles.navButton} ${styles.prevBtn}`}>
          ❮
        </button>

        <div className={styles.slideWrapper}>
          <AnimatePresence mode="auto">
            <motion.div
              key={index}
              className={styles.slideContent}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={sliderData[index].image}
                alt={`Slide ${sliderData[index].id}`}
                className={styles.slideImage}
              />
              {/* Removed title because your data has no title */}
            </motion.div>
          </AnimatePresence>
        </div>

        <button onClick={nextSlide} className={`${styles.navButton} ${styles.nextBtn}`}>
          ❯
        </button>
      </div>
    </div>
  );
};

export default Slider;