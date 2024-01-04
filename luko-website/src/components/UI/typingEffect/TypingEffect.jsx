import { useState, useEffect } from 'react';

const useTypingEffect = (texts, typingSpeed = 50, delay = 1000) => {
    const [textIndex, setTextIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        let typingTimeout;

        if (isDeleting) {
            typingTimeout = setTimeout(() => {
                setCharIndex(charIndex - 1);
            }, typingSpeed);
        } else {
            typingTimeout = setTimeout(() => {
                setCharIndex(charIndex + 1);
            }, typingSpeed);
        }

        if (!isDeleting && charIndex === texts[textIndex].length) {
            setTimeout(() => setIsDeleting(true), delay);
        } else if (isDeleting && charIndex === 0) {
            setIsDeleting(false);
            setTextIndex((textIndex + 1) % texts.length);
        }

        return () => clearTimeout(typingTimeout);
    }, [charIndex, textIndex, isDeleting, texts, typingSpeed, delay]);

    return texts[textIndex].substring(0, charIndex);
};

export default useTypingEffect;