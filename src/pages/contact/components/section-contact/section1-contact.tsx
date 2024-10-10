import React, { FormEvent, useRef } from "react";
import styles from "./about-section.module.css";

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);

const handleSubmit = (event:FormEvent<HTMLFormElement>)=>{
 event.preventDefault();
    const userInfo = {
    name : (document.getElementById('name') as HTMLInputElement),
    surname : (document.getElementById('surname') as HTMLInputElement),
    email : (document.getElementById('email') as HTMLInputElement),
    message :(document.getElementById('message') as HTMLInputElement) 

    };

    console.log(userInfo);

    
    if (formRef.current) {
      formRef.current.reset();
    }
  };

  return (
    <div className={`${styles.contact_form} ${styles.container}`}>
      <h1>Contact</h1>
      <form className={styles.form} onSubmit={handleSubmit} ref={formRef}>
        <div className={styles.contact_fields}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="your name"
            required
          />
        </div>

        <div className={styles.contact_fields}>
          <label htmlFor="surname">Surname:</label>
          <input
            type="text"
            id="surname"
            name="surname"
            placeholder="your surname"
            required
          />
        </div>

        <div className={styles.contact_fields}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="your email"
            required
          />
        </div>

        <div className={styles.contact_text}>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            placeholder="leave a message for us..."
            required
          />
        </div>

        <button className={styles.contact_button} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
