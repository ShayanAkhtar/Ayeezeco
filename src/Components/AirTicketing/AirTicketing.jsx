"use client";

import React from "react";
import { useState } from "react";
import styles from "./AirTicketing.module.css";
import Navbar from "../navbar/Navbar"; // Adjust path as needed
import BorderBox from "../common-styles/BorderBox"; // Adjust path as needed
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AirTicketing1 from "../../Images/AirTicketing/AirTicketing.jpeg";
import AirTicketing2 from "../../Images/AirTicketing/AirTicketing2.jpeg";
import AirTicketing3 from "../../Images/AirTicketing/AirTicketing3.jpeg";
import PopupBookingForm from "../PopupBookingForm/PopupBookingForm";
import { FaWhatsapp } from "react-icons/fa"

import mountains from "../homepage/images/mountains.png";
function AirTicketing() {
  const [showPopup, setShowPopup] = useState(false);

  const navigate = useNavigate();
  const brochures = [
    {
      id: 1,
      image: AirTicketing1,
    },
    {
      id: 2,
      image: AirTicketing2,
    },
    {
      id: 3,
      image: AirTicketing3,
    },
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
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <Navbar isWhiteBackground={false} isOfferVisible={false} />
      <BorderBox>
        {/* Header Section */}
        <div className={styles.header_section}>
          <div className={styles.header_content}>
            <h1>Air Ticketing</h1>
            <p>
              Find the best flight deals and book your tickets with confidence.
              We offer competitive prices and excellent customer service.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className={styles.main_content}>
          <div className={styles.deals_section}>
            <h3>AIR TRAVEL – BEST & CHEAPEST FARES</h3>

            <div className={styles.deals_content}>
              <p>
                Booking Air Travel can be time-consuming and confusing at the
                same time with hidden fares, taxes, FEDs etc, especially when
                you are searching for the best deals and packages ON LINE. By
                using variety of ticketing software (like Pakistan, UK and
                Europeans), we offers all packages where customers can save
                time, effort and money comparing all options in one place. We
                offers worldwide travel packages with best deals and discounts
                due to our partnership with multiple airlines, making air travel
                more affordable. We have best SOTO options (traveling between
                destinations out of Pakistan).
              </p>

              <p>
                We have excellent staff who is placed best to serve you with
                options to offer your the best and cheapest plan. There are
                several benefits of getting services from Aye Zee Travel &
                Holidays where we offer all sort of packages for Worldwide Air
                Travel. We provide customer support 24/7 for travel-related
                queries or concerns, ensuring a smooth travel experience for our
                valuable customers.
              </p>

              <p className={styles.booking_info}>
                   <a
                                            href="https://wa.me/03041286661"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={styles.whatsapp_button}
                                          >
                                            <FaWhatsapp className={styles.whatsapp_icon} />
                                            <span>Call now to Inquire more</span>
                                          </a>
              </p>
              {/* Add this Brochure Slider Section */}
              <div className={styles.brochure_section}>
                <h2>Our Deals</h2>
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
            </div>
          </div>

         {/* Features Section */}
<h2 style={{ textAlign: "center", marginBottom: "20px" }}>Why Choose Us?</h2>
<div className={styles.features_section}>
  <div className={styles.feature}>
    <h4>Competitive Pricing</h4>
    <p>
      We offer the best rates for domestic and international flights
      through our partnerships with airlines.
    </p>
  </div>

  <div className={styles.feature}>
    <h4>Worldwide Destinations</h4>
    <p>
      Book flights to any destination around the globe with our
      comprehensive ticketing service.
    </p>
  </div>

  <div className={styles.feature}>
    <h4>24/7 Support</h4>
    <p>
      Our dedicated team is available round the clock to assist with
      your travel needs and concerns.
    </p>
  </div>

  <div className={styles.feature}>
    <h4>Special Packages</h4>
    <p>
      Enjoy exclusive deals on flight packages to popular destinations
      like Dubai, Turkey, and Thailand.
    </p>
  </div>
</div>


          {/* Call to Action */}
          <div className={styles.cta_section}>
            <button
              onClick={() => setShowPopup(true)}
              className={styles.book_now_button}
            >
              Book Your Flight Now
            </button>
            {showPopup && (
              <PopupBookingForm onClose={() => setShowPopup(false)} />
            )}
          </div>
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

export default AirTicketing;
