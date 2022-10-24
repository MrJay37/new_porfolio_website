import {useEffect, useState} from 'react'
import styles from './index.module.scss'
import Link from 'next/link'

function HambugerButton(props) {
  return <div className={props.hamburgerIcon}>
      <div className={styles.container}>
          <button {...props} >
              <span />
              <span />
              <span />
          </button>
      </div>
  </div>
}

function NavigationGroup(props){
    return <div className={styles.navigationDrawer}>
      <div className={styles.navigationMenu}>
        {props.menu.map((item, i) => <Link key={i} href={item.to}>
          <div className={styles.navigationMenuOption}>{item.displayText}</div>
        </Link>
      )}
      </div>
    </div> 
  }

export default function Header() {
    const [drawer, showDrawer] = useState(false) 
  
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
  
    return <div className={styles.header}>
          <Link href='/'>
            <div className={styles.avatar}>
              <span>
                Sanket Jain
              </span>
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
            <NavigationGroup menu={menu}/>
          </div>
      </div>
}