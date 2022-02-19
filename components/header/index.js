import {useEffect, useState} from 'react'
import styles from './header.module.scss'
import Link from 'next/link'


export default function Header({ home }) {
  const [drawer, showDrawer] = useState(false) 
  const [scroll, setScroll] = useState(0)
  const [innerHeight, setInnerHeight] = useState(0)

  useEffect(() => {
    if (window !== undefined){
      window.addEventListener("scroll", () => setScroll(window.pageYOffset));
      setInnerHeight(window.innerHeight)
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

  return (
    <>
      <div className={styles.container} style={{backgroundColor: home ? (scroll > innerHeight) ? 'black' :'transparent' : 'black'}}>
        <Link href='/'>
          <div className={styles.avatar}>
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
        </Link>
        <div className={styles.navigationBar}>
          <div className={styles.navigationMenu}>
            {menu.map((item, i) => <Link key={i} href={item.to}>
                <div className={styles.navigationMenuOption}>{item.displayText}</div>
              </Link>
            )}
          </div>
          <div className={styles.navigationDrawerButton}>
            <button
              onClick={() => showDrawer(!drawer)}
              style={{
                filter: drawer ? 'opacity(0)' : 'opacity(1)',
                transform: drawer ? 'rotate(720deg)' : 'rotate(0)'
              }}
            >
              <span />
              <span />
              <span />
              </button>
          </div>
          <div className={styles.navigationDrawer}
            style={{
              width: drawer ? '60%': '0'
            }}
            
          >
            {
              drawer
              ? <button
              onClick={() => showDrawer(!drawer)}
              >
              &gt;
              </button>
              : <></>
            }
          </div>
      </div>
        
      </div>
    </>
  )
}