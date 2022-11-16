import Styles from './index.module.scss'
import Data from './data'
import { useState } from 'react'
import { formatToYearMonth } from '../../utils'
import { IoIosArrowDropdown, IoIosArrowDropup } from 'react-icons/io'

function WorkCard(props) {
    const [open, setOpen] = useState(false)

    return <div className={Styles.card + ' cardBorder'}>
        <div className={Styles.cardHeader}>
            <div className={Styles.title + ' flex-center-align'}>
                <div className={Styles.text}>
                    <h1>{props.title}</h1>
                    <h3>{props.position}</h3>
                    <p>{props.location.state}, {props.location.country}</p>
                </div>
                <div className={Styles.dates + ' flex-column'}>
                    <div>
                        <div>To {formatToYearMonth(props.end)}</div>
                        <div>From {formatToYearMonth(props.start)}</div>
                    </div>
                    <div onClick={() => setOpen(!open)}>
                        {open ? < IoIosArrowDropup/> : <IoIosArrowDropdown />}
                    </div>                        
                </div>
            </div>
        </div>
        {
        open ? <div className={Styles.cardBody}>
            <div className={Styles.cardDivider} />
            <ul>
                {props.duties.map((duty, d) => <li key={d}>{duty}</li>)}
            </ul>
        </div>
        : <></>
        }
    </div>
}

export default function Work() {
    return <div className={Styles.container + ' light_theme_section section'} id='work'>
        <div className='sectionTitle'>Professional Summary</div>
        <div className={Styles.list + ' sectionContainer'}>
            {Data.map(data => <WorkCard {...data} key={data.id} />)}
        </div>
    </div>
}