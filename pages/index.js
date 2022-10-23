import Layout from '../components/layout'
import SkillsData from '../static/skills_data'
import EngineeringProjectsData from '../static/projects_data'
import MusicData from '../static/music_data'
import EducationData from '../static/education_data'
import WorkExperienceData from '../static/work_ex_data'
import Styles from './index.module.scss'
import { useState, useEffect } from 'react' 
import Link from 'next/link'
import SectionTitle from '../components/section_title'

const formatToYearMonth = (date_obj) => {
    if (!date_obj){
        return 'Now'
    }
    else if (typeof(date_obj) === 'string'){
        date_obj = new Date(date_obj)
    }
    const date_string = date_obj.toDateString()
    
    return date_string.split(' ')[3] + ' ' + date_string.split(' ')[1]
  }

function Introduction () {
  return <div className={Styles.introduction + ' flex-column'}>
      <SectionTitle title={'Who I am?'}/>
      <div className={Styles.introBox + ' flex'}>
          <div>
              <p className={Styles.text}>
                  I'm Sanket Jain. I live in Bay Ridge, Brooklyn. My birthday is April 14th, 1996. I play the piano.
                  I graduated from Stevens Institute of Technology in December 2020 with a Masters in Computer Engineering. 
                  I worked as a front-end engineer at Contentstack from May 2020 to Nov 2020 and 
                  I'm the software engineering analyst at Approved Energy since January 2021. 
                  I'm also the CEO of a production house called Abagauss.
              </p>
              <p className={Styles.text}>
                  I like ramen, I watch a lot of anime (a lot of anime).
                  One Piece is not so long.
                  India deserves a better government.
                  Season 3 of Covid is dull.
                  When will the new Shrek movie come out?
                  Do you give up on learning a new hobby if you're not immediately good at it or are you not normal?
                  Drink water, ffs.
                  My mom likes this website.
              </p>
          </div>
          <div className={Styles.profilePicture}>
            <img
                
                src='/images/picofMe.jpg'
            />
          </div>
      </div>
  </div>
}

function SkillItem({ title, value }) {
  const barSteps = [...new Array((value * 100)/5).keys()]

  return <div className={Styles.entry +' flex'}>
      <span className={Styles.label}>{title}</span>
      <div className={Styles.barContainer + ' flex'}>
          <div className={Styles.barBeam}>
              {barSteps.map((v, i) =>  <div key={i} className={Styles.barStep} />)}
          </div>
      </div>    
  </div>
}

function SkillsChart() {
  return (
    <div className={Styles.skillsChart}>
        <SectionTitle title={' What I do?'}/>
          <div className={Styles.skillsChartContainer + ' flex'}>
            {SkillsData.map((skill, i) => 
                <SkillItem key={i} {...skill} count={i}/>
            )}
          </div>       
    </div>
)
}

function SchoolCard( { id, end, start, school, degree, program, location } ) {
    return <Link href={'/education#' + id}>
    <div className={Styles.educationCard + ' flex'}>
            <div className={Styles.educationCardDates + ' flex-column'}>
                <div className={Styles.educationCardTitleDate}>- {formatToYearMonth(end)}</div>    
                <div className={Styles.educationCardTitleDate}>- {formatToYearMonth(start)}</div>    
            </div>
            <div className={Styles.educationCardText}>
                <h1>{school}</h1>
                <h3>{degree}</h3>
                <h3>{program}</h3>
                <p>{location.state}, {location.country}</p>
            </div>
    </div>
    </Link>
}
  
function WhatIHaveStudied() {
    return <div className={Styles.whatIHaveStudied} id="education">
        <Link href={'/education'}><div className={Styles.title + ' homeSectionTitle'}>What I've Studied?</div></Link>
        <div className={Styles.educationList + ' flex-column'}>
            {EducationData.map((education_data, i) => <SchoolCard {...education_data} key={i}/>)}
        </div>
    </div>
}

