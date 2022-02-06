import Layout from '../components/layout'
import ProjectStyles from './engineering_projects.module.scss'
import ProjectData from '../static/projects_data'
import ProjectCard from '../components/projectCard'

export default function Projects({ props }) {
    return <Layout home={false} title='Sanket Jain | Projects'>
      <div className={ProjectStyles.container}>
          <h1 className={ProjectStyles.title}>
            Engineering Projects
          </h1>
          <div className={ProjectStyles.projects}>
              {ProjectData.map((project, i) => <ProjectCard props={{...project}} key={i}/>)}
          </div>
      </div>
    </Layout>
}