import React, {useRef, useEffect} from 'react';
import styled from 'styled-components';

const ModalBackdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.893);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

const VideoModal = ({ videoUrl, onClose }) => {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            if (videoUrl) {
                videoRef.current.play();
            } else {
                videoRef.current.pause();
                videoRef.current.src = ''; // Reset the source to stop the video
            }
        }
    }, [videoUrl]);

    const handleBackdropClick = (event) => {
        onClose(); // Close modal when backdrop is clicked
    };

    const handleVideoClick = (event) => {
        event.stopPropagation(); // Prevent click from closing the modal
    };

    if (!videoUrl) return null;

    return (
        <ModalBackdrop onClick={handleBackdropClick}>
            <video 
                ref={videoRef} 
                src={videoUrl} 
                controls 
                style={{ width: '80%', maxHeight: '90vh' }} 
                onClick={handleVideoClick} // Add click handler here
            />
        </ModalBackdrop>
    );
};

export default VideoModal;