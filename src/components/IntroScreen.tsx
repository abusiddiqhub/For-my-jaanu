import React, { useState, useEffect } from 'react';

interface IntroScreenProps {
  onEnter: () => void;
}

const IntroScreen: React.FC<IntroScreenProps> = ({ onEnter }) => {
  const [balloons, setBalloons] = useState<Array<{ id: number; delay: number; left: number }>>([]);

  useEffect(() => {
    // Create heart with random positions and delays
    const balloonsData = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      delay: Math.random() * 3,
      left: Math.random() * 90 + 5
    }));
    setBalloons(balloonsData);
  }, []);

   const [date, setDate] = useState({
    "mm":undefined,
    "dd":undefined,
    "yyyy":undefined
   });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const {value,name}= e.target
  setDate({...date,[name]:value});
  console.log(date)
  };

  return (
    <div className="intro-screen">
      {/* Flying heart */}
      <div className="balloons-container">
        {balloons.map((balloon) => (
          <div
            key={balloon.id}
            className="balloon"
            style={{
              left: `${balloon.left}%`,
              animationDelay: `${balloon.delay}s`
            }}
          >
            💖
          </div>
        ))}
      </div>

      {/* Intro Content */}
      <div className="intro-content">
        <h1 className="intro-title">
          Something Special
          <br />
          <span className="intro-subtitle">Awaits You Afreen🤍</span>
        </h1>
       <div className='flex gap-5 justify-center items-center my-10 '>
          <input type="number" name='dd' value={date.dd} maxLength={2} pattern="[0-9]*" onChange={handleChange} className='h-10 w-12 rounded-xl ring ring-pink-500 border-2   focus:border-pink-500 focus-within:ring-pink-500 focus:outline-none' placeholder='dd'/>
          <input type="number" name='mm' value={date.mm} maxLength={2} pattern="[0-9]*" onChange={handleChange} className='h-10 w-12 rounded-xl ring ring-pink-500 border-2   focus:border-pink-500 focus-within:ring-pink-500 focus:outline-none' placeholder='mm'/>
          <input type="number" name='yyyy' value={date.yyyy} maxLength={4} pattern="[0-9]*" onChange={handleChange} className='h-10 w-20 rounded-xl ring ring-pink-500 border-2   focus:border-pink-500 focus-within:ring-pink-500 focus:outline-none' placeholder='yyyy'/>
        </div>
        
        <button 
          onClick={()=>onEnter(date)}
          className="enter-button"
        >
          <span className="button-text">Kiss to Begin😘</span>
          <div className="button-glow-pulse"></div>
        </button>
      </div>

      {/* Magical Sparkles */}
      <div className="intro-sparkles">
        {[...Array(8)].map((_, i) => (
          <div key={i} className={`intro-sparkle sparkle-${i + 1}`}>✨</div>
        ))}
      </div>
    </div>
  );
};

export default IntroScreen;