import MusicProjectStyles from './musicProjects.module.scss'

export default function ProjectCard(props){
    // console.log(props)
    const left_alignment = props.item_count % 2 === 0
    const left_border = '50px 0 0 50px'
    const right_border = '0 50px 50px 0'
    return <div 
        className={MusicProjectStyles.projectCard}
        style={{
            flexDirection: left_alignment ? 'row': 'row-reverse'
        }}
    >
        <div className={MusicProjectStyles.projectCardTitle}
            style={{
                borderRadius: left_alignment ? left_border: right_border
            }}
        >
        
        </div>
        <div
            className={MusicProjectStyles.projectCardText}
            style={{
                borderRadius: left_alignment ? right_border: left_border,
                alignItems: left_alignment ? 'flex-end': 'flex-start'
            }}
        >
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <div 
                className={MusicProjectStyles.tagContainer}
                style={{
                    flexDirection: left_alignment? 'row-reverse' : 'row'
                }}
            >
                {props.genres.map((genre, i) => 
                    <div className={MusicProjectStyles.tag} key={i}>{genre}</div>
                )}
            </div>
        </div>
    </div>
}