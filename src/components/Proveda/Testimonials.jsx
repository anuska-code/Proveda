import React from "react";
import { motion } from "framer-motion";
import styles from "./Testimonials.module.css";
import data from "./card.json";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const containerStagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const Testimonials = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <button className={styles.sectionBtn}>TESTIMONIALS</button>
        <div className={styles.subHeading}>Clients Review</div>

        <motion.div
          className={styles.cardGrid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerStagger}
        >
          {data.map((review, i) => (
            <motion.div
              key={i}
              className={styles.card}
              variants={fadeInUp}
            >
              <div className={styles.quoteIcon}>
                <img
    src="/images/ClientsReview.png"
    alt="Clients Review"
    style={{ width: "50px", height: "50px" }}
  />
              </div>
              <p className={styles.reviewText}>{review.text}</p>
              <div className={styles.divider}></div>
              <div className={styles.profileSection}>
                <div className={styles.profileCircle}></div>
                <div className={styles.profileName}>
                  {review.name}, {review.location}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
