import Banner from '../components/banner'
import SkillsChart from '../components/skillsChart'
import Layout from '../components/layout'
import Projects from '../components/projects/projects'
import Introduction from '../components/introduction'
import HomeStyles from './home.module.scss'

export default function Home() {
  return (
    <>
      <Layout home title='Sanket Jain | Home'>
        <Banner />
        <div className={HomeStyles.container}>
            <Introduction />
            <SkillsChart />
            <Projects />
        </div>
      </Layout>
    </>
  )
}
