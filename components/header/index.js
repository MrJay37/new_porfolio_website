import styles from './header.module.scss'
import Link from 'next/link'


export default function Header({ home }) {
  return (
    <div className={styles.container}>
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
              <h2>
                Software Engineer
              </h2>
            </div>
        </div>
      </Link>
        

      </div>
  )
}