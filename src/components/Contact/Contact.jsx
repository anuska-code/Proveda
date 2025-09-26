import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import styles from "./Contact.module.css";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const validationSchema = Yup.object({
  fullName: Yup.string().required("Full name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string().required("Phone number is required"),
  address: Yup.string().required("Subject is required"),
  message: Yup.string().required("Message is required"),
});

const Contact = () => {
  return (
    <div className={styles.contactWrapper}>
      <div className={styles.contactContainer}>
        {/* Header */}
        <div className={styles.headerSection}>
          <h2 className={styles.headerTitle}>CONTACT US</h2>
        </div>

        {/* Two Column Section */}
        <div className={styles.contentSection}>
          {/* Left: Form */}
          <div className={styles.formSection}>
            <h3 className={styles.formTitle }>Send Message</h3>
            <Formik
              initialValues={{
                fullName: "",
                email: "",
                phone: "",
                address: "",
                message: "",
              }}
              validationSchema={validationSchema}
              validateOnChange={false}
              validateOnBlur={true}
              onSubmit={(values, { resetForm }) => {
                console.log("Form submitted:", values);
                resetForm();
              }}
            >
              {({ isSubmitting, errors, touched }) => (
                <Form className={styles.form}>
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label className={styles.label}>Name<span className={styles.required}>*</span></label>
                      <Field
                        type="text"
                        name="fullName"
                        placeholder="Enter your full name"
                        className={styles.input}
                      />
                      {touched.fullName && errors.fullName && (
                        <div className={styles.error}>{errors.fullName}</div>
                      )}
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.label}>Phone number<span className={styles.required}>*</span></label>
                      <Field
                        type="tel"
                        name="phone"
                        placeholder="Enter your phone number"
                        className={styles.input}
                      />
                      {touched.phone && errors.phone && (
                        <div className={styles.error}>{errors.phone}</div>
                      )}
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.label}>E-mail Address</label>
                    <Field
                      type="email"
                      name="email"
                      placeholder="Enter your email address"
                      className={styles.input}
                    />
                    {touched.email && errors.email && (
                      <div className={styles.error}>{errors.email}</div>
                    )}
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.label}>Subject</label>
                    <Field
                      type="text"
                      name="address"
                      placeholder="Enter subject"
                      className={styles.input}
                    />
                    {touched.address && errors.address && (
                      <div className={styles.error}>{errors.address}</div>
                    )}
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.label}>Message<span className={styles.required}>*</span></label>
                    <Field
                      as="textarea"
                      name="message"
                      placeholder="Your message here"
                      className={`${styles.input} ${styles.textarea}`}
                      rows="6"
                    />
                    {touched.message && errors.message && (
                      <div className={styles.error}>{errors.message}</div>
                    )}
                  </div>

                  <button
                    type="submit"
                    className={styles.submitButton}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
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
