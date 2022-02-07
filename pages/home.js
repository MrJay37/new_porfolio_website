import Banner from '../components/banner'
import SkillsChart from '../components/skillsChart'
import Layout from '../components/layout'
import EngineeringProjects from '../components/engineering_projects/projects'
import WhatIHaveStudied from '../components/whatIHaveStudied'
import WhereIHaveWorked from '../components/whereIHaveWorked'
import Introduction from '../components/introduction'
import HomeStyles from './home.module.scss'

export default function Home() {
  return (
    <>
      <Layout home title='Sanket Jain | Home'>
        <Banner />
        <div className={HomeStyles.container}>
            <Introduction />
            <WhatIHaveStudied />
            <SkillsChart />
            <WhereIHaveWorked />
            <EngineeringProjects />
        </div>
      </Layout>
    </>
  )
}
