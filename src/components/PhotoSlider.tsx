
import React, { useState, useEffect } from 'react';

const PhotoSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Placeholder images - replace with your actual photos
  const photos = [
  "public/WhatsApp Image 2026-05-31 at 10.45.58 PM.jpeg", // couple holding hands

  "public/WhatsApp Image 2026-05-31 at 10.45.35 PM (1).jpeg", // couple in sunset

  "public/WhatsApp Image 2026-05-31 at 10.45.35 PM.jpeg", // hugging moment

  "public/WhatsApp Image 2026-05-31 at 10.45.35 PM (2).jpeg", // walking in nature
  
  "public/WhatsApp Image 2025-10-31 at 8.42.36 PM.jpeg",
  
  "public/WhatsApp Image 2026-03-22 at 10.00.40 AM.jpeg",// cozy in the snow

  "public/WhatsApp Image 2026-03-22 at 5.58.32 PM.jpeg",
];


  const captions = [
    "Memorable Pic🥺",
    "Rendu Kolanthai nga🤗",
    "Attitude Ammuh😹",
    "Azhagu Dii😘",
    "Ennaval🧑‍🍼",
    "Thakkali pazham🍎",
    "Favoo💋",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % photos.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [photos.length]);

  return (
    <div className="photo-slider-container">
      <h2 className="slider-title">Our Beautiful Memories</h2>
      <div className="slider-wrapper">
        <div className="slider-content">
          <div className="photo-frame">
            <img 
              src={photos[currentSlide]} 
              alt={captions[currentSlide]}
              className="slider-image slider-image-animated"
              key={currentSlide}
            />
            <div className="photo-overlay">
              <p className="photo-caption">{captions[currentSlide]}</p>
            </div>
          </div>
        </div>
        
        <div className="slider-dots">
          {photos.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`slider-dot ${currentSlide === index ? 'active' : ''}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotoSlider;