function WorkCard({ workData }){
    return <Link href={'/work#' + workData.id}>
        <div className={Styles.workExCard + ' cardBorder'}>
            <div className={Styles.workExCardTitle + ' flex'}>
                <div className={Styles.WorkExCardTitleText}>
                    <h1>
                        {workData.title}
                    </h1>
                    <h3>
                        {workData.position}
                    </h3>
                    <p>
                        {workData. location.state}, {workData. location.country}
                    </p>
                </div>
                <div className={Styles.workExCardTitleDates}>
                    <div>To {formatToYearMonth(workData.end)}</div>
                    <div>From {formatToYearMonth(workData.start)}</div>
                </div>
            </div>

        </div>
    </Link>
}

function WhereIHaveWorked() {
    return <div className={Styles.whereIHaveWorked}>
        <div className={Styles.title + ' homeSectionTitle'}>
            Where I've Worked?
        </div>
        {WorkExperienceData.map((work_data, i) => <WorkCard key={i} workData={work_data} />)}
    </div>
}

function EngineeringProjectCard(project) {
    
  return <Link href={'/engineering#' + project.id}>
      <div className={Styles.projectCard + ' cardBorder'}>
          <div className={Styles.projectCardHeader + ' flex'}>
              <h3>{project.title}</h3>
              <span>
                  {project.project_started.toDateString()} {project.project_ended ? 'to ' + project.project_ended.toDateString(): '(Ongoing)'}
              </span>
          </div>
          <div className={Styles.techStackTags}>
              {project.tech_stack.slice(0, 3).map((ts, i) => <span key={i}>{ts}</span>)}
          </div>
      </div>
  </Link>
}

function EngineeringProjects() {
  return <div className={Styles.engineeringProjects}>
      <Link href={'/engineering'}>
          <h1 className={Styles.title + ' homeSectionTitle'}>Engineering Projects</h1>
      </Link>
      <div className={Styles.projectCards}>
          {EngineeringProjectsData.map((project, i) => <EngineeringProjectCard key={i} {...project}/>)}
      </div>
  </div>
}

function MusicProjectCard(props){
  const [wideScreen, setWideScreen] = useState(0)

  useEffect(() => {
      if (window !== undefined){
          setWideScreen(window.innerWidth);
          window.addEventListener("resize", () => setWideScreen(window.innerWidth));
      }
  
      return () => true
    }, [])
  
  const left_alignment = props.item_count % 2 === 0;

  return <Link href={props.href}>
      <div className={Styles.projectCard + ' cardBorder flex'} style={{flexDirection: wideScreen > 1280 ? left_alignment ? 'row': 'row-reverse' : 'column'}}>
          <img className={Styles.projectCardTitle} src={props.img}/>
          <div className={Styles.projectCardText} style={{alignItems: wideScreen > 1280 ? left_alignment ? 'flex-end': 'flex-start' : 'center'}}>
              <h3>{props.title}</h3>
              <div className={Styles.tagContainer} style={{flexDirection: wideScreen > 1280 ? left_alignment? 'row-reverse' : 'row' : 'row'}}>
                  {props.genres.slice(0, 4).map((genre, i) => <div className={Styles.tag} key={i}>{genre}</div>)}
              </div>
          </div>
      </div>
  </Link>
}

function MusicProjects() {
  return <div className={Styles.musicProjects}>
      <div className={Styles.title + ' homeSectionTitle'}>
          Music Projects
      </div>
      <div className={Styles.projectCards}>
          {MusicData.map((music_obj, i) => <MusicProjectCard key={i} {...music_obj} item_count={i} href={'/music#' + music_obj.id}/>)}
      </div>
  </div>
}

export default function Home() {
  return <Layout home title='Sanket Jain'>
        <Introduction />
        <SkillsChart />
        <WhatIHaveStudied />
        <WhereIHaveWorked />
        <EngineeringProjects />
        <MusicProjects />
    </Layout>
}
