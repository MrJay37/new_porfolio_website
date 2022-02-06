import BarChartStyles from './barChart.module.scss'
import skillsData from '../../static/skills_data'
import SkillItem from './skill_item'

export default function SkillsChart() {
   
  return (
      <div className={BarChartStyles.skills_graph}>
          <dl>
            <dt className={BarChartStyles.title}>
                What I do?
            </dt>
            <div className={BarChartStyles.skills_graph_container}>
              {skillsData.map((skill, i) => 
                  <SkillItem key={i} {...skill} count={i}/>
              )}
            </div>
          </dl>          
      </div>
  )
}
