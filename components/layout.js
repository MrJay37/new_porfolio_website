import Head from 'next/head'
import styles from './layout.module.scss'
import {useEffect, useState} from 'react'
import Link from 'next/link'
import HambugerButton from './hamburger_icon'

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

function Header({ home }) {
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
      'id': 'education',
      'displayText': 'Education',
      'to': '#education'
    },
    {
      'id': 'work',
      'displayText': 'Work',
      'to': '/work'
    },
    {
      'id': 'software',
      'displayText': 'Engineering',
      'to': '/engineering'
    },
    {
      'id': 'music',
      'displayText': 'Music',
      'to': '/music'
    },
    {
      'id': 'contact',
      'displayText': 'Contact',
      'to': '/contact'
    }
  ]

  const backgroundColor = 'rgba(0, 0, 0, 0.75)'

  return <div className={styles.header} style={{
        backgroundColor: home ? (scroll < innerHeight) ? drawer ? backgroundColor : 'transparent' : backgroundColor: backgroundColor}}
        >
        <Link href='/'>
          <div className={styles.avatar}>
            <div className={styles.avatarBadge}>
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
              className={styles.HambugerButton + ' HeaderMenuDrawer'}
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
}

function Banner() {
  return <div className={styles.banner}>
      <img 
          className={styles.bannerPic}
          src='images/newBanPic.jpg'
      />
      <div className={styles.bannerText}>
          <h1 className={styles.bannerHeading}>
              Hi, I'm Sanket
          </h1>
          <h2 className={styles.bannerSubHeading}>
              I make music and software
          </h2>
      </div>
  </div>
}

function Footer () {
  return <div className={styles.footerContainer}>
      <footer>
          &#169; 2022 Sanket Jain 
      </footer>
  </div>
}

export default function Layout({ children, title }) {
  return <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/images/Icon.png" />
      </Head>
      <div className={styles.appContainer}>
        <Header />
          <Banner />
          <div className={styles.container}>
            {children}
          </div>
      </div>
      <Footer home/>
    </>
}