import Styles from './index.module.scss'
import Data from './data'

export default function Software() {
    return <div className={Styles.container + ' section'} id='software'>
        <div className='sectionTitle'>Software</div>
        <div className={Styles.list + ' sectionContainer'}>
            {Data.map((project, i) => (
                <div className={Styles.card + ' cardBorder'} key={i}>
                    <div className={Styles.header + ' flex-center-align'}>
                        <h3>{project.title}</h3>
                        <span>
                            {project.project_started.toDateString()} {project.project_ended ? 'to ' + project.project_ended.toDateString(): '(Ongoing)'}
                        </span>
                    </div>
                    <div className={Styles.techStackTags + ' flex'}>
                        {project.tech_stack.slice(0, 6).map((ts, i) => <span key={i}>{ts}</span>)}
                    </div>
                </div>
            ))}
        </div>
    </div>
  }