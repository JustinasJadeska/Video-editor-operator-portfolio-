import styled, { keyframes } from "styled-components";
import { useState, useEffect } from "react";

const pixelate = keyframes`
  0% { filter: blur(5px); }
  100% { filter: blur(0px); }
`;

const CameraIcon = styled.i`
  font-size: 50px;  // Adjust the size as needed
  color: #000000;   // Adjust the color as needed
  animation: ${pixelate} 2s linear forwards;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8);
`;

const Counter = styled.div`
  position: absolute;
  top: 60%;  // Adjust the position as needed
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 20px;
  font-weight: 600;
  color: #000000;
`;

const Loading = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(oldProgress => {
                if (oldProgress === 100) {
                    clearInterval(interval);
                    return 100;
                }
                return Math.min(oldProgress + 1, 100);
            });
        }, 20); // Adjust the speed as needed

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <LoadingContainer>
            <CameraIcon className="bi bi-camera-reels-fill" style={{ filter: `blur(${5 - (progress * 0.05)}px)` }} />
            <Counter>Loading {progress}%</Counter>
        </LoadingContainer>
    );
};
 
export default Loading;