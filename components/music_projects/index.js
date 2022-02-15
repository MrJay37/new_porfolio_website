import MusicProjectStyles from './musicProjects.module.scss'
import MusicData from '../../static/music_data'
import ProjectCard from './project_card'

export default function MusicProjects() {
    return <div className={MusicProjectStyles.container}>
        <div className={MusicProjectStyles.title}>
            Music Projects
        </div>
        <div className={MusicProjectStyles.projectCards}>
            {MusicData.map((music_obj, i) => <ProjectCard key={i} {...music_obj} item_count={i}/>)}
        </div>
    </div>
}