import Head from 'next/head'
import styles from '../styles/Home.module.css'
import KgiContainer from "./components/KgiContainer";
import Header from "./components/Header";
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core";

const Home = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Kaspa.Live</title>
                <meta name="description" content="Kaspa.Live"/>
                <link rel="icon" href="/favicon.png"/>
            </Head>

            <MuiThemeProvider theme={theme}>
                <Header/>
                <KgiContainer/>
            </MuiThemeProvider>
        </div>
    )
};

export default Home;

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#175676"
        },
        secondary: {
            main: "#d62839"
        }
    }
});

