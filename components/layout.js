import Head from 'next/head'
import Header from './header'
import Footer from './footer'
import styles from './layout.module.scss'


export default function Layout({ children, home, title }) {
  return (
    <div className={home ? styles.homeContainer : styles.container}>
      <Head>
        <title>{title}</title>
      </Head>
      <Header home/>
      {children}
      <Footer home/>
    </div>
  )
}