import Image from 'next/image'
import styles from './page.module.css'
import Head from 'next/head'

export default function Home() {
  return (
    <main className={styles.main}>
      <Head>
        <title>Farzam</title>
        <meta property="og:title" content="Farzam Khojastehnia" key="title" />
      </Head>
      <div className={styles.description}>
      <h1>Farzam Khojastehnia</h1>
      </div>
    </main>
  )
}
