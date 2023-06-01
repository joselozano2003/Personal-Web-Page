import React from "react";
import Profile from '../assets/memoji.png'
import Git from '../assets/icons/github/github96.png'
import LinkedIn from '../assets/icons/linkedin/linkedin90.png'
import Email from '../assets/icons/email/email90.png'

export default function Hero() {

  function handleEmailClick() {
    window.location.href = 'mailto:josecamilolozano2003@gmail.com';
  }

  return (
    <section id ="hero-section">
      <div className="hero">
        <div className="aboutMe"> 
          <div className="aboutText">
            <div className='aboutContent'>
                <p className='aboutName'>Jose Lozano</p>
                <h2> Computer Science Student & Software Developer</h2>
            </div>
            <div className="about-icons">
              <a href="" className="about-icon-holder" onClick={handleEmailClick}>
                <img src={Email} className="about-icon"/>
              </a>
              <a href="https://github.com/joselozano2003" target="_blank" rel="noopener noreferrer" className="about-icon-holder">
                <img src={Git} className="about-icon"/>
              </a>
              <a href="https://www.linkedin.com/in/jose-lozano-007851224/" target="_blank" rel="noopener noreferrer" className="about-icon-holder">
                <img src={LinkedIn} className="about-icon"/>
              </a>
            </div>
          </div>
          <div className="aboutPhoto">
            <img src={Profile} className="photoMe"/>
          </div>
        </div>
      </div>
    </section>
    );
}
