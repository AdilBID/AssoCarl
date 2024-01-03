// pages/Home.tsx
import React from "react";
import CardList from "../Components/cardList/CardList";
import Carousel from "../caroussel/Carousel";
import Dessin from "../assets/img/Draw.jpg";
import Enfants from "../assets/img/Draw.jpg";
import Rue from "../assets/img/Enfants.jpg";

const images = [
  Dessin,
  Enfants,
  Rue,
];

const Home: React.FC = () => {
  return (
    <>
      <div data-testid="slideWrapper" className="WB4GU7" aria-live="off">
        <Carousel images={images} />
      </div>
      <CardList></CardList>
    </>
  );
};

export default Home;


