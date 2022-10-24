import '../styles/global.scss'
import Head from 'next/head'


export default function App({ Component, pageProps }) {
  return <>
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;400&display=swap" rel="stylesheet"/>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Fjalla+One&family=Source+Sans+Pro:wght@200;300;400;600;700;900&display=swap" rel="stylesheet"></link>
    </Head>
    <Component {...pageProps} />
    </>
}