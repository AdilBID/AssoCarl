// pages/Home.tsx
import React from "react";
import CardList from "../Components/cardList/CardList";
import Carousel from "../Components/caroussel/Carousel";
import Dessin from "../assets/img/Draw.jpg";
import Enfants from "../assets/img/Enfants.jpg";
import Rue from "../assets/img/Rue.jpg";
import Footer from "../Components/Footer/Footer";
import Presentation from "../Components/presentation/Presentation";
import TemoignagesCard from "../Components/temoignage/Temoignage";
import Formulaire from "../Components/Formulaire/Formulaire";

const images: any = [
  { url: Dessin, text: "La lutte contre le décrochage scolaire", buttonLabel: "Notre histoire", buttonLink: "https://lien-pour-draw" },
  { url: Enfants, text: "FAIRE UN DON", buttonLabel: "Contribuer", buttonLink: "https://lien-pour-enfants" },
  { url: Rue, text: "ADHÉRER POUR 1 €", buttonLabel: "Souscrire", buttonLink: "https://lien-pour-rue" },
];

const Home: React.FC = () => {
  return (
    <>
      <div data-testid="slideWrapper" className="WB4GU7" aria-live="off">
        <Carousel images={images} />
      </div>
      <CardList></CardList>
      <Presentation></Presentation>
      <TemoignagesCard></TemoignagesCard>
      <Formulaire />
      <Footer></Footer>

    </>
  );
};

export default Home;


