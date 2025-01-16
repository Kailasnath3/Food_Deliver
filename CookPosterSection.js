import React from "react";
import "./CookPosterSection.css";
import CookPoster from "./images/cook.jpg"; 
import Adcover from "./images/Ad.jpg"; 

const CookPosterSection = () => {
  return (
  <div>  
    <div className="cook-section">
      {/* Cook Section */}
      <div className="cook-poster-container">
        <img src={CookPoster} alt="Cook Poster" className="cook-poster" />
        <div className="cook-heading">
          <h3 className="cook-heading-sub">What they Say</h3>
          <p className="cook-heading-main">
            What Our Customers <br /> Say About Us
          </p>
          <p className="paragraph">
            "Fudo is the best. Besides the many and delicious<br />
            meals, the service is also very good, especially<br />
            the very fast delivery. I highly recommend Fudo."
          </p>
        </div>
      </div>

      {/* Ad Poster Section */}
      <div className="ad-poster-container">
        <img src={Adcover} alt="Ad Poster" className="ad-poster" />
      </div>
    </div>
  </div>  
  );
};

export default CookPosterSection;
