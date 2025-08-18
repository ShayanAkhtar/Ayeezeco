"use client"

import React, { useEffect, useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import logo from "../../Images/logo_navbar.webp"
import BorderBox from "../common-styles/BorderBox"
import styles from "./Navbar.module.css"
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
import "./Navbar.module.css"

function Navbar({ isWhiteBackground = false, isOfferVisible = true }) {
  const [colorChange, setColorChange] = useState(false)
  const [sideBarHidden, setSideBarHidden] = useState(true)
  const navigate = useNavigate()
  const location = useLocation()

  const changeNavbarColor = () => {
    if (window.scrollY >= 30) {
      setColorChange(true)
    } else {
      setColorChange(false)
    }
  }

  useEffect(() => {
    if (!isWhiteBackground) {
      window.addEventListener("scroll", changeNavbarColor)
      return () => {
        window.removeEventListener("scroll", changeNavbarColor)
      }
    }
  }, [isWhiteBackground])

  const handleShowSideMenu = () => {
    setSideBarHidden(!sideBarHidden)
  }

  const handleBlankScreen = () => {
    setSideBarHidden(true)
  }

  const handleLinkClick = () => {
    setSideBarHidden(true)
  }

  // Determine if a link is active
  const isLinkActive = (path) => {
    if (path === "/") {
      return location.pathname === "/" // Exact match for home
    }
    return location.pathname === path // Exact match for other pages
  }

  return (
    <>
      {/* Upper Navigation Bar */}
      <div className={styles.upper_nav}>
        <div className={styles.upper_nav_content}>
          <div className={styles.upper_nav_item}>
            <Phone size={14} className={styles.upper_nav_icon} />
            <a href="tel:0304-111-4-651">0304-1286661</a>
          </div>
          <div className={styles.upper_nav_item}>
            <Mail size={14} className={styles.upper_nav_icon} />
            <a href="mailto:contactus@ayezeeco.com">contactus@ayezeeco.com</a>
          </div>
          <div className={styles.upper_nav_item}>
            <MapPin size={14} className={styles.upper_nav_icon} />
            <span>Office No 12, First Floor, Peshawar Block, Fortress Stadium, Lahore Cantt</span>
          </div>
          <div className={styles.upper_nav_item}>
            <Clock size={14} className={styles.upper_nav_icon} />
            <span>1000-1700 Hours (Sunday Closed)</span>
          </div>
        </div>
      </div>

      <BorderBox>
        <div
          className={`${styles.blank_screen} ${sideBarHidden ? "hidden" : ""}`}
          onClick={handleBlankScreen}
        ></div>
        {isOfferVisible && !colorChange && (
          <div className={styles.discount}>
            <p>Up to 50% off on your trips</p>
          </div>
        )}
        <div
          className={styles.navouter}
          style={{
            backgroundColor: isWhiteBackground || colorChange ? "white" : "transparent",
            top: isOfferVisible && !colorChange ? "32px" : "0",
            boxShadow: isWhiteBackground || colorChange ? "rgba(17, 17, 26, 0.1) 0px 1px 0px" : "none",
          }}
        >
          <div className={`${styles.navbar} max-w-screen-xl flex items-center justify-between mx-auto p-4`}>
            <div style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
              <span className="text-3xl font-semibold whitespace-nowrap">Aye Zee Travel & Holidays</span>
            </div>
            <div className={styles.sidebar_icon} onClick={handleShowSideMenu}>
              <i className="fa-solid fa-bars fa-xl" style={{ color: "#000000" }} />
            </div>
            <div className={styles.desk_links}>
              {[
                "/",
                
                "/airticketing",
                "/umrahpackages",
                "/recreationaltours",
                "/religioustour",
                "/visaservices",
              ].map((path, index) => (
                <Link
                  key={index}
                  to={path}
                  className={`${isLinkActive(path) ? styles.link_active_desk : ""} font-semibold`}
                >
                  {path
                    .replace("/", "")
                    .replace("airticketing", "Air Ticketing")
                    .replace("umrahpackages", "Umrah Packages")
                    .replace("aboutus", "About Us")
                    .replace("visaservices", "Visa Services")
                    .replace("contactus", "Contact Us")
                    .replace("recreationaltours", "Recreational Tours")
                    .replace("religioustour", "Religious Tours") || "Home"}
                </Link>
              ))}
              <a
                href="https://wa.me/03041286661"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.whatsapp_button}
              >
                <FaWhatsapp className={styles.whatsapp_icon} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Sidebar */}
        <div
          className={`${styles.mobile_sidebar} ${sideBarHidden ? styles.sidebar_backward : styles.sidebar_anima} z-50`}
        >
          <div className={styles.logoouter}>
            <img src={logo || "/placeholder.svg"} alt="Logo" />
            <h2 className={styles.logo}>Aye Zee Travel & Holidays</h2>
          </div>
          <div className={styles.hor_line}></div>
          {[
            "/",
            "/airticketing",
            "/aboutus",
            "/recreationaltours",
            "/religioustours",
            "/umrahpackages",
            "/visaservices",
            "/contactus",
          ].map((path, index) => (
            <React.Fragment key={index}>
              <Link
                onClick={handleLinkClick}
                to={path}
                className={`${isLinkActive(path) ? styles.mobile_active_link : ""} font-semibold`}
              >
                {path
                  .replace("/", "")
                  .replace("airticketing", "Air Ticketing")
                  .replace("umrahpackages", "Umrah Packages")
                  .replace("aboutus", "About Us")
                  .replace("visaservices", "Visa Services")
                  .replace("contactus", "Contact Us")
                  .replace("recreationaltours", "Recreational Tours")
                  .replace("religioustours", "Religious Tours") || "Home"}
              </Link>
              <div className={styles.hor_line}></div>
            </React.Fragment>
          ))}
          <div className={styles.hor_line}></div>
          <a
            href="https://wa.me/923226803850"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mobile_whatsapp_button}
          >
            <MessageCircle size={16} className={styles.whatsapp_icon} />
            WhatsApp Us
          </a>
          <div className={styles.hor_line}></div>
        </div>
      </BorderBox>
    </>
  )
}

export default Navbar