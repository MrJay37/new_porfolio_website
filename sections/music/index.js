import MusicData from './data'
import Styles from './index.module.scss'

  
export default function Music() {   
    return <div className={Styles.container + ' section light_theme_section'} id='music'>
        <div className='sectionTitle'>Music</div>
        <div className={Styles.list + ' sectionContainer'}>
            {MusicData.map((props, i) => (
                <div 
                    className={Styles.card + ' cardBorder flex'} 
                    style={{flexDirection: i % 2 === 0 ? 'row': 'row-reverse'}} 
                    key={i}
                >
                    <img className={Styles.poster} src={props.img}/>
                    <div 
                        className={Styles.text + ' flex-column'}
                        style={
                            {
                                alignItems: i % 2 === 0 ? 'flex-end': 'flex-start'
                            }
                        }
                    >
                        <h3>{props.title}</h3>
                        <div 
                            className={Styles.tagContainer + ' flex normal-text'} 
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
