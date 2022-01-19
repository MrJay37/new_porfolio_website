import ProjectStyles from '../../pages/projects.module.scss'
import Link from 'next/link'

export default function ProjectCard({ props }) {
    return <div className={props.direction == 'left' ? ProjectStyles.project_left: ProjectStyles.project_right}>
        <img
            className={ProjectStyles.projectPreviewPicture}
            src={props.picture}
            alt='me'
        />
        <Link href={`/projects/${props.id}`}>
            <h1 className={ProjectStyles.projectTitle}>{props.title}</h1>
        </Link> 
        
    </div>
}