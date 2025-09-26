import React from 'react';
import styles from './Aboutus.module.css';
import data from './data.json';

const Aboutus = () => {
  return (
    <div className={styles.aboutUsWrapper}>
      
      {/* Hero Section */}
      <div className={styles.heroWrapper}>
        <div className={styles.heroImageDiv}>
          <img src="/images/Aboutus.png" alt="Business Strategy" className={styles.heroImage}/>
        </div>
      </div>

      {/* About Us Content, Mission, Vision, Team */}
      <div className={styles.aboutUswrap}>

        {/* About Us Text Section */}
        <div className={styles.aboutUsContent}>
          <div className={styles.aboutUsTextSection}>
            <div className={styles.aboutUsLeft}>
              <div className={styles.sectionHeaderDiv}>
                <h2 className={styles.sectionTitle}>About Us</h2>
              </div>
              <p className={styles.aboutUsText}>
                Proveda is a trusted name in cosmetic and cleaning products, proudly established in 
                2076 B.S. and located at Tilottama-6, Gorkatta, Rupandehi. 
                Since our beginning, we have been committed to delivering high-quality, safe, and 
                affordable products that bring confidence, care, and cleanliness
                to every home.
              </p>
              <p className={styles.aboutUsText}>
                We take pride in being recognized as one of the best cosmetic brands in Nepal, offering 
                a wide range of personal care and cleaning solutions that 
                are carefully crafted to meet your everyday needs.
              </p>
              <p className={styles.aboutUsText}>
                With a focus on innovation, purity, 
                and customer satisfaction, Proveda continues to grow as a
                reliable brand for families across the country.
              </p>
              <p className={styles.aboutUsText}>
                At Proveda, our mission is simple:<br/>
                To make every day healthier, cleaner, and more beautiful.
              </p>
            </div>

            <div className={styles.aboutUsRight}>
              <div className={styles.productImageDiv}>
                <img src="/images/Aboutus1.png" alt="Products" className={styles.productImage}/>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Vision Section */}
        <div className={styles.missionVisionWrapper}>
          <div className={styles.sectionHeaderDiv}>
            <h2 className={styles.sectionTitle}>Mission and Vision</h2>
          </div>

          <div className={styles.cardsGrid}>
            {data.missionVision.map((item, index) => (
              <div key={index} className={styles.card}>
                <div className={styles.cardIconDiv}>
                  <img src={item.icon} alt={item.title} className={styles.cardIcon}/>
                </div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className={styles.teamWrapper}>
          <div className={styles.sectionHeaderDiv}>
            <h2 className={styles.sectionTitle}>Our Team Members</h2>
          </div>

          {/* CEO Message */}
          <div className={styles.ceoMessageSection}>
            <div className={styles.ceoImageSection}>
              <div className={styles.ceoImageDiv}>
                <img src="/images/CEO.png" alt={data.team.chairman.name} className={styles.ceoImage}/>
              </div>
            </div>

            <div className={styles.ceoMessageContent}>
              <h3 className={styles.ceoMessageTitle}>Message From CEO</h3>
              <div className={styles.ceoMessageText}>
                <p>
                  It gives me great pride to share the journey of Proveda Pvt. Ltd. What began in 2076 with a clear vision and unwavering determination has now grown into one of Nepal’s trusted names in cosmetics and cleaning solutions. From the very beginning, our mission has been to create products that combine quality, innovation, and care—enhancing lives while contributing to a healthier and cleaner society.
                </p>
                <p>
                  At Proveda, we believe that true success lies not only in delivering excellence but also in empowering people, embracing sustainability, and giving back to the community. Every challenge has been a stepping stone, teaching us to evolve, innovate, and stay committed to our values.
                </p>
                <p>
                  We are deeply grateful to our customers, partners, and team members who continue to place their trust in us. Together, we will keep striving to set new benchmarks in the industry while building a future that is brighter, cleaner, and more beautiful.
                </p>
                <div className={styles.ceoSignature}>
                  <p>With gratitude,</p>
                  <p>{data.team.chairman.name}</p>
                  <p>Founder & CEO</p>
                  <p>Proveda Pvt. Ltd.</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.separatorLine}></div>

          {/* Team Members */}
          <div className={styles.membersGrid}>
            {data.team.members.map((member, index) => (
              <div key={index} className={styles.memberCard}>
                <div className={styles.memberImageDiv}>
                  <img src={member.image} alt={member.name} className={styles.memberImage}/>
                </div>
                <div className={styles.memberInfo}>
                  <h4 className={styles.memberName}>{member.name}</h4>
                  <p className={styles.memberRole}>{member.role}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Aboutus;
