import React from "react";
import styles from "./Footer.module.css";
import BorderBox from "../common-styles/BorderBox";

function Footer() {
  return (
    <BorderBox>
      <div className={styles.footer}>
        <div>
          <h2>AyezeeCo</h2>
          <p>
            At AyezeeCo, we specialize in crafting digital experiences that elevate 
            brands. From cutting-edge web development to strategic marketing solutions, 
            we help businesses thrive in the digital era.
          </p>
        </div>
        <div>
          <a
            href="https://www.instagram.com/ayezeegroup61/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i
              className="fa-brands fa-instagram fa-xl"
              style={{ color: "rgb(28,173,254)", marginRight: "15px" }}
            />
          </a>
          <a
            href="https://pk.linkedin.com/in/azib-n-zahrah-s-60a726232"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i
              className="fa-brands fa-linkedin fa-xl"
              style={{ color: "rgb(28,173,254)", marginRight: "15px" }}
            />
          </a>
          <a
            href="https://m.facebook.com/ayezeetravelandholidays"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i
              className="fa-brands fa-facebook fa-xl"
              style={{ color: "rgb(28,173,254)" }}
            />
          </a>
        </div>
      </div>
    </BorderBox>
  );
}

export default Footer;