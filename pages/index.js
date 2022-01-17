import Head from 'next/head'
import Banner from '../components/banner'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/images/Icon.png" />
      </Head>
      <Banner />
    </div>
  )
}
