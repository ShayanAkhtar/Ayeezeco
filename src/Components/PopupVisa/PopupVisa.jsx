import React, { useState } from 'react';
import styles from './PopupVisa.module.css';
import axios from 'axios';

function PopupVisa({ onClose }) {
  const [formData, setFormData] = useState({
    country: '',
    name: '',
    contactNumber: '',
    email: '',
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const WEB3FORMS_ACCESS_KEY = "c2113b2a-63cb-4a3b-83d0-cbc936de8a43";

    const payload = {
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: "New Travel Inquiry",
      from_name: formData.name,
      ...formData,
    };

    try {
      const response = await axios.post("https://api.web3forms.com/submit", payload, {
        headers: { "Content-Type": "application/json" },
      });

      if (response.data.success) {
        alert("Form submitted successfully!");
        onClose();
      } else {
        alert("Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("An error occurred during submission.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        {isLoading && (
          <div className={styles.loadingOverlay}>
            <img src="https://cdn.pixabay.com/animation/2022/07/29/03/42/03-42-05-37_512.gif" alt="Loading" />
          </div>
        )}
        <button className={styles.closeButton} onClick={onClose}>×</button>
        <h2>Inquiry Form</h2>
        <p>Please fill out your details below.</p>

        <form onSubmit={handleSubmit} className={styles.form}>
          <label>
            Select a Country:
            <select name="country" required onChange={handleChange}>
              <option value="">-- Select --</option>
              <option value="Pakistan">Pakistan</option>
              <option value="UAE">UAE</option>
              <option value="Turkey">Turkey</option>
              <option value="Saudi Arabia">Saudi Arabia</option>
              <option value="Qatar">Qatar</option>
              <option value="Other">Other</option>
            </select>
          </label>
          <label>
            Name:
            <input type="text" name="name" required onChange={handleChange} />
          </label>
          <label>
            Contact Number:
            <input type="text" name="contactNumber" required onChange={handleChange} />
          </label>
          <label>
            Email:
            <input type="email" name="email" required onChange={handleChange} />
          </label>

          <button type="submit" className={styles.submitButton} disabled={isLoading}>
            {isLoading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupVisa;
