import React from 'react'
import { motion } from 'framer-motion';
import styles from './Proveda.module.css';
import data from './card.json';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const containerStagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const Proveda = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.heading}>WHY PROVEDA</div>

        <motion.div
          className={styles.cardGrid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerStagger}
        >
          {data.map((card, i) => (
            <motion.div
              key={i}
              className={styles.card}
              variants={fadeInUp}
            >
              <img
                src={card.image}
                alt={card.title}
                className={styles.cardImage}
              />
              <div className={styles.cardContent}>
                <div className={styles.cardTitle}>{card.title}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Proveda;
