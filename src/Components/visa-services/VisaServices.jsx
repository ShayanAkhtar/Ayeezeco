import React from "react";
import { useState } from 'react';
import styles from "./VisaServices.module.css";
import Navbar from "../navbar/Navbar"; // Adjust path as needed
import BorderBox from "../common-styles/BorderBox";
import { useNavigate } from "react-router-dom";
import mountains from "../homepage/images/mountains.png"; // Reusing from homepage
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import visa1 from "../../Images/visa/visa1.jpeg";
import visa2 from "../../Images/visa/visa2.jpeg";
import visa3 from "../../Images/visa/visa3.jpeg";
import PopupBookingForm from '../PopupVisa/PopupVisa';

function VisaServices() {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  const brochures = [
    {
      id: 1,
      image: visa1,
    },
    {
      id: 2,
      image: visa2,
    },
    {
      id: 3,
      image: visa3,
    }
  ];
  
  
 // Slider settings
 const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
};

  return (
    <>
      <Navbar isWhiteBackground={false} isOfferVisible={false} />
      <BorderBox>
        {/* Header Section */}
        <div className={styles.header_section}>
          <div className={styles.header_content}>
            <h1>Visa Services</h1>
            <p>
              Your trusted partner in seamless visa and immigration solutions
              across the globe.
            </p>
          </div>
        </div>

        {/* Services Section */}
        <div className={styles.services_section}>
          <h2>Our Visa Services</h2>
          <div className={styles.services_grid}>
            <div className={styles.service_card}>
              <div className={styles.service_icon}>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3048/3048122.png"
                  alt="Consultation Icon"
                  style={{ width: "40px", height: "40px", filter: "invert(100%)" }}
                />
              </div>
              <h3>Expert Consultation</h3>
              <p>
                Personalized guidance from experienced consultants for UK, USA,
                Canada, Australia, Schengen, and more.
              </p>
            </div>
            <div className={styles.service_card}>
              <div className={styles.service_icon}>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/535/535239.png"
                  alt="Document Icon"
                  style={{ width: "40px", height: "40px", filter: "invert(100%)" }}
                />
              </div>
              <h3>Document Assistance</h3>
              <p>
                Comprehensive support for document preparation and submission
                with a high success rate.
              </p>
            </div>
            <div className={styles.service_card}>
              <div className={styles.service_icon}>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3082/3082383.png"
                  alt="Support Icon"
                  style={{ width: "40px", height: "40px", filter: "invert(100%)" }}
                />
              </div>
              <h3>Post-Landing Support</h3>
              <p>
                Assistance with accommodation, job search, and settlement for
                students, professionals, and families.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className={styles.why_choose_section}>
          <h2>Why Choose Aye Zee Visa Services?</h2>
          <div className={styles.why_choose_grid}>
            <div className={styles.why_choose_card}>
              <p>Experienced consultants with a proven success record.</p>
            </div>
            <div className={styles.why_choose_card}>
              <p>24/7 customer support for all your queries.</p>
            </div>
            <div className={styles.why_choose_card}>
              <p>Tailored solutions for complex immigration cases.</p>
            </div>
          </div>
          <div className={styles.services_section}>
          
          <button onClick={() => setShowPopup(true)} className={styles.book_now_button}>
        Book Now</button>
        {showPopup && <PopupBookingForm onClose={() => setShowPopup(false)} />}
                </div>
        </div>


 {/* Add this Brochure Slider Section */}
 <div className={styles.brochure_section}>
      <h2>Our Visa Packages</h2>
      <Slider {...sliderSettings} className={styles.brochure_slider}>
        {brochures.map((brochure) => (
          <div key={brochure.id} className={styles.brochure_card}>
            <div className={styles.image_container}>
              <img 
                src={brochure.image} 
                className={styles.brochure_image}
                loading="lazy" // Add lazy loading
              />
            </div>
            <h3>{brochure.title}</h3>
          </div>
        ))}
      </Slider>
    </div>

     
          {/* Closing Image Section */}
      
          <div className={styles.image}>
        <img src={mountains} alt="Mountains" />
        <div className={styles.fade}></div>
      </div>
      </BorderBox>
    </>
  );
}

export default VisaServices;