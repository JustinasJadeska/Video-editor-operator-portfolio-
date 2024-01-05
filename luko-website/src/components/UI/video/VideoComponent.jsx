import styled from "styled-components";
import React, { useRef, useEffect, useState } from 'react';

const StyledDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
    grid-gap: 20px;
    padding: 20px;
    justify-content: center;

    .video-item {
        position: relative;
        overflow: hidden;
        box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        aspect-ratio: 16 / 9;
        background: #000;
        transition: transform 0.3s ease, box-shadow 0.3s ease;

        &:hover .video-info {
            opacity: 1;
            transform: translateY(0);
        }

        &:hover {
            transform: scale(1.03); 
            box-shadow: 0 6px 12px rgba(0,0,0,0.2); 
            cursor: pointer;

            @media (max-width: 600px) {
                transform: none;
                box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            }
        }
    }

        .video-info {
            position: absolute;
            top: 0; // Changed from bottom to top
            left: 0;
            right: 0;
            background: rgba(0, 0, 0, 0.7); // Semi-transparent background
            color: #fff;
            padding: 10px;
            transform: translateY(-100%); // Slide down from the top
            transition: transform 0.3s ease, opacity 0.3s ease;
            opacity: 0;
            overflow: hidden;

            h3 {
                margin-top: 0;
                font-size: 1.2rem; // Adjust font size as needed
            }

            p {
                font-size: 1rem; 
                margin-bottom: 0;
            }

            &:hover .video-info {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @media (max-width: 600px) {
        grid-template-columns: 1fr;

        .video-item {
            

            .video-info {
                display: none; 
            }
        }
    }

`

const VideoComponent = ({ videoPaths, onMouseEnter, onMouseLeave, onVideoClick }) => {

    const videoRefs = useRef([]);

    const [isAutoplay, setIsAutoplay] = useState(true); 

    useEffect(() => {
        videoRefs.current = videoRefs.current.slice(0, videoPaths.length);
    }, [videoPaths]);

    const handleClick = (video, index) => {
        // Pause all videos
        videoRefs.current.forEach((ref, idx) => {
            if (ref.current) {
                ref.current.pause();
            }
        });

        // Open the modal for the clicked video
        onVideoClick(video.url);
    };

    return (
        <StyledDiv>
            {videoPaths.map((video, index) => (
                <div className="video-item" key={index} 
                onMouseEnter={() => onMouseEnter(index)} 
                onMouseLeave={onMouseLeave}
                onClick={() => handleClick(video, index)}
                >
                    <video ref={el => videoRefs.current[index] = el}
                    // autoPlay={isAutoplay} 
                    src={video.url}
                    controls
                    muted
                    // loop
                    style={{ width: '100%', height: 'auto' }} 
                    />
                    <div className="video-info">
                        <h3>{video.title}</h3>
                        <p>{video.description}</p>
                        <p>{video.date}</p>
                    </div>
                </div>
            ))}
        </StyledDiv>
    );
};

export default VideoComponent;