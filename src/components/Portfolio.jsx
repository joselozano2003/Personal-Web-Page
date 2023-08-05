import styles from '../styles/Portfolio.module.css'
import ProjectCard from './ProjectCard';

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

export default function Portfolio() {

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

    return (
        <section id="portfolio-section">
            <div className={styles.parent}>
                <h1 className={styles.title}>My Projects</h1>
                <div className={styles.container}>
                    {projects.map((project, index) => (
                        <ProjectCard key={index} title={project.title} description={project.description} url={project.url} repo={project.repo} tech={project.tech}/>
                    ))}
                </div>
            </div>
        </section>
    )
}