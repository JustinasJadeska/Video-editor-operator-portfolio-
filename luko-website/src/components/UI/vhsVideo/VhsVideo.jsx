import styled from 'styled-components'
import video from '../../videos/VHS.mp4'

const StyledModal = styled.div`

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
`



const VhsVideo = ({onClose}) => {

    return ( 
        <StyledModal onClick={onClose}>
            <div className="videoContainer">
                <video src={video} controls autoPlay
                style={{  maxHeight: '90vh' }}
                ></video>
            </div>
        </StyledModal>
     );
}
 
export default VhsVideo;