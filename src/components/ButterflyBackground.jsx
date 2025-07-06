import React from 'react';
import butterflyImg from '../assets/butterfly.png';
import './ButterflyBackground.css';

const ButterflyBackground = () => {
  const butterflies = new Array(10).fill(0);

  return (
    <div className="butterfly-container">
      {butterflies.map((_, idx) => (
        <img
          key={idx}
          src={butterflyImg}
          alt="butterfly"
          className="butterfly"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${5 + Math.random() * 10}s`,
            animationDelay: `${Math.random() * 5}s`,
            top: `${Math.random() * 100}%`
          }}
        />
      ))}
    </div>
  );
};

export default ButterflyBackground;
