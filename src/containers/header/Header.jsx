import React from "react";
import "./header.css";
const Header = () => {
  return (
    <div className="header " id="home">
      <div className="header-title" >
        <h1>
          How IT Firms can add 2-5 clients per month using our AI-Based
          SmartLink Approach
        </h1>
        <p> Without relying on inbound leads, 100% DFY</p>
      </div>

      <div className="header-vsl">
        <iframe
          src="https://www.youtube.com/embed/oPWaOwlmfQQ"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </div>
      <div className="header-button">
        <a
          className=""
          href="https://app.cal.com/pravitbh/progressor-media"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>Book A Call</button>
        </a>
      </div>
    </div>
  );
};

export default Header;
