import { useState } from 'react'
import styles from './index.module.scss'
import Link from 'next/link'
import HambugerButton from '../hamburgerIcon'

const menu = [
	{
		id: 'education',
		displayText: 'Education',
		to: '#education'
	},
	{
		id: 'work',
		displayText: 'Work',
		to: '#work'
	},
	{
		id: 'software',
		displayText: 'Software',
		to: '#software'
	},
	{
		id: 'music',
		displayText: 'Music',
		to: '#music'
	},
	{
		id: 'contact',
		displayText: 'Contact',
		to: '#contact'
	}
]


function NavigationGroup() {
	return <div className={styles.navigationMenu + ' flex'}>
		{menu.map(({to, displayText, id}) => (
			<Link key={id} href={to}>
				<div className={styles.navigationMenuOption}>{displayText}</div>
			</Link>
		))}
	</div>
}

function DrawerNavigation({ onClick }) {
	return <div className={styles.navigationDrawer + ' flex-column'}>
		{menu.map(({to, displayText, id}) => (
			<Link key={id} href={to}>
				<div className={styles.navigationMenuOption} onClick={onClick}>{displayText}</div>
			</Link>
		))}</div>
}

export default function Header() {
	const [drawer, showDrawer] = useState(false)

	const closeDrawer = () => showDrawer(!drawer)

	return <div className={[styles.container, 'flex-center-align', 'fullWidth'].join(' ')}>
		<div className={[styles.content, ' flex-center-align', 'fullWidth'].join(' ')}>
			<Link href='/'><div className={styles.avatar}><span>Sanket Jain</span></div></Link>
			<NavigationGroup />
			<span className={styles.drawerButton}>
				<HambugerButton clicked={drawer} onClick={closeDrawer}/>
			</span>
			{drawer ? <DrawerNavigation onClick={closeDrawer} /> : <></>}
		</div>
	</div>
}