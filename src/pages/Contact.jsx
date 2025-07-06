import React from "react";
import youtubeLogo from "../assets/youtube.png";
import instagramLogo from "../assets/instagram.png";
import xLogo from "../assets/x.png"; // ✅ 추가
import "./Contact.css";

const Contact = () => (
  <div className="contact-container">
    <img
      src="/yena-logo.png"
      alt="YENA Logo"
      className="contact-logo-large"
    />

    <div className="link-wrapper">
      {/* YouTube */}
      <a
        href="https://www.youtube.com/@YENA_OFFICIAL"
        target="_blank"
        rel="noopener noreferrer"
        className="social-link youtube-link"
      >
        <img src={youtubeLogo} alt="YouTube" className="social-icon" />
        &lt; Yena YouTube &gt;
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/yena.jigumina/"
        target="_blank"
        rel="noopener noreferrer"
        className="social-link instagram-link"
      >
        <img src={instagramLogo} alt="Instagram" className="social-icon" />
        &lt; Yena Instagram &gt;
      </a>

      {/* X (Twitter) */}
      <a
        href="https://x.com/yena_official"
        target="_blank"
        rel="noopener noreferrer"
        className="social-link x-link"
      >
        <img src={xLogo} alt="X" className="social-icon" />
        &lt; Yena X &gt;
      </a>
    </div>
  </div>
);

export default Contact;
