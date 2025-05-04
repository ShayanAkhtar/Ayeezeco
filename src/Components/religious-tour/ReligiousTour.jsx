"use client"

import { useState } from "react"
import styles from "./ReligiousTour.module.css"
import Navbar from "../navbar/Navbar" // Adjust path as needed
import BorderBox from "../common-styles/BorderBox"
import { useNavigate } from "react-router-dom"
import mountains from "../homepage/images/mountains.png";
import PopupBookingForm from '../PopupBookingForm/PopupBookingForm';

// Import images if needed
// import sikhTemple from "../../Images/sikh-temple.png"; // Replace with your image
// import mountains from "../homepage/images/mountains.png"; // Reusing from homepage

function ReligiousTour() {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState("sikhism")
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <Navbar isWhiteBackground={false} isOfferVisible={false} />{" "}
      <BorderBox>
        {/* Header Section */}
        <div className={styles.header_section}>
          <div className={styles.header_content}>
            <h1>Religious Tours</h1>
            <p>
              We care you knowing Sikhism & Buddhism historical places in Pakistan. Embark on a spiritual journey like
              no other as we guide you through this ancient heritage.
            </p>
          </div>
        </div>

        {/* Main Content with Custom Tabs */}
        <div className={styles.main_content}>
          <div className={styles.tabs}>
            <div className={styles.tabs_list}>
              <button
                className={`${styles.tab_trigger} ${activeTab === "sikhism" ? styles.active : ""}`}
                onClick={() => setActiveTab("sikhism")}
              >
                SIKHISM
              </button>
              <button
                className={`${styles.tab_trigger} ${activeTab === "buddhism" ? styles.active : ""}`}
                onClick={() => setActiveTab("buddhism")}
              >
                BUDDHISM
              </button>
            </div>

            {/* Sikhism Tab Content */}
            {activeTab === "sikhism" && (
              <div className={styles.tab_content}>
                <div className={styles.site_section}>
                  <div className={styles.site_header}>
                    <h2>GURDWARA DARBAR SAHIB, KARTARPUR</h2>
                  </div>
                  <div className={styles.site_content}>
                    <p>Gurudwara Darbar Sahib, also known as Kartarpur Sahib, is situated in Kartarpur, Pakistan.</p>
                    <p>
                      Guru Nanak Dev Ji spent the last years of his life here, tending to his followers and spreading
                      his teachings.
                    </p>
                    <p>
                      After his passing, a gurudwara was established at this location, and it is believed to be where
                      Guru Nanak Dev Ji's mortal remains were cremated.
                    </p>
                    <p>
                      The Kartarpur Corridor, inaugurated in 2019, also provides a dedicated passage for Sikh pilgrims
                      from INDIA to visit this historic site. However, we do not deal direct arrivals/ pilgrims from
                      India.
                    </p>
                  </div>
                </div>

                <div className={styles.site_section}>
                  <div className={styles.site_header}>
                    <h2>GURDWARA JANAM ASTHAN SAHIB, NANKANA SAHIB</h2>
                  </div>
                  <div className={styles.site_content}>
                    <p>
                      Gurudwara Janam Asthan Sahib is the birthplace of Guru Nanak Dev Ji, the founder of Sikhism, who
                      was born here in 1469.
                    </p>
                    <p>
                      It is one of the holiest sites for Sikhs worldwide, a place where Guru Nanak spent his early
                      years.
                    </p>
                    <p>
                      The gurdwara complex includes the shrine marking the Guru's birthplace and the surrounding area
                      where he played as a child.
                    </p>
                    <p>
                      Pilgrims visit this sacred site to offer their prayers and seek blessings, connecting with the
                      Guru's divine legacy.
                    </p>
                  </div>
                </div>

                <div className={styles.site_section}>
                  <div className={styles.site_header}>
                    <h2>GURDWARA PANJA SAHIB, HASSAN ABDAL</h2>
                  </div>
                  <div className={styles.site_content}>
                    <p>
                      Gurudwara Panja Sahib is located in Hassan Abdal, Pakistan, and is associated with an important
                      event in Guru Nanak Dev Ji's life.
                    </p>
                    <p>
                      According to Sikh tradition, Guru Nanak Dev Ji stopped a massive boulder with his hand while
                      visiting this area, leaving an imprint of his hand on the rock.
                    </p>
                    <p>
                      This gurudwara houses the sacred rock with Guru Nanak Dev Ji's handprint and is a site of deep
                      veneration for Sikhs.
                    </p>
                    <div className={styles.gurdwara_image}>
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/guru-3oUs8QDDBazWkaXKdnM3UkN8KVzONI.jpeg"
                        alt="Gurdwara Darbar Sahib"
                      />
                      <p className={styles.image_caption}>
                        Gurdwara Darbar Sahib, Kartarpur - A sacred site where Guru Nanak Dev Ji spent his final years
                      </p>
                    </div>
                  </div>
                </div>

                <div className={styles.itinerary_section}>
                  <h2>OUR ITINERARY WITH EXCELLENT HOSPITALITY & SERVICES</h2>
                  <ul className={styles.itinerary_list}>
                    <li>
                      <span>DAY 1:</span> Arrival at Lahore, Pakistan & Check In Hotel at Lahore.
                    </li>
                    <li>
                      <span>DAY 2:</span> Visit Kartarpur Sahib & back to Lahore.
                    </li>
                    <li>
                      <span>DAY 3:</span> Drive to Islamabad, 4 to 5 Hours & Check In Hotel at Islamabad.
                    </li>
                    <li>
                      <span>DAY 4:</span> Visit Panja Sahib, Hassan Abdal & back to Islamabad.
                    </li>
                    <li>
                      <span>DAY 5:</span> Visit of Islamabad, drive to back Lahore 4 to 5 hours/ Check In at Lahore.
                    </li>
                    <li>
                      <span>DAY 6:</span> Visit Nankana Sahib & back to Lahore.
                    </li>
                    <li>
                      <span>DAY 7:</span> Visit of Lahore Fort, Badshahi Masjid & Wagha Border for Flag Ceremony.
                    </li>
                    <li>
                      <span>DAY 8:</span> Departure, back to your home.
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {/* Buddhism Tab Content */}
            {activeTab === "buddhism" && (
              <div className={styles.tab_content}>
                <div className={styles.site_section}>
                  <div className={styles.site_header}>
                    <h2>THE CRADLE OF BUDDHIST CIVILIZATION</h2>
                  </div>
                  <div className={styles.site_content}>
                    <p>
                      Pakistan, with its ancient roots dating back thousands of years, holds a unique place in the
                      history of Buddhism. It was in this very region that Prince Siddhartha Gautama, who later became
                      known as Buddha, is believed to have spent a significant part of his life and achieved
                      enlightenment. This historical connection makes Pakistan a fascinating destination for Buddhist
                      pilgrims and history enthusiasts alike.
                    </p>
                  </div>
                </div>

                <div className={styles.site_section}>
                  <div className={styles.site_header}>
                    <h2>GANDHARA: THE JEWEL OF BUDDHIST ART AND CULTURE</h2>
                  </div>
                  <div className={styles.site_content}>
                    <p>
                      One of the most prominent centers of Buddhist civilization in Pakistan was Gandhara, an ancient
                      kingdom that existed from the 6th century BCE to the 11th century CE. Gandhara is celebrated for
                      its exceptional contributions to Buddhist art and culture, especially through its distinctive
                      Gandhara art style. This art form, characterized by intricate stone carvings and sculptures,
                      adorned monasteries, stupas, and temples throughout the region.
                    </p>
                  </div>
                </div>

                <div className={styles.site_section}>
                  <div className={styles.site_header}>
                    <h2>TAXILA: A UNESCO WORLD HERITAGE SITE</h2>
                  </div>
                  <div className={styles.site_content}>
                    <p>
                      Taxila, located in modern-day Punjab, Pakistan, is a UNESCO World Heritage Site that was a
                      prominent center of learning and Buddhist philosophy in ancient times. It played host to some of
                      the world's most renowned Buddhist scholars and philosophers, making it a significant destination
                      for those interested in the intellectual history of Buddhism.
                    </p>
                  </div>
                </div>

                <div className={styles.site_section}>
                  <div className={styles.site_header}>
                    <h2>THE MAGNIFICENT BUDDHIST MONUMENTS</h2>
                  </div>
                  <div className={styles.site_content}>
                    <p>
                      Venture through Pakistan, and you will discover a wealth of Buddhist monuments and archaeological
                      sites. From the awe-inspiring ruins of Takht-i-Bahi to the serene beauty of the Mankiala Stupa,
                      these sites offer a glimpse into Pakistan's deep Buddhist heritage.
                    </p>
                  </div>
                </div>

                <div className={styles.site_section}>
                  <div className={styles.site_header}>
                    <h2>BUDDHISM'S LEGACY IN MODERN PAKISTAN</h2>
                  </div>
                  <div className={styles.site_content}>
                    <p>
                      While Buddhism waned in Pakistan over the centuries, its legacy still resonates in the culture and
                      traditions of the region. Many Pakistani families can trace their roots back to Buddhist
                      ancestors, and the teachings of Buddha continue to influence the spiritual landscape of the
                      country.
                    </p>
                  </div>
                </div>

                <div className={styles.site_section}>
                  <div className={styles.site_header}>
                    <h2>EMBARK ON A SPIRITUAL JOURNEY</h2>
                  </div>
                  <div className={styles.site_content}>
                    <p>
                      Our website is your gateway to exploring the enduring history of Buddhism in Pakistan. Whether
                      you're a dedicated pilgrim or a curious traveler, Pakistan's Buddhist heritage promises a profound
                      and enlightening experience. Join us on a journey of discovery as we delve deeper into the
                      treasures of Buddhism in this captivating land.
                    </p>
                  </div>
                </div>

                <div className={styles.tour_booklet}>
                  <h3>Complete Tour Booklet – EXPLORE BUDDHISM IN PAKISTAN</h3>
                  <div className={styles.booklet_image}>
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-r4dRg3hOyfC1TwrMBwO0lqOfmFMbZb.png"
                      alt="Buddhism Tour Booklet"
                    />
                    <p className={styles.image_caption}>
                      Our comprehensive Buddhism tour packages offering visits to historical Buddhist sites in Pakistan
                    </p>
                  </div>
                  <p className={styles.note}>
                    NOTE: FOR DETAILS/ MORE CUSTOMISED & FAMILY/ FRIENDS PACKAGES WITH GUIDE & SECURITY FOR SIKHISM &
                    BUDDHISM RELIGIOUS SITES VISITS IN PAKISTAN, CALL US AT UAM 0304-111-4651 or +923061286661
                    (WhatsApp)
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Call to Action */}
        <div className={styles.cta_section}>
        <button onClick={() => setShowPopup(true)} className={styles.book_now_button}>
Book Now</button>
{showPopup && <PopupBookingForm onClose={() => setShowPopup(false)} />}
        </div>


        {/* Closing Image Section */}
        <div className={styles.image}>
          <img src={mountains} alt="Mountains" />
          <div className={styles.fade}></div>
        </div>
      </BorderBox>
    </>
  )
}

export default ReligiousTour
