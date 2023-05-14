import React, { useState, useEffect} from "react";
import Map from '../components/Map.jsx';

export default function Personal(props) {

    return (
        <section id="about-me">
            {props.platform ?
                <div className="personal">
                    <div className="personalText">
                    <h1>About Me</h1>
                        <ul>
                            <li>I am an international student from Costa Rica based in Calgary, Alberta</li>
                            <li>Computer Science Student at the University of Calgary</li>
                            <li>Passionate about technology and innovation</li>
                            <li>Interested in Web, App, and AI development</li>
                        </ul>
                    </div>
                    <Map/>    
                </div> 
                : 
                
                <div className="personal">
                    <Map/>
                    <div className="personalText">
                        <h1>About Me</h1>
                        <ul>
                            <li>I am an international student from Costa Rica based in Calgary, Alberta</li>
                            <li>2nd year Computer Science student at the University of Calgary</li>
                            <li>Passionate about technology and innovation</li>
                            <li>Interested in Web, App, and AI development</li>
                        </ul>
                        
                    </div>
                </div>
            }
        </section>
    );
}