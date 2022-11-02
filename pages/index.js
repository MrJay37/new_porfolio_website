import Head from 'next/head'


import { Header, About, Education, Work, Software, Music, Contact } from '../sections'


export default function Home() {
  return <>
        <Head>
            <title>Sanket Jain</title>
            <link rel="icon" href="/images/Icon.png" />
        </Head>
        <Header />
        <About />
        <Education />
        <Work />
        <Software />
        <Music />
        <Contact />
    </>
}
