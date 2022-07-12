import MusicProjectStyles from './musicProjects.module.scss'
import MusicData from '../../static/music_data'     
import { useState, useEffect } from 'react' 
import Link from 'next/link'

function ProjectCard(props){

    const [wideScreen, setWideScreen] = useState(0)

    useEffect(() => {
        if (window !== undefined){
            setWideScreen(window.innerWidth)
            window.addEventListener("resize", () => setWideScreen(window.innerWidth));
        }
    
        return () => true
      }, [])
    
    const left_alignment = props.item_count % 2 === 0
    return <Link href={props.href}>
        <div 
            className={MusicProjectStyles.projectCard}
            style={{
                flexDirection: wideScreen > 1280 ? left_alignment ? 'row': 'row-reverse' : 'column'
            }}
        >
            <img 
                className={MusicProjectStyles.projectCardTitle} 
                src={props.img}
            />
            <div
                className={MusicProjectStyles.projectCardText}
                style={{
                    alignItems: wideScreen > 1280
                        ? left_alignment ? 'flex-end': 'flex-start'
                        : 'center'
                }}
            >
                <h3>{props.title}</h3>
                <div 
                    className={MusicProjectStyles.tagContainer}
                    style={{
                        flexDirection: wideScreen > 1280
                            ? left_alignment? 'row-reverse' : 'row'
                            : 'row'
                    }}
                >
                    {props.genres.map((genre, i) => 
                        <div className={MusicProjectStyles.tag} key={i}>{genre}</div>
                    )}
                </div>
            </div>
        </div>
    </Link>
}

export default function MusicProjects() {
    return <div className={MusicProjectStyles.container}>
        <div className={MusicProjectStyles.title}>
            Music Projects
        </div>
        <div className={MusicProjectStyles.projectCards}>
            {MusicData.map((music_obj, i) => <ProjectCard key={i} {...music_obj} item_count={i} href={'/music/' + music_obj.id}/>)}
        </div>
    </div>
}