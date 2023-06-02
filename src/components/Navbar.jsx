import React from 'react';
import Logo from '../assets/logo-no-background.svg';
import { Link } from 'react-scroll';

function Navbar() {

    const styles = {
        link: {
            cursor: 'pointer',
        },
    };
  
    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <Link to='hero-section' spy={true} smooth={true} offset={0} duration={500} style={styles.link}>
                    <img src={Logo} className="logo" alt="React logo" />
                </Link>
            </div>
            <div className="navbar__links">
                <ul className="navbar-ul">
                    <Link to='about-me' spy={true} smooth={true} offset={-60} duration={500} style={styles.link} className="navbar__link">
                        <li className="navbar-item">About</li>
                    </Link>
                    <a href="#skills-section" className="navbar__link">
                        <li className="navbar-item">Skills</li>
                    </a>

                    <a href="#portfolio-section" className="navbar__link">
                        <li className="navbar-item">Portfolio</li>
                    </a>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
