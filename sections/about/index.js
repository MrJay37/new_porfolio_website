import styles from './index.module.scss'
import SkillsData from './skills.json'
import { Chart as ChartJS, LinearScale, CategoryScale, BarElement } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(LinearScale, CategoryScale, BarElement);

ChartJS.defaults.font.size = 16

export default function About() {
    return <div className={styles.container + ' light_theme_section section'}>
        <img className={styles.banner} src='images/banPic2.jpg' />
        <div className={styles.bannerText +' flex-center-align'}>
            <h1>Hi! I make music and software</h1>
        </div>
        <div className={styles.intro + ' sectionContainer'}>
            <div className={styles.container + ' flex'}>
                <div className={styles.aboutText + ' flex-column-center-align'}>
                    <h3>Who I Am?</h3>
                    <p className={styles.text + ' normal-text'}>
                        I'm Sanket Jain. I live in Grove Street, Jersey City. My birthday is April 14th, 1996. I play the piano.
                        I graduated from Stevens Institute of Technology in December 2020 with a Masters in Computer Engineering. 
                        I worked as a front-end engineer at Contentstack from May 2020 to Nov 2020 and 
                        I'm the software engineering analyst at Approved Energy since January 2021. 
                        I'm also the CEO of a production house called Abagauss.
                    </p>
                    <p className={styles.text + ' normal-text'}>
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
                <img src='/images/PICOFME.jpg' className={styles.profilePicture} />
            </div>
            <div className={styles.barContainer + ' flex-column-center-align barChart'}>
                <h3>What do I know?</h3>
                <Bar
                    data={
                        {
                            labels: SkillsData.map((s, i) => s.title),
                            datasets: [
                                {
                                    data: SkillsData.map((s, i) => s.value),
                                    backgroundColor: SkillsData.map((s, i) => `rgba(33, 33, 33, ${s.value})`),
                                    borderWidth: 1
                                }
                            ]
                        }
                    } 
                    options={{
                        scales: {
                            y: {
                                display: false
                            }
                        }
                    }}
                />
            </div>
            
        </div>
    </div>
}
