import styled from "styled-components";
import VideoComponent from "../../UI/video/VideoComponent";
import { useState } from "react";
import VideoModal from "../../UI/videoModal/VideoModal";
import video1 from "../../videos/video1.mp4"
import video2 from "../../videos/video2.mp4"
import video3 from "../../videos/video3.mp4"
import video4 from "../../videos/video4.mp4"
import video5 from "../../videos/video5.mp4"
import video6 from "../../videos/video6.mp4"
import video7 from "../../videos/video7.mp4"
import video8 from "../../videos/video8.mp4"
import Typewriter from "../../UI/typewriter/TypeWriter";

const StyledPortfolio = styled.section`
    min-height: 100vh;
    background-color: #ffffff;
    color: #000000;
    position: relative;
    transition: background-color 1s ease; 
    padding-bottom: 50px;

    > div > h1 {
        animation: fadeIn 1s ease-in-out;
        margin: 10px 0 0 0;
        padding: 30px;
        font-size: clamp(2.5rem, 4vw, 3.5rem);
        transition: color 0.5s ease;
    }

    @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
    }

    .portfolio {
        display: flex;
        justify-content: center;
    }

`

const Portfolio = () => {
    const [selectedVideo, setSelectedVideo] = useState(null);

    const videoPathsArray = [
        {
            url: video1,
            title: 'Justė - Dviese',
            description: "An artfully crafted music video for Justė Baradulinaitė's latest hit single.",
            date: '2022.08.25'
        },
        {
            url: video2,
            title: 'Aštriai Aštru',
            description: "Promotional video for Aštriai Aštru's holiday kits.",
            date: '2022.11.29'
        },
        {
            url: video3,
            title: 'Elizo Artelė',
            description: "An eye-catching promotional clip showcasing stylish men's haircuts salon.",
            date: '2022.12.07'
        },
        {
            url: video4,
            title: 'Simona ir Faustas',
            description: "An enchanting video montage capturing the magical wedding moments of Simona and Faustas.",
            date: '2023.01.16'
        },
        {
            url: video5,
            title: 'AKA Baltic Klaipėda',
            description: "AKA Baltic promotional video.",
            date: '2023.06.26'
        },
        {
            url: video6,
            title: 'Maltiečiai',
            description: "A promotional clip.",
            date: '2022.02.12'
        },
        {
            url: video7,
            title: 'Bo Safety',
            description: "An engaging promotional clip highlighting the unique offerings of the Bo Safety brand.",
            date: '2023.12.11'
        },
        {
            url: video8,
            title: 'Lukas and Monika',
            description: "A captivating video montage showcasing the beautiful wedding of Lukas and Monika.",
            date: '2023.12.13'
        }
    ];

    const handleMouseEnter = () => {
        const portfolioSection = document.querySelector('.styled-portfolio');
        if (portfolioSection) {
            portfolioSection.style.backgroundColor = '#121212';
            portfolioSection.querySelector('h1').style.color = 'white';
        }
    };

    const handleMouseLeave = () => {
        const portfolioSection = document.querySelector('.styled-portfolio');
        if (portfolioSection) {
            portfolioSection.style.backgroundColor = 'white';
            portfolioSection.querySelector('h1').style.color = 'black';
        }
    };

    const handleVideoClick = (videoUrl) => {
        setSelectedVideo(videoUrl);
    };

    const handleCloseModal = () => {
        setSelectedVideo(null);
    };

    return ( 
        <StyledPortfolio className="styled-portfolio" id="profileSection">
            <div className="portfolio">
                <h1><Typewriter text="Projects Collection" typingSpeed={75} /></h1>
            </div>
            <div className="video-holder">
                <VideoComponent
                videoPaths={videoPathsArray}
                onVideoClick={handleVideoClick}
                onMouseEnter={handleMouseEnter} 
                onMouseLeave={handleMouseLeave}
                controls/>
            </div>
            <VideoModal videoUrl={selectedVideo} onClose={handleCloseModal}/>
        </StyledPortfolio>
     );
}
 
export default Portfolio;