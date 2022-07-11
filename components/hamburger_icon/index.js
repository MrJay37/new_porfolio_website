import styles from './hambugerButton.module.scss'

export default function HanbugerButton(props) {
  return (
    <>
        <div className={props.className}>
            <div className={styles.container}>
                <button {...props} >
                    <span />
                    <span />
                    <span />
                </button>
            </div>
        </div>
    </>
  )
}
