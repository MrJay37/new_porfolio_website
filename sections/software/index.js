import Styles from './index.module.scss'
import SoftwareData from './data'
import { SectionTitle } from '../../components'

export default function Software() {
    return <div className={Styles.container}>
        <SectionTitle title="Engineering Projects" />
        <div className={Styles.projectCards}>
            {SoftwareData.map((project, i) => (
                <div className={Styles.projectCard + ' cardBorder'} key={i}>
                    <div className={Styles.projectCardHeader + ' flex'}>
                        <h3>{project.title}</h3>
                        <span>
                            {project.project_started.toDateString()} {project.project_ended ? 'to ' + project.project_ended.toDateString(): '(Ongoing)'}
                        </span>
                    </div>
                    <div className={Styles.techStackTags}>
                        {project.tech_stack.slice(0, 3).map((ts, i) => <span key={i}>{ts}</span>)}
                    </div>
                </div>
            ))}
        </div>
    </div>
  }