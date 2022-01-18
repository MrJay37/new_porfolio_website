import ProjectStyles from './projects.module.scss'

export default function ProjectCard(project) {
    console.log(project)
    return <div className={ProjectStyles.projectCard}>
        <h3>{project.title}</h3>
    </div>
}