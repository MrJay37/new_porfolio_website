import Layout from '../components/layout'
import Styles from './education.module.scss'
import EducationData from '../static/education_data'

const formatToYearMonth = (date_obj) => {
    if (date_obj === undefined){
        return 'Now'
    }
    else if (typeof(date_obj) === 'string'){
        date_obj = new Date(date_obj)
    }
    const date_string = date_obj.toDateString()
    
    return date_string.split(' ')[3] + ' ' + date_string.split(' ')[1]
}

function EducationCard( props ) {
    return <div className={Styles.educationCard}>
        <div className={Styles.educationCardHeader}>
            <div className={Styles.educationCardLogo} >
                <img src={props.img} />
            </div>
            <div className={Styles.educationCardText}>
                <div className={Styles.educationCardDates}>
                    <span>From: {formatToYearMonth(props.start)}</span>
                    <span>To: {formatToYearMonth(props.end)}</span> 
                </div>
                <div className={Styles.educationCardTitle}>
                    <h2>{props.school}</h2>
                    <span className={Styles.educationCardSchoolLocation}>{props.location.city}, {props.location.state}, {props.location.country}</span>
                    <h3>{props.degree}: {props.program}</h3>
                </div>
            </div> 
        </div>
         <div className={Styles.educationCardBody}>
            <div className={Styles.educationCardBodyCourses}>
                <div className={Styles.educationCardBodyCoursesList}>
                    {props.highlightCourses.map((course, i) => (
                    <span key={i}>
                        {course}<br/>
                    </span>
                    ))}
                </div>                    
            </div>
            <p className={Styles.educationCardBodyDescription}>{props.description}</p>
        </div>
    </div>
}

export default function Education() {
    return <Layout home={false} title='Sanket Jain | Education'>
        <div className={Styles.container}>
            <div className={'pagesTitle'}>
                Education
            </div>
            {
                EducationData.map((edu_data, i) => 
                <div className={'pagesCardContainer'} id={edu_data.id}  key={i}>
                    <EducationCard align={i % 2 === 0} {...edu_data}/>
                </div>)
            }
        </div>
    </Layout>
}