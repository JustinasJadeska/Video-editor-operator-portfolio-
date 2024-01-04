import { useState, useEffect } from 'react';

const useTypingEffect = (texts, speed = 200, delay = 1500) => {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [reverse, setReverse] = useState(false);

    useEffect(() => {
        if (index === texts.length) setIndex(0);

        const typingTimeout = setTimeout(() => {
            setSubIndex((prevSubIndex) => prevSubIndex + (reverse ? -1 : 1));
        }, speed);

        const changeTextTimeout = setTimeout(() => {
            if (!reverse && subIndex === texts[index].length) {
                setReverse(true);
                clearTimeout(changeTextTimeout);
            } else if (reverse && subIndex === 0) {
                setReverse(false);
                setIndex((prevIndex) => prevIndex + 1);
            }
        }, subIndex === texts[index].length ? delay : speed);

        return () => {
            clearTimeout(typingTimeout);
            clearTimeout(changeTextTimeout);
        };
    }, [subIndex, index, reverse, texts, speed, delay]);

    return texts[index].substring(0, subIndex);
};

export default useTypingEffect;