import React, { useEffect, useState } from 'react';
import './Gallery.css';
const Gallery = () => {
  const [visible, setVisible] = useState(false);

  const images = [
    '/yena_gif1.gif',
    '/yena1.jpg',
    '/yena2.jpg',
    '/yena3.jpg',
    '/yena4.jpg'
  ];

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 300); // 살짝 딜레이
    return () => clearTimeout(timer);
  }, []);

  const containerStyle = {
  fontFamily: "'Jua', sans-serif",
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '2rem', // ← 여기 수정!
  opacity: visible ? 1 : 0,
  transform: visible ? 'translateY(0)' : 'translateY(30px)',
  transition: 'opacity 3s ease, transform 3s ease',
};
  const imageStyle = {
    width: '300px',
    borderRadius: '12px',
    boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
    transition: 'transform 0.4s ease, box-shadow 0.4s ease',
  };

  const handleMouseEnter = (e) => {
    e.currentTarget.style.transform = 'scale(1.05)';
    e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,0,0,0.25)';
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = 'scale(1)';
    e.currentTarget.style.boxShadow = '0 2px 6px rgba(0,0,0,0.2)';
  };

  return (
    <div style={containerStyle}>
      <h2
      className="twinkle-text centered-heading"
    >
      Yena Open Source Project ♥
    </h2>
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`yena-${index}`}
          style={imageStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      ))}
    </div>
  );
};

export default Gallery;
