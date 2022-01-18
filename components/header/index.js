import styles from './header.module.scss'
import Image from 'next/image'


export default function Header({ home }) {
  return (
    <div className={styles.container}>
      <div className={styles.avatar}>
        <img 
            className={styles.logo}
            src={'/images/PicIcon.jpg'}
          />
          <div className={styles.labels}>
            <h1>
              Sanket Jain
            </h1>
            <h2>
              Software Engineer
            </h2>
          </div>
      </div>
        

      </div>
  )
}