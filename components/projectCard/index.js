import ProjectStyles from '../../pages/engineering_projects.module.scss'
import Link from 'next/link'
import { useState } from 'react/cjs/react.development'
import Image from 'next/image'

export default function ProjectCard({ props }) {

    const [hover, setHover] = useState(false)

    const Hover = () => {
        setHover(!hover)
    }

    return (
        <div 
            className={hover ? ProjectStyles.projectHover : ProjectStyles.project}
            onMouseEnter={Hover}
            onMouseLeave={Hover}
        >
            
            <Link href={`/engineering_projects/${props.id}`}>
                <div className={ProjectStyles.linkDiv}>
                    <Image
                            className={ProjectStyles.projectPreviewPicture}
                            src={`${props.picture}`}
                            layout='fill'
                            objectFit='cover'
                    />
                    <h1 
                        className={ProjectStyles.projectTitle}
                    >
                    {props.title}
                    </h1>
                </div>
           </Link> 
        </div>
    )
}