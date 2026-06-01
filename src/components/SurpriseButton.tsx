
import React, { useState } from 'react';

interface SurpriseButtonProps {
  onReveal: () => void;
}

const SurpriseButton: React.FC<SurpriseButtonProps> = ({ onReveal }) => {
  const [isRevealed, setIsRevealed] = useState(false);

  const handleClick = () => {
    if (!isRevealed) {
      setIsRevealed(true);
      onReveal();
    }
  };

  return (
    <div className="surprise-button-container">
      <button 
        onClick={handleClick}
        className={`surprise-button ${isRevealed ? 'revealed' : ''}`}
        disabled={isRevealed}
      >
        {isRevealed ? (
          <>
            <span className="button-text">Surprise Revealed! 💕</span>
          </>
        ) : (
          <>
            <span className="button-text">Surprise Paakuriya Ammuh🥳</span>
            <div className="button-glow"></div>
          </>
        )}
      </button>
    </div>
  );
};

export default SurpriseButton;
