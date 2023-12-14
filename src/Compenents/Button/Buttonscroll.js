import { AiOutlineArrowUp } from "react-icons/ai";
import React, { useState, useEffect } from 'react';

const ScrollButton = () => {
  const [displayButton, setDisplayButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 200) {
        setDisplayButton(true);
      } else {
        setDisplayButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      {displayButton && (
        <div>
          <button className='scroll' id='btn' onClick={scrollToTop}><AiOutlineArrowUp className='icon' /></button>
        </div>
      )}
    </div>
  );
};

export default ScrollButton;

