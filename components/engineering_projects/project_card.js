import ProjectStyles from './projects.module.scss'
import Link from 'next/link'

export default function ProjectCard(project) {
    
    return <Link href={'/engineering_projects/' + project.id}>
        <div className={ProjectStyles.projectCard}>
            <h3>{project.title}</h3>
        </div>
    </Link>
}