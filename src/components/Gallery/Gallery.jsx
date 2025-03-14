import { useState } from "react";
import "./Gallery.scss"; 

const Gallery = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!pictures || pictures.length === 0) {
    return <p>Aucune image disponible</p>; 
  }

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="gallery">
      <button onClick={prevImage} className="arrow left">❮</button>
      <img src={pictures[currentIndex]} alt={`Image ${currentIndex + 1}`} />
      <button onClick={nextImage} className="arrow right">❯</button>
      <p className="image-count">
        {currentIndex + 1} / {pictures.length}
      </p>
    </div>
  );
};

export default Gallery;
