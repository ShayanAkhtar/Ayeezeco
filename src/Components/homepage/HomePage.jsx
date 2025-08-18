/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import styles from "./HomePage.module.css";
import roundImage from "./images/roundtwoimage.png";
import mountains from "./images/mountains.png";
import ContactUs from "../contact-us/ContactUs";
import BorderBox from "../common-styles/BorderBox";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { FaWhatsapp } from "react-icons/fa"

function HomePage() {
  const dispatch = useDispatch();
  const nagivate = useNavigate();
  return (
    <BorderBox>
      {/* first section  */}
      <div className={styles.first_section}>
        <div className={styles.left_side_first}>
          <img src={roundImage} className={styles.rounded_image_first} />
          {/* <img
            src="https://hblimg.mmtcdn.com/content/hubble/img/collections/m_weekend44_p_540_417.jpg?im=Resize=(400,462)"
            className={styles.rounded_image_first}
          /> */}
          {/* <img
            src="https://hblimg.mmtcdn.com/content/hubble/img/kasauli/mmt/destination/m_destination-kasauli-landscape_l_400_640.jpg"
            className={styles.rounded_image_first}
          /> */}
        </div>

        <div className={styles.right_side_first}>
          <h1 className="">Explore the Beauty of Every Destination</h1>
          <p>
          Discover breathtaking locations, curated travel experiences, and seamless 
          booking services. Let us take you on a journey filled with unforgettable moments.
          </p>
          <button
  onClick={() => {
    const section = document.getElementById("destinations");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }}
>
  Browse Destinations
</button>

        </div>
      </div>

      {/* second section */}
      <div className={styles.second_section}>
        <h1>We Offer the Best</h1>
        <p>
          Our team of travel experts is dedicated to ensure that have the
          vacation of a lifetime. Choose us for your next adventure and see wh
          the best in the bussiness
        </p>
        <div className={styles.offer_wrapper}>
          <div className={styles.offer_card}>
            <div className={styles.off_images}>
              <img
                style={{
                  width: "50px",
                  height: "50px",
                  filter: "invert(100%)",
                }}
                src="https://cdn-icons-png.flaticon.com/512/0/614.png"
              />
            </div>
            <h2>Recreational Tours</h2>
            <p>
              Explore new cultures, meet amazing people, and create lifelong
              memories with our exceptional tours.
            </p>
              <a
                            href="https://wa.me/03041286661"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.whatsapp_button}
                          >
                            <FaWhatsapp className={styles.whatsapp_icon} />
                            <span>Inquire Now</span>
                          </a>
          </div>
          <div className={styles.offer_card}>
            <div className={styles.off_images}>
              <img
                style={{
                  width: "50px",
                  height: "50px",
                  filter: "invert(100%)",
                }}
                src="https://cdn-icons-png.flaticon.com/512/3127/3127995.png"
              />
            </div>
            <h2>Religious Tours</h2>
            <p>
              Discover Pakistan's rich spiritual heritage as we guide you
              through its sacred historical sites.
            </p>
            <a
                            href="https://wa.me/03041286661"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.whatsapp_button}
                          >
                            <FaWhatsapp className={styles.whatsapp_icon} />
                            <span>Inquire Now</span>
                          </a>
          </div>
          <div className={styles.offer_card}>
            <div className={styles.off_images}>
              <img
                style={{
                  width: "50px",
                  height: "50px",
                  filter: "invert(100%)",
                }}
                src="https://cdn-icons-png.flaticon.com/512/2956/2956869.png"
              />
            </div>
            <h2>Umrah Packages</h2>
            <p>
              Explore new cultures, meet amazing people, and create lifelong
              memories with our exceptional tours.
            </p>
              <a
                            href="https://wa.me/03041286661"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.whatsapp_button}
                          >
                            <FaWhatsapp className={styles.whatsapp_icon} />
                            <span>Inquire Now</span>
                          </a>
          </div>
        </div>
      </div>

      {/* third section */}
      <div  className={styles.third_section}>
        <h1>Great locations across the World</h1>
        <p>
          Travel to the most breathtaking and exotic locations across the globe
          with us. From the majestic mountains of Patagonia to the pristine
          beaches of Bali, we'll take you there.
        </p>
        <div  className={styles.map_wrapper}>
          <img src="https://www.looptelecom.com/uploads/files/About/map-worldwide.png" />
        </div>
      </div>

      {/* fourth section */}
      <div id="destinations" className={styles.third_section}>
        <h1>Find Popular Destinations</h1>
        <p>
          Escape the ordinary and explore the extraordinary - with our
          handpicked selection of destinations and travel deals, you'll be apple
          to create the trip of your dreams.
        </p>
        <div className={styles.offer_wrapper}>
          <div className={styles.product_card}>
            <div>
              <img src="https://media.istockphoto.com/id/1138147310/photo/aerial-view-of-speed-boat-in-motion-in-blue-sea-in-italy.jpg?s=612x612&w=0&k=20&c=eYDlULXeI47BCgpMYPhlBvbqn4OBUo8zej3WVNAu7Ms=" />
            </div>
            <h2>Magical Maldives</h2>
            <p>
              Escape to the Maldives’ crystal-clear waters and overwater
              bungalows for the ultimate tropical paradise.
            </p>
            <div>
              <button
                onClick={() => {
                  nagivate("/contactus");
                }}
              >
                Book Now
              </button>
            </div>
          </div>
          <div className={styles.product_card}>
            <div>
              <img src="https://media.istockphoto.com/id/507551802/photo/istanbul-the-capital-of-turkey.jpg?s=612x612&w=0&k=20&c=2DicSp1j3b8K1Xosz-L4XtCMQ02U0-JhyIGbcaM2te4=" />
            </div>
            <h2>Timeless Turkey</h2>
            <p>
              Experience Turkey’s rich history, from ancient ruins to
              breathtaking landscapes, blending East and West beautifully.
            </p>
            <div>
              <button
                onClick={() => {
                  nagivate("/contactus");
                }}
              >
                Book Now
              </button>
            </div>
          </div>
          <div className={styles.product_card} onClick={() => {}}>
            <div>
              <img src="https://media.istockphoto.com/id/1458772649/photo/solo-traveler-woman-enjoying-phang-nga-bay-view-point-tourist-at-samet-nang-she-thailand-asia.jpg?s=612x612&w=0&k=20&c=J-RIpHSVEn-JUq2JEC0dPQEOUk3NHpikcPYOVL_sj8A=" />
            </div>
            <h2>Thrilling Thailand</h2>
            <p>
              Dive into Thailand’s vibrant culture, stunning beaches, and
              bustling night markets for an unforgettable adventure.
            </p>
            <div>
              <button
                onClick={() => {
                  nagivate("/contactus");
                }}
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.image}>
        <img src={mountains} />
        <div className={styles.fade}></div>
      </div>
      {/* fifth section */}
      <ContactUs />
    </BorderBox>
  );
}

export default HomePage;
