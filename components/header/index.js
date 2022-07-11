import {useEffect, useState} from 'react'
import styles from './header.module.scss'
import Link from 'next/link'
import HambugerButton from '../../components/hamburger_icon'

function NavigationGroup(props){
  return <div className={styles.navigationDrawer} style={{
    display: props.innerWidth > 1024 || props.show ? 'block' : 'none'
  }}>
    <div className={styles.navigationMenu}>
      {props.menu.map((item, i) => <Link key={i} href={item.to}>
        <div className={styles.navigationMenuOption}>{item.displayText}</div>
      </Link>
    )}
    </div>
  </div> 
}

export default function Header({ home }) {
  const [drawer, showDrawer] = useState(false) 
  const [scroll, setScroll] = useState(0)
  const [innerHeight, setInnerHeight] = useState(0)
  const [innerWidth, setInnerWidth] = useState(0) 

  useEffect(() => {
    if (window !== undefined){
      window.addEventListener("scroll", () => setScroll(window.pageYOffset));
      window.addEventListener("resize", () => setInnerWidth(window.innerWidth));
      setInnerHeight(window.innerHeight)
      setInnerWidth(window.innerWidth)
    }

    return () => true
  }, [])

  const menu = [
    {
      'id': 'about',
      'displayText': 'About',
      'to': '/about'
    },
    {
      'id': 'education',
      'displayText': 'Education',
      'to': '/education'
    },
    {
      'id': 'work',
      'displayText': 'Work',
      'to': '/work'
    },
    {
      'id': 'software',
      'displayText': 'Software',
      'to': '/engineering_projects'
    },
    {
      'id': 'music',
      'displayText': 'Music',
      'to': '/music'
    }
  ]

  const backgroundColor = 'rgba(0, 0, 0, 0.75)'

  return (
    <>
      <div className={styles.container} style={{
        backgroundColor: home ? (scroll < innerHeight) ? drawer ? backgroundColor : 'transparent' : backgroundColor: backgroundColor}}
        >
        <Link href='/'>
          <div className={styles.avatar}>
            <div className={styles.avatarMain}>
              <img 
                  className={styles.logo}
                  src={'/images/PicIcon.jpg'}
              />
              <div className={styles.labels}>
                <h1>
                  Sanket Jain
                </h1>
              </div>
            </div>
            <HambugerButton
              className={styles.HambugerButton}
              onClick={(evt) => {
                evt.preventDefault(); showDrawer(!drawer)
              }} 
              style={{
                  transform: drawer ? 'rotate(90deg)' : 'rotate(0)'
              }}
            />
          </div>
        </Link>
        
        <div className={styles.navigation}>
          {
            innerWidth >= 1024 || drawer
            ? <NavigationGroup menu={menu} show={drawer} home innerWidth={innerWidth}/>
            : <></>
          }
        </div>
      </div>
    </>
  )
}