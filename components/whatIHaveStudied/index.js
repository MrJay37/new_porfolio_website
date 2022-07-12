import { useEffect, useState } from 'react'
import EducationData from '../../static/education_data'
import EducationStyles from './whatIHaveStudied.module.scss'

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

function SchoolCard( { end, start, school, degree, program, location } ) {
    return <>
    <div className={EducationStyles.educationCard}>
            <div className={EducationStyles.educationCardDates}>
                <div className={EducationStyles.educationCardTitleDate}>- {formatToYearMonth(end)}</div>    
                <div className={EducationStyles.educationCardTitleDate}>- {formatToYearMonth(start)}</div>    
            </div>
            <div className={EducationStyles.educationCardText}>
                <h1>{school}</h1>
                <h3>{degree}</h3>
                <h3>{program}</h3>
                <p>{location.state}, {location.country}</p>
            </div>
    </div>
    </>
}



function WhatIHaveStudied({ edu_data }) {
    const [educationData, setEducationData] = useState(edu_data)

    return <div className={EducationStyles.container}>
        <div className={EducationStyles.title}>What I've Studied?</div>
        <div className={EducationStyles.educationList}>
        {EducationData.map((education_data, i) => <SchoolCard {...education_data} key={i}/>)}
        </div>
    </div>
}

export default WhatIHaveStudied