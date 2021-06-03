import {ReactNode} from "react";
import styles from "../../styles/Common.module.css";
import Head from "next/head";
import Header from "./Header";
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core";

const CommonLayout = ({children}: { children: ReactNode }) => {
    return <div className={styles.container}>
        <Head>
            <title>kaspa.live</title>
            <meta name="description" content="kaspa.live"/>
            <link rel="icon" href="/favicon.png"/>
        </Head>

        <MuiThemeProvider theme={theme}>
            <Header/>
            {children}
        </MuiThemeProvider>
    </div>
};

export default CommonLayout;

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
