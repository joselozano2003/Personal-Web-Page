import React, { useState, useEffect } from 'react';
import Logo from '../assets/logo-no-background.svg';
import { Link } from 'react-scroll';

function Navbar() {
  const [activeLink, setActiveLink] = useState('');

  const handleSetActive = (to) => {
    setActiveLink(to);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = ['hero-section', 'about-me', 'tech-section', 'portfolio-section'];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop - 60; // Adjust offset as needed
          const offsetBottom = offsetTop + element.offsetHeight;
          return scrollPosition >= offsetTop && scrollPosition < offsetBottom;
        }
        return false;
      });

      setActiveLink(currentSection || '');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const styles = {
    link: {
      cursor: 'pointer',
      color: 'white',
    },
    activeLink: {
      color: 'orange',
    },
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Link
          to="hero-section"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          style={activeLink === '' ? { ...styles.link, ...styles.activeLink } : styles.link}
          onSetActive={handleSetActive}
        >
          <img src={Logo} className="logo" alt="React logo" />
        </Link>
      </div>
      <div className="navbar__links">
        <ul className="navbar-ul">
          <Link
            to="about-me"
            spy={true}
            smooth={true}
            offset={-60}
            duration={500}
            style={
              activeLink === 'about-me'
                ? { ...styles.link, ...styles.activeLink }
                : styles.link
            }
            onSetActive={handleSetActive}
            className="navbar__link"
          >
            <li className="navbar-item">About</li>
          </Link>
          <Link
            to="tech-section"
            spy={true}
            smooth={true}
            offset={-60}
            duration={500}
            style={
              activeLink === 'tech-section'
                ? { ...styles.link, ...styles.activeLink }
                : styles.link
            }
            onSetActive={handleSetActive}
            className="navbar__link"
          >
            <li className="navbar-item">Skills</li>
          </Link>
          <a
            href="#portfolio-section"
            className="navbar__link"
            style={
              activeLink === 'portfolio-section'
                ? { ...styles.link, ...styles.activeLink }
                : styles.link
            }
          >
            <li className="navbar-item">Portfolio</li>
          </a>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
