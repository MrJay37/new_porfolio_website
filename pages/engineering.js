import Layout from '../components/layout'
import Styles from './engineering.module.scss'
import ProjectData from '../static/projects_data'

const formatToYearMonth = (date_obj) => {
  if (!date_obj){
      return 'Now'
  }
  else if (typeof(date_obj) === 'string'){
      date_obj = new Date(date_obj)
  }
  const date_string = date_obj.toDateString()
  
  return date_string.split(' ')[3] + ' ' + date_string.split(' ')[1]
}

function ProjectCard(props){
  console.log(props)
  return <div className={Styles.projectCard}>
    <div className={Styles.cardHeader}>
      <img src={props.picture} className={Styles.cardHeaderBanner}/>
      <div className={Styles.cardHeaderText}>
          <h2>{props.title}</h2>
          <div className={Styles.cardHeaderDates}>
              <span>{formatToYearMonth(props.project_started)} to {formatToYearMonth(props.project_ended)}</span>
          </div>
      </div>
    </div>
    <div className={Styles.cardBody}>
      <div className={Styles.cardBodyText}>
          <p>{props.description}</p>
      </div>
      <div className={Styles.cardBodyItems}>
        <div className={Styles.cardBodyItem}>
          <h3 className={Styles.cardBodyItemHeading}>Members</h3>
          <ul>
            {props.members.map((member, i) => <a key={i} href={member.url} ><li>{member.name}</li></a>)}
          </ul>
        </div>
        <div className={Styles.cardBodyItem}>
          <h3 className={Styles.cardBodyItemHeading}>Tech Stack</h3>
          <ul>
            {props.tech_stack.map((member, i) => <li key={i}>{member}</li>)}
          </ul>
        </div>
        <div className={Styles.cardBodyItem}>
          <h3 className={Styles.cardBodyItemHeading}>Links</h3>
          <ul>
            {props.links.filter((link, i) => link.url ).map((link, i) => <a key={i} href={link.url} ><li>{link.app}</li></a>)}
          </ul>
        </div>
      </div>
    </div>
  </div>
}

export default function Projects({ props }) {
    return <Layout home={false} title='Sanket Jain | Projects'>
      <div className={Styles.container}>
          <div className={Styles.title}>Engineering Projects</div>
          <div className={Styles.projectCards}>
              {ProjectData.map((project, i) => (
                <div key={i} className={Styles.projectCardContainer} id={project.id}><ProjectCard {...project}/></div>
              ))}
          </div>
      </div>
    </Layout>
}