import type { InferGetServerSidePropsType, NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'


const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contentricity Example</title>
        <meta name="description" content="Example website only" />



        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Contentricity Example</h1>
        <ul>
          <li><Link href="/users"><a>List of users</a></Link></li>
          <li><Link href="/Register"><a>Register</a></Link></li>
        </ul>
        <h2>Mahesh</h2>
      </main>
    </div>
  )
}

export default Home
