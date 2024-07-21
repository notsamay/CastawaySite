import React, { useEffect, useRef, useState } from 'react';
import './App.css'; // Import your CSS file

const DynamicText = ({ text1, text2, text3, scaleFactor = 1 }) => {
  const part1Ref = useRef(null);
  const part2Ref = useRef(null);
  const part3Ref = useRef(null);
  const [fontSize, setFontSize] = useState('1.85em'); // Default font size in em

  useEffect(() => {
    const adjustFontSize = () => {
      if (part1Ref.current && part2Ref.current && (!text3 || part3Ref.current)) {
        const part1Width = part1Ref.current.offsetWidth;
        const part2Width = part2Ref.current.offsetWidth;
        const part3Width = text3 ? part3Ref.current.offsetWidth : part2Width; // Use part2Width if text3 is not provided
        
        // Calculate font size based on proportional width
        const baseFontSize = parseFloat(fontSize);
        const newFontSizeEm = (part1Width / part2Width) * baseFontSize * scaleFactor;

        // Adjust based on whether text3 is provided
        setFontSize(`${newFontSizeEm}em`);
      }
    };

    // Adjust font size on load
    adjustFontSize();
    
    // Adjust font size on window resize
    window.addEventListener('resize', adjustFontSize);
    return () => window.removeEventListener('resize', adjustFontSize);
  }, [fontSize, text3, scaleFactor]);

  return (
    <h2 className="Box">
      <span className="cutout part1" ref={part1Ref}>{text1}</span><br/>
      <span className="cutout part2" ref={part2Ref} style={{ fontSize }}>{text2}</span>
      {text3 && <><br /><span className="cutout part3" ref={part3Ref} style={{ fontSize }}>{text3}</span></>}
    </h2>
  );
};

export default DynamicText;
