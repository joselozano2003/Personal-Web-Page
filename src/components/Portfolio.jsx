import styles from '../styles/Portfolio.module.css'
import ProjectCard from './ProjectCard';
import Certification from '../assets/certification.png'

import {
    javascript,
    typescript,
    html,
    css,
    reactjs,
    nodejs,
    git,
    python,
    java,
    mysql,
    next,
    c,
    postgres,
    sql,
    django,
    tailwind,
    firebase,
    svelte,
  } from "../assets";

const projects = [
    {
        title: "Link-Shelf",
        description: "Share projects and important links to the world",
        url: "https://link-shelf.vercel.app/",
        repo: "https://github.com/joselozano2003/linktree-clone",
        tech: [
            svelte, firebase
        ]
    },
    {
        title: "Da Blog.",
        description: "Blog to share my journey becoming a developer",
        url: "https://jose-da-blog.vercel.app/home",
        repo: "https://github.com/joselozano2003/Blog-App",
        tech: [
            next, postgres
        ]
    },
    {
        title: "Image Generator",
        description: "Use OpenAI's API to generate images from text",
        url: null,
        repo: "https://github.com/joselozano2003/Image-Generator",
        tech: [
            javascript, nodejs
        ]
    },
    {
        title: "Toolbox",
        description: "Set of tools to help developer's productivity",
        url: "https://toolbox-vert.vercel.app",
        repo: "https://github.com/joselozano2003/Toolbox",
        tech: [
            reactjs, typescript
        ]
    }
]



export default function Portfolio() {

    return (
        <section id="portfolio-section">
            <div className={styles.parent}>

                <h1 className={styles.title}>My Projects</h1>

                <div className={styles.container}>
                    {projects.map((project, index) => (
                        <ProjectCard key={index} title={project.title} description={project.description} url={project.url} repo={project.repo} tech={project.tech}/>
                    ))}
                </div>

                <h1 className={styles.title}>Certifications</h1>

                <div className={styles.certifications}>
                    <div className={styles.certification}>

                        <div className={styles.certificationInfo}>
                            <h1>Meta Back-End Developer Certificate</h1>
                            <p>Issued July 2023 by: <a href="https://www.coursera.org/account/accomplishments/professional-cert/NG6UGGNL359X" target="_blank" rel="noopener noreferrer">Coursera</a></p>
							<div className={styles.certificationTech}>
								<img src={python} alt="python" width={50}/>
								<img src={django} alt="django" width={50}/>
								<img src={mysql} alt="mysql" width={50}/>
							</div>
						</div>
                        <a href="https://www.credly.com/badges/5030f6cb-7cfe-486c-ae2e-92ae07731b36/linked_in_profile" target="_blank" rel="noopener noreferrer">
                            <img className={styles.image} src={Certification} alt="certification" />
                        </a>

                    </div>
                </div>

            </div>
        </section>
    )
}