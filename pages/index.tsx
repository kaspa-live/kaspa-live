import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Kaspa.Live</title>
                <meta name="description" content="Kaspa.Live"/>
                <link rel="icon" href="/favicon.png"/>
            </Head>

            <iframe src="http://kgi-testnet.daglabs-dev.com/" className={styles['kgi-frame']} sandbox="allow-scripts">Something went wrong</iframe>
        </div>
    )
}
