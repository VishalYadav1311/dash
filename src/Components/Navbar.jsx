import React from "react";
import { SlCalender } from "react-icons/sl";
import "../styles/Navbar.scss";
export default function Navbar() {
  return (
    <div className="navbar">
      <div className="nav">
        <div className="nav-icon">
          <img></img>
        </div>
        <div>Leaves</div>
      </div>
      <div id="hashedin-logo">
        <div className="image"> </div>
        <div id="profile-naming">
          <div>
            Hashed<span style={{ color: "orange" }}>in</span>
          </div>
          <span>By Deloitte</span>
        </div>
      </div>
    </div>
  );
}
