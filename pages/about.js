import Layout from '../components/layout'
import AboutStyles from './about.module.scss'

export default function Projects({ props }) {
    return <Layout home={false} title='Sanket Jain | Projects'>
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