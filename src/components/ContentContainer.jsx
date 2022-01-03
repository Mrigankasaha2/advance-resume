import React from "react";
import { Routes, Route } from "react-router-dom";
import TopNavigation from "./TopNavigation";
import Homepage from "./Homepage";
import Skills from "./Skills";
import Education from "./Education";
import Experience from "./Experience";
import Aboutme from "./Aboutme";
import Footer from "./Footer";

export default function ContentContainer() {
  return (
    <div className="content-container">
      <TopNavigation />
      <div className="content-list">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/about" element={<Aboutme />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}
