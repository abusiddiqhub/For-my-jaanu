
import React, { useState, useEffect } from 'react';

const PhotoSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Placeholder images - replace with your actual photos
  const photos = [
  "public/WhatsApp Image 2026-05-31 at 10.45.58 PM.jpeg", // couple holding hands

  "public/WhatsApp Image 2026-05-31 at 10.45.35 PM (1).jpeg", // couple in sunset

  "https://res.cloudinary.com/dpw1lerip/image/upload/v1775832245/WhatsApp_Image_2026-04-10_at_7.26.52_PM_dnhhgh.jpg", // hugging moment

  "https://res.cloudinary.com/dpw1lerip/image/upload/v1775832244/WhatsApp_Image_2026-04-10_at_7.26.52_PM_1_h841li.jpg", // walking in nature
  
  "https://res.cloudinary.com/dpw1lerip/image/upload/v1775832250/WhatsApp_Image_2026-04-10_at_7.26.54_PM_fyognq.jpg"  // cozy in the snow
];


  const captions = [
    "Our first adventure together",
    "That magical sunset",
    "Our perfect day",
    "When you made me laugh so hard",
    "The moment I knew you were the one"
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
