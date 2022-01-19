import Layout from '../components/layout'
import ProjectStyles from './projects.module.scss'
import ProjectData from '../static/projects_data'
import ProjectCard from '../components/projectCard'

// export async function getStaticProps() {
//     return {
//         props: {
//             projectData: ProjectData
//         }
//     }
// }

export default function Projects({ props }) {
    return <Layout home title='Sanket Jain | Projects'>
      <div className={ProjectStyles.container}>
          <h1 className={ProjectStyles.title}>Projects</h1>
          <div className={ProjectStyles.projects}>
                {ProjectData.map((project, i) => <ProjectCard 
                        props={
                            {
                                ...project, 
                                direction: i%2 == 0? 'left' : 'right'
                            }
                        } 
                        key={i
                    }/>
                )}
          </div>
      </div>
    </Layout>
}