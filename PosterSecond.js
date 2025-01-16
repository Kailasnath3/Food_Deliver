import React from 'react';
import './PosterSecond.css';
import Poster2Cover from './images/poster2final.jpg';

const PosterSecond = () => {
  return (
    <div className="poster2-container">
      <img 
        src={Poster2Cover} 
        alt="Poster2 Cover" 
        className="poster2-cover-image img-fluid" 
      />
    </div>
  );
};

export default PosterSecond;
