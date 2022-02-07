import EducationStyles from './whatIHaveStudied.module.scss'
import EducationData from '../../static/education_data'

export default function WhatIHaveStudied() {
    const formatToYearMonth = (date_obj) => {
        if (date_obj === undefined){
            return 'Now'
        }
        const date_string = date_obj.toDateString()
        
        return date_string.split(' ')[3] + ' ' + date_string.split(' ')[1]
    }

    return <div className={EducationStyles.container}>
        <div className={EducationStyles.title}>What I've Studied?</div>
        <div className={EducationStyles.educationList}>
            {EducationData.map(({
                id,
                start,
                end,
                graduated,
                location,
                school,
                education_level,
                degree,
                program
            }, i) => (
                <div className={EducationStyles.educationCard} key={i}>
                    <div className={EducationStyles.educationCardTitle}>
                        <div className={EducationStyles.educationCardTitleDates}>
                            <div>{formatToYearMonth(end)}</div>
                            <div>{formatToYearMonth(start)}</div>
                        </div>
                        <div className={EducationStyles.educationCardTitleText}>
                            <h1>
                                {school}
                            </h1>
                            <h3>
                                {degree}</h3><h3>{program}
                            </h3>
                            <p>{location.state} {location.country}</p>
                        </div>
                        
                    </div>
                </div>
            ))}
        </div>
    </div>
}