import Styles from './index.module.scss'

export default function SectionTitle({title}) {
    return <div className={Styles.sectionTitle}>
        {title}
    </div>
}