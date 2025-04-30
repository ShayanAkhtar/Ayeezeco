import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../Components/homepage/HomePage";
import ContactUs from "../Components/contact-us/ContactUs";
import AboutUs from "../Components/about-us/AboutUs";
import RecreationalTours from "../Components/recreational-tours/RecreationalTours";
import VisaServices from "../Components/visa-services/VisaServices";
import UmrahPackages from "../Components/umrah-packages/UmrahPackages";
import ReligiousTour from "../Components/religious-tour/ReligiousTour";
import AirTicketing from "../Components/AirTicketing/AirTicketing"


function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/airticketing" element={<AirTicketing />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/recreationaltours" element={<RecreationalTours />} />
      <Route path="/visaservices" element={<VisaServices />} />
      <Route path="/umrahpackages" element={<UmrahPackages />} />
      <Route path="/religioustour" element={<ReligiousTour />} />
</Routes>
  );
}

export default AllRoutes;
