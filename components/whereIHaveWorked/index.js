import { useState } from 'react'
import workExperience from '../../static/work_ex_data'
import WorkExStyles from './workEx.module.scss'

export default function WhereIHaveWorked() {
    let drawer_obj = {}
    for (let work_ex in workExperience){
        drawer_obj[workExperience[work_ex].id] = false
    }

    const [drawer, setDrawer] = useState(drawer_obj)

    console.log(drawer)

    return <div className={WorkExStyles.container}>
        <div className={WorkExStyles.title}>
            Where I've Worked
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
                    onClick={() => setDrawer({
                        ...drawer,
                        id: !drawer[id]
                    })}
                >
                    <div className={WorkExStyles.WorkExCardTitleText}>
                        <h1>
                            {title}
                        </h1>
                        <h3>
                            {position}
                        </h3>
                        <p>{location.state}, {location.country}</p>
                    </div>
                    <div className={WorkExStyles.workExCardTitleDates}>
                        <div>From: {start.toDateString()}</div>
                        <div>To: {end === null? 'Now' : end.toDateString()}</div>
                    </div>
                </div>
                <div
                    className={WorkExStyles.workExDuties}
                    style={{
                        display: drawer ? 'none' : 'block'
                    }}
                >
                    {duties.map((duty, i) => (
                        <li key={i}>
                          {duty}  
                        </li>
                    ))}
                </div>
            </div>
            ) 
        )}
    </div>
}