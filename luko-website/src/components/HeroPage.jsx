import Typewriter from "./UI/typewriter/TypeWriter";
import video from "./images/Burba.mp4"
import styled from 'styled-components';

const StyledHero = styled.section`
    min-height: 110vh;
    transition: background-color 1.5s ease;

    .video_holder {
        max-width: 1000px; 
        width: 100%; 
        height: auto; 
        margin: 0 auto; 
        overflow: hidden; 
        display: flex; 
        align-items: center; 
        justify-content: center; 
    }

    .video_holder video {
        width: 100%; 
        height: auto; 
    }

    .heroPage >  h1 {
        font-size: 74px;
        text-align: center;
        text-transform: uppercase;
        transition: color 1s ease; 
    }

    .heroPage >  h1:nth-child(1) {
        margin-top: 30px;
        margin-bottom: 20px;
        cursor: pointer;
        transition: transform 1s ease;
    }

    .heroPage >  h1:nth-child(1):hover {
        transform: scale(1.2);
    }

    .heroPage >  h1:nth-child(2) {
        margin: 0 auto;
        cursor: pointer;
        transition: transform 1s ease;
        width: fit-content;
    }

    .heroPage >  h1:nth-child(2):hover {
        transform: scale(1.2);
    }


    .scroll-arrow {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    cursor: pointer;

    &::after {
        content: '';
        display: block;
        width: 30px;
        height: 30px;
        border-bottom: 3px solid #000000; 
        border-right: 3px solid #000000; 
        transform: rotate(45deg); 
        margin: -10px;
        }

    }

    .tagline {
        font-size: 16px; 
        text-align: center;
        color: #333;
        margin-top: 20px; 
        font-style: italic; 
    }

    @media (max-width: 768px) {

        min-height: 80vh;

        .heroPage > h1 {
            font-size: 50px;
        }
    }

    @media (orientation: landscape) {
        // Styles for mobile in landscape mode
        min-height: 100vh; // or any height that works well for your design
    }
`

const HeroPage = () => {

    const handleArrowClick = () => {
        // Logic to scroll down or navigate
        document.getElementById('profileSection').scrollIntoView({ behavior: 'smooth' });
    };

    const handleMouseEnter = () => {
        const heroSection = document.getElementById('heroVideo');
        heroSection.style.backgroundColor = '#000000'; // Dark background color
        const firstH1 = heroSection.querySelector('.heroPage > h1:nth-child(1)');
        const secondH1 = heroSection.querySelector('.heroPage > h1:nth-child(2)');
        
        if (firstH1) {
            firstH1.style.color = 'white'; // Change first h1 text color to white
        }
        if (secondH1) {
            secondH1.style.color = '#333'; // Change second h1 text color to #333
        }
    };

    const handleMouseLeave = () => {
        const heroSection = document.getElementById('heroVideo');
        heroSection.style.backgroundColor = '#FFFFFF'; // Default background color
        const firstH1 = heroSection.querySelector('.heroPage > h1:nth-child(1)');
        const secondH1 = heroSection.querySelector('.heroPage > h1:nth-child(2)');
        
        if (firstH1) {
            firstH1.style.color = 'black'; // Change first h1 text color back to black
        }
        if (secondH1) {
            secondH1.style.color = 'black'; // Change second h1 text color back to black
        }
    }
    return ( 
        <StyledHero id="heroVideo">
            <div className="logo_mask">
                <div className="video_holder">
                    <video width="1000" height="350" loop autoPlay muted>
                        <source src={video} type='video/mp4' />
                    </video>
                </div>
            </div>
            <div className="heroPage">
                <h1 onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><Typewriter text="Video Editor" typingSpeed={75} /></h1>
                <h1><Typewriter text="Operator" typingSpeed={75} /></h1>
                <p className="tagline">Crafting Visual Stories That Resonate</p> 
                <div className="scroll-arrow" onClick={handleArrowClick}></div>
            </div>
        </StyledHero>
    );
}
 
export default HeroPage;