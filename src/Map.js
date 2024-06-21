import React, { useState, useEffect, useRef } from 'react';
import './Map.css';

function Map() {
  const texts = [
    ' Every pirate dreams of finding a great treasure...',
    ' Word has it theres a grand treasure in the lowcountry...',
    ' Are you up to the challenge?'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const timeoutRef = useRef(null);

  const handleNextText = () => {
    if (isButtonDisabled) return;

    setIsButtonDisabled(true); // Disable the button
    setFade(false); // Reset the fade effect

    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
      setFade(true); // Trigger the fade effect
      setTimeout(() => {
        setIsButtonDisabled(false); // Enable the button after 1 second
      }, 1000); // Wait for 1 second before enabling the button
    }, 500); // Wait for 500ms to ensure text fully fades out
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setFade(true);
    }, 100); // Wait for 100ms to show the text before fading in

    return () => clearTimeout(timer);
  }, [currentIndex]);

  useEffect(() => {
    const image = document.getElementById('background-image');

    const handleResize = () => {
      if (document.fullscreenElement) {
        image.style.width = '100vw';
        image.style.left = '0';
      } else {
        image.style.width = '85vw';
        image.style.left = '7.5%';
      }
    };

    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const { innerWidth, innerHeight } = window;
      const offsetX = (clientX / innerWidth) * 100;
      const offsetY = (clientY / innerHeight) * 100;
    };

    const fullscreenChangeEvents = [
      'fullscreenchange',
      'webkitfullscreenchange',
      'mozfullscreenchange',
      'MSFullscreenChange'
    ];

    fullscreenChangeEvents.forEach(eventType => {
      document.addEventListener(eventType, handleResize);
    });

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    const handleKeyDown = (event) => {
      if (event.key === 'F11') {
        handleResize();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    handleResize();

    return () => {
      fullscreenChangeEvents.forEach(eventType => {
        document.removeEventListener(eventType, handleResize);
      });
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="app-container">
      <div id="background-image" className="background-image">
        <div className="holder">
          <p className={`typing-effect ${fade ? 'fade-in' : 'fade-out'}`}>{texts[currentIndex]}</p>
          <button 
            className={`custom-button ${isButtonDisabled ? 'disabled' : ''}`} 
            onClick={handleNextText} 
            disabled={isButtonDisabled}
          ></button>
        </div>
      </div>
    </div>
  );
}

export default Map;
