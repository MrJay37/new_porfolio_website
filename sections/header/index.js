import { useState } from 'react'
import styles from './index.module.scss'
import Link from 'next/link'

function HambugerButton(props) {
  return <div className={props.className}>
      <button {...props} >
          <span />
          <span />
          <span />
      </button>
  </div>
}  

function NavigationGroup(props){
  return <div className={styles.navigationMenu + ' flex'}>
      {props.menu.map((item, i) => (
        <Link key={i} href={item.to}>
          <div className={styles.navigationMenuOption}>{item.displayText}</div>
        </Link>
    ))}
  </div>
}

function DrawerNavigation(props){
  return <div className={styles.navigationDrawer + ' flex-column'}>
    {props.menu.map((item, i) => (
      <Link key={i} href={item.to}>
        <div className={styles.navigationMenuOption} onClick={props.onClick}>{item.displayText}</div>
      </Link>
  ))}</div>
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
        'to': '#work'
      },
      {
        'id': 'software',
        'displayText': 'Software',
        'to': '#software'
      },
      {
        'id': 'music',
        'displayText': 'Music',
        'to': '#music'
      },
      {
        'id': 'contact',
        'displayText': 'Contact',
        'to': '#contact'
      }
    ]
  
    return <div className={styles.header + ' flex-center-align'}>
      <div className={styles.content + ' flex-center-align'}>
          <Link href='/'>
            <div className={styles.avatar}>
              <span>Sanket Jain</span>
              <HambugerButton
                className={styles.hamburgerIcon + ' HeaderMenuDrawer'}
                  onClick={(evt) => {
                    evt.preventDefault(); showDrawer(!drawer)
                  }} 
                  style={{transform: drawer ? 'rotate(90deg)' : 'rotate(0)'}}
              />
            </div>
          </Link>          
          <NavigationGroup menu={menu}/>
          {drawer ? <DrawerNavigation show={drawer} menu={menu} onClick={() => showDrawer(!drawer)} />: <></>}
      </div>
      </div>
}