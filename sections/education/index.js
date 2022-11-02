import Styles from './index.module.scss'
import EducationData from './data'
import { formatToYearMonth } from '../../utils'

export default function Education() {
    return <div className={Styles.container + ' section'} id="education">
    <div className={'sectionTitle'}>Education</div>
    <div className={Styles.list + ' sectionContainer flex-column'}>
        {EducationData.map(({ id, url, end, start, school, degree, program, location }) => (
            <div className={Styles.card + ' flex'} key={id} >
                <div className={Styles.dates + ' flex-column normal-text'}>
                    <div>- {formatToYearMonth(end)}</div>    
                    <div>- {formatToYearMonth(start)}</div>    
                </div>
                <div className={Styles.school + ' flex'}>
                    <div className={Styles.text}>
                        {url ? <a href={url} target='_blank'><h1>{school}</h1></a> : <h1>{school}</h1>}
                        <h3>{degree}</h3>
                        <h3>{program}</h3>
                        <p>{location.state}, {location.country}</p>
                    </div>
                </div>
            </div>
        ))}
    </div>
</div>
}