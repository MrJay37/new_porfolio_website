import { useState } from 'react'
import workExperience from '../../static/work_ex_data'
import WorkExStyles from './workEx.module.scss'
import Link from 'next/link'

const formatToYearMonth = (date_obj) => {
    if (date_obj === undefined || date_obj === null){
        return 'Now'
    }
    
    const date_string = date_obj.toDateString()
    
    return date_string.split(' ')[3] + ' ' + date_string.split(' ')[1]
}

function WorkCard({ workData }){
    return <Link href={'/work#' + workData.id}>
        <div className={WorkExStyles.workExCard}>
            <div className={WorkExStyles.workExCardTitle}>
                <div className={WorkExStyles.WorkExCardTitleText}>
                    <h1>
                        {workData.title}
                    </h1>
                    <h3>
                        {workData.position}
                    </h3>
                    <p>
                        {workData. location.state}, {workData. location.country}
                    </p>
                </div>
                <div className={WorkExStyles.workExCardTitleDates}>
                    <div>To {formatToYearMonth(workData.end)}</div>
                    <div>From {formatToYearMonth(workData.start)}</div>
                </div>
            </div>

        </div>
    </Link>
}

export default function WhereIHaveWorked() {

    return <div className={WorkExStyles.container}>
        <div className={WorkExStyles.title}>
            Where I've Worked?
        </div>
        {workExperience.map((work_data, i) => <WorkCard key={i} workData={work_data} />)}
    </div>
}