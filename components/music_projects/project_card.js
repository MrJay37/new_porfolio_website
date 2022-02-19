import MusicProjectStyles from './musicProjects.module.scss'
import { useState, useEffect } from 'react' 


export default function ProjectCard(props){

    const [wideScreen, setWideScreen] = useState(0)

    useEffect(() => {
        if (window !== undefined){
            setWideScreen(window.innerWidth)
            window.addEventListener("resize", () => setWideScreen(window.innerWidth));
        }
    
        return () => true
      }, [])

      console.log(wideScreen)

    
    const left_alignment = props.item_count % 2 === 0
    return <div 
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
            <p>{props.description}</p>
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
}