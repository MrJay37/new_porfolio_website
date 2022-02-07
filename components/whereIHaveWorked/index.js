import { useState } from 'react'
import workExperience from '../../static/work_ex_data'
import WorkExStyles from './workEx.module.scss'

export default function WhereIHaveWorked() {
    let drawer_obj = {}
    for (let work_ex in workExperience){
        drawer_obj[workExperience[work_ex].id] = false
    }

    const [drawer, setDrawer] = useState(drawer_obj)

    const updateDrawer = (work_ex_id) => {
        const new_drawer = {...drawer}
        new_drawer[work_ex_id] = !new_drawer[work_ex_id]
        setDrawer(new_drawer)
        return true
    }

    const formatToYearMonth = (date_obj) => {
        if (date_obj === undefined || date_obj === null){
            return 'Now'
        }
        const date_string = date_obj.toDateString()
        
        return date_string.split(' ')[3] + ' ' + date_string.split(' ')[1]
    }

    return <div className={WorkExStyles.container}>
        <div className={WorkExStyles.title}>
            Where I've Worked?
        </div>
        {workExperience.map((
            {
                id,
                title,
                position,
                start,
                end,
                description,
                location,
                duties
            }, i) => (
            <div key={i} className={WorkExStyles.workExCard}>
                <div 
                    className={WorkExStyles.workExCardTitle}
                    onClick={() => updateDrawer(id)}
                >
                    <div className={WorkExStyles.WorkExCardTitleText}>
                        <h1>
                            {title}
                        </h1>
                        <h3>
                            {position}
                        </h3>
                        <p>
                            {location.state}, {location.country}
                        </p>
                    </div>
                    <div className={WorkExStyles.workExCardTitleDates}>
                        <div>To {formatToYearMonth(end)}</div>
                        <div>From {formatToYearMonth(start)}</div>
                    </div>
                </div>
                <div
                    className={WorkExStyles.workExDuties}
                    style={{maxHeight: drawer[id] ? '1000px' : '0'}}
                >
                    <div className={WorkExStyles.workExDutiesList}>
                        {duties.map((duty, i) => (
                            <li key={i}>
                                {duty}  
                            </li>
                        ))}
                    </div>
                </div>
            </div>
            ) 
        )}
    </div>
}