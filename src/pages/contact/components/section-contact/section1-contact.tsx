import React, { useState } from "react";
import styles from "./about-section.module.css";

const Section1Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    message: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = event.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); // Prevent the default form submission
    console.log(formData); // Log the form data
  };

  return (
    <section className={styles.aboutSection}>
      <div className={styles.aboutFirstBox}>
        <h1 className={styles.boxTitle}>Contact Form</h1>

        <form onSubmit={handleSubmit} id="contactForm">
          <div className={styles.aboutTopBox}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input
                className={styles.inputParametrs}
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="surname">Surname</label>
              <input
                className={styles.inputParametrs}
                type="text"
                id="surname"
                value={formData.surname}
                onChange={handleChange}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input
                className={styles.inputParametrs}
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className={styles.textAreaDiv}>
            <label className={styles.textAreaTitle} htmlFor="message">
              Send Us Message
            </label>
            <textarea
              className={styles.textArea}
              id="message"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              style={{ width: "100%", boxSizing: "border-box", padding: "8px" }}
            />
          </div>

          <div className={styles.buttonDiv}>
            <button className={styles.button} type="submit">
              Send Form
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Section1Contact;
