import styles from '../styles/Portfolio.module.css'
import Git from '../assets/icons/github/github64.png'

export default function ProjectCard({ title, description, url, repo, tech }) {
    return (
        <div className={styles.card}>
            <h2 className={styles.cardTitle}>{title}</h2>
            <div className={styles.cardDescription}>
                <p>{description}</p>
            </div>
            <div className={styles.cardLinks}>
                {url ? <a href={url} target='_blank'>Link</a> : <></>}
                <a href={repo} target='_blank'>
                    <img src={Git}/>
                </a>
            </div>
            <hr></hr>
            <div className={styles.cardTech}>
                {tech.map((tech, index) => (
                    <img key={index} src={tech} alt={tech} width={50}/>
                ))}
            </div>
        </div>
    )
}