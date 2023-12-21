import React, { useState, useEffect } from 'react';

const useTypewriter = (text, typingSpeed = 150) => {
  const [typedText, setTypedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!text) return;

    if (index < text.length) {
      const timeoutId = setTimeout(() => {
        setTypedText((currentText) => currentText + text.charAt(index));
        setIndex((currentIndex) => currentIndex + 1);
      }, typingSpeed);

      return () => clearTimeout(timeoutId);
    }
  }, [text, typingSpeed, index]); // Add index to the dependency array

  return typedText;
};

const Typewriter = ({ text, typingSpeed }) => {
  const typedText = useTypewriter(text, typingSpeed);

  return <span>{typedText}</span>;
};

export default Typewriter;