import React, { useState } from 'react';
import styles from './PopupBookingForm.module.css';
import axios from 'axios';

function PopupBookingForm({ onClose }) {
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    departureDate: "",
    arrivalDate: "",
    wheelchair: "No",
    numberOfPerson: "",
    fullName: "",
    contactNumber: "",
    email: "",
    tripType: "oneway",
  });

  const [multiSectorDates, setMultiSectorDates] = useState([""]);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleMultiSectorChange = (index, value) => {
    const newDates = [...multiSectorDates];
    newDates[index] = value;
    setMultiSectorDates(newDates);
  };

  const addMultiSectorDate = () => {
    setMultiSectorDates(prev => [...prev, ""]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const WEB3FORMS_ACCESS_KEY = "c2113b2a-63cb-4a3b-83d0-cbc936de8a43";

    const payload = {
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: "New Booking Request",
      from_name: formData.fullName,
      ...formData,
      multiSectorDates: formData.tripType === "multisector" ? multiSectorDates : undefined,
    };

    try {
      const response = await axios.post("https://api.web3forms.com/submit", payload, {
        headers: { "Content-Type": "application/json" },
      });

      if (response.data.success) {
        alert("Booking request sent successfully!");
        onClose(); // Close the popup
      } else {
        alert("Failed to send booking request.");
      }
    } catch (error) {
      console.error("Error sending booking email:", error);
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
        <h2>Book & Buy</h2>
        <p>To make your trip, please fill your travel plan.</p>

        <form onSubmit={handleSubmit} className={styles.form}>
          <label>
            From (Airport):
            <input type="text" name="from" value={formData.from} onChange={handleChange} />
          </label>
          <label>
            To (Airport):
            <input type="text" name="to" value={formData.to} onChange={handleChange} />
          </label>
          <label>
            Number Of Person:
            <input type="text" name="numberOfPerson" value={formData.numberOfPerson} onChange={handleChange} />
          </label>
          <label>
            Trip Type:
            <select name="tripType" value={formData.tripType} onChange={handleChange}>
              <option value="oneway">One Way</option>
              <option value="return">Return</option>
              <option value="multisector">Multi-sector</option>
            </select>
          </label>

          {/* Trip Date Inputs */}
          {formData.tripType === "multisector" ? (
            <>
              <label>Multi-sector Dates:</label>
              {multiSectorDates.map((date, index) => (
                <input
                  key={index}
                  type="date"
                  value={date}
                  onChange={(e) => handleMultiSectorChange(index, e.target.value)}
                />
              ))}
              <button type="button" onClick={addMultiSectorDate} className={styles.addMoreButton}>
                + Add More
              </button>
            </>
          ) : (
            <>
              <label>
                Departure Date:
                <input
                  type="date"
                  name="departureDate"
                  value={formData.departureDate}
                  onChange={handleChange}
                />
              </label>
              <label>
                Arrival/Return Date:
                <input
                  type="date"
                  name="arrivalDate"
                  value={formData.arrivalDate}
                  onChange={handleChange}
                />
              </label>
            </>
          )}

          <hr />
          <h4>Contact Details <span className={styles.required}>*</span></h4>

          <label>
            Full Name (as on passport):
            <input type="text" name="fullName" value={formData.fullName} required onChange={handleChange} />
          </label>
          <label>
            Contact Number:
            <input type="text" name="contactNumber" value={formData.contactNumber} required onChange={handleChange} />
          </label>
          <label>
            Email:
            <input type="email" name="email" value={formData.email} required onChange={handleChange} />
          </label>

          <button type="submit" className={styles.submitButton} disabled={isLoading}>
            {isLoading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupBookingForm;
