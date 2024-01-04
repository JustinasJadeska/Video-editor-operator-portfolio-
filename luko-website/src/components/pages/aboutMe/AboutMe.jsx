import styled from "styled-components";
import Typewriter from "../../UI/typewriter/TypeWriter";
import image from "../../images/ERP-262.jpg"


const StyledAboutme = styled.section`
    min-height: 70vh;
    background-color: #121212;
    display: flex;
    justify-content: center;
    padding: 50px;
    color: #FFF;

    .profile-text {
        flex-basis: 40%; 

        .image {
            display: none;
            filter: grayscale(100%); 
        }

        h3 {
            font-size: 3rem; 
            width: fit-content;
            margin-top: 20px;
            margin-bottom: 20px;
            cursor: pointer;

            &:hover + .image {
                display: block;
                width: 300px;
            }
        }

        p {
            font-size: 16px; 
            line-height: 1.6;

            > span {
            color: rgb(21, 182, 112);
            font-weight: 800;
            text-transform: uppercase;

                &:hover {
                    text-decoration: underline;
                    cursor: pointer;
                }

            }
        }
    }

    @media (max-width: 768px) {
        flex-direction: column;
    }
`

const AboutMe = () => {

    const scrollToCTA = () => {
        const ctaElement = document.getElementById("contact");
        ctaElement.scrollIntoView({ behavior: 'smooth' });
    }

    return ( 
        <StyledAboutme id="about">
            <div className="profile-text">
                <h3><Typewriter text="About Me" typingSpeed={75}></Typewriter></h3>
                <img src={image} alt="" className="image"/>
            </div>
            <div className="profile-text">
                <p>As a video editor and operator, my expertise
                lies in crafting visually stunning narratives that
                resonate deeply with audiences. With a keen eye for
                detail and a profound understanding of pacing and rhythm,
                I transform raw footage into engaging, coherent stories.
                </p>
                <p>
                With 7 years of experience in video editing and freelancing,
                I've developed a strong skill set in creating engaging content.
                My journey has been about balancing technical expertise with
                creative vision. As a freelancer, I adapt quickly to meet client
                needs, ensuring each project reflects quality and innovation.
                This experience has shaped me into a versatile and reliable
                professional in the video production industry.
                </p>
                <p>
                If you're seeking a video editor and operator who values collaboration,
                creativity, and delivering exceptional results, I invite you to get
                in touch. Whether it's bringing a commercial to life or capturing the
                essence of a special wedding day, I'm ready to lend my expertise to
                your project. <span onClick={scrollToCTA}>Let's connect</span> and discuss how we can
                create something truly memorable together.
                </p>
            </div>
        </StyledAboutme>
     );
}
 
export default AboutMe;