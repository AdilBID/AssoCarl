import React, { useEffect, useState } from 'react';
import '../caroussel/_caroussel.scss'; // Assurez-vous que le fichier CSS est correctement importé

interface ImageData {
  url: string;
  text: string;
  buttonLabel: string;
  buttonLink: string;
}

interface CarouselProps {
  images: ImageData[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className='carouss'>
      <div className='mgs'>
        <img className={`mesImages ${currentIndex === 0 ? 'active' : ''}`} src={images[currentIndex].url} alt={`slide-${currentIndex}`} />

        <div className='overlay-content'>
          {/* Utilisez une classe dynamique pour forcer la réactualisation de l'animation */}
          <p className={`font_0 wixui-rich-text__text sliding-animation force-reload-${currentIndex}`}>
            {images[currentIndex].text}
          </p>
          <a
            href={images[currentIndex].buttonLink}
            target='_blank'
            rel='noreferrer noopener'
            className='StylableButton2545352419__root style-lfxwzlwa__root wixui-button StylableButton2545352419__link'
            aria-label='Souscrire'
          >
            <div className='StylableButton2545352419__container'>
              <span className='StylableButton2545352419__label wixui-button__label'>{images[currentIndex].buttonLabel}</span>
              <span className='StylableButton2545352419__icon wixui-button__icon' aria-hidden='true'></span>
            </div>
          </a>
        </div>
      </div>
      <button className="carousel-button prev" onClick={handlePrev}>&lt;</button>
      <button className="carousel-button next" onClick={handleNext}>&gt;</button>
    </div>
  );
};

export default Carousel;
