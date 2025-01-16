import React from 'react';
import Footer from './Components/Footer';
import NavbarComponent from './Components/NavbarComponent';
import Poster from './Components/Poster';
import PosterSecond from './Components/PosterSecond';
import FoodSelection from './Components/FoodSelection';
import CookPosterSection from './Components/CookPosterSection';

function App() {
  return (
    <div className="App">
      <NavbarComponent/> 
      <Poster />
      <PosterSecond/>
      <FoodSelection/>
      <CookPosterSection/>
      <Footer/>
     
    
    </div>
  );
}

export default App;
