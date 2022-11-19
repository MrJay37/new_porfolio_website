import Styles from './index.module.scss'
import { useState } from 'react'
import Data from './data'

import { CardExpand } from '../../components'

function SoftwareCard(props){
    const [open, setOpen] = useState(false)
    
    return <div className={Styles.card + ' cardBorder'}>
        <div className={Styles.main}>
            <div className={Styles.header + ' flex-center-align'}>
                <h3>{props.title}</h3>
                <span>
                    {props.project_started.toDateString()} {props.project_ended ? 'to ' + props.project_ended.toDateString(): '(Ongoing)'}
                </span>
            </div>
            <div className={Styles.techStackTags + ' flex'}>
                {props.tech_stack.slice(0, 6).map((ts, i) => <span key={i}>{ts}</span>)}
            </div>
        </div>
        <div className={Styles.expand + ' flex-column'}>
            <CardExpand open={open} onClick={() => setOpen(!open)}/>
            {open ? <div className={Styles.divider}></div> :<></>}
            {
                open 
                ? <div className={Styles.expandBody + ' flex'}>
                    <img src={props.picture} className={Styles.expandBodyImage} />
                    <div className={Styles.expandBodyContent}>
                        <div className={Styles.expandSection}>
                            <h4 className={Styles.heading}>Project</h4>
                            <p>{props.description}</p>
                        </div>
                        <div >
                            <h4 className={Styles.heading}>Members</h4>
                            {props.members.map((member, m) => (
                                <a href={member.url} target="_blank" key={m}>
                                    <div className={Styles.member}>{member.name}</div>
                                </a>
                            )
                        )}
                        </div>
                    </div>
                </div>
                : <></>
            }
        </div>
    </div>
}

export default function Software() {
    return <div className={Styles.container + ' section'} id='software'>
        <div className='sectionTitle'>Software</div>
        <div className={Styles.list + ' sectionContainer'}>
            {Data.map((project, i) => <SoftwareCard key={i} {...project}/>)}
        </div>
    </div>
}
