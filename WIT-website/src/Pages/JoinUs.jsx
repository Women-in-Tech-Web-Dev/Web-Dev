import React from "react";
import "../Styles/JoinUs.css";
import instagramLogo from '../assets/Logo/instaPurple.png';
import discordLogo from '../assets/Logo/discordPurple.png';

function JoinUs() {
  return (
    <div className="join-us-container">
            <h1 className="community-title">Join Our Community!</h1>

      {/* Social Media Links with Images */}
      <div className="image-links">
        <a
          href="https://www.instagram.com/calpolywit/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <img src={instagramLogo} alt="Instagram" className="social-logo" />
        </a>
        <a
          href="https://discord.com/invite/R5nrdnDFTq"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <img src={discordLogo} alt="Discord" className="social-logo" />
        </a>
       
      </div>

      {/* Embedded Google Form */}
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSfFZKpcMzfrsDnQopEoeKCzhD2rrWzPALADaOaxjcTWUdUcRg/viewform?embedded=true"
        className="google-form"
      >
        Loading…
      </iframe>
    </div>
  );
}

export default JoinUs;
