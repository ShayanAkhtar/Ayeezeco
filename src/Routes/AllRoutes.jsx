import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../Components/homepage/HomePage";
import ContactUs from "../Components/contact-us/ContactUs";
import AboutUs from "../Components/about-us/AboutUs";
import RecreationalTours from "../Components/recreational-tours/RecreationalTours";
import VisaServices from "../Components/visa-services/VisaServices";
import UmrahPackages from "../Components/umrah-packages/UmrahPackages";
import ReligiousTour from "../Components/religious-tour/ReligiousTour"; 

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
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
