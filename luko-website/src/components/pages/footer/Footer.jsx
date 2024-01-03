import React from "react";
import styled from "styled-components";
import logo from '../../images/normal.png'

const StyledFooter = styled.section`
    position: relative; 
    top: 0; 
    background-color: #FFF; 
    z-index: 1000; 
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    .logo > img {
        width: 200px;
        height: auto;
    }

    .navBar > nav > ul {
        display: flex;
        align-items: center;
        gap: 30px;
    }

    .navBar > nav > ul > li {
        list-style-type: none;
    }

    .navBar > nav > ul > li > a {
        font-weight: 800;
        font-size: 16px;
        text-decoration: none;
        color: black;
    }

    nav > ul > li:nth-child(1) a:hover {
        color: rgb(11, 96, 59);
    }

    nav > ul > li:nth-child(2) a:hover {
        color: rgb(11, 96, 59);
    }

    nav > ul > li:nth-child(3) a:hover {
        color: rgb(11, 96, 59);
    }

    .icons {
        display: flex;
        gap: 20px;
    }

    .icons > a > i {
        font-size: 1.5rem;
        color: black;

        &:hover {
            color: rgb(11, 96, 59);
        }
    }

    @media (max-width: 768px) {
        flex-direction: column; 
        align-items: center; 
        justify-content: center;
        text-align: center; 
        gap: 20px; 
        padding: 15px 10px;

        .navBar > nav > ul {
            flex-direction: column; 
            padding: 0;
        }

        .icons {
            justify-content: center; 
            gap: 20px;
        }

        .icons > a > i {
            font-size: 1.75rem; 
        }

        .navBar > nav > ul > li > a {
            font-size: 20px; 
        }
    }
`

const CopyrightNotice = styled.p`
    color: #666; // Example color, set this to whatever fits your design
    font-size: 0.75rem;
    text-align: center;
    margin-top: 20px; // Adjust as needed for your layout
`;

const Footer = () => {

    const currentYear = new Date().getFullYear();

    return ( 
        <StyledFooter>
            <div className='logo'>
                <img src={logo} alt="Burba Films Company Logo" />
            </div>
            <div className="icons">
                <a href="https://www.facebook.com/lukas.burba.9" rel="noreferrer" target="_blank"><i className="bi bi-facebook"></i></a>
                <a href="https://www.youtube.com/@burbosfilmai8239" rel="noreferrer" target="_blank"><i className="bi bi-youtube"></i></a>
                <a href="https://www.linkedin.com/in/burba-films-3a8b4a189/" rel="noreferrer" target="_blank"><i className="bi bi-linkedin"></i></a>
            </div>
            <div className='navBar'>
                <nav>
                    <ul>
                        <li><a href="#about">About Me</a></li>
                        <li><a href="#profileSection">Portfolio</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#contact">Contacts</a></li>
                    </ul>
                </nav>
            </div>
            <CopyrightNotice>
                &copy; {currentYear} Burba Films. All Rights Reserved.
            </CopyrightNotice>
        </StyledFooter>
     );
}
 
export default Footer;