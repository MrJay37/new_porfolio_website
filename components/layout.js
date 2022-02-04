import Head from 'next/head'
import Header from './header'
import Footer from './footer'
import styles from './layout.module.scss'
import Script from 'next/script'


export default function Layout({ children, home, title }) {
  return (
      <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/images/Icon.png" />
      </Head>

      <Header home/>
      <div className={home ? styles.homeContainer : styles.container}>
      {children}
      </div>
      <Footer home/>
      </>
  )
}