import React, { useState, useEffect } from "react";

interface SurpriseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SurpriseModal: React.FC<SurpriseModalProps> = ({ isOpen, onClose }) => {
  const [sparkles, setSparkles] = useState<
    Array<{ id: number; x: number; y: number; delay: number }>
  >([]);
  const [showLetter, setShowLetter] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Create sparkles
      const sparklesData = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 2,
      }));
      setSparkles(sparklesData);

      // Show letter after sparkles animation
      setTimeout(() => setShowLetter(true), 1000);
    } else {
      setShowLetter(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="surprise-modal-overlay" onClick={onClose}>
      <div className="surprise-modal" onClick={(e) => e.stopPropagation()}>
        {/* Sparkles Animation */}
        <div className="modal-sparkles">
          {sparkles.map((sparkle) => (
            <div
              key={sparkle.id}
              className="modal-sparkle"
              style={{
                left: `${sparkle.x}%`,
                top: `${sparkle.y}%`,
                animationDelay: `${sparkle.delay}s`,
              }}
            >
              ✨
            </div>
          ))}
        </div>

        {/* Handwritten Love Letter */}
        <div className={`handwritten-letter ${showLetter ? "show" : ""}`}>
          <div className="letter-paper">
            <div className="letter-header">
              <h2 className="handwritten-title">My Dear Kanmani</h2>
            </div>
            <div className="handwritten-content">
              <p className="handwritten-line">
                Hloo Madam jii,Neenga romba romantic              </p>
              <p className="handwritten-line">
                Romba paasakari,Konjam Kovakaari
              </p>
              <p className="handwritten-line">
                But Antha Azhagu irukeyy,Sobaa mayangiduven 
              </p>
              <p className="handwritten-line">
                Ooru Munnadi kathi soluven enaku kedacha maari pondati
              </p>
              <p className="handwritten-line">
                Ungaluku yaarukume kedaikaadhunu,So You're perfect for me and mee too.
              </p>
               <p className="handwritten-line">
                So Inshallah future la nammale pola rendu kutties(Sayyesha,Safiq),Okeyy 

                Allahuma Ajma Bayini wa bayna "AFREEN" fi khayirin wa barakathaka wa halalika

                HAPPIEE BIRTHDAY Dii AMMUH💕

                NAA UNKOODAVE THAAN IRUPEN🫶🏻🥹❤️‍🩹



               </p>
              <div className="handwritten-signature">
                Forever yours,
                <br />
                <span className="signature-name">Your Siddhuma</span>
              </div>
            </div>
          </div>
        </div>

        <button className="close-modal" onClick={onClose}>
          ×
        </button>
      </div>
    </div>
  );
};

export default SurpriseModal;
