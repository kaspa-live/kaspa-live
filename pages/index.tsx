import Head from 'next/head'
import styles from '../styles/Home.module.css'
import KgiContainer from "./components/KgiContainer";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Kaspa.Live</title>
                <meta name="description" content="Kaspa.Live"/>
                <link rel="icon" href="/favicon.png"/>
            </Head>

            <KgiContainer/>
        </div>
    )
}
