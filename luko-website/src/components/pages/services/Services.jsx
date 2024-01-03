import styled from 'styled-components'
import video from '../../videos/VHS.mp4'
import { useState } from 'react'
import VhsVideo from '../../UI/vhsVideo/VhsVideo'

const StyledServices = styled.section`
    min-height: 100vh;
    margin-bottom: 30px;

    > div > h1 {
        font-size: 3rem; 
        text-align: center;
    }

    .videoEditing, .operator, .videoTapes {
        display: grid;
        grid-template-columns: 1fr 1fr; 
        gap: 30px;
        align-items: start; 
        text-align: left;
        margin: 0 auto;
        max-width: 1000px;

        h2 {
            font-size: 30px;
            grid-column: 1 / 2; 
        }

        p {
            grid-column: 2 / 3; 
            font-size: 16px; 
            line-height: 1.6;
        }
    }

    .videoTapes {
    
    button {
        grid-column: 2 / 3;
        width: fit-content;

        border: none;
        background-color: white;
        font-weight: 800;
    
        &:hover {
            cursor: pointer;
            text-decoration: underline;
        }
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

    return ( 
        <StyledServices id='services'>
            <div>
                <h1>Services</h1>
            </div>
            <div>
                <div className='videoEditing'>
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
                    <p>I'm thrilled to offer a comprehensive service that combines the digitization of video tapes with creative video editing. This dual service not only preserves your cherished memories by converting old tapes into digital formats but also transforms them into refreshed, modern videos. By reviving vintage footage and infusing it with new life, I ensure that your precious moments are not just safely archived but also reimagined and relived in a contemporary and dynamic way.</p>
                    <button onClick={toggleModal}>Click to see</button>
                    {showModal && <VhsVideo onClose={() => setShowModal(false)} />}
                </div>
            </div>
        </StyledServices>
     );
}
 
export default Services;