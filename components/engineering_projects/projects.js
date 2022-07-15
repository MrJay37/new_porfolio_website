import Link from 'next/link'
import ProjectStyles from './projects.module.scss'
import projects from '../../static/projects_data'
import ProjectCard from './project_card'

export default function Projects() {    
    return <div className={ProjectStyles.container}>
        <Link href={'/engineering'}>
            <h1 className={ProjectStyles.title}>Engineering Projects</h1>
        </Link>
        <div className={ProjectStyles.projectCards}>
            {projects.map((project, i) => <ProjectCard key={i} {...project}/>)}
        </div>
    </div>
}