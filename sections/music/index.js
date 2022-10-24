import MusicData from './data'
import Styles from './index.module.scss'
import { SectionTitle } from '../../components'

  
export default function Music() {   
    return <div className={Styles.musicProjects}>
        <SectionTitle title="Music Projects" />
        <div className={Styles.projectCards}>
            {MusicData.map((props, i) => (
                <div 
                    className={Styles.projectCard + ' cardBorder flex'} 
                    style={
                        {
                            flexDirection: i % 2 === 0 ? 'row': 'row-reverse'
                        }
                    } key={i}
                    >
                    <img className={Styles.projectCardTitle} src={props.img}/>
                    <div 
                        className={Styles.projectCardText} 
                        style={
                            {
                                alignItems: i % 2 === 0 ? 'flex-end': 'flex-start'
                            }
                        }
                    >
                        <h3>{props.title}</h3>
                        <div 
                            className={Styles.tagContainer} 
                            style={
                                {
                                    flexDirection: i % 2 === 0 ? 'row-reverse' : 'row'
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
