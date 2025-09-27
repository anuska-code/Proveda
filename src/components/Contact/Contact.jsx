import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./Contact.module.css";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const validationSchema = Yup.object({
  fullName: Yup.string().required("Full name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string().required("Phone number is required"),
  address: Yup.string().required("Address is required"),
});

const Contact = () => {
  return (
    <div className={styles.contactWrapper}>
      <div className={styles.contactContainer}>
        {/* Header */}
        <div className={styles.headerSection}>
          <h2 className={styles.headerTitle}>Contact</h2>
        </div>

        {/* Two Column Section */}
        <div className={styles.contentSection}>
          {/* Left: Form */}
          <div className={styles.formSection}>
            <h3 className={styles.formTitle}>Send Message</h3>
            <Formik
              initialValues={{
                fullName: "",
                email: "",
                phone: "",
                address: "",
              }}
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

          {/* Right: Info */}
          <div className={styles.infoSection}>
            <h3 className={styles.infoTitle}>Have a question or feedback?</h3>
            <p className={styles.infoDesc}>
              We're here to help! Feel free to reach out to us for any queries,
              feedback, or business inquiries.
            </p>

           <div className={styles.infoItem}>
  <FaEnvelope className={styles.icon} />
  <div>
    <div className={styles.stylesText}>Email</div>
    <p>nepalproveda@gmail.com</p>
  </div>
</div>

<div className={styles.infoItem}>
  <FaPhoneAlt className={styles.icon} />
  <div>
    <div className={styles.stylesText}>Phone</div>
    <p>+977-9857049884</p>
  </div>
</div>

<div className={styles.infoItem}>
  <FaMapMarkerAlt className={styles.icon} />
  <div>
    <div className={styles.stylesText}>Address</div>
    <p>Tilottama-06, Gorkatta, Rupendehi</p>
  </div>
</div>

            {/* Map */}
           <div className={styles.mapWrapper}>
  <img
    src="/images/Map.png"
    alt="Map"
  />
</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
