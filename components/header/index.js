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

  return (
    <>
      <div 
        className={styles.container}
        style={{
          backgroundColor: home ? (scroll > innerHeight) ? 'black' :'transparent' : 'black',
          color: 'white'
        }}
      >
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
        <div className={styles.navigationDrawerButton}>
          <button
            onClick={() => showDrawer(!drawer)}
          >
            Navigate
          </button>
        </div>
        <div 
          style={{
            width: drawer ? '60%': '0'
          }}
          className={styles.navigationDrawer}
        >
          <button
            onClick={() => showDrawer(!drawer)}
          >
            Navigate
          </button>
        </div>
      </div>
  </>
  )
}