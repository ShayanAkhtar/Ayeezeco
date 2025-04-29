import React from "react";
import styles from "./ReligiousTours.module.css";
import Navbar from "../navbar/Navbar"; // Adjust path as needed
import BorderBox from "../common-styles/BorderBox";
import { useNavigate } from "react-router-dom";
import mountains from "../homepage/images/mountains.png"; // Reusing from homepage
import religiousite from "../../Images/religiousite.png";
import buddhism from "../../Images/buddhism.png";

function ReligiousTours() {
  const navigate = useNavigate();

  const sikhismSites = [
    {
      name: "Gurudwara Darbar Sahib, Kartarpur",
      description:
        "In Kartarpur, Pakistan, where Guru Nanak Dev Ji spent his final years teaching. Site of his cremation. Kartarpur Corridor (2019) enables Sikh pilgrim visits.",
    },
    {
      name: "Gurudwara Janam Asthan Sahib, Nankana Sahib",
      description:
        "Birthplace of Guru Nanak Dev Ji (1469), a sacred Sikh site. Marks his birthplace and childhood area.",
    },
    {
      name: "Gurudwara Panja Sahib, Hassan Abdal",
      description:
        "In Hassan Abdal, known for Guru Nanak Dev Ji’s handprint on a sacred rock from a miraculous event.",
    },
  ];

  const sikhismItinerary = [
    "DAY 1: Arrive in Lahore, Pakistan & check into hotel.",
    "DAY 2: Visit Kartarpur Sahib, return to Lahore.",
    "DAY 3: Drive to Islamabad (4–5 hrs), check into hotel.",
    "DAY 4: Visit Panja Sahib, Hassan Abdal, return to Islamabad.",
    "DAY 5: Explore Islamabad, drive back to Lahore (4–5 hrs), check in.",
    "DAY 6: Visit Nankana Sahib, return to Lahore.",
    "DAY 7: Visit Lahore Fort, Badshahi Masjid & Wagha Border Flag Ceremony.",
    "DAY 8: Depart to your home.",
  ];

  const buddhismHighlights = [
    {
      name: "Gandhara: Jewel of Buddhist Art",
      description:
        "Ancient kingdom (6th century BCE–11th century CE), famous for Buddhist art with intricate carvings.",
    },
    {
      name: "Taxila: UNESCO Heritage Site",
      description:
        "In Punjab, a key center for Buddhist learning with renowned scholars.",
    },
    {
      name: "Buddhist Monuments",
      description:
        "Discover Takht-i-Bahi ruins and Mankiala Stupa, reflecting Pakistan’s Buddhist heritage.",
    },
  ];

  return (
    <>
      <Navbar isWhiteBackground={false} isOfferVisible={false} />{" "}
      <BorderBox>
        {/* Header Section */}
        <div className={styles.header_section}>
          <div className={styles.header_content}>
            <h1>Religious Tours</h1>
            <p>
              Embark on a spiritual journey through the ancient heritage of
              Sikhism and Buddhism in Pakistan, guided by our dedicated team.
            </p>
          </div>
        </div>

        {/* Sikhism Section */}
        <div className={styles.section}>
          <h2>Sikhism</h2>
          <div className={styles.grid}>
            {sikhismSites.map((site, index) => (
              <div key={index} className={styles.card}>
                <div className={styles.icon}>
                  <img
                    src={religiousite}
                    alt="Sikh Icon"
                    style={{
                      width: "40px",
                      height: "40px",
                    }}
                  />
                </div>
                <h3>{site.name}</h3>
                <p>{site.description}</p>
              </div>
            ))}
          </div>

          {/* Sikhism Itinerary */}
          <div className={styles.itinerary_section}>
            <h3>Our Itinerary with Hospitality</h3>
            <ul className={styles.itinerary_list}>
              {sikhismItinerary.map((day, index) => (
                <li key={index}>{day}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Buddhism Section */}
        <div className={styles.section}>
          <h2>Buddhism</h2>
          <div className={styles.grid}>
            {buddhismHighlights.map((highlight, index) => (
              <div key={index} className={styles.card}>
                <div className={styles.icon}>
                  <img
                    src={buddhism}
                    alt="Buddhism Icon"
                    style={{
                      width: "40px",
                      height: "40px",
                    }}
                  />
                </div>
                <h3>{highlight.name}</h3>
                <p>{highlight.description}</p>
              </div>
            ))}
          </div>
          <p className={styles.buddhism_note}>
            Pakistan’s Buddhist heritage offers a deep experience for pilgrims
            and travelers. Join us to explore this legacy.
          </p>
          <button
            onClick={() => navigate("/contactus")}
            className={styles.contact_button}
          >
            Contact Us
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

export default ReligiousTours;
