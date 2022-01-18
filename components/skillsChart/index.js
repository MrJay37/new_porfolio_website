import skillsData from '../../static/skills_data'
import SkillItem from './skill_item'

export default function App() {
  return (
      <div className='skills_graph'>
          <dl>
            <dt className='title'>
                What I do?
            </dt>
            <div className='skills_graph_container'>
              {skillsData.map((skill, i) => 
                  <SkillItem key={i} {...skill}/>
              )}
            </div>
          </dl>          
      </div>
  )
}
