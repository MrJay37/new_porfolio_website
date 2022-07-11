import Head from 'next/head'
import Header from './header'
import Footer from './footer'
import styles from './layout.module.scss'
import Banner from './banner'


export default function Layout({ children, home, title }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/images/Icon.png" />
      </Head>
      <div className={styles.appContainer}>
        <Header home={home}/>
          {home && <Banner />}
          <div className={styles.container}>
            {children}
          </div>
      </div>
      <Footer home/>
    </>
  )
}