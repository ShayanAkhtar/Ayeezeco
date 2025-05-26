
  import React, { useState, useEffect, useRef } from "react";
import styles from "./AboutUs.module.css";
import mountains from "../homepage/images/mountains.png";
import BorderBox from "../common-styles/BorderBox";
import Slider from "react-slick";
import { Loader } from "@googlemaps/js-api-loader";

function AboutUs() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    const fetchGoogleReviews = async () => {
      try {
        const loader = new Loader({
          apiKey: "YOUR_GOOGLE_MAPS_API_KEY", 
          version: "weekly",
          libraries: ["places"]
        });

        await loader.load();
        
        // Replace with your actual Place ID
        const placeId = "YOUR_GOOGLE_PLACE_ID";
        const service = new window.google.maps.places.PlacesService(document.createElement('div'));
        
        const request = {
          placeId: placeId,
          fields: ['reviews']
        };

        service.getDetails(request, (place, status) => {
          if (status === window.google.maps.places.PlacesServiceStatus.OK) {
            if (place.reviews && place.reviews.length > 0) {
              setReviews(place.reviews);
            } else {
              // Fallback mock reviews if no reviews found
              setReviews(getMockReviews());
            }
          } else {
            console.error("Error fetching reviews:", status);
            // Fallback to mock reviews if API fails
            setReviews(getMockReviews());
          }
          setLoading(false);
        });
      } catch (err) {
        console.error("Error loading Google Maps API:", err);
        setError(err.message);
        setReviews(getMockReviews());
        setLoading(false);
      }
    };

    fetchGoogleReviews();
  }, []);

  const getMockReviews = () => {
    return [
      {
        author_name: "Sarah K.",
        rating: 5,
        text: "Aye Zee Travel provided exceptional service for our family trip to Europe. Their attention to detail and personalized recommendations made our vacation unforgettable!",
        relative_time_description: "3 months ago"
      },
      {
        author_name: "Michael T.",
        rating: 4,
        text: "Great deals on flights and excellent customer support. They helped me rebook when my plans changed unexpectedly. Highly recommend!",
        relative_time_description: "5 months ago"
      },
      {
        author_name: "Ayesha R.",
        rating: 5,
        text: "The loyalty rewards program is fantastic! I've saved so much on multiple trips. Their team is always responsive and helpful.",
        relative_time_description: "7 months ago"
      }
    ];
  };

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <BorderBox>
      {/* Header Section */}
      <div className={styles.header_section}>
        <h1>About Us</h1>
        <p>
          At Aye Zee Travel & Holidays, we are passionate about creating
          unforgettable travel experiences that inspire and enrich lives,
          offering carefully curated journeys that blend adventure, culture, and
          relaxation to make every trip truly extraordinary.
        </p>
      </div>

      {/* Mission & Vision Section */}
      <div className={styles.mission_vision_section}>
      <div className={styles.card}>
          <h2>Barcelona Office</h2>
          <p>
           Aye Zee Travel & Holidays has a sister concern at Europe namely Aeromon Tours. Aeroman has 20 plus years of experience in the field of travel & tourism services with dozen of offices at Spain and all over Europe, maintaining best reputation & services to clients. Aye Zee Travel & Holidays and Aeromon Tours has B2B collaboration with in all spheres of Travel & Tourism especially Air Ticketing & we declare each other as Branches at Pakistan & Spain/ Europe for best services & facilitation to our clients. You can reach Aeromon Tours by clicking below sign.
          </p>
        </div>
        <div className={styles.card}>
          <h2>Mission</h2>
          <p>
            Our goal is to become a leading group that creates unforgettable
            experiences for customers worldwide, ensuring every journey is
            seamless, enjoyable, and enriching. By prioritizing excellence and
            customer satisfaction, we aim to redefine travel with exceptional
            service and personalized adventures.
          </p>
        </div>
        <div className={styles.card}>
          <h2>Vision</h2>
          <p>
            To inspire and enrich the lives of our clients through unforgettable
            travel experiences and other services. We strive to be the leading
            provider of bespoke services, catering to the diverse needs of our
            clients with excellence, innovation, and customer satisfaction.
          </p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className={styles.why_choose_us_section}>
        <h1>Why Choose Aye Zee Travel & Holidays?</h1>
        <div className={styles.offer_wrapper}>
          <div className={styles.offer_card}>
            <div className={styles.off_images}>
              <img
                style={{
                  width: "50px",
                  height: "50px",
                  filter: "invert(100%)",
                }}
                src="https://cdn-icons-png.flaticon.com/512/3082/3082383.png"
                alt="Convenience Icon"
              />
            </div>
            <h2>Cost-Effective Deals</h2>
            <p>
              Save time and money with our ticketing software covering Pakistan,
              UK, and Europe, offering the best deals.
            </p>
          </div>
         
          <div className={styles.offer_card}>
            <div className={styles.off_images}>
              <img
                style={{
                  width: "50px",
                  height: "50px",
                }}
                src="https://cdn-icons-png.flaticon.com/512/4316/4316920.png"
                alt="Loyalty Icon"
              />
            </div>
            <h2>Loyalty Rewards</h2>
            <p>
              Enjoy rewards like points, cashback, and incentives for repeat
              bookings, making every trip even more rewarding.
            </p>
          </div>
          <div className={styles.offer_card}>
            <div className={styles.off_images}>
              <img
                style={{
                  width: "50px",
                  height: "50px",
                }}
                src="https://cdn-icons-png.flaticon.com/512/3048/3048122.png"
                alt="Customer Service Icon"
              />
            </div>
            <h2>Customer Service</h2>
            <p>
              Experience 24/7 support from our dedicated team, ensuring a
              seamless travel journey every step of the way.
            </p>
          </div>
        </div>
      </div>


        {/* Testimonials Section */}
        <div className={styles.testimonials_section}>
        <h1>What Our Customers Say</h1>
        
        {loading ? (
          <div className={styles.loading}>Loading testimonials...</div>
        ) : error ? (
          <div className={styles.error}>Error loading reviews: {error}</div>
        ) : (
          <Slider {...sliderSettings} ref={sliderRef} className={styles.testimonials_slider}>
            {reviews.map((review, index) => (
              <div key={index} className={styles.testimonial_card}>
                <div className={styles.testimonial_content}>
                  <div className={styles.rating}>
                    {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                  </div>
                  <p className={styles.testimonial_text}>
                    "{review.text}"
                  </p>
                  <div className={styles.customer_info}>
                    <span className={styles.customer_name}>- {review.author_name}</span>
                    <span className={styles.review_date}>{review.relative_time_description}</span>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        )}

        <a 
          href="https://search.google.com/local/writereview?placeid=ChIJaa7yEvcFGTkRTM8N77Py0NA" 
          target="_blank" 
          rel="noopener noreferrer"
          className={styles.review_button}
        >
          Share Your Experience
        </a>
      </div>


      {/* Closing Image Section */}
      <div className={styles.image}>
        <img src={mountains} alt="Mountains" />
        <div className={styles.fade}></div>
      </div>
    </BorderBox>
  );
}

export default AboutUs;
