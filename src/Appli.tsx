import "./scss/main.scss";
import React from "react";
import Dessin from "./assets/img/Rue.jpg";
import Enfants from "./assets/img/Draw.jpg";
import Rue from "./assets/img/Enfants.jpg";
import Carousel from "./Components/Carousel";


  const images = [
    Dessin,
    Enfants,
    Rue,
  ];

const App: React.FC = () => {
  return (
    <>
      <div data-testid="slideWrapper" className="WB4GU7" aria-live="off">
     
        <Carousel images={images} />
        
       
      </div>
    </>
  );
}

export default App;
