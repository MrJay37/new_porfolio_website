import React, {useEffect} from "react";
import skillsData from '../../static/skills_data'
import SkillItem from './skill_item'

export default function App() {
  
    useEffect(() => {
      if (document !== undefined){
        var dds = document.querySelectorAll('dd');
        var container = document.querySelector('.skills_graph_container');
        container.addEventListener('scroll', function () {
          dds.forEach((dd, i) => {
            var top = (e.getBoundingClientRect().top);
            if (top == 0) {
                dd.classList.add('is-inview')
            } else {
                dd.classList.remove('is-inview')
            }
          })
        })
        
      }

    }, [])

  
  return (
      <div className='skills_graph'>
          <dl>
            <dt className='title'>
                What I do?
            </dt>
            <div className='skills_graph_container'>
              {skillsData.map((skill, i) => 
                  <SkillItem key={i} {...skill} count={i}/>
              )}
            </div>
          </dl>          
      </div>
  )
}
