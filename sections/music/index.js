import { useState, useEffect } from 'react' 
import MusicData from './data'
import Styles from './index.module.scss'
import { SectionTitle } from '../../components'

  
export default function Music() {
    const [wideScreen, setWideScreen] = useState(0)
  
    useEffect(() => {
        if (window !== undefined){
            setWideScreen(window.innerWidth);
            window.addEventListener("resize", () => setWideScreen(window.innerWidth));
        }
    
        return () => true
      }, [])
    
    return <div className={Styles.musicProjects}>
        <SectionTitle title="Music Projects" />
        <div className={Styles.projectCards}>
            {MusicData.map((props, i) => (
                <div 
                    className={Styles.projectCard + ' cardBorder flex'} 
                    style={
                        {
                            flexDirection: wideScreen > 1280 ? i % 2 === 0 ? 'row': 'row-reverse' : 'column'
                        }
                    } key={i}
                >
                <img className={Styles.projectCardTitle} src={props.img}/>
                <div 
                    className={Styles.projectCardText} 
                    style={
                        {
                            alignItems: wideScreen > 1280 ? i % 2 === 0 ? 'flex-end': 'flex-start' : 'center'
                        }
                    }
                >
                    <h3>{props.title}</h3>
                    <div 
                        className={Styles.tagContainer} 
                        style={
                            {
                                flexDirection: wideScreen > 1280 ? i % 2 === 0 ? 'row-reverse' : 'row' : 'row'
                            }
                        }
                    >
                        {props.genres.slice(0, 4).map((genre, i) => <div className={Styles.tag} key={i}>{genre}</div>)}
                    </div>
                </div>
            </div>
            ))}
        </div>
    </div>
  }