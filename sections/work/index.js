import Styles from './index.module.scss'
import Data from './data'
import { formatToYearMonth } from '../../utils'

export default function Work() {
    return <div className={Styles.container + ' light_theme_section section'} id='work'>
        <div className='sectionTitle'>Professional Summary</div>
        <div className={Styles.list + ' sectionContainer'}>
            {Data.map(data => (
                <div className={Styles.card + ' cardBorder'} key={data.id}>
                    <div className={Styles.title + ' flex-center-align'}>
                        <div className={Styles.text}>
                            <h1>{data.title}</h1>
                            <h3>{data.position}</h3>
                            <p>{data.location.state}, {data.location.country}</p>
                        </div>
                        <div className={Styles.dates}>
                            <div>To {formatToYearMonth(data.end)}</div>
                            <div>From {formatToYearMonth(data.start)}</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
}