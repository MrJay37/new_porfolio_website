import Layout from '../components/layout'
import ProjectStyles from './projects.module.scss'
import ProjectData from '../static/projects_data'
import ProjectCard from '../components/projectCard'

export default function Projects({ props }) {
    return <Layout home title='Sanket Jain | Projects'>
      <div className={ProjectStyles.container}>
          <h1 className={ProjectStyles.title}>Projects</h1>
          <div className={ProjectStyles.projects}>
                {ProjectData.map((project, i) => <ProjectCard props={{...project}} key={i}/>)}
          </div>
      {/* <div
        style={
          {
            display: 'flex',
            justifyContent: 'center'
          }
        }
      >
        <iframe 
          scrolling="no"
          frameborder="yes" 
          allow="autoplay" 
          style={
            {
              borderRadius: '1rem',
              width: '80%',
              height: '15vh'
            }
          }
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/598801296&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
        />
      </div> */}

      </div>
    </Layout>
}