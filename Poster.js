import React, { useState } from 'react';
import './Poster.css'; 
import Cherry from './images/Cherry_edited_png.jpg'; 
import LargeImage from './images/real_lady.jpg'; 

const Poster = () => {
  const [selectedFood, setSelectedFood] = useState(null);

  const handleFoodSelect = (food) => {
    setSelectedFood(food);
  };

  return (
    <div className="poster-container">
      <div className="poster">
        <span className="poster-text">More than Faster</span>
        <img src={Cherry} alt="Cherry Logo" className="cherry-logo" />
      </div>

      <div className="poster-heading">
        <div className="text-container">
          {/* Text Content */}
          <div className="text-content">
            <h1>Be The Fastest</h1>
            <h2>In Delivering</h2>
            <h2>
              Your <span className="food-text">Food</span>
            </h2>
            <p className="subheading">
              Our job is to fulfill your tummy with delicious food, <br />
              and with fast and free delivery.
            </p>
            <div className="button-container">
              <button className="get-started-button">Get Started</button>
              <div className="watch-video">
                <div className="play-button">▶</div>
                <span className="watch-video-text">Watch Video</span>
              </div>
            </div>
          </div>

          {/* Large Image */}
          <div className="image-wrapper">
            <img src={LargeImage} alt="Large Visual" className="large-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Poster;


  {/*  {/* Image below the Get Started button 
          <img src={Poster1} alt="DecorativeImage" className="decorative-image" />
          {/* Poster2 Cover Image 
          <img src={Poster2Cover} alt="Poster2 Cover" className="poster2-cover-image img-fluid" />
        </div>
      

      {/* Large image to the right 
    
        <img src={LargeImage} alt="Large Visual" className="large-image img-fluid" />
    
      {/* Food Selection Section 
      <div className="food-heading">
        <p className="food-subheading">Our Menu</p>
        <h3 className="food-heading-text">
          Menu That Always <br /> Makes You Fall In Love
        </h3>
      </div>

      <div className="food-selection-container">
        {foodOptions.map((food, index) => (
          <button
            key={index}
            className={`food-selection-button ${selectedFood === food ? 'selected' : ''}`}
            onClick={() => handleFoodSelect(food)}
          >
            {food.name}
          </button>
        ))}
      </div>

      {/* Display Selected Food Images 
      {selectedFood && (
        <div className="food-images-container-right">
          {selectedFood.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${selectedFood.name} ${index + 1}`}
              className="food-image"
            />
          ))}
        </div>
      )}


      {/* Cook  Section 
      <div className="cook-poster-container">
        <img src={CookPoster} alt="Cook Poster" className="cook-poster" />
        <div className="cook-heading">
          <h3 className="cook-heading-sub">What they Say</h3>
          <p className="cook-heading-main">
            What Our Customer  <br /> Say About Us
          </p>
          <p className="paragraph">
            "Fudo is the best.Besides the many and delicious"<br/>
            Meals,the service is also very good, especially in<br/>
            the very fast delivery.I highly recommend Fudo
          </p>
        </div>
      </div>
      {/* Ad  p Section 
      <div className="ad-poster-container">
         <img src={Adcover} alt="Ad Poster" className="ad-poster" />
      </div>
      */}
     

