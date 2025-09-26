import React from "react";
import { Link } from "react-router-dom";  // Import Link
import styles from "./ProductCategories.module.css";
import data from "./data.json";

const ProductCategories = () => {
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.productwrap}>
        {/* Title */}
        <div className={styles.titleWrapper}>
          <h2 className={styles.title}>PRODUCTS</h2>
        </div>

        {/* Card List */}
        <div className={styles.cardContainer}>
          {data.map((item) => (
            <div key={item.id} className={styles.cardWrapper}>
              <div className={styles.imageWrapper}>
                <img
                  src={item.image}
                  alt={item.name}
                  className={styles.image}
                />
              </div>
              {/* <div className={styles.textWrapper}>
                <p className={styles.text}>{item.name}</p>
              </div> */}
            </div>
          ))}
        </div>

        {/* Button */}
        <div className={styles.buttonWrapper}>
          <Link to="/product">
            <button className={styles.button}>See More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCategories;
