import styles from '../styles/Technologies.module.css'
import React from 'react'

import { BallCanvas } from "./canvas";
import { technologies, languages } from "../constants";

import { TypeAnimation } from 'react-type-animation';

export default function Technologies() {
    return (
        <section id='tech-section'>
            <div className={styles.parent}>
                <h1 className={styles.gradient}>Skills</h1>
                <h2 className={styles.moving}>Languages</h2>
                <div className={styles.container}>
                    {languages.map((tech) => (
                        <div className={styles.ball} key={tech.name}>
                            <BallCanvas icon={tech.icon}/>
                        </div>
                    ))}
                </div>
                <TypeAnimation 
                sequence={[
                    'Frameworks',
                    1500,
                    'Libraries',
                    1500,
                    'Tools',
                    1500,
                  ]}
                speed={50}
                className={styles.moving}
                repeat={Infinity}
                />
                <div className={styles.container}>
                    {technologies.map((tech) => (
                        <div className={styles.ball} key={tech.name}>
                            <BallCanvas icon={tech.icon}/>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}