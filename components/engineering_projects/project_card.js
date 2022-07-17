import Styles from './projects.module.scss'
import Link from 'next/link'

export default function ProjectCard(project) {
    
    return <Link href={'/engineering#' + project.id}>
        <div className={Styles.projectCard}>
            <div className={Styles.projectCardHeader}>
                <h3>{project.title}</h3>
                <span>
                    {project.project_started.toDateString()} {project.project_ended ? 'to ' + project.project_ended.toDateString(): '(Ongoing)'}
                </span>
            </div>
            <div className={Styles.techStackTags}>
                {project.tech_stack.slice(0, 3).map((ts, i) => <span key={i}>{ts}</span>)}
            </div>
        </div>
    </Link>
}