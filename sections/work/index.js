import Styles from './index.module.scss'
import WorkExperienceData from './data'
import { SectionTitle, formatToYearMonth } from '../../components'

export default function Work() {
    return <div className={Styles.container + ' light_theme_section'}>
        <SectionTitle title={"Where I've Worked?"} />
        <div className={Styles.list}>
            {WorkExperienceData.map((workData, i) => (
                <div className={Styles.workExCard + ' cardBorder'} key={workData.id}>
                    <div className={Styles.workExCardTitle + ' flex'}>
                        <div className={Styles.WorkExCardTitleText}>
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
                        <div className={Styles.workExCardTitleDates}>
                            <div>To {formatToYearMonth(workData.end)}</div>
                            <div>From {formatToYearMonth(workData.start)}</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
}