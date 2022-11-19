import MusicData from './data'
import Styles from './index.module.scss'
import { CardExpand } from '../../components'
import { useState } from 'react'
import {AiFillGithub, AiFillLinkedin, AiFillYoutube, AiFillInstagram} from 'react-icons/ai'


const appIcons = {
    'YouTube': <AiFillYoutube />,
    'Instagram': <AiFillInstagram />
}


function MusicCard(props){
    const [open, setOpen] = useState(false)
    const card_dir = props.count % 2 === 1 ? 'Right' : 'Left'
    const opp_card_dir = props.count % 2 === 1 ?  'Left' : 'Right'

    return <div className={Styles.card + ' cardBorder'}>
        <div className={Styles.header + ' flex card' + card_dir}>
            <img className={Styles.poster} src={props.img}/>
            <div className={Styles.text + ' flex-column card' + card_dir + 'Align'}>
                <h3>{props.title}</h3>
                <div className={Styles.tagContainer + ' flex normal-text card' + opp_card_dir }>
                    {props.genres.slice(0, 4).map((genre, g) => (
                        <div className={Styles.tag} key={g}>{genre}</div>
                    ))}
                </div>
                <CardExpand open={open} onClick={() => setOpen(!open)} style={{margin: "20px 0"}}/>
            </div>
        </div>
        {
            open
            ? <div className={Styles.expand}>
                <h1>Members</h1>
                <div className={Styles.members + ' flex'}>
                    {props.members.map((member, m) => <div className={Styles.member + ' flex-column'} key={m}>
                        <h4>
                            {member.name}
                        </h4>
                        <div className={Styles.artForms + ' flex-column'}>
                            {member.artForms.map((af, a) => <span key={a}>{af}</span>)}
                        </div>
                        <div className={Styles.links + ' flex'}>
                            {member.socialMedia.map((sm, s) => <a key={s} href={sm.url} target="_blank">{appIcons[sm.app]}</a>)}
                        </div>
                    </div>)}
                </div>
                <div className={Styles.divide} />
                <h1>Projects</h1>
                <div className={Styles.projects + ' flex-column'}>
                    {props.projects.map((project, p) => (
                        <div className={Styles.project} key={p}>
                            <div className={Styles.projectEmbed + ' flex'} dangerouslySetInnerHTML={{__html: project.embed}}></div>
                            <div className={Styles.projectTitle}>{project.title}</div>
                            <div className={Styles.projectGenre }>{project.genre.join(' | ')}</div>
                        </div>
                    ))}
                </div>
            </div>
            : <></>
        }
    </div>
}


export default function Music() {   
    return <div className={Styles.container + ' section light_theme_section'} id='music'>
        <div className='sectionTitle'>Music</div>
        <div className={Styles.list + ' sectionContainer'}>
            {MusicData.map((props, i) => <MusicCard {...props} count={i} key={i}/>)}
        </div>
    </div>
}
