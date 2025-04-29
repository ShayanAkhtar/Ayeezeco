import React, { useState } from "react";
import styles from "./ContactUs.module.css";
import axios from "axios";

function ContactUs() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    message: "",
  });

  const handleOnChange = (e) => {
    setFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Web3Forms API endpoint
    const WEB3FORMS_ACCESS_KEY = "c2113b2a-63cb-4a3b-83d0-cbc936de8a43"; // Replace with your access key from Web3Forms
    const formDataToSend = {
      ...formData,
      access_key: WEB3FORMS_ACCESS_KEY, // Required by Web3Forms
    };

    axios
      .post("https://api.web3forms.com/submit", formDataToSend, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        if (res.data.success) {
          alert("Thank you! Your message has been sent successfully.");
        } else {
          alert("Failed to send message. Please try again.");
        }
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Error:", err);
        alert("An error occurred. Please try again later.");
        setIsLoading(false);
      });
  };

  return (
    <div className={`${styles.third_section} ${styles.fifth_section}`}>
      {isLoading && (
        <div
          className={styles.loadingscreen}
          style={{
            backgroundColor: "rgb(0,0,0, 0)",
          }}
        >
          <img
            src={
              "https://cdn.pixabay.com/animation/2022/07/29/03/42/03-42-05-37_512.gif"
            }
          />
        </div>
      )}
      <h1>Get in touch</h1>
      <p>
        Don't wait, reach out to us now and let us help your plan your next
        vacation. Our dedicated team is always here to answer your question and
        make your travel dreams a reality.
      </p>
      <div className={styles.contact_form}>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              onChange={handleOnChange}
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              required
            />
            <input
              onChange={handleOnChange}
              name="phone"
              type="tel" // Changed to 'tel' for phone input
              placeholder="Mobile"
              value={formData.phone}
              required
            />
          </div>
          <input
            onChange={handleOnChange}
            name="message"
            type="text"
            placeholder="Message"
            value={formData.message}
            required
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;