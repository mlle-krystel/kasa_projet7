import { useState } from 'react';

const Gallery = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!pictures || pictures.length === 0) {
    return <p>Aucune image disponible.</p>;
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
      {pictures.length > 1 && <button onClick={prevImage}>←</button>}
      <img 
        src={pictures[currentIndex]} 
        alt={`Logement ${currentIndex + 1}`} 
        style={{ width: '400px', height: '250px', objectFit: 'cover', borderRadius: '10px' }} 
      />
      {pictures.length > 1 && <button onClick={nextImage}>→</button>}
    </div>
  );
};

export default Gallery;
