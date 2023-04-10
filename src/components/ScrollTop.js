import React, { useState, useEffect } from 'react';
import { IoIosArrowUp } from 'react-icons/io';

function ScrollTop() {
  const [showBackToTopButton, setShowBackToTopButton] = useState(false);

  const handleBackToTopClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const screenHeight = window.innerHeight;
      setShowBackToTopButton(scrollPosition > screenHeight);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {showBackToTopButton && (
        <div className='back-to-top-button' onClick={handleBackToTopClick}>
          <IoIosArrowUp />
        </div>
      )}
    </>
  );
}

export default ScrollTop;
