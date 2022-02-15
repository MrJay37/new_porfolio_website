import Link from 'next/link'
import ProjectStyles from './projects.module.scss'
import all_projects from '../../static/projects_data'
import ProjectCard from './project_card'

function sortProjects(projects) {
    return projects.sort(({project_started: a}, {project_started: b}) => {
        if (a < b) {
            return 1
        }
        else if (a > b){
            return -1
        }
        else {
            return 0
        }
        
    })
}

export default function Projects() {
    const projects = sortProjects(all_projects).slice(0, 3)
    
    return <div className={ProjectStyles.container}>
        <Link href={'/engineering_projects'}>
            <h1 className={ProjectStyles.title}>Engineering Projects</h1>
        </Link>
        <div className={ProjectStyles.projectCards}>
            {projects.map(project => <ProjectCard key={project.id} {...project}/>)}
        </div>
        <Link href={'/engineering_projects'}>
            <a>View all</a>
        </Link>
    </div>
}