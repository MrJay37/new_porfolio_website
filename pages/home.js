import Banner from '../components/banner'
import SkillsChart from '../components/skillsChart'
import Layout from '../components/layout'
import EngineeringProjects from '../components/engineering_projects/projects'
import WhatIHaveStudied from '../components/whatIHaveStudied'
import WhereIHaveWorked from '../components/whereIHaveWorked'
import Introduction from '../components/introduction'
import MusicProjects from '../components/music_projects'
import HomeStyles from './home.module.scss'

export default function Home({ props }) {
  return (
    <>
      <Layout home title='Sanket Jain'>
        <div className={HomeStyles.container}>
            <Introduction />
            <SkillsChart />
            <WhatIHaveStudied />
            <WhereIHaveWorked />
            <EngineeringProjects />
            <MusicProjects />
        </div>
      </Layout>
    </>
  )
}
