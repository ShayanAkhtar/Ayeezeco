import React, { useState } from 'react';
import styles from './PopUpReligiousTour.module.css';
import axios from 'axios';

function PopupTour({ onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNumber: '',
    destination: '',
    departureCity: '',
    tripStartDate: '',
    tripEndDate: '',
    hotelCategory: '',
    transportType: 'Public',
    numberOfPersons: '',
    numberOfDays: '',
    sikhismSites: [],
    buddhismInterest: '',
    pickupPoint: '',
    nationality: '',
    meals: [],
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === 'sikhismSites' || name === 'meals') {
      setFormData((prev) => {
        const updatedArray = checked
          ? [...prev[name], value]
          : prev[name].filter((v) => v !== value);
        return { ...prev, [name]: updatedArray };
      });
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const WEB3FORMS_ACCESS_KEY = "c2113b2a-63cb-4a3b-83d0-cbc936de8a43";

    const payload = {
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: "New Travel Inquiry Submission",
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
        <h2>Travel Inquiry Form</h2>
        <p>Please fill out your trip details below.</p>

        <form onSubmit={handleSubmit} className={styles.form}>
          {/* Original Fields */}
          <label>Name:<input type="text" name="name" required onChange={handleChange} /></label>
          <label>Email Address:<input type="email" name="email" required onChange={handleChange} /></label>
          <label>Contact Number:<input type="text" name="contactNumber" required onChange={handleChange} /></label>
          <label>Enter Your Destination:<input type="text" name="destination" required onChange={handleChange} /></label>
          <label>Departure City:<input type="text" name="departureCity" required onChange={handleChange} /></label>
          <label>Trip Start Date:<input type="date" name="tripStartDate" required onChange={handleChange} /></label>
          <label>Trip End Date:<input type="date" name="tripEndDate" required onChange={handleChange} /></label>
          <label>Hotel Category:<input type="text" name="hotelCategory" required onChange={handleChange} /></label>
          <label>
            Transport Type:
            <select name="transportType" value={formData.transportType} onChange={handleChange}>
              <option value="Public">Public</option>
              <option value="Private">Private</option>
            </select>
          </label>
          <label>Number of Persons:<input type="number" name="numberOfPersons" required onChange={handleChange} /></label>
          <label>Number of Days:<input type="number" name="numberOfDays" required onChange={handleChange} /></label>
         
          {/* New Fields */}
          <fieldset>
  <legend>Sikhism Sites:</legend>
  <label style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
    Kartarpur
    <input type="checkbox" name="sikhismSites" value="Kartarpur" onChange={handleChange} />
  </label>
  <label style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
    Punja Sahab
    <input type="checkbox" name="sikhismSites" value="Punja Sahab" onChange={handleChange} />
  </label>
  <label style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
    Nankana Sahab
    <input type="checkbox" name="sikhismSites" value="Nankana Sahab" onChange={handleChange} />
  </label>
</fieldset>


          <label>
            Buddhism Interest:
            <input type="text" name="buddhismInterest" onChange={handleChange} />
          </label>

          <label>
            Pickup Point:
            <select name="pickupPoint" value={formData.pickupPoint} onChange={handleChange}>
              <option value="">Select Pickup Point</option>
              <option value="Airport">Airport</option>
              <option value="Border">Border</option>
            </select>
          </label>

          <label>
            Nationality:
            <input type="text" name="nationality" onChange={handleChange} />
          </label>

          <fieldset>
  <legend>Meals Included:</legend>
  <label style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
    Breakfast
    <input type="checkbox" name="meals" value="Breakfast" onChange={handleChange} />
  </label>
  <label style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
    Lunch
    <input type="checkbox" name="meals" value="Lunch" onChange={handleChange} />
  </label>
  <label style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
    Dinner
    <input type="checkbox" name="meals" value="Dinner" onChange={handleChange} />
  </label>
</fieldset>

          <button type="submit" className={styles.submitButton} disabled={isLoading}>
            {isLoading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupTour;
