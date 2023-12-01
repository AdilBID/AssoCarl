import React, { useEffect, useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Interface pour définir les propriétés attendues par le composant Carousel
interface CarouselProps {
  images: string[];
}

// Composant fonctionnel Carousel
const Carousel: React.FC<CarouselProps> = ({ images }) => {
  // État local pour suivre l'index actuel dans le carrousel
  const [currentIndex, setCurrentIndex] = useState(0);

  // Effet useEffect pour changer l'image toutes les 10 secondes
  useEffect(() => {
    const interval = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000);

    // Nettoie le timeout lorsqu'un nouveau intervalle est configuré ou lorsque le composant est démonté
    return () => clearTimeout(interval);
  }, [images.length, currentIndex]);

  // Gestionnaire d'événements pour passer à l'image précédente
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Gestionnaire d'événements pour passer à l'image suivante
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Rendu du composant Carousel
  return (
    <div className='carouss'>
      <div className='mgs'>
        {/* Image principale du carrousel */}
        <img className={`mesImages ${currentIndex === 0 ? 'active' : ''}`} src={images[currentIndex]} alt={`slide-${currentIndex}`} />

        {/* Overlay avec le paragraphe et le bouton */}
        <div className='overlay-content'>
          <p className='font_0 wixui-rich-text__text'>
            <span className='wixui-rich-text__text'>
              <span className='wixui-rich-text__text'>
                <span className='wixui-rich-text__text'>
                  <span className='backcolor_14 wixui-rich-text__text'>POUR 1 €&nbsp;</span>
                </span>
              </span>
            </span>
          </p>
          <a
            href='https://www.helloasso.com/associations/association-carl/adhesions/adherer-a-l-association-carl'
            target='_blank'
            rel='noreferrer noopener'
            className='StylableButton2545352419__root style-lfxwzlwa__root wixui-button StylableButton2545352419__link'
            aria-label='Souscrire'
          >
            <div className='StylableButton2545352419__container'>
              <span className='StylableButton2545352419__label wixui-button__label'>Souscrire</span>
              <span className='StylableButton2545352419__icon wixui-button__icon' aria-hidden='true'></span>
            </div>
          </a>
        </div>
      </div>
      {/* Boutons de navigation */}
      <button className="carousel-button prev" onClick={handlePrev}>&lt;</button>
      <button className="carousel-button next" onClick={handleNext}>&gt;</button>
    </div>
  );
};

export default Carousel;
