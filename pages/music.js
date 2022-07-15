import Layout from '../components/layout'
import AboutStyles from './about.module.scss'

export default function Music({ props }) {
    return <Layout home={false} title='Sanket Jain | Music'>
        <div className={AboutStyles.container}>
            <div className={AboutStyles.title}>
                Music!
            </div>
        </div>
    </Layout>
}