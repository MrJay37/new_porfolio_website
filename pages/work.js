import Layout from '../components/layout'
import Styles from './work.module.scss'
import WorkExperienceData from '../static/work_ex_data'

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

function WorkExperienceCard( props ) {
    return <div className={Styles.workExperienceCard}>
        <div className={Styles.cardHeader} >
            <div className={Styles.cardHeaderText}>
                <h2>{props.title} - {props.position}</h2>
                <span>{props.location.city}, {props.location.state}, {props.location.country}</span>
                <div className={Styles.cardHeaderDates}>
                    <span>{formatToYearMonth(props.start)} to {formatToYearMonth(props.end)}</span>
                </div>
            </div>
            <div className={Styles.cardHeaderLogo}>
                <img src={props.logo}/>
            </div>
        </div>
        <div className={Styles.cardBody}>
            <div className={Styles.heading}>Duties</div>
            <ul>
                {props.duties.map((duty, i) => <li key={i}>{duty}</li>)}
            </ul>
        </div>
    </div>
}

export default function WorkExperience({ props }) {
    return <Layout home={false} title='Sanket Jain | Work'>
        <div className={Styles.container}>
            <div className={'pagesTitle'}>
                Work Experience
            </div>
            {WorkExperienceData.map((work_ex, i) => (
                <div key={i} className={'pagesCardContainer'} id={work_ex.id}>
                    <WorkExperienceCard {...work_ex}/>
                </div>
                
            ))}
        </div>
    </Layout>
}