import Styles from './index.module.scss'
import EducationData from './data'
import { SectionTitle } from '../../components'

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

export default function Education() {
    return <div className={Styles.container} id="education">
    <SectionTitle title="What I've Studied?"/>
    <div className={Styles.educationList + ' flex-column'}>
        {EducationData.map(({ id, end, start, school, degree, program, location }) => (
            <div className={Styles.educationCard + ' flex'} key={id} >
            <div className={Styles.educationCardDates + ' flex-column'}>
                <div className={Styles.educationCardTitleDate}>- {formatToYearMonth(end)}</div>    
                <div className={Styles.educationCardTitleDate}>- {formatToYearMonth(start)}</div>    
            </div>
            <div className={Styles.educationCardText}>
                <h1>{school}</h1>
                <h3>{degree}</h3>
                <h3>{program}</h3>
                <p>{location.state}, {location.country}</p>
            </div>
    </div>
        ))}
    </div>
</div>
}