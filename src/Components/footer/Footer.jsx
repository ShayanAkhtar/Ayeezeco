import React from "react";
import styles from "./Footer.module.css";
import BorderBox from "../common-styles/BorderBox";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <BorderBox>
      <div className={styles.footer}>
        <div>
          <h2>Aye Zee Travel & Holidays</h2>
          <p>
            At Aye Zee Travel & Holidays, we specialize in creating unforgettable travel experiences.
            From customized travel packages to seamless booking solutions, we help adventurers and explorers discover the world with ease and confidence.
          </p>
        </div>

        <div className={styles.footer_socials_and_links}>
          <div className={styles.footer_links}>
            <Link to="/aboutus">About Us</Link>
            <Link to="/contactus">Contact Us</Link>
          </div>
          <div className={styles.footer_socials}>
            <a
              href="https://www.instagram.com/ayezeegroup61/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-instagram fa-xl" style={{ color: "rgb(28,173,254)" }} />
            </a>
            <a
              href="https://pk.linkedin.com/in/azib-n-zahrah-s-60a726232"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-linkedin fa-xl" style={{ color: "rgb(28,173,254)" }} />
            </a>
            <a
              href="https://m.facebook.com/ayezeetravelandholidays"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-facebook fa-xl" style={{ color: "rgb(28,173,254)" }} />
            </a>
          </div>
        </div>
      </div>
    </BorderBox>
  );
}

export default Footer;
