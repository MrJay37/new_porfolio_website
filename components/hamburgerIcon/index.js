import Styles from './index.module.scss'

export default function HambugerButton({ clicked=false, onClick }) {
	return <div className={[
        Styles.container, 
        'flex',
        (clicked ? Styles.open : '')
    ].join(' ')}>
		<button onClick={onClick} >
			<span /> <span /> <span />
		</button>
	</div>
}