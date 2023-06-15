import React, { useState } from "react";
import { FaInstagram, FaGithub } from "react-icons/fa";
//import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./Styles/Footer.css";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted email:", email);
    // Clear the email input
    setEmail("");
  };

  // Map style const marker = {  lat: 23.1793,lng: 75.7849, };

  return (
    <footer className="footer">
      <div className="footer__links" id="footer">
        <div className="implinks">
          <p>Links</p>
          <a href="https://www.ted.com">TEDx</a>
          <a href="https://blog.ted.com">TED Blog</a>
        </div>
        <div className="footer__content">
          {/* Email */}
          <div className="footer__email">
            <p>Get updated about our upcoming events</p>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
              />
              <button type="submit">Subscribe</button>
            </form>
          </div>
          {/* Socials */}
          <div className="footer__icons">
            <a className="footer__icon-link" href="https://instagram.com">
              <FaInstagram size={20} />
            </a>
            <a className="footer__icon-link" href="https://github.com">
              <FaGithub size={20} />
            </a>
          </div>
        </div>
        {/*MAP
        <div className="footer__map">
          <MapContainer
            {...mapStyle}
            center={marker}
            zoom={14}
            scrollWheelZoom={false}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
            />
            <Marker position={marker}>
              <Popup>Ujjain</Popup>
            </Marker>
          </MapContainer>
        </div>*/}
      </div>
    </footer>
  );
};

export default Footer;