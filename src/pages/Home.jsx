// import React from 'react';
import "../css/index.css";
// import Navbar from "../components/Navbar";
// import Hero from "../components/HeroSection";
import FrameOne from "../components/FrameOne";
import HowWeHelp from "../components/HowWeHelp";
import AboutUs from "../components/AboutUs";
import Volunteer from "../components/Volunteer";
import StayUpdated from "../components/StayUpdated";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <div>
      {/* <Navbar /> */}
      {/* <Hero /> */}
      <FrameOne />
      <HowWeHelp />
      <AboutUs />
      <Volunteer />
      <StayUpdated />
      <Footer />
    </div>
  );
}
