import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nächste Seite</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

      <a href="index.html" className={styles.card}>
          Home
        </a>

        <a href="page2.html" className={styles.card}>
          Seite 2
        </a>

        <h1 className={styles.title}>
          Das bin ich
        </h1>

        <p className={styles.description}>
          Mein erstes Nuch:
          <img src="sapbw.png" alt="Mein Buch" width="200" heigth="200"></img>
        </p>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://ionos.space"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by IONOS
        </a>
      </footer>
    </div>
  )
}
