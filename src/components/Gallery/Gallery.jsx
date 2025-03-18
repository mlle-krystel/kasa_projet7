import { useState } from "react";
import "./Gallery.scss"; 
import NotFound from "../../pages/NotFound/NotFound";

const Gallery = ({ pictures = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (pictures.length === 0) {
    return <NotFound />;
  }

  const isSingleImage = pictures.length === 1;

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
      {!isSingleImage && (
        <>
          <button onClick={prevImage} className="arrow left" aria-label="Image précédente">❮</button>
          <button onClick={nextImage} className="arrow right" aria-label="Image suivante">❯</button>
          <p className="image-count">
            {currentIndex + 1} / {pictures.length}
          </p>
        </>
      )}
      
      <img 
        src={pictures[currentIndex]} 
        alt={`Image ${currentIndex + 1}`} />
    </div>
  );
};

export default Gallery;
