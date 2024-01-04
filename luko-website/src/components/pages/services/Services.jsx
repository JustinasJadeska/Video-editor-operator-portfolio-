import styled from 'styled-components'
import { useState } from 'react'
import VhsVideo from '../../UI/vhsVideo/VhsVideo'
import useTypingEffect from '../../UI/typingEffect/TypingEffect'

const StyledServices = styled.section`
    min-height: 100vh;
    background-color: #121212;
    color: white;
    padding-bottom: 50px;
    padding-top: 50px;

    .videoEditing, .operator, .videoTapes {
        display: grid;
        grid-template-columns: 1fr 1fr; 
        align-items: end; 
        text-align: left;
        margin: 0 auto;
        max-width: 1000px;

        h1 {
            grid-column: 1 / 2;
            font-size: 3rem;
            width: fit-content;
            margin: 0;
            margin-left: -50px;
        }

        h2 {
            font-size: 30px;
            grid-column: 2 / 3; 
            margin: 5px 0;
            transition: transform 0.3s ease;

            &:hover {
                color: rgb(21, 182, 112);
                cursor: text;
                transform: scale(1.05);
            }
        }

        p {
            grid-column: 2 / 3; 
            font-size: 16px; 
            line-height: 1.6;
        }
    }

    .videoTapes {
    
    span {
        color: rgb(21, 182, 112);
        font-weight: 800;
        text-transform: uppercase;

        &:after {
            content: '|';
            opacity: 1;
            animation: blink 1s step-end infinite;
        }
    
        &:hover {
            cursor: pointer;
            text-decoration: underline;
        }
    }
}

@keyframes blink {
        50% {
            opacity: 0;
        }
    }

    @media (max-width: 768px) {
    .videoEditing, .operator, .videoTapes {
        grid-template-columns: 1fr; 
        h2, p {
                padding: 0 10px; 
            }
    }
}

`

const Services = () => {

    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal)
    }

    const typingTexts = ["Revisit the echoes of past joys.", "Discover timeless memories.", "Experience digital nostalgia."];
    const typedText = useTypingEffect(typingTexts, 50, 1000);

    return ( 
        <StyledServices id='services'>
            <div>
                <div className='videoEditing'>
                    <h1>Expertise</h1>
                    <h2>Video Editing</h2>
                    <p>As a professional video editor, I bring raw footage to life,
                    crafting compelling narratives with expert precision. My approach
                    involves meticulous cutting, dynamic sequencing, and
                    vibrant color grading to ensure each project, regardless
                    of its nature, captivates and engages its audience.</p>
                </div>
                <div className='operator'>
                    <h2>Operator</h2>
                    <p>As an operator, I excel in efficiently managing and controlling machinery and systems. My focus is on ensuring smooth operations, maintaining safety standards, and optimizing performance to achieve the best results in every task I undertake.</p>
                </div>
                <div className='videoTapes'>
                    <h2>Digitization of Video Tapes</h2>
                    <p>I'm thrilled to offer my new service that combines the 
                        digitization of video tapes with creative video editing.
                        This dual service not only preserves your cherished memories
                        by converting old tapes into digital formats but also transforms
                        them into refreshed, modern videos. By reviving vintage footage
                        and infusing it with new life, I ensure that your precious moments
                        are not just safely archived but also reimagined and relived in
                        a contemporary and dynamic way. <span onClick={toggleModal}>{typedText}</span></p>
                    {showModal && <VhsVideo onClose={() => setShowModal(false)} />}
                </div>
            </div>
        </StyledServices>
     );
}
 
export default Services;