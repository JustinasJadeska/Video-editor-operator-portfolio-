import styled from "styled-components";
import Typewriter from "../UI/typewriter/TypeWriter";


const StyledCTA = styled.section`
    min-height: 60vh;
    background-color: #ffffff;
    color: #000000;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;

    > h1 {
        font-size: 4rem;
        margin: 0 0 10px 0;
        background-image: linear-gradient(to right, rgb(250, 250, 250), rgb(33, 183, 88));
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent; 
    }

    > h2 > a {
        text-decoration: none;
        color: #000000;
        font-size: 2rem;
        transition: transform 0.3s ease, color 0.3s ease;

        &:hover {
            text-decoration: underline;
            transform: scale(1.5); 
            color: #000000; 
        }
    }

    .tagline {
        font-size: 16px; 
        text-align: center;
        color: #000000;
        font-style: italic; 
    }

    > h3 {
        font-size: 1.5rem;
        transition: transform 0.3s ease, color 0.3s ease;
        &:hover {
            text-decoration: underline;
            transform: scale(1.05)
        }
    }

    > p {
        margin: 10px;
    }

    .bi-phone-vibrate {
        font-size: 1.5rem;
    }

    .bi-envelope-at {
        font-size: 2rem;
    }

    @media (max-width: 768px) {
        h1 {
            font-size: 3rem; 
            text-align: center;
            background-image: linear-gradient(to right bottom, rgb(250, 250, 250), rgb(250, 250, 250), rgb(11, 215, 86), rgb(29, 254, 111));
        }

        h2 > a {
        font-size: calc(1.2rem + 0.5vw);
        }

        .bi-envelope-at {
            font-size: calc(1.2rem + 0.5vw);
        }

        h3 {
            font-size: 1.2rem;
        }
    }
`

const CTA = () => {
    return ( 
        <StyledCTA id="contact">
            <h1><Typewriter text="Bring Your Vision to Life!" typingSpeed={75}></Typewriter></h1>
            <p className="tagline">Send me a message</p>
            <h2> <i className="bi bi-envelope-at"></i> <a href="mailto:burbosfilmai@gmail.com" rel="noreferrer" target="_blank"><Typewriter text="burbosfilmai@gmail.com" typingSpeed={75}></Typewriter></a></h2>
            <p className="tagline">Or just give me a call!</p>
            <h3><i className="bi bi-phone-vibrate"></i> <Typewriter text="+37062123005" typingSpeed={75}></Typewriter></h3>
        </StyledCTA>
     );
}
 
export default CTA;