import Layout from '../components/layout'
import AboutStyles from './about.module.scss'
import EducationData from '../static/education_data'

export default function Projects() {
    return <Layout home={false} title='Sanket Jain | Education'>
        <div className={AboutStyles.container}>
            <div className={AboutStyles.title}>
                Hi! Thanks for visiting my page!
            </div>
            <div>
                <img 
                    src={'/images'}
                />
            </div>
        </div>
    </Layout>
}