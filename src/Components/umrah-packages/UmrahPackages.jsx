import React from "react";
import styles from "./UmrahPackages.module.css";
import Navbar from "../navbar/Navbar";
import BorderBox from "../common-styles/BorderBox";
import { useNavigate } from "react-router-dom";
import mountains from "../homepage/images/mountains.png";

import makkahImage from "../../Images/makkah.jpeg"; // Add your Makkah image
import kaabaImage from "../../Images/kaaba.jpeg"; // Add your Kaaba image
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import visa1 from "../../Images/umra/umra1.jpeg";
import visa2 from "../../Images/umra/umra2.jpeg";
import visa3 from "../../Images/visa/visa3.jpeg";
import Slider from "react-slick";


function UmrahPackages() {
  const navigate = useNavigate();

  const packages = [
    {
      title: "Ramzan 2025 Standard Package",
      duration: "14 Days",
      details:
        "7 nights in Makkah (near Masjid Al Haram), 7 nights in Madina (near Masjid Al Nabawi), guided Ziyarat, daily meals, and transportation.",
    },
    {
      title: "Ramzan 2025 Deluxe Package",
      duration: "10 Days",
      details:
        "5 nights in Makkah, 5 nights in Madina, premium accommodation, Ziyarat tours, and airport transfers.",
    },
  ];
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
            <h1>Umrah Packages</h1>
            <p>
              Embark on a spiritual journey to Makkah and Madina with our
              exclusive Ramzan 2025 Umrah packages, designed for comfort and
              devotion.
            </p>
          </div>
        </div>

        {/* Packages Section */}
        <div className={styles.packages_section}>
          <h2>Our Umrah Packages</h2>
          <div className={styles.packages_grid}>
            {packages.map((pkg, index) => (
              <div key={index} className={styles.package_card}>
                <div className={styles.package_icon}>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/3082/3082383.png"
                    alt="Umrah Icon"
                    style={{
                      width: "40px",
                      height: "40px",
                      filter: "invert(100%)",
                    }}
                  />
                </div>
                <h3>{pkg.title}</h3>
                <p className={styles.duration}>Duration: {pkg.duration}</p>
                <p>{pkg.details}</p>
              </div>
            ))}
          </div>
        </div>

     

        {/* Holy Places Section */}
        <div className={styles.holy_places_section}>
          <h2>The Holiest Sites of Islam</h2>
          <div className={styles.holy_places_grid}>
            <div className={styles.holy_place_card}>
              <img src={makkahImage} alt="Makkah" className={styles.holy_place_image} />
              <div className={styles.holy_place_overlay}>
                <h3>Makkah Al-Mukarramah</h3>
                <p>The blessed city containing the Kaaba, the qibla for Muslims worldwide</p>
              </div>
            </div>
            <div className={styles.holy_place_card}>
              <img src={kaabaImage} alt="Kaaba" className={styles.holy_place_image} />
              <div className={styles.holy_place_overlay}>
                <h3>Al-Masjid al-Haram</h3>
                <p>Home to the Kaaba, the holiest site in Islam</p>
              </div>
            </div>
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

  {/* Services Section */}
  <div className={styles.services_section}>
          
          <button
            onClick={() => navigate("/contactus")}
            className={styles.book_now_button}
          >
            Book Now
          </button>
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

export default UmrahPackages;