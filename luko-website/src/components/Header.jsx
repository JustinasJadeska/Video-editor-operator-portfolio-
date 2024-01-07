import React, {useState} from 'react';
import logo from './images/normal.png'
import styled from 'styled-components';

const StyledHeader = styled.header`
    position: relative; 
    top: 0; 
    background-color: #FFF; 
    z-index: 1000; 
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
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
        color: rgb(33, 183, 88);
    }

    nav > ul > li:nth-child(2) a:hover {
        color: rgb(33, 183, 88);
    }

    nav > ul > li:nth-child(3) a:hover {
        color: rgb(33, 183, 88);
    }

    nav > ul > li:last-child a {
        padding: 15px 30px;
        border: 2px solid black;
    }

    nav > ul > li:last-child a:hover {
        background-color: black;
        color: white;
    }

    .burger {
        display: none;
        cursor: pointer;
        position: relative;
        width: 35px;
        height: 25px;
        align-self: center;
        top: 10px;

        div {
            position: absolute;
            left: 0;
            width: 100%;
            height: 3px;
            background-color: black;
            transition: all 0.3s ease;
            transform: translateY(-50%);
            &:before,
            &:after {
                content: '';
                position: absolute;
                width: 100%;
                height: 3px;
                background-color: black;
                transition: all 0.3s ease;
            }
            &:before { 
            top: -10px; 
            transform: translateY(-50%); 
            }
            &:after { 
                bottom: -10px; 
                transform: translateY(50%);
            }
        }

        &.open div {
            transform: rotate(135deg);
            &:before { top: 0; transform: rotate(90deg); }
            &:after { bottom: 0; transform: rotate(90deg); }
        }
    }
    .navBar {
        @media (max-width: 768px) {
            display: none;
        }
    }

    .mobileMenu {
        display: none; 
        position: fixed; 
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100vw; 
        height: 100vh; 
        background-color: rgb(0, 0, 0); 
        z-index: 2000; 
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        transition: opacity 0.3s ease-in, transform 0.3s ease-in; 
        transform: translateY(-100%);
        opacity: 0;

        .closeIcon {
            position: absolute;
            top: 40px; 
            right: 20px; 
            font-size: 2rem; 
            color: white; 
            cursor: pointer;
        }
    }

    .mobileMenu.open {
        transform: translateY(0);
        opacity: 1;
    }

    .mobileMenu nav ul {
        flex-direction: column; 
        align-items: center;
        gap: 30px; 
    }

    .mobileMenu nav ul li {
        margin-bottom: 20px; 
    }

    .mobileMenu nav ul li a {
        font-size: 24px; 
        color: white; 
        text-decoration: none;
        &:hover {
            color: #CCCCCC; 
        }
    }

    @media (max-width: 768px) {
        .burger {
            display: block;
        }

        .navBar.active {
            display: none;
        }

        .bi-list {
            font-size: 3rem;
        }

        .bi-x-lg {
            font-size: 2rem;
        }

        nav > ul {
            padding: 0;
        }

        nav > ul > li > a {
            font-weight: 600;
        }

        nav > ul > li:last-child a {
        padding: 0;
        border: none;
        }
    }
`

const Header = () => {

    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const toggleMobileMenu = () => {
        setShowMobileMenu(!showMobileMenu);
    };

    const handleLinkClick = () => {
        setShowMobileMenu(false);
    };

    return (
        <StyledHeader>
            <div className='logo'>
                <img src={logo} alt="Burba Films Company Logo" />
            </div>
            <div className={`burger ${showMobileMenu ? 'open' : ''}`} onClick={toggleMobileMenu}>
                <div></div>
            </div>
            <div className={`navBar ${showMobileMenu ? 'active' : ''}`}>
                <nav>
                    <ul>
                        <li><a href="#about">About Me</a></li>
                        <li><a href="#profileSection">Portfolio</a></li>
                        <li><a href="#services">Expertise</a></li>
                        <li><a href="#contact">Contacts</a></li>
                    </ul>
                </nav>
            </div>
            <div className={`mobileMenu ${showMobileMenu ? 'open' : ''}`}>
                <div className="closeIcon" onClick={() => setShowMobileMenu(false)}>
                    <i className="bi bi-x-lg"></i>
                </div>
                <nav>
                    <ul>
                        <li><a href="#about" onClick={handleLinkClick}>About Me</a></li>
                        <li><a href="#profileSection" onClick={handleLinkClick}>Portfolio</a></li>
                        <li><a href="#services" onClick={handleLinkClick}>Expertise</a></li>
                        <li><a href="#contact" onClick={handleLinkClick}>Contacts</a></li>
                    </ul>
                </nav>
            </div>
        </StyledHeader>
    );
}
 
export default Header;