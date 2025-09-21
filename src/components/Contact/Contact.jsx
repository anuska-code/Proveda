import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./Contact.module.css";

const validationSchema = Yup.object({
  fullName: Yup.string().required("Full name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string().required("Phone number is required"),
  address: Yup.string().required("Address is required"),
});

const Contact = () => {
  return (
    <>
      <div className={styles.contactWrapper}>
        <div className={styles.contactContainer}>
          {/* Header Section */}
          <div className={styles.headerSection}>
            <h2 className={styles.headerTitle}>Contact Us</h2>
        
          </div>

          {/* Content Section */}
          <div className={styles.contentSection}>
            {/* Contact Info Section */}
              <div className={styles.infoWrapper}>
            <div className={styles.infoSection}>
              <h2>Get In Touch</h2>
              <p>Have a question or feedback?</p>
                 <div className={styles.childSection}>
              <p>We're here to help! Feel free to reach out to us for any queries, feedback, or business inquiries.</p>
              </div>
              </div>
                <div className={styles.SocialWrap}>
              <div className={styles.infoItem}>
                <div className={styles.iconWrapper}>
                  <img src="\images\Mail.png" className={styles.icon} alt="mail"/>
                </div>
                <div>
                  <h3>Email</h3>
                  <p>nepalproveda@gmail.com</p>
                </div>
              </div>
              
              <div className={styles.infoItem}>
                <div className={styles.iconWrapper}>
                  <img src="\images\Phone.png" className={styles.icon} alt="phone icon"/>
                </div>
                <div>
                  <h3>Phone</h3>
                  <p>9857048848</p>
                </div>
              </div>
              
              <div className={styles.infoItem}>
                <div className={styles.iconWrapper}>
                  <img src="\images\Address.png" className={styles.icon} alt="Address"/>
                </div>
                <div>
                  <h3>Address</h3>
                  <p>Tilottama-06, Gorkatta, Rupandehi</p>
                </div>
              </div>
            </div>
            </div>
            

            {/* Form Section */}
            <div className={styles.formwrapper}>
            <div className={styles.formSection}>
              <h3 className={styles.formTitle}>Send Message</h3>
              <Formik
                initialValues={{ fullName: "", email: "", phone: "", address: "" }}
                validationSchema={validationSchema}
                onSubmit={(values, { resetForm }) => {
                  console.log("Form submitted:", values);
                  resetForm();
                }}
              >
                {({ isSubmitting }) => (
                  <Form className={styles.form}>
                    <div className={styles.formGroup}>
                      <Field
                        type="text"
                        name="fullName"
                        placeholder="Enter Your Full Name"
                        className={styles.input}
                      />
                      <ErrorMessage
                        name="fullName"
                        component="div"
                        className={styles.error}
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <Field
                        type="email"
                        name="email"
                        placeholder="Enter Your Email"
                        className={styles.input}
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className={styles.error}
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <Field
                        type="tel"
                        name="phone"
                        placeholder="Enter Your Phone Number"
                        className={styles.input}
                      />
                      <ErrorMessage
                        name="phone"
                        component="div"
                        className={styles.error}
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <Field
                        type="text"
                        name="address"
                        placeholder="Enter Your Address"
                        className={styles.input}
                      />
                      <ErrorMessage
                        name="address"
                        component="div"
                        className={styles.error}
                      />
                    </div>

                    <button
                      type="submit"
                      className={styles.submitButton}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send"}
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;