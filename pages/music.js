import Layout from '../components/layout'
import Styles from './music.module.scss'
import MusicData from '../static/music_data'
import { useState } from 'react'

function MusicMember( props ) {
    const [drawer, setDrawer] = useState(false)

    return <div className={Styles.musicMember} >
        <div className={Styles.musicMemberHeader} onClick={() => setDrawer(!drawer)}>
            <span>{props.name}</span>
            <div>{drawer ? 'v' : '<'}</div>
        </div>
        {
            drawer 
            ? <div className={Styles.musicMemberBody}>
                <div className={Styles.musicMemberArtForms}>
                    {props.artForms.map((af, a) => <span key={a}>{af}</span>)}
                </div>
                {props.socialMedia.length > 0 
                    ? <div className={Styles.musicMemberLinks}>
                        <text>Check me out on </text>
                        <ul>
                            {props.socialMedia.map((sm, s) => <li key={s}><a href={sm.url} target="_blank">{sm.app}</a></li>)}
                        </ul>
                    </div>
                    : <></>
                }
            </div> 
            : <></>
        }
    </div>
}

function MusicProject( props ) {
    return <div className={Styles.musicProject}>
        {props.embed ? <div className={Styles.musicProjectEmbed} dangerouslySetInnerHTML={{ __html: props.embed }} /> : <></>}
    </div>
}

function MusicCard(props){
    return <div className={Styles.musicCard}>
        <div className={Styles.cardHeader}>
            <h2>{props.title}</h2>
            <img src={props.img}></img>
        </div>
        <div className={Styles.genreTags}>
            {props.genres.map((genre, g) => <span key={g}>{genre}</span>)}
        </div>
        <div className={Styles.cardBody}>
            <div className={Styles.cardBodyText}>
                {props.description}
            </div>
            <div className={Styles.cardBodyMembers}>
                <h3>Members</h3>
                {
                    props.members.map((member, m) => <MusicMember {...member} key={m}/>)
                }
            </div>
            <div className={Styles.cardBodyProjects}>
                <h3>Projects</h3>
                {
                    props.projects.map((project, p) => <MusicProject {...project} key={p}/>)
                }
            </div>
        </div>
    </div>
}

export default function Music({ props }) {
    return <Layout home={false} title='Sanket Jain | Music'>
        <div className={Styles.container}>
            <div className={Styles.title}>
                Music!
            </div>
            <div className={Styles.musicCards}>
                {MusicData.map((music_data, i) => (
                    <div className={Styles.container} id={music_data.id}><MusicCard {...music_data}/></div>
                ))}
            </div>
        </div>
    </Layout>
}