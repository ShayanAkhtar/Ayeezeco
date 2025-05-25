import React, { useState } from 'react';
import styles from './PopupUmra.module.css';
import axios from 'axios';

function PopupUmra({ onClose }) {
  const [formData, setFormData] = useState({
    numberOfPersons: '',
    numberOfDays: '',
    travelDate: '',
    ReturnDate: '',
    travelFrom: '',
    travelTo: '',
    hotelType: 'economy',
    transportType: 'Public',
    name: '',
    contactNumber: '',
    email: '',
    nightsInMakkah: '',      
    nightsInMadinah: '',      
    returnCity: '', 

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
    
    const hotelTypeDisplay = {
      economy: "Economy",
      "2star": "2 Star",
      "3star": "3 Star",
      "4star": "4 Star",
    }[formData.hotelType];
    
    
    const payload = {
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: "New Travel Booking Request",
      from_name: formData.name,
      hotelType: hotelTypeDisplay,
      ...formData, 
    };
    

    try {
      const response = await axios.post("https://api.web3forms.com/submit", payload, {
        headers: { "Content-Type": "application/json" },
      });

      if (response.data.success) {
        alert("Booking request sent successfully!");
        onClose();
      } else {
        alert("Failed to send booking request.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("An error occurred. Please try again.");
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
        <h2>Travel Booking Form</h2>
        <p>Please fill out your travel preferences below.</p>

        <form onSubmit={handleSubmit} className={styles.form}>
          <label>
            Number of Persons:
            <input type="number" name="numberOfPersons" required onChange={handleChange} />
          </label>
          <label>
            Number of Days:
            <input type="number" name="numberOfDays" required onChange={handleChange} />
          </label>
          <label>
            Date of Travel:
            <input type="date" name="travelDate" required onChange={handleChange} />
          </label>
          
          <label>
          Return Date:
          <input type="date" name="ReturnDate" required onChange={handleChange} />
          </label>
          <label>
            Travel From (City):
            <input type="text" name="travelFrom" required onChange={handleChange} />
          </label>
          <label>
            Travel To (City):
            <input type="text" name="travelTo" required onChange={handleChange} />
          </label>
          <label>
  Type of Hotel:
  <select name="hotelType" value={formData.hotelType} onChange={handleChange} required>
    <option value="economy">Economy</option>
    <option value="2star">2 Star</option>
    <option value="3star">3 Star</option>
    <option value="4star">4 Star</option>
  </select>
</label>
<label>
  Nights in Makkah:
  <input
    type="number"
    name="nightsInMakkah"
    min="0"
    onChange={handleChange}
    value={formData.nightsInMakkah}
    placeholder="e.g., 3"
  />
</label>

<label>
  Nights in Madinah:
  <input
    type="number"
    name="nightsInMadinah"
    min="0"
    onChange={handleChange}
    value={formData.nightsInMadinah}
    placeholder="e.g., 4"
  />
</label>


          <label>
            Transport Type:
            <select name="transportType" value={formData.transportType} onChange={handleChange}>
              <option value="Public">Public(Sharing Bus)</option>
              <option value="Private">Private(Private Car/Van)</option>
            </select>
          </label>
          <label>
  Return City:
  <select name="returnCity" value={formData.returnCity} onChange={handleChange} required>
    <option value="Jeddah">Jeddah</option>
    <option value="Madina">Madina</option>
  </select>
</label>
          <hr />
          <h4>Contact Details <span className={styles.required}>*</span></h4>

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

export default PopupUmra;
