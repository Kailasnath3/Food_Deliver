// FoodSelection.js
import React, { useState } from 'react';
import './FoodSelection.css';

// Food Images for selection
import Food1 from './images/Burger1.jpg';
import Food2 from './images/Burger2.jpg';
import Food3 from './images/Pizza1.jpg';
import Food4 from './images/Pizza2.jpg';
import Food5 from './images/Cupcake1.jpg';
import Food6 from './images/Cupcake2.jpg';
import Food7 from './images/ramen.jpg';
import Food8 from './images/ramen2.jpg';
import Food9 from './images/Icecream.jpg';
import Food10 from './images/icecream2.jpg';

const FoodSelection = () => {
  const [selectedFood, setSelectedFood] = useState(null);

  const foodOptions = [
    { name: 'Burger', images: [Food1, Food2] },
    { name: 'Pizza', images: [Food3, Food4] },
    { name: 'Cupcake', images: [Food5, Food6] },
    { name: 'Ramen', images: [Food7, Food8] },
    { name: 'Ice Cream', images: [Food9, Food10] },
  ];

  const handleFoodSelect = (food) => {
    setSelectedFood(food);
  };

  return (
   <div> 
    <div className="food-selection-wrapper">
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

      {selectedFood && (
        <div className="food-images-container">
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
    </div>
</div>  
  );
};

export default FoodSelection;
